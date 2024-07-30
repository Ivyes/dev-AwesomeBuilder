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
        urlImg: "assets/img/flat-1.png",
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
        urlImg: "assets/img/flat-2.png",
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
        urlImg: "assets/img/flat-3.png",
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
        urlImg: "assets/img/flat-4.png",
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
        urlImg: "assets/img/flat-5.png",
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
        urlImg: "assets/img/flat-6.png",
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
        urlImg: "assets/img/flat-7.png",
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
        urlImg: "assets/img/flat-8.png",
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
        urlImg: "assets/img/flat-9.png",
    }
]

const infoRoomPage = () => {

    // =================
    const buttonFlatSee = document.querySelector('[data-triger-btn="see-flat"]')
    const modalRoomInfo = document.querySelector('.modal-room')
    const roomInformation = document.querySelector('.modal-room .modal-container')
    const rooms = document.querySelectorAll('.flat')
    // =================
    
 const renderRoomInformation = (array) => {
        const render = array.map(item => {
            return `
            <div class="img-wrap">
                <img src="${item.urlImg}" alt="flat ${item.flatNumber}">
            </div>
            <ul class="flat-info">
                <li class="flat-info-item"><strong>Жила комната 1:</strong> ${item.roomFirst} м.кв</li>
                <li class="flat-info-item"><strong>Жила комната 2:</strong> ${item.roomSecond} м.кв</li>
                <li class="flat-info-item"><strong>Жила комната 3:</strong> ${item.roomThird} м.кв</li>
                <li class="flat-info-item"><strong>Ванна кімната:</strong> ${item.bathroom} м.кв</li>
                <li class="flat-info-item"><strong>Балкон 1:</strong> ${item.balconyFirst} м.кв</li>
                <li class="flat-info-item"><strong>Балкон 2:</strong> ${item.balconySecond} м.кв</li>
                <li class="flat-info-item"><strong>Кухня:</strong> ${item.kitchen} м.кв</li>
                <li class="flat-info-item"><strong>Хол:</strong> ${item.hall} м.кв</li>
            </ul>
            <button class="closed" data-triger-close="modal">X</button>
            `})
        
     roomInformation.innerHTML = render
        
        const buttonFlatClose = document.querySelectorAll('[data-triger-close="modal"]')
        
     buttonFlatClose.forEach(itemClose => {
         itemClose.addEventListener('click', () => {
                modalRoomInfo.classList.remove('show')
            })
        })
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

}
    
document.querySelector('.floor-page') ? infoRoomPage() : null;