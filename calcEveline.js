function calcTips(){
  b = bill.value  // read bill from element with id="bill"
  p = percent.value  // read percent from element with id="percent"
  tip = b*p  // calculate the tip
  console.log("hello Eveline")
  console.log(tip)
  tipL.innerHTML =   // write into label element with id "tip"

      "Your tip is "
      +tip.toFixed(2) // round tip to 1 decimal place
}
