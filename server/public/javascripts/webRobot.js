const { chromium } = require('playwright');
const fs = require('fs');

class Crawler {
    // 启动indeed爬虫
    async startIndeed(url) {
        this.url = url;                                     // 要爬取的页面
        this.results = {};                                  // 保存爬取的结果
        this.browser = await chromium.launch();             // 初始化模拟浏览器
        this.context = await this.browser.newContext({
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537'
        });
        this.page = await this.context.newPage();           // 初始化模拟页面
        await this.page.goto(this.url);                     // 跳转到要爬取的页面
        this.title = await this.page.title();              // 获取 title
        await this.fetchData();
        //查看是否有aria-label="Next" 的按钮
        while (true) {
            const nextButton = await this.page.$('[aria-label*="Next"]');
            if (!nextButton) {
                console.log('No more results.');
                break;
            }
            else {
                // 点击 aria-label="Next" 的按钮
                await this.page.click('[aria-label*="Next"]');
                // 等待加载完成
                await this.page.waitForLoadState('networkidle');
                await this.fetchData();
            }
        }
        // 关闭模拟浏览器
        await this.browser.close();

        // 保存结果到json文件
        fs.writeFileSync(`./public/json/${this.title}.json`, JSON.stringify(this.results, null, 2));
        // 统计 results 中的company数量 以及 links 数量
        let companyCount = 0;
        let linksCount = 0;
        for (const key in this.results) {
            companyCount++;
            linksCount += this.results[key].length;
        }
        console.log(`companyCount: ${companyCount}, linksCount: ${linksCount}`);
        console.log('Results saved to results.json.');
    }

    async fetchData() {
        console.log(`fetching page: in`);
        // 保存页面截图
        await this.page.screenshot({ path: `./public/images/${this.title}.png` });
        // 获取页面中class="jobsearch-ResultsList"的元素
        const sidebarUlElement = await this.page.$('.jobsearch-ResultsList');
        // 遍历 sidebarUlElement 获取每个 li 里的 a 标签 和class="companyName"  的元素
        const liList = await sidebarUlElement.$$('li .resultContent');
        // 输出 liList 的数量
        console.log(`liList.length: ${liList.length}`);
        for (let i = 0; i < liList.length; i++) {
            const aElementsList = await liList[i].$$('.jcs-JobTitle');
            const companyNameElement = await liList[i].$('.companyName');
            // 获取 class="companyName"  的元素的文本
            // console.log('companyNameElement: ', companyNameElement);
            const companyName = await companyNameElement.innerHTML();
            // 获取 所有的 a 标签
            for (let j = 0; j < aElementsList.length; j++) {
                const href = await aElementsList[j].getAttribute('href');
                // 检查 results 中是否已经存在该公司的信息
                if (this.results[companyName]) {
                    // 将结果保存到 results 数组中
                    this.results[companyName].push("https://www.indeed.com" + href);
                } else {
                    // 将结果保存到 results 数组中
                    this.results[companyName] = ["https://www.indeed.com" + href];
                }
                
            }
        }
        console.log(`fetching page: out`);
    }
}

// 使用
const robot = new Crawler();

module.exports = robot