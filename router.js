const express = require('express');
const axios = require('axios')
module.exports = () => {
    const route = express.Router();
    route.get('index/pc/hot', (req, res) => {
      // axios.get('http://www.sojson.com/api/qqmusic/8446666/json')
      // http://192.168.18.191:100/zhs/v1/index/pc/hot
      axios.get('https://game.qezww.cn/zhs/v1/index/hot')
        .then(function (response) {
          console.log(999,response)
          res.send({list: response.data})//
        })
        .catch(function (error) {
          console.log(error)
        })
    })
    /*
     *user reg func
     */
    route.post('reg', (req, res) => {

    });
    return route;
}
