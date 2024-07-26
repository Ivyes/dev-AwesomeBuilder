// const firstFlat = document.querySelector('.flat').classList.add('active')
const flats = document.querySelectorAll('.flat')











































const removeActiveClass = () => flats.forEach(item => item.classList.remove('active'))

flats.forEach(flat => {
    flat.addEventListener('click', () => {
        // removeActiveClass()
        flat.classList.add('active')
    })
})




// activeFlat();

