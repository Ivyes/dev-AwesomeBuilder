const modal = document.querySelector('.modal-wrapper');
const triger = document.querySelectorAll('[data-triger-modal]');
const buildSold = document.querySelectorAll('.sold');
const modalBody = document.querySelector('.modal-container');


const modalArr = [{
    id: 0,
    triger: 'sold',
    title: 'Нажаль всі квартири продані..(',
    description: 'Вільні квартири знаходяться в будинках, які не продані. Оберіть, будь ласка, іншу будівлю, щоб переглянути квартири своєї мрії!)',
    urlImg: 'assets/img/rejected.png',
},
{
    id: 1,
    triger: 'registrationSuccess',
    title: 'Регістрація',
    description: 'Ви успішно зареєструвалися.',
    urlImg: 'assets/img/accepted.png',
    markap: `
        <form>
            <div class="input-row">
                <label for="login">Введіть Ваш логін:</label>
                <input type="text" id="login">
                <label for="password">Введіть Ваш пароль:</label>
                <input type="text" id="password">
            </div>
        </form>
    `,
},
{
    id: 2,
    triger: 'loginSuccess',
    title: 'Успішний вхід',
    description: 'Ви успішно зареєструвалися.',
    urlImg: 'assets/img/accepted.png',
},
];

const randerModalContent = (modalContent) => {
    if (modalContent.markap) {
        modalBody.innerHTML = `
            <h2 class="modal-title">${modalContent.title}</h2>
            ${modalContent.markap}
            <div class="button-row">
                <button class="btn" data-triger-close="modal">Закрити</button>
                <button class="closed" data-triger-close="modal">X</button>
            </div>
        `;
        
    } else {
        modalBody.innerHTML = `<h2 class="modal-title">${modalContent.title}</h2>
                            <p class="modal-discription">
                                ${modalContent.description}
                            </p>
                            <div class="modal-img">
                                <img src="${modalContent.urlImg}" alt="${modalContent.triger}">
                            </div>
                            <div class="button-row">
                                <button class="btn" data-triger-close="modal">Закрити</button>
                                <button class="closed" data-triger-close="modal">X</button>
                            </div>`;
    }
    
    
    const btnClose = document.querySelectorAll('[data-triger-close="modal"]');

    btnClose.forEach(closeItem => {
        closeItem.addEventListener('click', closeModal);
    });
};

const showModal = (modalType) => {
    const modalData = modalArr.find(item => item.triger === modalType);

    randerModalContent(modalData);
    modal.classList.add('show');

};

const closeModal = () => {
    modal.classList.remove('show')
};

const trigerModal = triger.forEach(item => {
        item.addEventListener('click', () => {
            const modalType = item.getAttribute('data-triger-modal');

            showModal(modalType);
        })
    })







