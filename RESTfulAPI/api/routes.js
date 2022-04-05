module.exports = function(app) {
  let booksCtrl = require('./controllers/booksController');

  app.route('/books')
    .get(booksCtrl.get);
    //.post(booksCtrl.store);
}