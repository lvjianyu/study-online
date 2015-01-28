/**
 * Created by Andy.Lv on 2014/12/16.
 */
'use strict';

var _ = require('lodash');
var express = require('express');
var router = express.Router();

function render(html) {
    return function (req, res) {
        res.render(html);
    };
}

router.get('/', render('index'));
router.get('/templates/about', render('templates/about'));
router.get('/templates/article', render('templates/article'));
router.get('/templates/topic', render('templates/topic'));
router.get('/templates/topic/:category', render('templates/topic-category.html'));
router.get('/partials/dialog-modal', render('partials/dialog-modal'));
router.get('/partials/login', render('partials/login'));

module.exports = router;

