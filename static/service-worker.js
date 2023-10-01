// Le Service Worker peut intercepter les requêtes (fetch) qui chargent des ressources
// et les modifier. Ce SW particulier réécrit les URL pour 
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Vérifiez si l'utilisateur est authentifié (par exemple, via un cookie ou un autre mécanisme)
  if (true) {
    // Réécrire l'URL si nécessaire
    if (!url.pathname.startsWith('/session/')) {
      url.pathname = `/session${url.pathname}`;
    }
  } else {
    // Rediriger vers la page de connexion
    url.pathname = '/login.html';
  }

  // Effectuer la requête modifiée
  const modifiedRequest = new Request(url, {
    method: event.request.method,
    headers: event.request.headers,
    mode: 'same-origin',  // ou 'cors', selon vos besoins
  });

  event.respondWith(fetch(modifiedRequest));
});

