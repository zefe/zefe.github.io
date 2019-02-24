// const videos = {
//         principal: [
//         {
//             id: 1,
//             img: 'https://images.shazam.com/coverart/t313510678-b1257259293_s400.jpg',
//             title: 'No money - The aviary 2',
//             autor: 'Galantis ',
//             views: ' 72K vistas Hace 2 meses'
//         },
//         {
//             id: 2,
//             img: 'https://images.genius.com/edbc5beb351bda262691f146453080a9.1000x1000x1.png',
//             title: 'Calma Remix 2',
//             autor: 'Pedro Capo ',
//             views: ' 100K vistas Hace 1 mes'
//         },
//         {
//             id: 3,
//             img: 'https://images.shazam.com/coverart/t313510678-b1257259293_s400.jpg',
//             title: 'No money - The aviary 2',
//             autor: 'Galantis ',
//             views: ' 72K vistas Hace 2 meses'
//         },
//         {
//             id: 4,
//             img: 'https://images.genius.com/edbc5beb351bda262691f146453080a9.1000x1000x1.png',
//             title: 'Calma Remix 2',
//             autor: 'Pedro Capo ',
//             views: ' 100K vistas Hace 1 mes'
//         }
//     ],
//     recomendados: [
//         {
//             id: 1,
//             img: 'https://images.shazam.com/coverart/t313510678-b1257259293_s400.jpg',
//             title: 'No money - The aviary 2 RECOMENDADOS',
//             autor: 'Galantis ',
//             views: ' 72K vistas Hace 2 meses'
//         },
//         {
//             id: 2,
//             img: 'https://images.genius.com/edbc5beb351bda262691f146453080a9.1000x1000x1.png',
//             title: 'Calma Remix 2',
//             autor: 'Pedro Capo ',
//             views: ' 100K vistas Hace 1 mes'
//         }
//     ],
//     internacional: []
//   }

const videos = {
    "categories": [
        {
            id: 1,
            title: "RECOMENDADOS",
            playlist:[
                {
                    id: 1,
                    img: 'https://images.shazam.com/coverart/t313510678-b1257259293_s400.jpg',
                    title: 'No money - The aviary 2',
                    autor: 'Galantis ',
                    views: ' 72K vistas Hace 2 meses'
                },
                {
                    id: 2,
                    img: 'https://images.genius.com/edbc5beb351bda262691f146453080a9.1000x1000x1.png',
                    title: 'Calma Remix 2',
                    autor: 'Pedro Capo ',
                    views: ' 100K vistas Hace 1 mes'
                }
            ]
        },        
        {
            id: 2,
            title: "PRINCIPAL",
            playlist:[
                {
                    id: 1,
                    img: 'https://images.shazam.com/coverart/t313510678-b1257259293_s400.jpg',
                    title: 'No money - The aviary 2',
                    autor: 'Galantis ',
                    views: ' 72K vistas Hace 2 meses'
                },
                {
                    id: 2,
                    img: 'https://images.genius.com/edbc5beb351bda262691f146453080a9.1000x1000x1.png',
                    title: 'Calma Remix 2',
                    autor: 'Pedro Capo - Farruko',
                    views: ' 100K vistas Hace 1 mes'
                }
            ]
        },        
        {
            id: 3,
            title: "INTERNACIONAL",
            playlist:[
                {
                    id: 1,
                    img: 'https://images.shazam.com/coverart/t313510678-b1257259293_s400.jpg',
                    title: 'No money - The aviary 2',
                    autor: 'Galantis ',
                    views: ' 72K vistas Hace 2 meses'
                },
                {
                    id: 2,
                    img: 'https://i.ytimg.com/vi/oJLhobZ97q8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&amp;rs=AOn4CLAA-Q90jGrx-JXBYdEVVJqDFCNnnw',
                    title: 'Calma Remix 2',
                    autor: 'Pedro Capo - Farruko',
                    views: ' 100K vistas Hace 1 mes'
                }
            ]
        }
    ]
}

function createVideoHeader (videoInfo) {
    const item_header = document.createElement('header')
    const item_title = document.createElement('h3')

    item_title.appendChild(document.createTextNode(videoInfo.title))
    item_header.appendChild(item_title)

    return item_header

} 

function createVideoDescription (videoInfo) {
    
    const item_article = document.createElement('article')
    const item_h4 = document.createElement('h4')    
    const item_img = document.createElement('img')
    const item_span = document.createElement('span')
    const item_span_views = document.createElement('span')

    item_img.setAttribute('src',videoInfo.img)
    item_h4.appendChild(document.createTextNode(videoInfo.title))
    item_span.appendChild(document.createTextNode(videoInfo.autor))
    item_span_views.appendChild(document.createTextNode(videoInfo.views))

    item_article.appendChild(item_img)
    item_article.appendChild(item_h4)
    item_article.appendChild(item_span)
    item_article.appendChild(item_span_views)
    
    item_article.setAttribute("class", "media");

    return item_article
  }

window.addEventListener('load', function () {

    const videoCategories = videos.categories
    let index = 0
    console.log(videos.categories)

    const videoElement = document.getElementById('principal')

    while(index < videoCategories.length){
        const videoHeader = createVideoHeader(videoCategories[index])
        videoElement.appendChild(videoHeader)
        console.log(videoCategories[index].title)
            for(let i=0; i < videoCategories[index].playlist.length; i++){
                const videoDescription = createVideoDescription(videoCategories[index].playlist[i])
                videoElement.appendChild(videoDescription)
                console.log(videoCategories[index].playlist[i].title)
            }
        index++
    }
})