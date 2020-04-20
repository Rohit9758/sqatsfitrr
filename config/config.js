/*
 * Author: Rohit Bhure
 * Date : 17/04/2020
 * Useability: env configuration variables
 */
module.exports = { 
	primaryMongoDBURI: process.env.MONGO_URI || 'mongodb://localhost:27017/demoDb',
	secretkey: "NeverShareSecret"
};