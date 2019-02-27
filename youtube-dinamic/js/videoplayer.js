const videos = {
    'yququw': [
      { url: 'https://www.w3schools.com/html/mov_bbb.mp4', type: 'video/mp4' },
      { url: 'https://www.w3schools.com/html/mov_bbb.ogg', type: 'video/ogg' }
    ]
  }
  
  function createSource (fuente) {
    const source = document.createElement('source')
    source.src = fuente.url
    source.type = fuente.type
    return source
  }
  
  function parseIdVideo (location) {
    const query = location.search
    const indexEqualSymbol = query.indexOf('=')
    return query.slice(indexEqualSymbol + 1, query.length)
  }
  
  window.addEventListener('load', function () {
    const idVideo = parseIdVideo(window.location)
    const fuentes = videos[idVideo]
  
    const videoElement = document.getElementById('video-player')
  
    for (let index = 0; index < fuentes.length; index++) {
      const source = createSource(fuentes[index])
      videoElement.appendChild(source)
    }
    const messageDontSupportVideo = document.createTextNode('Ya comistes? esto no soporta video')
    videoElement.appendChild(messageDontSupportVideo)
  })





  const array = [1, 3, 4, 5, 10, 16]
  array.splice(1, 0, 2)
  array.splice(6, 1)
  console.log(array)


  const map = new Map()
  const initialPlant = { id: 1, name: 'Bulbasaur' }
  //Agrega el pokemon en el map
  const initialCharmander = { id: 4, name: 'Charmander' }
  
  map.set(initialCharmander.id, initialCharmander)
 //Cambia el a bulbasaur por chamander dentro del map

  console.log(map)

  // instancia es un obj que fue creado arraves de una funcion constructura  o una clase 


