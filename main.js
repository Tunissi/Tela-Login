let container = document.getElementById('container')

toggle = () => {
    container.classList.toggle('sing-in')
    container.classList.toggle('sing-up')
}

setTimeout(() => {
    container.classList.add('sing-in')
}, 200)