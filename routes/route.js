const express = require("express") 
const app = express() ; 
const router = express.Router() ;
const {movie, sum , descending, groupyear} = require("../controller/control");
const paginateMiddleware = require("../utils/pagination");



router.get('/movie',paginateMiddleware,  movie);

router.get('/sum', paginateMiddleware, sum);

router.get('/descending',paginateMiddleware, descending);

router.get('/groupyear',paginateMiddleware, groupyear);

module.exports = router; 
