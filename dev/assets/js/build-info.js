const floorArr = [
    {
        id: 0,
        build: '2',
        floor: '1',
        numberRooms: '1 - 9',
        rooms: '9',
        free: '2',
        sold: '5',
        boocking: '1',
    },
    {
        id: 1,
        build: '2',
        floor: '2',
        numberRooms: '9 - 16',
        rooms: '7',
        free: '1',
        sold: '3',
        boocking: '3',
    },
    {
        id: 2,
        build: '2',
        floor: '3',
        numberRooms: '16 - 22',
        rooms: '6',
        free: '0',
        sold: '3',
        boocking: '3',
    },
    {
        id: 3,
        build: '2',
        floor: '4',
        numberRooms: '22 - 31',
        rooms: '9',
        free: '4',
        sold: '0',
        boocking: '4',
    },
    {
        id: 4,
        build: '2',
        floor: '5',
        numberRooms: '31 - 35',
        rooms: '4',
        free: '0',
        sold: '4',
        boocking: '0',
    },
]

const infoFloorInstal = () => {
    const buildFloor = document.querySelectorAll('.build-float')
    const floorInfo = document.querySelector('.floor-options')

    const infoBuildRender = (array) => {
        const infoBuild = array.map(item => {
            return (
                `
                <div class="floor-option-item">
                        <div>Номер дому:</div>
                        <div>${item.build}</div>
                    </div>
                    <div class="floor-option-item">
                        <div>Поверх:</div>
                        <div>${item.floor}</div>
                    </div>
                    <div class="floor-option-item">
                        <div>Номери квартир:</div>
                        <div>${item.numberRooms}</div>
                    </div>
                    <div class="floor-option-item">
                        <div>Кількість квартир</div>
                        <div>${item.rooms}</div>
                    </div>
                    <div class="floor-option-item">
                        <div>Вільних квартир:</div>
                        <div>${item.free}</div>
                    </div>
                    <div class="floor-option-item">
                        <div>Продано:</div>
                        <div>${item.sold}</div>
                    </div>
                    <div class="floor-option-item">
                        <div>Бронь:</div>
                        <div>${item.boocking}</div>
                    </div>
                `
           )
        })
        floorInfo.innerHTML = infoBuild
    }

    infoBuildRender([floorArr[0]])

    buildFloor.forEach(floor => {
        const thisFloor = floor.getAttribute('data-floor-number')
        const numberFloor = floorArr.filter(item => item.floor === thisFloor)   

        floor.addEventListener('mouseover', () => {        
            infoBuildRender(numberFloor)
        })

        let ySold = Number(numberFloor[0].sold)
        let yRooms = Number(numberFloor[0].rooms)
        let yBooking = Number(numberFloor[0].boocking)
        let calcSoldRoom = yRooms - (ySold + yBooking)
        
        if (calcSoldRoom === 0) {
            floor.classList.add('sold')
            floor.setAttribute('data-triger-modal', 'sold')
            floor.addEventListener('click', (event) => {
                event.preventDefault()
            })
        }
    })

}

document.querySelector('.build-page') ? infoFloorInstal() : null