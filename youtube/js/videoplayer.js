const videos = {
    'yququw': [{        
    url: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
    }]
}

window.addEventListener('load', function() {
    const query = window.location.search
    const indexEqualSymbol = query.indexOf('=')
    const  idVideo = query.slice(indexEqualSymbol+1, query.length)
    const fuentes = videos[videos] // forma de acceder a un objeto
    console.log(fuentes)

    const videoEl = document.getElementById('video-player')
    videoEl.src = fuentes.url
    console.log(idVideo);
})