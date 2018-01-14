const PriceLookup = require("./app/price_lookup").PriceLookup;
const Cheapest = require("./app/finders/cheapest").Cheapest;
let express = require('express');
let app = express();

app.get('/stations', function (req, res) {
  let location = req.query.location;
  let radius = req.query.radius;
  let fuel = req.query.fuel;

  new PriceLookup(fuel, location, radius).execute().then((stations) => {
    res.json(stations);
  })
});

app.get('/cheapest', function (req, res) {
  let location = req.query.location;
  let radius = req.query.radius;
  let fuel = req.query.fuel;

  new PriceLookup(fuel, location, radius).execute().then((stations) => {
    let cheapest = new Cheapest(stations).find();
    res.json(cheapest);
  })
});

app.listen(3000, function () {
  console.log('Fuelprice app listening on port 3000!');
});
