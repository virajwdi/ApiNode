    const HttpError = require('../models/http-error-model');
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

    const getByPlaceID = (req, res, next) => {
        const placeId = req.params.pid;
        const places = DummyPlaces.find(el => {
            return el.id === placeId
        });
        if (!places) {
            return next(new HttpError("Could not  find the places for the provided  id (sophistcated wayd).", 404))
        };
        res.json({ places });
    }

    const getPlaceByUserid = (req, res, next) => {

        const uid =  req.params.uid;
        const places = DummyPlaces.find(el => {
            return el.creator === uid;
        });

        if (!places) {
            throw false;
        }
        res.json({ places });
    }

    exports.getByPlaceID = getByPlaceID;
    exports.getPlaceByUserid = getPlaceByUserid;