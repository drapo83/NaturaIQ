// NaturaIQ Service Worker v1.0
// Offline cache + Push notifications

const CACHE_NAME = 'naturaiq-v1.0';
const OFFLINE_URL = '/';

// Assets to cache immediately on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap'
];

// ─── INSTALL ───
self.addEventListener('install', event => {
  console.log('[NaturaIQ SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ─── ACTIVATE ───
self.addEventListener('activate', event => {
  console.log('[NaturaIQ SW] Activating...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => clients.claim())
  );
});

// ─── FETCH — Offline-first strategy ───
self.addEventListener('fetch', event => {
  // Skip non-GET and chrome-extension requests
  if (event.request.method !== 'GET') return;
  if (event.request.url.startsWith('chrome-extension')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache successful responses
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Offline fallback
        if (event.request.destination === 'document') {
          return caches.match(OFFLINE_URL);
        }
      });
    })
  );
});

// ─── PUSH NOTIFICATIONS ───
self.addEventListener('push', event => {
  let data = { title: 'NaturaIQ', body: 'Nowe powiadomienie zdrowotne', tag: 'naturaiq' };
  try { data = { ...data, ...event.data.json() }; } catch(e) {}

  const options = {
    body: data.body,
    icon: data.icon || '/icons/icon-192.png',
    badge: '/icons/icon-72.png',
    tag: data.tag || 'naturaiq',
    renotify: true,
    vibrate: [200, 100, 200, 100, 200],
    data: { url: data.url || '/' },
    actions: data.actions || [
      { action: 'open', title: '🌿 Otwórz NaturaIQ' },
      { action: 'dismiss', title: 'Zamknij' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// ─── NOTIFICATION CLICK ───
self.addEventListener('notificationclick', event => {
  event.notification.close();
  if (event.action === 'dismiss') return;

  const url = event.notification.data?.url || '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      // Focus existing window if open
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.focus();
        }
      }
      // Open new window
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});

// ─── BACKGROUND SYNC (scheduled reminders) ───
self.addEventListener('sync', event => {
  if (event.tag === 'naturaiq-reminder') {
    event.waitUntil(sendScheduledReminder());
  }
});

async function sendScheduledReminder() {
  await self.registration.showNotification('💧 NaturaIQ — Przypomnienie', {
    body: 'Czas na szklankę wody i chwilę dla siebie!',
    icon: '/icons/icon-192.png',
    tag: 'scheduled-reminder',
    vibrate: [200, 100, 200]
  });
}

// ─── MESSAGE HANDLER ───
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data?.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

console.log('[NaturaIQ SW] Service Worker loaded:', CACHE_NAME);
