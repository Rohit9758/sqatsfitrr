/*
 * Author: Rohit Bhure
 * Date : 17/04/2020
 * Useability: all routes for nodejs Application
 */

module.exports = app => {
 app.post('/api/v1/genratetoken', require('./../controllers/sysuser').generatetoken),
 app.post('/api/v1/promocode', require('./../controllers/promocode').generatepromocode),
 app.post('/api/v1/applypromocode', require('./../controllers/promocode').applypromocode)
}

// Select the time zone based on country moment.tz.names();
// pass the time zone to format date and save the date 