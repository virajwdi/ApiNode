// const uuid = require('uuid/v4');
const e = require('express');
const HttpError = require('../models/http-error-model');
let DummyPlaces = [
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

    const uid = req.params.uid;
    const places = DummyPlaces.find(el => {
        return el.creator === uid;
    });

    if (!places) {
        throw false;
    }
    res.json({ places });
}

const createPlace = (req, res, next) => {
    const { title, description, coordinates, address, creator } = req.body;
    // const title = req.body.title;
    const createdPlace = {
        id: 112,
        title,
        description,
        location: coordinates,
        address,
        creator
    };

    DummyPlaces.push(createdPlace); //unshift(createdPlace)

    res.status(201).json({ place: createdPlace });
};

const updatePlace = (req, res, next) => {
    const { title, description } = req.body;
    const pid = req.params.pid;
    const updatePlace = DummyPlaces.find(el => el.id === pid);
    const pageIndex = DummyPlaces.findIndex(el => el.id === pid);
    updatePlace.title = title;
    updatePlace.description = description;
    DummyPlaces[pageIndex] = updatePlace;
    res.status(200).json({ DummyPlaces });
}

const deletePlace = (req, res, next) => {
    const pid = req.params.pid;
    DummyPlaces= DummyPlaces.filter(el=>el.id!==pid);
    res.status(200).json({ message: 'Deleted place.' });

}


exports.getByPlaceID = getByPlaceID;
exports.getPlaceByUserid = getPlaceByUserid;
exports.createPlace = createPlace;

exports.updatePlace = updatePlace;

exports.deletePlace = deletePlace;