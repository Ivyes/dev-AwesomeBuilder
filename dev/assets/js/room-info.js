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
    },
    {
        id: 2,
        flatNumber: '3',
        roomFirst: "19",
        roomSecond: "16.6",
        roomThird: "-",
        bathroom: "3.6",
        kitchen: "9.1",
        hall: "12.4",
        balconyFirst: "4.2",
        balconySecond: "4.7",
    },
    {
        id: 3,
        flatNumber: '4',
        roomFirst: "19",
        roomSecond: "16.6",
        roomThird: "-",
        bathroom: "3.6",
        kitchen: "9.1",
        hall: "12.4",
        balconyFirst: "4.2",
        balconySecond: "4.7",
    },
    {
        id: 4,
        flatNumber: '5',
        roomFirst: "19",
        roomSecond: "16.6",
        roomThird: "-",
        bathroom: "3.6",
        kitchen: "9.1",
        hall: "12.4",
        balconyFirst: "4.2",
        balconySecond: "4.7",
    },
    {
        id: 5,
        flatNumber: '6',
        roomFirst: "19",
        roomSecond: "16.6",
        roomThird: "-",
        bathroom: "3.6",
        kitchen: "9.1",
        hall: "12.4",
        balconyFirst: "4.2",
        balconySecond: "4.7",
    },
    {
        id: 6,
        flatNumber: '7',
        roomFirst: "19",
        roomSecond: "16.6",
        roomThird: "-",
        bathroom: "3.6",
        kitchen: "9.1",
        hall: "12.4",
        balconyFirst: "4.2",
        balconySecond: "4.7",
    },
    {
        id: 7,
        flatNumber: '8',
        roomFirst: "19",
        roomSecond: "16.6",
        roomThird: "-",
        bathroom: "3.6",
        kitchen: "9.1",
        hall: "12.4",
        balconyFirst: "4.2",
        balconySecond: "4.7",
    },
    {
        id: 8,
        flatNumber: '9',
        roomFirst: "19",
        roomSecond: "16.6",
        roomThird: "-",
        bathroom: "3.6",
        kitchen: "9.1",
        hall: "12.4",
        balconyFirst: "4.2",
        balconySecond: "4.7",
    }
]

    // =================
    const buttonFlatSee = document.querySelector('[data-triger-btn="see-flat"]')
    const modalRoomInfo = document.querySelector('.floor-page .modal-wrapper')
    const buttonFlatClose = document.querySelector('[data-triger-close="modal"]')
    const roomInformation = document.querySelector('.flat-info')
    const rooms = document.querySelectorAll('.flat')
    // =================
    
 const renderRoomInformation = (array) => {
        const render = array.map(item => {
            return `
                <li class="flat-info-item">Жила комната 1: ${item.roomFirst} м.кв</li>
                <li class="flat-info-item">Жила комната 2: ${item.roomSecond} м.кв</li>
                <li class="flat-info-item">Жила комната 3: ${item.roomThird} м.кв</li>
                <li class="flat-info-item">Ванна кімната: ${item.bathroom} м.кв</li>
                <li class="flat-info-item">Балкон 1: ${item.balconyFirst} м.кв</li>
                <li class="flat-info-item">Балкон 2: ${item.balconySecond} м.кв</li>
                <li class="flat-info-item">Кухня: ${item.kitchen} м.кв</li>
                <li class="flat-info-item">Хол: ${item.hall} м.кв</li>
            `})
        
     roomInformation.innerHTML = render
}

renderRoomInformation([flatInfoArr[0]])

rooms.forEach(room => {
    room.addEventListener('click', () => {
        const thisRoom = room.getAttribute('data-number')
        const roomNumber = flatInfoArr.filter(item => item.flatNumber === thisRoom)
        renderRoomInformation(roomNumber)
    })
})

    buttonFlatSee.addEventListener('click', () => {
        modalRoomInfo.classList.add('show')
    })

    buttonFlatClose.addEventListener('click', () => {
        modalRoomInfo.classList.remove('show')
    })

    document.querySelector('.floor-page') ? installFloor() : null;