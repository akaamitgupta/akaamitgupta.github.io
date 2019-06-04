importScripts("/precache-manifest.8466ac8074bab0383fcdf30f60c99869.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

self.addEventListener('push', (e) => {
    let data
    if (e.data) {
        data = e.data.json()
    }

    console.log('data for notification', data);

    const options = {
        body: data.body,
        icon: '/img/icons/android-chrome-192x192.png',
        image: '/img/autumn-forest.png',
        vibrate: [300, 200, 300],
        badge: '/img/icons/plint-badge-96x96.png',
    }

    console.log('options passed to Notification', options);

    e.waitUntil(self.registration.showNotification(data.title, options))
})

