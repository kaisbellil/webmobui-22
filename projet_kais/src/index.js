import './css/index.css'
import { domOn, domForEach } from './lib/domManipulator'

import renderArtistsSection from './sections/artists'

function toggleSection(section) {
  // Supprime/Ajoute la classe active sur la section
  document.querySelector('section.active')?.classList.remove('active')
  document.querySelector(`${section}-section`)?.classList.add('active')
}

function toggleNav(section) {
  // Supprime/Ajoute la classe active sur le lien
  document.querySelector('nav a.active')?.classList.remove('active')
  document.querySelector('nav a[href="${section}"]')?.classList.add('active')
}





// Affichage d'une section
function displaySection() {
  // S'il n'y a pas de hash (par ex, on est sur "localhost:8080/"), le défaut devient '#home'
  const section = window.location.hash || '#home'
  const sectionSplit = section.split('-')

  // Toggle par défaut des sections et de la navigation
  toggleSection(sectionSplit[0])
  toggleNav(sectionSplit[0])

  

  switch (sectionSplit[0]) {
    case '#artists':
       // Est-ce qu'il y a un id ? typiquement: #artists-1234
       if(sectionSplit[1]) {
        /* toggleSection('#songs')
        renderSongsSection(sectionSplit[1]) */
        
      }
      else {
        renderArtistsSection()
      }
    break;
  
    default:
      break;
  }

  
}

// On link la fonction "displaySection" à l'événement hashchange pour être averti d'un changement de hash dans l'url
window.addEventListener('hashchange', displaySection)

// Affichage au chargement pour traiter l'url en cours (exemple: on ouvre un lien dans un nouvel onglet)
displaySection()

// On enregistre le worker pour s'occuper de la mise en cache
navigator.serviceWorker.register('/workerCacheFetched.js')
