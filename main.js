let imageContainer = document.createElement('div')
imageContainer.className = "image-container"
imageContainer.style.textAlign = "center"

document.body.appendChild(imageContainer)

const album = window.location.pathname.split('/')[2]
const url = `https://api.imgur.com/3/album/${album}/images`

fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
        "Authorization": "Client-ID ece8165c4a3c190"
    },
})
.then(response => response.json())
.then(response => {

    const images = response.data
    let index = 0
    imageContainer.innerHTML = `<img src=${images[index].link} style="height: 100vh;"/>`

    document.addEventListener('keypress', (e) => {
        if (e.key === "d") {
            index = (index + 1) % images.length
        } else if (e.key === "a") {
            index -= 1
            if (index < 0) { index = images.length - 1}
        } else if (e.key === "f") {
            imageContainer.webkitRequestFullScreen()
        }
        imageContainer.innerHTML = `<img src=${images[index].link} style="height: 100vh;"/>`
    })    
})

