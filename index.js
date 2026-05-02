const datejs = require('datejs');

function combineUsers(...args) {
  // Step 2: Initialize return object
  const combinedObject = {
    users: []
  };

  // Step 3 & 4: Loop through args and merge arrays
  args.forEach(arr => {
    combinedObject.users = args.flat();
  });

  // Step 5: Add today's date (M/d/yyyy)
  const today = new Date();
  combinedObject.merge_date = today.toString('M/d/yyyy');

  // Step 7: Return object
  return combinedObject;
}

module.exports = {
  combineUsers
};
