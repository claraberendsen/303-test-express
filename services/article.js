
const delegate = require('../delegates/article');

const createArticleService = async (req, res) => {
  const article = await delegate.createArticle(req.body);
  res.status(200).send(article);
};

const getArticleService = async (req, res) => {
  const { id } = req.params;
  const article = await delegate.getArticle(id);
  res.status(200).send(article);
};

const getAllArticlesService = async (req, res) => {
  const article = await delegate.getAllArticles();
  res.status(200).send(article);
};

const updateArticleService = async (req, res) => {
  const { id } = req.params;
  const updated = await delegate.updateArticle(id, req.body);
  res.status(200).send(updated);
};

const deleteArticleService = async (req, res) => {
  const { id } = req.params;
  const deleted = await delegate.deleteArticle(id);
  res.status(200).send(deleted);
};

const articleServices = {
  createArticleService,
  updateArticleService,
  deleteArticleService,
  getAllArticlesService,
  getArticleService,
};

module.exports = articleServices;
