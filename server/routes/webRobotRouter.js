const express = require('express');
const robot = require('../public/javascripts/webRobot');  // 内部方法返回 Promise,需要异步执行
const router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Hello World!!!test',
        start:'http://localhost:4005/indeed',
        manually:'http://localhost:4005/manually',
    })
}
);

router.get('/indeed', async (req, res) => {
    robot.startIndeed('https://www.indeed.com/jobs?q=c2c+contract+react&l=United+States')
    res.status(200).json({ home: 'http://localhost:4005', content: 'indeed' })
}
);

router.get('/manually', async (req, res) => {
    await robot.startManually(req.query.url, req.query.elementPath)
    res.status(200).json({ home: 'http://localhost:4005', content: robot.results, length: robot.resultsLength })
}
);

// router.get('/', async (req, res) => {
//     const content = await robots
//     console.log('content: ',content);
//     res.status(200).json({ home:'http://localhost:3005',content: content })
// }
// );

module.exports = router