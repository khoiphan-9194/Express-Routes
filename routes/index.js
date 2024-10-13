const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');
const diagnosticRouter = require('./diagnostics');
// TODO: import your diagnostics route

router.use('/tips', tipsRouter);
router.use('/feedback', feedbackRouter);
router.use('/diagnostics', diagnosticRouter);
// TODO: Initialize diagnostics route

module.exports = router;
