/* global fetch */
function appendListVideo (section, title) {
    const header = document.createElement('header')
    const titleElement = document.createElement('h3')
    titleElement.textContent = title
    header.appendChild(titleElement)
    const container = document.createElement('div')
    container.setAttribute('class', 'carousel')
    section.appendChild(header)
    section.appendChild(container)
  }

  //crear clase video a esa clase pasarle el id, la imgen, titulo. Tendra un metodo rendertoHTML  en lugar de createVideo y devuelve el nodo de articl o el nodo que voamos a crear
  //nueva pagina para crear videos campos id, ur, titulo

  class Video {
    constructor (iD, titulo, imagen) {
      this.iD = iD;
      this.titulo = titulo;
      this.imagen = imagen;
    }

    get article(){
      return this.createArticle();
    }

    createArticle () {
      const article = document.createElement('article')
      article.setAttribute('class', 'video-item')
      const link = document.createElement('a')
      link.setAttribute('href', `viewer?id=${this.iD}`)
      link.setAttribute('class', 'video-item--link link-container')
      article.appendChild(link)
    
      const image = document.createElement('img')
      image.setAttribute('class', 'video-item--image')
      image.setAttribute('src', this.imagen)
    
      link.appendChild(image)
    
      const title = document.createElement('h4')
      title.textContent = this.titulo
    
      link.appendChild(title)
    
      return article
    }
    
  }
  
  const elemento = new Video(1, 'Mira mama sin manoaaas!', 'https://images.genius.com/edbc5beb351bda262691f146453080a9.1000x1000x1.png')
  console.log(elemento.article)

  function appendVideos (section, videos, title) {
    appendListVideo(section, title)
    const carousel = section.querySelector('.carousel')
    for (let index = 0; index < videos.length; index++) {
      const videoElement = createVideo(videos[index])
      carousel.appendChild(videoElement)
    }
  }
  
  function createVideos (videos) {
    const seccionRecomendados = document.getElementById('recomendados')
    const seccionInternacional = document.getElementById('internacional')
    appendVideos(seccionRecomendados, videos.recomendados, 'Recomendados')
    appendVideos(seccionInternacional, videos.internacional, 'Internacional')
  }
  function fetchVideos (url) {
    return fetch(url)
      .then(response => response.json())
  }
  
  window.addEventListener('load', function () {
    return fetchVideos('http://localhost:3000/videos')
      .then(createVideos)
  })

// function videoSection(index){
//     let principalElement  = document.getElementById('principal')
   
//     const item_div = document.createElement('div')
//     principalElement.appendChild(item_div)    
//     item_div.setAttribute("id", "videosection");

//     console.log('seccion del video')

//     return principalElement
// }

// function createVideoHeader (videoInfo) {
//     const item_header = document.createElement('header')
//     const item_title = document.createElement('h3')

//     item_title.appendChild(document.createTextNode(videoInfo.title))
//     item_header.appendChild(item_title)

//     return item_header

// } 

// function createVideoDescription (videoInfo) {
    
//     const item_article = document.createElement('article')
//     const item_h4 = document.createElement('h4')    
//     const item_img = document.createElement('img')
//     const item_span = document.createElement('span')
//     const item_span_views = document.createElement('span')

//     item_img.setAttribute('src',videoInfo.img)
//     item_h4.appendChild(document.createTextNode(videoInfo.title))
//     item_span.appendChild(document.createTextNode(videoInfo.autor))
//     item_span_views.appendChild(document.createTextNode(videoInfo.views))

//     item_article.appendChild(item_img)
//     item_article.appendChild(item_h4)
//     item_article.appendChild(item_span)
//     item_article.appendChild(item_span_views)
    
//     item_article.setAttribute("class", "media");

//     return item_article
//   }

// window.addEventListener('load', function () {

//     const videoCategories = videos.categories
//     let index = 0
//     console.log(videos.categories)

//     while(index < videoCategories.length){
//         console.log(videoCategories[index].title)
        
                
//         videoSection(index)
//         const videoElement = document.getElementById('videosection')
//         const videoHeader = createVideoHeader(videoCategories[index])
        
//         videoElement.appendChild(videoHeader)
//             for(let i=0; i < videoCategories[index].playlist.length; i++){
//                 const videoDescription = createVideoDescription(videoCategories[index].playlist[i])
//                 videoElement.appendChild(videoDescription)
//                 console.log(videoCategories[index].playlist[i].title)
//             }
//         index++
//     }
// })


