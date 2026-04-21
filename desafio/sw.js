// sw.js - Service Worker básico para PWA Missão Oficial
const CACHE_NAME = 'missao-oficial-v1';
const toCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/profileData.js',
  '/documentLinks.js',
  '/levels.js',
  '/exportPDF.js',
  '/manifest.json',
  '/icon/icon-192.png',
  '/icon/icon-512.png',
  '/icon/icon-maskable-512.png'
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(toCache))
  );
});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
