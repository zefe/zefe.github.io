const videos = {
    recomendados: [
        {
            id: 1,
            img: 'https://cdn.reggaetonsinlimite.com/wp-content/uploads/2018/11/Ella-Quiere-Beber-Remix.jpg',
            title: 'Anuel AA - Ella Quiere Beber (Remix) ft. Romeo Santos',
            autor: 'Anuel AA ',
            views: ' 72K vistas Hace 2 meses'
        },
        {
            id: 8,
            img: 'https://images.shazam.com/coverart/t313510678-b1257259293_s400.jpg',
            title: 'No money - The aviary',
            autor: 'Galantis - The aviary',
            views: ' 2K vistas Hace 2 semanas'
        },
        {
            id: 3,
            img: 'https://cdn.reggaetonsinlimite.com/wp-content/uploads/2018/11/Creeme.jpg',
            title: 'Karol G, Maluma - Créeme',
            autor: 'Karol G, Maluma',
            views: ' 20K vistas Hace 4 dias'
        },        
        {
            id: 5,
            img: 'https://cdn.reggaetonsinlimite.com/wp-content/uploads/2018/11/Ella-Quiere-Beber-Remix.jpg',
            title: 'Anuel AA - Ella Quiere Beber (Remix) ft. Romeo Santos',
            autor: 'Anuel AA ',
            views: ' 90K vistas Hace 3 meses'
        },
        {
            id: 6,
            img: 'https://cdn.reggaetonsinlimite.com/wp-content/uploads/2018/11/Creeme.jpg',
            title: 'Karol G, Maluma - Créeme',
            autor: 'Karol G, Maluma',
            views: ' 1K vistas Hace 3 dias'
        },
        {
            id: 7,
            img: 'https://images.shazam.com/coverart/t313510678-b1257259293_s400.jpg',
            title: 'No money - The aviary',
            autor: 'Galantis ',
            views: ' 72K vistas Hace 2 meses'
        },
        {
            id: 8,
            img: 'https://i.ytimg.com/vi/oJLhobZ97q8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&amp;rs=AOn4CLAA-Q90jGrx-JXBYdEVVJqDFCNnnw',
            title: 'Calma Remix',
            autor: 'Pedro Capo - Farruko',
            views: ' 100K vistas Hace 1 mes'
        }
    ],
    principal:[
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
    ],
    internacional: [
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
};

const videos2 = {
    "categories": [
        {
            id: 1,
            title: "Lo más recomendado",
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
            id: 1,
            title: "Lo más visto",
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
            id: 1,
            title: "Tendencias",
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

    for(let i=0; i < data.recomendados.length; i++){

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
console.log(data)
    let api = data;
    console.log(api)
    console.log(api)
}

window.addEventListener('load', function() {
    createArticle(videos)
    
    categoriasObj(videos)
})

