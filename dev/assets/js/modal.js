const modal = document.querySelector('.modal-wrapper');
const triger = document.querySelectorAll('[data-triger-modal]');
const buildSold = document.querySelectorAll('.sold');
const modalBody = document.querySelector('.modal-container');


const modalArr = [{
    id: 0,
    triger: 'sold',
    title: 'Нажаль всі квартири продані..(',
    description: 'Вільні квартири знаходяться в будинках, які не продані. Оберіть, будь ласка, іншу будівлю, щоб переглянути квартири своєї мрії!)',
},
{
    id: 1,
    triger: 'registrationSuccess',
    title: 'Успішна реєстрація',
    description: 'Ви успішно зареєструвалися.',
},
{
    id: 2,
    triger: 'loginSuccess',
    title: 'Успішний вхід',
    description: 'Ви успішно зареєструвалися.',
},
];

const randerModalContent = (modalContent) => {
    modalBody.innerHTML = `<h2 class="modal-title">${modalContent.title}</h2>
                            <p class="modal-discription">
                                ${modalContent.description}
                            </p>
                            <div class="button-row">
                                <button class="btn">Отправить</button>
                                <button class="closed" data-triger-close="modal">X</button>
                            </div>`;
    
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











buildSold.forEach(buildItem => {
    buildItem.addEventListener('click', showModal)
})

