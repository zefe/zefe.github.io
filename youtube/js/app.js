

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

function createHeader() {
    //creamos el header de la articulo MEDIA
    const item_header = document.createElement('header')
    const item_h3 = document.createElement('h3')    
    item_h3.appendChild(document.createTextNode('Recomendados'))
    item_header.appendChild(item_h3)

    const header = document.getElementById("categoria").appendChild(item_header)
    
}


function createArticle(data) {
    //creamos la descripcion del video


    for(let i=0; i < data.recomendados.length; i++) {

        const recomendados = data.recomendados;

        const item_article = document.createElement('article')
        const item_h4 = document.createElement('h4')    
        const item_img = document.createElement('img')
        const item_span = document.createElement('span')
        const item_span_views = document.createElement('span')

        item_img.setAttribute('src',recomendados[i].img)
        item_h4.appendChild(document.createTextNode(recomendados[i].title))
        item_span.appendChild(document.createTextNode(recomendados[i].autor))
        item_span_views.appendChild(document.createTextNode(recomendados[i].views))
    
        item_article.appendChild(item_img)
        item_article.appendChild(item_h4)
        item_article.appendChild(item_span)
        item_article.appendChild(item_span_views)
    
        const article = document.getElementById("categoria").appendChild(item_article)
        
        item_article.setAttribute("class", "media");
        
    }

}
//AGREGAAR ELEMENTOS
function categoriasObj(data) {
let api = data.recomendados;
let prop = [...api]
console.log(prop)
}

window.addEventListener('load', function() {
    createArticle(videos)
    
    categoriasObj(videos)
})

