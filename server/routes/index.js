const express = require('express');
const router = express.Router();
const webRobotRouter = require('./webRobotRouter');
const egRouter = require('./egRouter')

router.use('/', webRobotRouter);
router.use('/eg',egRouter)

module.exports = router;
