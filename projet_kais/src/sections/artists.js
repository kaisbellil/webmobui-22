
async function loadJson() {
  const url = 'https://webmob-ui-22-spotlified.herokuapp.com/api/artists'
  const response = await fetch(url)
  const parsedJson = await response.json()
  return parsedJson
}

  const artistList = document.querySelector('.artist-list')
  const artistListItemTemplate = document.querySelector('#artist-list-item-template') 
  
  function afficherArtiste(artiste) {
      const newArtist = artistListItemTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
      newArtist.querySelector('a').href = '#artists' + artiste.id
      newArtist.querySelector('img').src = artiste.image_url
      newArtist.querySelector('.artist-list-item-title').innerText = artiste.name
      artistList.append(newArtist)
   }



   function afficherArtistes(artistes) {
      artistList.replaceChildren() // Remplace les enfants par rien, donc supprime tous les enfants
      for(const artiste of artistes){
        afficherArtiste(artiste)
      }
  }

  async function renderArtistsSection() {
    const artists = await loadJson()
    afficherArtistes(artists)
  }

  export default renderArtistsSection
