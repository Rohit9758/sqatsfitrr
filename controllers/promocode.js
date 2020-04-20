/*
 * Author: Rohit Bhure
 * Date : 20/04/2020
 * Useability: calling the weather api and dumping the mongo logs
 */

const db = require('../dbconnector/mongo.js');
const config = require("../config/config.js");
const moment = require('moment-timezone');

/*
Function to login api.
@param {object} request 
@param {object} response
*/
exports.generatepromocode =  async (req, res) => {
  let genratedBy, genCountryRegion, promoForCountryRegion;
  isValid = 'true';
  genratedBy = req.body.genratedBy;
  genCountryRegion = req.body.genCountryRegion;
  promoCode = req.body.promoForCountryRegion.slice(0,2).toUpperCase() + Math.floor(Math.random() * Math.floor(99999999));
  rawDate = moment.tz(req.body.promovaliddate, genCountryRegion);
  promovaliddate = rawDate.tz(req.body.promoForCountryRegion).format()   
  await promoLog({promovaliddate}).then((data) => {
    res.status(200).json({
      message: "Successfull"
  })
  }).catch((err) => {
    console.log("err",err)
      res.status(500).json({
      message: "Internal Server Error"
  })
})
}
console.log(moment().tz("America/Los_Angeles").format())  


/*
Function to login api.
@param {object} request 
@param {object} response
*/
exports.applypromocode =  async (req, res) => {
  //make the get request to promocode collection and find the promoForCountryRegion and promovaliddate
  // find the current time for that region
  // example if America/Los_Angeles is promoforcountryRegion
  //then comapare the cuurent time with promovalidate 
  //perform action based on that
  let currentTime = moment().tz("America/Los_Angeles").format()
  let minutes = currentTime.diff(promovaliddate, 'minutes');
}


/*
Function to dump the auditlog in mongodb database.
@param {object} data
*/
const promoLog = async data => {
    return new Promise(async (resolve, reject) => {
      try {
        await db.get().primaryMongo.collection("promoLog").insertOne(data);
        resolve("1 document inserted");
      } catch (DBException) {
        reject(DBException.message);
      }
    });
  };
