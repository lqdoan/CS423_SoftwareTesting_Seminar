const util = require('util');
const mysql = require('mysql');
const db = require('./../db');
const { response } = require('express');

module.exports = {
    get: (req, res) => {
        let id = req.query.id;
        let author = req.query.author;
        var sql;
        if (!id && !author){
            sql = 'SELECT * FROM books';
        }
        else if (!id){
            sql = 'SELECT * FROM books WHERE author = ' + '\'' + author + '\'';
        }
        else if (!author){
            sql = 'SELECT * FROM books WHERE id = ' + id;
        }        
        else{
            sql = 'SELECT * FROM books WHERE id = ' + id + ' AND author = ' + '\'' + author + '\'';
        }
        db.query(sql, (err, response) =>{
            if (err) throw err;
            res.json(response);
        })
    },
    // detail: (req, res) => {
    //     let sql = 'SELECT * FROM books WHERE id = ?'
    //     db.query(sql, [req.params.bookId], (err, response) => {
    //         if (err) throw err;
    //         res.json(response[0]);
    //     })
    // },
}