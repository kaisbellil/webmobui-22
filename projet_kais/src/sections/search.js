fetch("https:.../api/songs/search/" + encodeURIComponent(laChaine))

async function loadJson(laChaine) {
    const url = "https:.../api/songs/search/" + encodeURIComponent(laChaine)
    const response = await fetch(url)
    const parsedJson = await response.json()
    return parsedJson
  }
 
  const searchSection = document.querySelector('#search-input')
  const searchTrigger = document.querySelector('#search-trigger')

  searchTrigger.addEventListener('click', () => {
    searchSection.classList.add('active')
    searchSection.focus()
  })



  

/* < input id="search-input" type="search" spellcheck="false" autocapitalize="false" autofocus /> */