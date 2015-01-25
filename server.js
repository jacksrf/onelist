var express = require('express');
var ejs = require('ejs');
var app = express();
var levelup = require('level')

var userList = levelup('./userList');
var users = levelup('./users');

// var lists = []
// var list = {list: list, items: items}
// var items = []
// var item = {item: item, link: url};

  userList.del("user", function () {
      // if (err)
        // handle I/O or other error
    });

  userList.put("user", lists, function (err) {
    if (err) {
      return console.log('Ooops!', err);
      }
    });
