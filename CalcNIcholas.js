function calcVolume(){
  l = len.value  // read weight from element with id="length"

  h = height.value  // read height from element with id="height"

  w = width.value   // read width from element with id= "width"
  console.log(w)
  console.log(h)
  console.log(  l)
  volume = l*h*w  // calculate the volume of the cube
  console.log(volume);
  Volume.innerHTML =    // write into label element with id "volume"

      "The volume of the cube is... "

      +volume.toFixed(1)  // round area to 1 decimal place
}
