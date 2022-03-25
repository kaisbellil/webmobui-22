
async function loadJson(id) {
    const url = `https://webmob-ui-22-spotlified.herokuapp.com/api/artists/${id}/songs`
    const response = await fetch(url)
    const parsedJson = await response.json()
    return parsedJson
  }

    const songSection = document.querySelector('#songs-section')
    const songTitle = songSection.querySelector('h4')
    const songList = songSection.querySelector('.list')
    const songListTemplate = songSection.querySelector('#song-list-item-template')


    function afficherSon(son) {
        const newSon = songListTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
        newSon.querySelector('.list-item-title').innerText = son.title
        songList.append(newSon)
     }
  
     function afficherSons(sons) {
        songList.replaceChildren() // Remplace les enfants par rien, donc supprime tous les enfants
        for(const son of sons){
          afficherSon(son)
        }
    }
  
    async function renderSongsSection(id) {
      const artists = await loadJson(id)
      afficherSons(artists)
    }
  
    export default renderSongsSection