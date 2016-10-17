const express = require('express');
const router = express.Router();
const axios = require('axios');

router.route('/search')
  .get((req, res) => {
    let {term} = req.query
    axios.get(`http://api.brewerydb.com/v2/beer/random?key=094421d682ac84b26546343648687f2b`)
       .then(res =>  {
         return res.data
       })
       .then(data => res.send(data))

      .catch(console.error)
  })


    module.exports = router;
