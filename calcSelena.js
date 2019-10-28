function calcVolumes(){
  r = radius.value  // read radius from element with id="radius"
  h = height.value  // read height from element with id="height"
  volume = r*r*h*Math.PI  // calculate the Volume
  Volume.innerHTML =    // write into label element with id "Volume"
      "The Volume of the can is "
      +volume.toFixed(1)  // round Volume to 1 decimal place
}
