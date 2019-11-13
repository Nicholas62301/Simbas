function calcVolumes(){
  r = radius.value  // read weight from element with id="radius"
  h = height.value  // read height from element with id="height"
  volume = r*r*h*Math.PI  // calculate the Volume
  Volume.innerHTML =    // write into label element with id "volume"
      "Your Volume is "
      +volume.toFixed(1)  // round BMI to 1 decimal place
}
