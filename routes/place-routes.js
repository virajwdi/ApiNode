const express = require('express');
const router = express.Router();
const HttpError = require('../models/http-error-model');
const placesConstrollers = require('../controllers/places-cotrollers');
const DummyPlaces = [
    {
        id: "p1",
        title: "Empire state building",
        description: "Worlds biggest sky scrappers.",
        location: {
            lat: 40.7484474,
            lang: -73.9871516
        },
        address: "20W 30th ST, New York",
        creator: "u1"
    }
];

router.get('/:pid', placesConstrollers.getByPlaceID);
router.get('/user/:uid',placesConstrollers.getPlaceByUserid);
// router.get('/:pid', (req, res, next) => {
//     const placeid = req.params.pid
//     const place = DummyPlaces.find(el => {
//         return el.id === placeid
//     })
//     if (!place) {
//         // return res.status(404).json({message:"Could not  find the places for the provided  id."})
//         // const error = new Error("Could not  find the places for the provided  id (sophistcated way).");
//         // error.code = 404;
//         // //throw error;
//         // return next(error);
//         return next(new HttpError("Could not  find the places for the provided  id (sophistcated wayd).", 404));
//     };
//     res.json({ place });
// });


// router.get('/user/:uid', (req, res, next) => {
//     const uid = req.params.uid;
//     const place = DummyPlaces.find(el => {
//         return el.creator === uid
//     });
//     if (!place) { 
//         throw false;
//     }
//     res.json(place);
// })
module.exports = router;
