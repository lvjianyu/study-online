/**
 * Created by Andy.Lv on 2015/1/13.
 */

'use strict';

var passport = require('passport');
var passportGithub = require('passport-github');
var GitHubStrategy = passportGithub.Strategy;
var config = require('../config');
var userDao = require('../dao').user;
var auth = require('./auth');
var $l = require('livejs');

function githubStrategy() {
    return new GitHubStrategy({
            clientID: process.env.GITHUB_CLIENT_ID || config.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET || config.GITHUB_CLIENT_SECRET,
            callbackURL: process.env.GITHUB_CALLBACK || config.GITHUB_CALLBACK
        },
        function (accessToken, refreshToken, profile, done) {
            profile.accessToken = accessToken;
            done(null, profile);
        }
    );
}
function githubAuth(config) {
    if (config) {
        return passport.authenticate('github', config);
    }
    return passport.authenticate('github');
}

function githubCallback(req, res, next) {
    // Successful authentication, redirect home.
    var profile = req.user;

    $l(function (d) {
        userDao.findOne({githubid: profile.id}, function (err, user) {
            if (err) {
                return next(err);
            }
            d.resolve(user);
        });
    }).then(function (d, user) {
        if (user) {
            user.username = profile.username;
            user.avatar = profile._json.avatar_url;
            user.email = profile.email;
            user.profileUrl = profile.profileUrl;
            user.provider = profile.provider;
            user.save(function (err) {
                if (err) {
                    return next(err);
                }
                d.resolve(user);
            });
        } else {
            userDao.save(profile, function (err) {
                if (err) {
                    return next(err);
                }
                d.resolve(profile);
            });
        }
    }).then(function (d, user) {
        auth.encryptSession(user, res);
        res.redirect('/');
    });
}

module.exports = {
    githubStrategy: githubStrategy,
    githubAuth: githubAuth,
    githubCallback: githubCallback
};
