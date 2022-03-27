import JsonStorage from '../lib/JsonStorage' 

const favoriteStorage = new JsonStorage({ name: 'favorites', eventName: 'playlist_update'})


function ajoutSupprime(song) {
    if(isInFavorite(song)) {
      favoriteStorage.removeItem(song.id.toString())
    } else {
      favoriteStorage.setItem(song.id.toString(), song)
    }
  }
  
  // Vérifie si une chanson est dans les favoris (retourne l'entry si oui, undefined si non)
  function isInFavorite(song) {
    return favoriteStorage.getItem(song.id.toString())
  }

function listeFavoris() {
    return favoriteStorage.toArray().map((e) => e[1])
  }

export {ajoutSupprime, listeFavoris, isInFavorite}