const buildItem = document.querySelectorAll('.build-item');

const cellAddress = document.querySelector('#address');
const cellFlats = document.querySelector('#flats');
const cellFlatsFree = document.querySelector('#flats-free');
const cellFlatsBooking = document.querySelector('#flats-booking');
const cellFlatsSold = document.querySelector('#flats-sold');

const calcInformation = () => buildItem.forEach(item => {
    let flats = Number(item.getAttribute('data-flats'));
    let flatsBooking = Number(item.getAttribute('data-flats-booking'));
    let flatsSold = Number(item.getAttribute('data-flats-sold'));

    let flatsFree = flats - (flatsBooking + flatsSold);
    item.setAttribute('data-flats-free', flatsFree);

    if (flatsFree === 0) {
        item.classList.add('sold');
        item.setAttribute('data-triger-modal', "sold");
        item.addEventListener('click', (event) => {
            event.preventDefault();
        })
    }
})

calcInformation();

const showInformation = (cell, attr) => buildItem.forEach(object => {
    object.addEventListener('mouseover', () => {
        const value = object.getAttribute(attr);
        cell.innerHTML = value;
    })
})

showInformation(cellAddress, 'data-address');
showInformation(cellFlats, 'data-flats');
showInformation(cellFlatsFree, 'data-flats-free');
showInformation(cellFlatsBooking, 'data-flats-booking');
showInformation(cellFlatsSold, 'data-flats-sold');
