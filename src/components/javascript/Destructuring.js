const PI = Math.PI;
const E = Math.E;
const SQRT2 = Math.SQRT2;

const {PI, E, SQRT2}  = Math;
// retrive the required info;
const {Component, Fragment, useState} = require('react');

const circle = {
  label: 'circleX',
   radius: 2,
 };

 const circleArea = ({radius}, {precision = 2} = {}) =>
   (PI * radius * radius).toFixed(precision);

 console.log(
   circleArea(circle, { precision: 5 })
 );

const [first, second,, forth] = [10, 20, 30, 40];

 const [value, setValue] = useState(initialValue);