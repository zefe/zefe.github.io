const videos = {
    recomendados: [
        {
            id: 1,
            img: 'https://cdn.reggaetonsinlimite.com/wp-content/uploads/2018/11/Ella-Quiere-Beber-Remix.jpg',
            title: 'Anuel AA - Ella Quiere Beber (Remix) ft. Romeo Santos',
            autor: 'Anuel AA '
        },
        {
            id: 8,
            img: 'https://images.genius.com/edbc5beb351bda262691f146453080a9.1000x1000x1.png',
            title: 'Calma Remix',
            autor: 'Pedro Capo - Farruko'
        },
        {
            id: 3,
            img: 'https://cdn.reggaetonsinlimite.com/wp-content/uploads/2018/11/Creeme.jpg',
            title: 'Karol G, Maluma - Créeme'
        },        
        {
            id: 5,
            img: 'https://cdn.reggaetonsinlimite.com/wp-content/uploads/2018/11/Ella-Quiere-Beber-Remix.jpg',
            title: 'Anuel AA - Ella Quiere Beber (Remix) ft. Romeo Santos',
            autor: 'Anuel AA '
        },
        {
            id: 6,
            img: 'https://cdn.reggaetonsinlimite.com/wp-content/uploads/2018/11/Creeme.jpg',
            title: 'Karol G, Maluma - Créeme'
        },
        {
            id: 7,
            img: 'https://cdn.reggaetonsinlimite.com/wp-content/uploads/2018/11/Los-Campeones-Del-Pueblo.jpg',
            title: 'Wisin & Yandel, Romeo Santos - Aullando (Official Video)'
        },
        {
            id: 8,
            img: 'https://images.genius.com/edbc5beb351bda262691f146453080a9.1000x1000x1.png',
            title: 'Calma Remix',
            autor: 'Pedro Capo - Farruko'
        }
    ],
    principal:[],
    internacional: []
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
    console.log(data)
    //creamos la descripcion del video

    for(let i=0; i < data.recomendados.length; i++){

        const recomendados = data.recomendados;


        console.log(recomendados[i].title)

        const item_article = document.createElement('article')
        const item_h4 = document.createElement('h4')    
        const item_img = document.createElement('img')
        item_img.setAttribute('src',recomendados[i].img)
        item_h4.appendChild(document.createTextNode(recomendados[i].title))

    
        item_article.appendChild(item_img)
        item_article.appendChild(item_h4)
    
        const article = document.getElementById("categoria").appendChild(item_article)
        
        item_article.setAttribute("class", "media");
        
    }

}
//AGREGAAR ELEMENTOS

window.addEventListener('load', function() {
    createArticle(videos)
})