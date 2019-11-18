
    function drawBackground() {
        console.log("drawing background")
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.strokeStyle="black"
        ctx.fillStyle="black"
        drawGrid(canvas,false)
       drawGrid(canvas,true)
     }

       function drawThing(){
         cxt = ctx
         ctx.strokeStyle="purple"
         ctx.fillStyle="rgba(0,255,255,0.1)"
       cxt.beginPath()
       cxt.moveTo(180,100)
       cxt.lineTo(199,101)
       cxt.lineTo(300,100)
       ctx.lineTo(345,130)
      ctx.lineTo(346,159)
      ctx.lineTo(346,168)
      ctx.lineTo(346,171)
      ctx.lineTo(309,214)
      ctx.lineTo(273,215)
      ctx.lineTo(243,216)
      ctx.lineTo(207,215)
      ctx.lineTo(175,189)
      ctx.lineTo(169,146)
      ctx.lineTo(201,99)
      ctx.stroke()
      ctx.fill()
              drawCircle(210,160,20)
             drawCircle(300,160,20)

             cxt.lineTo(199,101)
             cxt.lineTo(300,100)
             ctx.lineTo(345,130)
             ctx.stroke()

             cxt.lineTo(210,210)
             cxt.lineTo(300,100)
             ctx.lineTo(345,130)
             ctx.stroke()
}


       function drawCircle(x,y,r){
         // draw a circle centered at (x,y) with radius r
         ctx.beginPath();
         ctx.arc(x,y,r,0,2*Math.PI,true)
         ctx.stroke()
       }

    function drawGrid(major){
      // if major is true this draws a thick grid every 100 pixels
      // and labels the lines; otherwise it draws a light grid every
      // 10 pixels
      ctx.font = "10pt Georgia"
      linewidth = major?5:1
      increment = major?100:10
      if (major){
        ctx.strokeStyle = "rgb(0,0,0)"
      } else {
        ctx.strokeStyle = "rgb(200,200,200)"
      }
      ctx.beginPath();
      for(let x = 0; x<=canvas.width; x=x+increment){
        ctx.moveTo(x,0)
        ctx.lineTo(x,canvas.height)
        if (major) {ctx.fillText("x="+x,x,20)}
      }
      ctx.stroke()
      ctx.beginPath();
      for(let y = 0; y<=canvas.height; y=y+increment){
        ctx.moveTo(0,y)
        ctx.lineTo(canvas.width,y)
        if (major) {ctx.fillText("y="+y,0,y+10)}
      }
      ctx.stroke()

    }
