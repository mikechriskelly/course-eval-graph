// Load Data and Initiate Main
d3.csv('gpadata.csv', function(d) {
  return {
    gpa: +d.gpa,
    major: d.major,
    gender: d.gender,
    year: d.student
  };
}, function(error, records) {
  
  // Need Histogram object in scope so it can be
  // updated from anywhere
  hist = {};

  // Main Sequence
  makeHist(records);
  makePie(records, 'gender');
  makePie(records, 'year');
  makeBars(records);
});