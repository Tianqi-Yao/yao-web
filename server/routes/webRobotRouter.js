const express = require('express');
const robots = require('../public/javascripts/webRobot');  // 内部方法返回 Promise,需要异步执行
const router = express.Router();

const mock = {browser:null,page:null}

router.get('/', async (req, res) => {
    if (mock.browser) {
        console.log("browser exist!!!");
        await robots.closeBrowser(mock)
    }
    await robots.initializePage(mock,'http://example.com')
    res.status(200).json({
        message: 'Hello World!!!test',
        closeBrowser:'http://localhost:3005/closeBrowser',
        getPageTitle: 'http://localhost:3005/getPageTitle',
        getElementContentOrAttr: 'http://localhost:3005/getElementContentOrAttr',
        mock:mock,
    })
}
);

router.get('/closeBrowser', async (req, res) => {
    await robots.closeBrowser(mock)
    res.status(200).json({ home: 'http://localhost:3005', content: 'closed' })
}
);

router.get('/getPageTitle', async (req, res) => {
    const content = await robots.getPageTitle(mock)
    console.log('content: ', content);
    res.status(200).json({ home: 'http://localhost:3005', content: content })
}
);

router.get('/getElementContentOrAttr', async (req, res) => {
    const content = await robots.getElementContentOrAttr(mock)
    console.log('content: ', content);
    res.status(200).json({ home: 'http://localhost:3005', content: content })
}
);



// router.get('/', async (req, res) => {
//     const content = await robots
//     console.log('content: ',content);
//     res.status(200).json({ home:'http://localhost:3005',content: content })
// }
// );

module.exports = router