const videoBox = document.getElementById('videoBox')
const localVideo = document.getElementById('localVideo')

const constraints = {
    video: true,
    audio: true,
}

navigator.mediaDevices.getUserMedia(constraints).then(stream => {
    localVideo.srcObject = stream
})