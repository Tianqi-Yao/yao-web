const { chromium } = require('playwright');

async function initializePage(mock, url) {
    mock.browser = await chromium.launch();
    console.log('Browser is connected:', mock.browser.isConnected()); // 输出: false
    mock.page = await mock.browser.newPage();
    await mock.page.goto(url);
}

async function closeBrowser(mock) {
    if (mock.browser) {
        await mock.browser.close();
    }
    console.log('Browser is connected:', mock.browser.isConnected()); // 输出: false
}

async function getPageTitle(mock) {
    try {
        const title = await mock.page.title();
        console.log('title1:', title);
        return title;
    } catch (error) {
        console.error('Error occurred:', error);
        return null;
    }
}

async function getElementContentOrAttr(mock) {
    try {
        const text = await mock.page.textContent('p');
        console.log(text);

        const href = await mock.page.getAttribute('a', 'href');
        console.log(href);

        return text;
    } catch (error) {
        console.error('Error occurred:', error);
        return null;
    }
}

module.exports = {
    initializePage,
    closeBrowser,
    getPageTitle,
    getElementContentOrAttr,

}