const express = require('express');
const robots = require('../public/javascripts/playwright_Encapsulation');  // 内部方法返回 Promise,需要异步执行
const router = express.Router();
router.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'Hello World!!!test',
        getPageTitle:'http://localhost:3005/getPageTitle',
        getAllCookies:'http://localhost:3005/getAllCookies',
        getElementContentOrAttr:'http://localhost:3005/getElementContentOrAttr'

    })
}
);

router.get('/getPageTitle', async (req, res) => {
    const content = await robots.getPageTitle()
    console.log('content: ',content);
    res.status(200).json({ home:'http://localhost:3005',content: content })
}
);

router.get('/getAllCookies', async (req, res) => {
    const content = await robots.getAllCookies()
    console.log('content: ',content);
    res.status(200).json({ home:'http://localhost:3005',content: content })
}
);

router.get('/getElementContentOrAttr', async (req, res) => {
    const content = await robots.getElementContentOrAttr()
    console.log('content: ',content);
    res.status(200).json({ home:'http://localhost:3005',content: content })
}
);



// router.get('/', async (req, res) => {
//     const content = await robots.
//     console.log('content: ',content);
//     res.status(200).json({ home:'http://localhost:3005',content: content })
// }
// );

module.exports = router