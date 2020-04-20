/*
 * Author: Rohit Bhure
 * Date : 20/04/2020
 * Useability: dumping the mongo logs
 */
const jwt = require('jsonwebtoken');
const db = require('../dbconnector/mongo.js');
const config = require("../config/config.js");

/*
Function to generatetoken api.
@param {object} request 
@param {object} response
*/
exports.generatetoken =  async (req, res) => {
	const user = {
    username: req.body.username
  }
  jwt.sign({user}, config.secretkey, { expiresIn: '30s' }, (err, token) => {
    res.json({
      token
    });
  });	
};
