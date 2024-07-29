const flatInfoArr = [{
        id: 0,
        flatNumber: '1',
        roomFirst: "16.9",
        roomSecond: "12.1",
        roomThird: "18.9",
        bathroom: "5.1",
        kitchen: "14.2",
        hall: "14.8",
        balconyFirst: "4.2",
        balconySecond: "-",
    },
    {
        id: 1,
        flatNumber: '2',
        roomFirst: "19",
        roomSecond: "16.6",
        roomThird: "-",
        bathroom: "3.6",
        kitchen: "9.1",
        hall: "12.4",
        balconyFirst: "4.2",
        balconySecond: "4.7",
    }]

    // =================
    const buttonFlatSee = document.querySelector('[data-triger-btn="see-flat"]')
    const modalRoomInfo = document.querySelector('.floor-page .modal-wrapper')
    const buttonFlatClose = document.querySelector('[data-triger-close="modal"]')
    const roomInformation = document.querySelector('.flat-info')
    const rooms = document.querySelectorAll('.flat')
    
console.log(rooms);

rooms.forEach(room => {

})

    // =================
    
 const renderRoomInformation = (array) => {
        const render = array.map(item => {
            return `
                <li class="flat-info-item">Жила комната 1: ${item.roomFirst}</li>
                <li class="flat-info-item">Жила комната 2: ${item.roomSecond}</li>
                <li class="flat-info-item">Жила комната 3: ${item.roomThird}</li>
                <li class="flat-info-item">Ванна кімната: ${item.bathroom}</li>
                <li class="flat-info-item">Балкон 1: ${item.balconyFirst}</li>
                <li class="flat-info-item">Балкон 2: ${item.balconySecond}</li>
                <li class="flat-info-item">Кухня: ${item.kitchen}</li>
                <li class="flat-info-item">Хол: ${item.hall}</li>
            `})
        
        roomInformation.innerHTML = render
}




 // =====

    buttonFlatSee.addEventListener('click', () => {
        modalRoomInfo.classList.add('show')
    })

    buttonFlatClose.addEventListener('click', () => {
        modalRoomInfo.classList.remove('show')
    })