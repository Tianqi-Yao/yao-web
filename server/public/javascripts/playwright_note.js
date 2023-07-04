const { chromium } = require('playwright');

// 模拟浏览器操作和获取页面信息。以下是一个基本的示例：
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://example.com');
    const title = await page.title();
    console.log(title);
    await browser.close();
})();
/*这段代码首先导入了 Playwright 的 chromium 对象，然后在一个异步函数中启动了一个新的 Chromium 浏览器实例。接着，它创建了一个新的页面（或者说是标签页），然后导航到了 http://example.com。然后，它获取了页面的标题，并将其打印出来。最后，它关闭了浏览器。

在这个示例中，你可以看到 Playwright 的基本使用方法：你可以启动一个浏览器，打开一个页面，执行一些操作，然后关闭浏览器。你可以用类似的方式来模拟各种浏览器操作，例如点击按钮、填写表单、滚动页面等等。

对于获取页面信息，Playwright 提供了很多有用的方法。例如，page.title() 可以获取页面标题，page.content() 可以获取页面 HTML 内容，page.url() 可以获取页面 URL。此外，你还可以使用 page.$(selector) 来选择页面上的元素，然后获取其属性或者执行操作。
*/

// 模拟用户输入和点击操作。例如，你可能想要自动填写一个表单并提交。以下是一个示例：
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://example.com');

    // 填写输入框
    await page.fill('input[name="username"]', 'my_username');
    await page.fill('input[name="password"]', 'my_password');

    // 点击按钮
    await page.click('button[type="submit"]');

    await browser.close();
})();
/**
 * 在这个示例中，page.fill(selector, value) 方法用于填写输入框，page.click(selector) 方法用于点击元素。选择器通常可以是任何有效的 CSS 选择器。
 */


// 你可能想要获取一个元素的文本或属性。以下是一个示例：
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://example.com');

    // 获取元素文本
    const text = await page.textContent('.my-element');
    console.log(text);

    // 获取元素属性
    const href = await page.getAttribute('a.my-link', 'href');
    console.log(href);

    await browser.close();
})();
/**在这个示例中，page.textContent(selector) 方法用于获取元素的文本，page.getAttribute(selector, name) 方法用于获取元素的属性。 */

// 在某些情况下，你可能需要等待页面导航完成，或者等待某个元素出现在页面上。。以下是一个示例：
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // 等待页面导航完成
    await page.goto('http://example.com', { waitUntil: 'networkidle' });

    // 等待元素出现在页面上
    await page.waitForSelector('.my-element');

    await browser.close();
})();
/**
 * 在这个示例中，page.goto(url, options) 方法的 options 参数可以接受一个 waitUntil 选项，用于指定何时认为页面导航已经完成。'networkidle' 表示当网络空闲（即没有任何网络请求）时，认为页面导航已经完成。这对于等待 AJAX 请求或其他后台加载的内容非常有用。

page.waitForSelector(selector) 方法用于等待某个元素出现在页面上。这对于处理动态加载的内容非常有用。
 */

// Playwright 提供了一些方法来获取和操作 iframe。以下是一个示例：
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://example.com');

    // 获取 iframe
    const frame = await page.frame({ url: /my-iframe/ });

    // 在 iframe 中操作
    await frame.click('.my-button');

    await browser.close();
})();
/**
 * 在这个示例中，page.frame(options) 方法用于获取一个 iframe。options 参数可以接受一个 url 选项，用于匹配 iframe 的 URL。你可以提供一个字符串或正则表达式。

一旦你获取了一个 iframe，你就可以像操作页面一样操作它。例如，你可以调用 frame.click(selector) 来点击 iframe 中的元素。
 */



// JavaScript 对话框，如 alert、confirm 和 prompt。Playwright 提供了方法来处理这些对话框。以下是一个示例：
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://example.com');

    // 设置对话框处理器
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.dismiss();
    });

    // 触发对话框
    await page.evaluate(() => alert('Hello, world!'));

    await browser.close();
})();
/**
 * 在这个示例中，我们首先为 dialog 事件设置了一个处理器。这个处理器会在对话框出现时被调用。处理器首先打印出对话框的消息，然后关闭对话框。

然后，我们通过 page.evaluate() 方法在页面上执行一段 JavaScript 代码，触发一个 alert 对话框。
 */


// Playwright 提供了 page.screenshot() 方法来截取网页的屏幕快照。以下是一个示例：
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://example.com');

    // 截取网页快照
    await page.screenshot({ path: 'screenshot.png' });

    await browser.close();
})();
/**
 * 在这个示例中，page.screenshot(options) 方法用于截取网页的屏幕快照。options 参数可以接受一个 path 选项，用于指定保存快照的路径。
 */

// Playwright 提供了一些方法来管理浏览器的 cookies 和 localStorage。以下是一个示例：
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://example.com');

    // 设置 cookies
    await context.addCookies([
        { url: 'http://example.com', name: 'my_cookie', value: 'my_value' }
    ]);

    // 获取 cookies
    const cookies = await context.cookies();
    console.log(cookies);

    // 清空 localStorage
    await page.evaluate(() => localStorage.clear());

    await browser.close();
})();
/**
 * 在这个示例中，我们首先设置了一个 cookie，然后获取了所有的 cookies，并打印出来。然后，我们清空了 localStorage。注意，操作 localStorage 需要在页面上执行 JavaScript 代码，因此我们使用了 page.evaluate() 方法。
 */


// 监听网络请求。Playwright 提供了一些方法来监听和拦截网络请求。以下是一个示例：
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // 监听网络请求
    page.on('request', request => {
        console.log('Request:', request.url());
    });

    await page.goto('http://example.com');

    await browser.close();
})();
/**
 * 在这个示例中，我们为 request 事件设置了一个监听器。这个监听器会在每个网络请求开始时被调用，然后打印出请求的 URL。
 */

// 如何运行 JavaScript 代码以及如何处理复杂的页面交互。使用 page.evaluate() 方法在页面上运行 JavaScript 代码。这对于执行不能通过 Playwright API 完成的操作非常有用。以下是一个示例：
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://example.com');

    // 在页面上运行 JavaScript 代码
    const result = await page.evaluate(() => {
        return document.title;
    });
    console.log(result);

    await browser.close();
})();
/**
 * 在这个示例中，我们在页面上运行了一段 JavaScript 代码，获取了页面的标题，然后打印出来。注意，page.evaluate() 方法的参数是一个函数，这个函数将在浏览器中执行。这个函数的返回值将作为 page.evaluate() 方法的返回值。
 */

// 模拟一系列的用户操作。Playwright 提供了 page.mouse 和 page.keyboard 对象来模拟这些操作。以下是一个示例：
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://example.com');

    // 移动鼠标到指定位置
    await page.mouse.move(100, 100);

    // 点击鼠标
    await page.mouse.click(100, 100);

    // 输入文字
    await page.keyboard.type('Hello, world!');

    await browser.close();
})();
/**
 * 在这个示例中，我们首先移动了鼠标到指定的位置，然后点击了鼠标，最后输入了一些文字。
 */


// 使用Playwright进行文件上传和下载。首先，让我们看看如何上传文件。假设你有一个<input type="file">元素，你可以使用page.setInputFiles(selector, files)方法来上传文件。以下是一个示例：
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://example.com');

    // 上传文件
    await page.setInputFiles('input[type="file"]', 'path/to/my/file.txt');

    await browser.close();
})();
/**
 * 在这个示例中，page.setInputFiles(selector, files)方法用于上传文件。selector参数是CSS选择器，用于选择输入元素，files参数是要上传的文件的路径。
 */



// 下载文件。Playwright提供了一种方式来监听和获取下载的文件。以下是一个示例：
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://example.com');

    // 监听下载事件
    page.on('download', async download => {
        // 等待下载完成，并获取文件路径
        const path = await download.path();
        console.log(path);
    });

    // 触发下载
    await page.click('.my-download-button');

    await browser.close();
})();
/**
 * 在这个示例中，我们首先为download事件设置了一个监听器。这个监听器会在下载开始时被调用。然后，我们触发了一个下载，例如，通过点击一个下载按钮。
 */


// 如何选择下拉菜单的一个选项。你可以使用 page.selectOption(selector, values) 方法来选择一个或多个选项。以下是一个示例：
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://example.com');

    // 选择下拉菜单的一个选项
    await page.selectOption('select', 'my-option');

    await browser.close();
})();
/**
 * 在这个示例中，page.selectOption(selector, values) 方法用于选择下拉菜单的一个或多个选项。selector 参数是 CSS 选择器，用于选择下拉菜单，values 参数是要选择的选项的值。
 */


// 滚动页面。你可以使用 page.evaluate() 方法来执行滚动操作。以下是一个示例：
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://example.com');

    // 滚动页面
    await page.evaluate(() => window.scrollBy(0, 100));

    await browser.close();
})();
/**
 * 在这个示例中，我们在页面上运行了一段 JavaScript 代码，使页面向下滚动 100 像素。注意，滚动操作需要在浏览器中执行，因此我们使用了 page.evaluate() 方法。
 */

// 如何导航到一个新的 URL。你可以使用 page.goto(url) 方法来导航到一个新的 URL。以下是一个示例：
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // 导航到新的 URL
    await page.goto('http://example.com');

    await browser.close();
})();

// 如何监听页面跳转。你可以使用 page.on(event, listener) 方法来监听各种页面事件，包括 framenavigated 事件。以下是示例：
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // 监听页面跳转
    page.on('framenavigated', frame => {
        console.log('Navigated to:', frame.url());
    });

    await page.goto('http://example.com');

    await browser.close();
})();
/**
 * 在这个示例中，我们为 framenavigated 事件设置了一个监听器。这个监听器会在每次页面跳转时被调用，然后打印出新的 URL。
 */


// 使用 Playwright 进行多页面和并行操作。Playwright 支持打开多个页面，并且可以并行进行操作。以下是一个示例：
(async () => {
    const browser = await chromium.launch();

    // 打开第一个页面
    const page1 = await browser.newPage();
    await page1.goto('http://example.com');

    // 打开第二个页面
    const page2 = await browser.newPage();
    await page2.goto('http://example.org');

    await browser.close();
})();
/**
 * 在这个示例中，我们打开了两个页面，分别导航到了不同的 URL。你可以在同一时间对多个页面进行操作，例如，你可以在一个页面上执行某些操作，同时在另一个页面上进行等待。
 */


// 如何并行进行操作。Playwright 支持使用 Promise.all() 方法来并行进行多个操作。以下是一个示例：
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // 并行进行操作
    await Promise.all([
        page.goto('http://example.com'),
        page.waitForNavigation(),
    ]);

    await browser.close();
})();
/**
 * 在这个示例中，我们使用 Promise.all() 方法来并行执行两个操作：导航到一个新的 URL，并等待导航完成。这两个操作将同时开始，并且 Promise.all() 方法将等待所有操作完成。
 */

// 监听网络请求。你可以使用 page.on('request', listener) 方法来监听网络请求。以下是一个示例：
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // 监听网络请求
    page.on('request', request => {
        console.log('Request URL:', request.url());
    });

    await page.goto('http://example.com');

    await browser.close();
})();
/**
 * 在这个示例中，我们为 request 事件设置了一个监听器。这个监听器会在每次网络请求时被调用，然后打印出请求的 URL。
 */


// 拦截网络请求。你可以使用 page.route(url, handler) 方法来拦截网络请求。以下是一个示例：
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // 拦截网络请求
    await page.route('**/*', route => {
        console.log('Request URL:', route.request().url());
        route.continue();
    });

    await page.goto('http://example.com');

    await browser.close();
})();
/**
 * 在这个示例中，我们使用 page.route(url, handler) 方法来拦截所有网络请求。url 参数是一个模式，匹配到的所有请求都将被拦截。handler 参数是一个函数，这个函数将在每次请求被拦截时被调用。在这个函数中，我们可以查看请求的详细信息，或者修改请求，然后决定是否继续请求。
 */