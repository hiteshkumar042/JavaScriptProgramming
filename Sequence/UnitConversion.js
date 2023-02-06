//Q5. Unit Conversion

//a. 1ft =12 inch then find 42 inch = ? ft
let valInInch = 42;
let valInfeet = valInInch/12;
console.log("42 inch is equal to "+valInfeet) 

//b. Rectangular Plot of 60 feet * 40 feet in meteres
let lengthInfeet = 60
let widthInFeet = 40;
let lengthInMeter = lengthInfeet/(3.281);
let WidthInMeter = widthInFeet/(3.281);
console.log("60 feet * 40 feet in meter is : " + lengthInMeter.toFixed(2) +" * "+WidthInMeter.toFixed(2));

//c. calculate area of 25 such plots in acres
let sqMeterOfSinglePlot = (WidthInMeter*lengthInMeter);
console.log("Area of single plot in Square meter : "+sqMeterOfSinglePlot);
console.log("Area of 25 plot in Square meter : "+ 25*sqMeterOfSinglePlot);
let AreaOf25PlotInAcres = (25*sqMeterOfSinglePlot)/(4047);
console.log("Area of 25 plot in Acres :"+AreaOf25PlotInAcres.toFixed(2));
