var puppeteer = require('puppeteer');

const getCurrency = async () => {
    // Запускаем эмулятор браузера
    const browser = await puppeteer.launch({});

    // Создаем новую вкладку
    const page = await browser.newPage();

    // Переходим по ссылке, ищем нужный элемент и выводим его
    await page.goto('https://www.investing.com/currencies/usd-rub-chart');
    var text = await page.evaluate(`document.querySelectorAll('[data-test="instrument-price-last"]')[0].textContent`);
    console.log(text);

    // Закрываем браузер
    await browser.close()
};

// Запускаем интервал 60 секунд и каждые 60 секунд перезапускаем скрипт
setInterval(() => {
    getCurrency();
    console.log('Необходимо подождать 60 секунд');
}, 60000);