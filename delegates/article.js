const db = require('../models');

/** Delegates for article model */

const createArticle = async article => db.article.create(article);


const getArticle = async id => db.article.findById(id);


const getAllArticles = async () => {
  const articles = await db.article.findAll({
    order: [['id', 'DESC']],
  });
  return articles;
};


const updateArticle = async (id, data) => {
  const toUpdate = await getArticle(id);
  return toUpdate.update(data);
};

const deleteArticle = async (id) => {
  const toDelete = await getArticle(id);
  return toDelete.destroy();
};

const articleDelegate = {
  createArticle, updateArticle, deleteArticle, getAllArticles, getArticle,
};

module.exports = articleDelegate;
