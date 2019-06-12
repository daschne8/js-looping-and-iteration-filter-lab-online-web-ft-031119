function filter (collection, cb) {
  const newCollection = [];

  for (const user of collection) {
    if (cb(user)) {
      newCollection.push(user);
    }
  }

  return newCollection;
}

function findMatching(drivers,name){
  return drivers.filter(function (driver){return driver === name})
}
// function findMatching(drivers, name){
//   const newCollection = []
//   for(const driver of drivers){
//     if (driver === name) {
//       newCollection.push(name)
//     }
//   }
//   return newCollection
// }
function fuzzyMatch(drivers, fuzz){
  const newCollection = []
  for(const driver in drivers){
    if (driver[0,fuzz.length].toLowerCase() === fuzz.toLowerCase()) {
      newCollection.push(driver)
    }
  }
  return newCollection
}
