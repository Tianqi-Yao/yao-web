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
        await this.fetchIndeedData();
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
                await this.fetchIndeedData();
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

    async fetchIndeedData() {
        console.log(`fetchIndeedData: in`);
        // 保存页面截图
        await this.page.screenshot({ path: `./public/images/${this.title}.png` });
        await this.page.screenshot({ path: `./public/images/temp.png` });
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
        console.log(`fetchIndeedData: out`);
    }

    /*==========================================================================================*/
    /*====================================== 手动抓取 ===========================================*/
    /*==========================================================================================*/


    async startManually(url,elementPath) {
        try {
            this.url = url;                                     // 要爬取的页面
            this.results = {};                                  // 保存爬取的结果
            this.resultsLength = 0;                             // 保存爬取的结果的长度
            this.browser = await chromium.launch();             // 初始化模拟浏览器
            this.context = await this.browser.newContext({
                userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
            });
            this.page = await this.context.newPage();           // 初始化模拟页面
            await this.page.goto(this.url);                     // 跳转到要爬取的页面
            this.title = await this.page.title();              // 获取 title
    
            await this.fetchManuallyData(elementPath);
    
            // 关闭模拟浏览器
            await this.browser.close();
            // 保存结果到json文件
            fs.writeFileSync(`./public/json/${this.title}.json`, JSON.stringify(this.results, null, 2)); 
        } catch (error) {
            console.error("*** startManually error ***: ",error);
        }
    }

    async fetchManuallyData(elementPath) {
        console.log(`###fetchManuallyData: in`);
        // 保存页面截图
        await this.page.screenshot({ path: `./public/images/${this.title}.png` });
        await this.page.screenshot({ path: `./public/images/temp.png` });
        // 获取页面中所有匹配 keyWord 的元素
        console.log("###elementPath",elementPath);
        const keyElement = await this.page.$$(elementPath);
        // 遍历 keyElement 获取content
        for (let i = 0; i < keyElement.length; i++) {
            // 获取元素里面的纯文本
            const content = await keyElement[i].innerText();
            this.results[i] = content;
        }
        // console.log("###keyElement",keyElement);
        console.log(`###this.results.length: ${Object.keys(this.results).length}`);
        this.resultsLength = Object.keys(this.results).length;
        
        console.log(`###fetchManuallyData: out`);
    }
}

// 使用
const robot = new Crawler();

module.exports = robot