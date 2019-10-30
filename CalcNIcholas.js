function calcVolume(){

  l = length.value  // read weight from element with id="length"

  h = height.value  // read height from element with id="height"

  w = width.value   // read width from element with id= "width"

  volume = (l*h*w)  // calculate the volume of the cube

  volume.innerHTML =    // write into label element with id "volume"

      "The volume of the cube is... "

      +volume.toFixed(1)  // round area to 1 decimal place
