const PriceLookup = require("./app/price_lookup").PriceLookup;
const location = "München",
      radius = "5",
      fuel = "super"

new PriceLookup(fuel, location, radius).execute().then((stations) => {
  console.log(new Finder(stations).find());
})
