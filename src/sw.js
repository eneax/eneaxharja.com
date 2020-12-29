/* eslint-disable no-restricted-globals */

// Register custom service worker.
self.addEventListener('message', function(event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});
