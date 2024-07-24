const modal = document.querySelector('.modal-wrapper')
const btnClose = document.querySelectorAll('.closed')
const buildSold = document.querySelectorAll('.sold')

const showModal = () => {
    modal.classList.add('show')
}

const closeModal = () => {
    modal.classList.remove('show')
}

buildSold.forEach(buildItem => {
    buildItem.addEventListener('click', showModal)
})

btnClose.forEach( closeItem => {
    closeItem.addEventListener('click', closeModal)
})