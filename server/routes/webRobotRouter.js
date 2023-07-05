const express = require('express');
const robot = require('../public/javascripts/webRobot');  // 内部方法返回 Promise,需要异步执行
const router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Hello World!!!test',
        start:'http://localhost:3005/start',
    })
}
);

router.get('/start', async (req, res) => {
    robot.startIndeed('https://www.indeed.com/jobs?q=c2c+contract+react&l=United+States')
    res.status(200).json({ home: 'http://localhost:3005', content: 'finish' })
}
);

// router.get('/', async (req, res) => {
//     const content = await robots
//     console.log('content: ',content);
//     res.status(200).json({ home:'http://localhost:3005',content: content })
// }
// );

module.exports = router