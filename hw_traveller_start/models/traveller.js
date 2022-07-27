const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(j => j.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(j => j.endLocation)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(j => j.transport === transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(j => j.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((jTotal, j) => jTotal + j.distance, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  results = [];
  this.journeys.forEach((j) => {
    if (!results.includes(j.transport)) {
      results.push(j.transport)
    }
  })
  return results;
};


module.exports = Traveller;
