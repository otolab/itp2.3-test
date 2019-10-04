'use strict';

const path = require('path');
const express = require('express');

const PORT = 80

const start = async () => {
  const app = express();

  app.use('/', (req, res, next) => {
    const { hostname, url } = req
    console.log(`${hostname} ${url}`)

    // responseによるリダイレクトを行うと、リンクデコレーションのランディングページとみなされない。（バグ？）
    // if (hostname === '3rdpartytestwebkit.org') {
    //   const [site, page, _ext] = url.split('.')
    //   if (page === 'page1') {
    //     // クエリ付き遷移
    //     res.redirect(302, `http://1stparty.localdomain:${PORT}/siteA.page2.html?queryKey=queryValue`)
    //     return
    //   }
    //   if (page === 'page2') {
    //     // siteB.page3に遷移、queryをつける
    //     res.redirect(302, `http://3rdpartytestwebkit.org:${PORT}/siteB.page3.html?queryKey=queryValue`)
    //     return
    //   }
    //   if (page === 'page3') {
    //     // queryなしのリダイレクト。リファラにqueryがついている
    //     res.redirect(302, `http://example-site.localhost:${PORT}/siteA.page4.html`)
    //     return
    //   }
    // }

    next()
  });

  app.use(express.static(path.join(__dirname, '/public')))

  app.set('port', PORT);

  const server = require('http').createServer(app);

  server.listen(app.get('port'), '0.0.0.0', () => {
    console.log(`[server] listen at port ${PORT}`);
  });
};

start();
