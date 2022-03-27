import { ajoutSupprime, listeFavoris, isInFavorite } from './favorites'


async function loadJson(id) {
    const url = `https://webmob-ui-22-spotlified.herokuapp.com/api/artists/${id}/songs`
    const response = await fetch(url)
    const parsedJson = await response.json()
    return parsedJson
  }

  async function loadJsonSearch(laChaine) {
    const url = "https://webmob-ui-22-spotlified.herokuapp.com/api/songs/search/" + encodeURIComponent(laChaine)
    const response = await fetch(url)
    const parsedJson = await response.json()
    return parsedJson
  }

    const songSection = document.querySelector('#songs-section')
    const songTitle = songSection.querySelector('h4')
    const songList = songSection.querySelector('.list')
    const songListTemplate = songSection.querySelector('#song-list-item-template')

    function toggleFavoriteIcon(favoriteIcon, song) {
      if(isInFavorite(song)) {
        favoriteIcon.innerText = 'favorite'
      } else {
        favoriteIcon.innerText = 'favorite_border'
      }
    }
    

    function afficherSon(son) {
        const newSon = songListTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
        newSon.querySelector('.list-item-title').innerText = son.title
        

        // Au clique sur le bouton favori, on toggle la chanson dans le storage et on ajuste son icone en fonction
  newSon.querySelector('.favorite-button').addEventListener('click', (e) => {
    ajoutSupprime(son)
    toggleFavoriteIcon(e.target, son) // on passe le target du click, à savoir l'icône
  })
  // A l'insertion, on met à jour l'icone, si la chanson est présente dans les favoris
  toggleFavoriteIcon(newSon.querySelector('.favorite-button .material-icons'), son)
  
  songList.append(newSon)
     }
  


     function afficherSons(sons) {
        songList.replaceChildren() // Remplace les enfants par rien, donc supprime tous les enfants
        if(sons.length) {
        for(const son of sons){
          afficherSon(son)
        }} else {
          const noResults = songListTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
          noResults.querySelector('.list-item-title').innerText = 'Aucun résultat'
          noResults.querySelector('.list-item-actions').remove() // on supprime les boutons
          songList.append(noResults)

        }

    }
  
    async function renderSongsSection(id) {
      const artists = await loadJson(id)
      songTitle.innerText = `Artistes > ${artists[0].artist.name}`
      afficherSons(artists)
    }

    async function renderSongsSearchSection(id) {
      const artists = await loadJsonSearch(id)
      songTitle.innerText = `Votre recherche pour "${id}"`
      afficherSons(artists)
    }

    function renderSongsFavoriteSection() {
      const artists = listeFavoris()
      songTitle.innerText = `Vos favoris`
      afficherSons(artists)
    }
  
    export { renderSongsSection, renderSongsSearchSection, renderSongsFavoriteSection}


 