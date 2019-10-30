function CalcArea(){

  l = length.value  // read weight from element with id="length"

  h = height.value  // read height from element with id="height"

  w = width.value   // read width from element with id= "width"
  bmi = 703*l*w*h  // calculate the Body Mass Index

  area.innerHTML =    // write into label element with id "BMI"

      "The volume of the cube is... "

      +area.toFixed(1)  // round area to 1 decimal place
