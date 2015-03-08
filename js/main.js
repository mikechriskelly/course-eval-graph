// Load Data and Initiate Main
// d3.csv('gpadata.csv', function(d) {
//   return {
//     gpa: +d.gpa,
//     major: d.major,
//     gender: d.gender,
//     year: d.student
//   };
// }, function(error, records) {
  
//   // Need Histogram object in scope so it can be
//   // updated from anywhere
//   hist = {};

//   // Main Sequence
//   makeHist(records);
//   makePie(records, 'gender');
//   makePie(records, 'year');
//   makeBars(records);
// });


var parcoords = d3.parcoords()("#reviews-graph")
  .data([
    [0,-0,0,0,0,1],
    [1,-1,1,2,1,1],
    [2,-2,4,4,0.5,1],
    [3,-3,9,6,0.33,1],
    [4,-4,16,8,0.25,1]
  ])
  .render()
  .createAxes();