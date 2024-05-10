const videoLayout = document.querySelector("#video-layout");
const video = document.querySelector("#video");

document.addEventListener("scroll", (e) => {

    const actualScroll = window.scrollY;
    const scrollMaxHeight = document.body.scrollHeight - window.innerHeight;

    console.log(scrollMaxHeight);

    const scaledValue = (actualScroll / scrollMaxHeight) * 5;

    console.log(scaledValue)

    video.currentTime = scaledValue; // Convertir milisegundos a segundos
    video.play();
    video.pause();
})