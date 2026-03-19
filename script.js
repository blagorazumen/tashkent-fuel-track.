const tg = window.Telegram.WebApp;
tg.expand();

const data = {
    '80': [
        { name: "UNG Petro", price: "7 000", time: "10 мин. назад" },
        { name: "Mustang", price: "7 100", time: "1 час назад" }
    ],
    '92': [
        { name: "UNG Petro", price: "9 500", time: "20 мин. назад" },
        { name: "Sanoat Energy", price: "9 400", time: "40 мин. назад" }
    ],
    '95': [
        { name: "Lukoil", price: "13 500", time: "5 мин. назад" },
        { name: "Mustang", price: "12 800", time: "2 часа назад" }
    ]
};

function filterFuel(type) {
    // Меняем активную кнопку
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.includes(type));
    });

    const list = document.getElementById('fuel-list');
    list.innerHTML = '';

    data[type].forEach(item => {
        list.innerHTML += `
            <div class="fuel-card">
                <div class="azn-info">
                    <b>${item.name}</b>
                    <span>${item.time}</span>
                </div>
                <div class="price-tag">${item.price}</div>
            </div>
        `;
    });
}

function reportPrice() {
    tg.showConfirm("Хотите отправить актуальную цену для этого района?");
}

// По умолчанию показываем 80-й
filterFuel('80');


