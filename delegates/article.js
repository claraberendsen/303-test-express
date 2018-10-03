const boom = require('boom');
const db = require('../models');

/** Delegates for article model */

const createArticle = async (article) => {
  const created = await db.articles.create(article);
  if (!created) {
    throw boom.expectationFailed('The article could not be created');
  }
  return created;
};

const getArticle = async (id) => {
  if (!Number.isInteger(id * 1)) {
    throw boom.badRequest('ID is not an integer');
  }
  const article = await db.articles.findById(id);
  if (!article) {
    throw boom.notFound('Article not found');
  }
  return article;
};

const getAllArticles = async () => {
  const articles = await db.articles.findAll({
    order: [['createdAt', 'DESC']],
  });
  if (!articles) {
    throw boom.expectationFailed('Unable to obtain all articles, check connection to database');
  }
  return articles;
};

const updateArticle = async (id, data) => {
  if (!Number.isInteger(id * 1)) {
    throw boom.badRequest('ID is not an integer');
  }
  const toUpdate = await getArticle(id);
  if (!toUpdate) {
    throw boom.notFound('Article not found');
  }
  const updated = await toUpdate.update(data);
  if (!updated) {
    throw boom.expectationFailed('Could not update article, check connection to database');
  }
  return updated;
};

const deleteArticle = async (id) => {
  if (!Number.isInteger(id * 1)) {
    throw boom.badRequest('ID is not an integer');
  }
  const toDelete = await getArticle(id);
  if (!toDelete) {
    throw boom.notFound('Article not found');
  }
  const deleted = await toDelete.destroy();
  if (!deleted) {
    throw boom.expectationFailed('Could not delete article, check connection to database');
  }
  return toDelete;
};


const articleDelegate = {
  createArticle, updateArticle, deleteArticle, getAllArticles, getArticle,
};

module.exports = articleDelegate;
