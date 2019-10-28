function calcBMI(){
  r = radius.value  // read weight from element with id="weight"
  h = height.value  // read height from element with id="height"
  volume = r*h  // calculate the Body Mass Index
  VOLUME.innerHTML =    // write into label element with id "BMI"
      "The Volume of the can is"
      +volume.toFixed(1)  // round BMI to 1 decimal place
}
