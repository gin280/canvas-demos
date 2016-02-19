let api = 1234;

let go = () => {
  let canvas = document.getElementById('api');

  canvas.width = 800;
  canvas.height = 800;

  let context = canvas.getContext('2d');

  context.fillStyle = '#000'
  context.fillRect(0,0,canvas.width,canvas.height)

  setTimeout(function(){
    for(let i=0; i<200; i++) {
    let R = Math.random()*10 +10
    let r = R / 2.0
    let x = Math.random()*canvas.width
    let y = Math.random()*canvas.height
    let rot = Math.random()*360
    drawStar(context,r,R,x,y,rot)

  }
},1000)


}

//Rect func

function drawRect1(cxt,x,y,width,height,borderWidth,borderColor,fillColor) {
  cxt.beginPath()
  cxt.moveTo(x,y)
  cxt.lineTo(x+width,y)
  cxt.lineTo(x+width,y+height)
  cxt.lineTo(x,y+height)
  cxt.closePath()

  cxt.lineWidth = borderWidth
  cxt.fillStyle = fillColor
  cxt.strokeStyle = borderColor

  cxt.fill()
  cxt.stroke()
}

function drawRect2(cxt,x,y,width,height,borderWidth,borderColor,fillColor) {

  cxt.lineWidth = borderWidth
  cxt.fillStyle = fillColor
  cxt.strokeStyle = borderColor

  cxt.fillRect(x,y,width,height)
  cxt.strokeRect(x,y,width,height)
}

//五角星

function drawStar(cxt,r,R,x,y,rot) {
  cxt.beginPath();
  for(let i=0; i<5; i++) {
  cxt.lineTo(Math.cos((18 + i * 72-rot)/180 * Math.PI) * R + x,
            -Math.sin((18 + i * 72-rot)/180 * Math.PI) * R + y)
  cxt.lineTo(Math.cos((54 + i * 72-rot)/180 * Math.PI) * r + x,
            -Math.sin((54 + i * 72-rot)/180 * Math.PI) * r + y)
}
  

  cxt.closePath();

  cxt.fillStyle ='#FB3'
  cxt.strokeStyle = '#fd5'
  cxt.lineWidth = 3
  cxt.lineJoin = 'round'
  cxt.fill()
  cxt.stroke()
}



export {api, go}