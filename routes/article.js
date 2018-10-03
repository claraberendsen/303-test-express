
const express = require('express');

const router = express.Router();
const articleServices = require('../services/article');
const asyncErrorMiddleware = require('../middlewares/asyncErrorMiddleware');

/* Routes for article services */

router.post('/article', asyncErrorMiddleware(articleServices.createArticleService));
router.get('/article', asyncErrorMiddleware(articleServices.getAllArticlesService));
router.get('/article/:id', asyncErrorMiddleware(articleServices.getArticleService));
router.put('/article/:id', asyncErrorMiddleware(articleServices.updateArticleService));
router.delete('/article/:id', asyncErrorMiddleware(articleServices.deleteArticleService));

module.exports = router;
