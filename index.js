const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
const imgSize = 600
const gridImageSize = 200
const numShirts = 5
const numRows = 3
const numCols = 4
let shirt1front, shirt1back,shirt2front, shirt2back,shirt3front,shirt3back,shirt4front, shirt4back, shirt5front, shirt5back, shirt6front, shirt6back, shirt7front, shirt7back, shirt8front, shirt8back, shirt9front, shirt9back, shirt10back, shirt11front, shirt12front, shirt13front, shirt13back, shirt14front, shirt14back
let drawing1front, drawing1back, drawing2front, drawing2back, drawing3front, drawing3back, drawing4front, drawing4back, drawing5front, drawing5back, drawing6front, drawing6back, drawing7front, drawing7back, drawing8back, drawing8front, drawing9front, drawing9back, drawing10front, drawing10back, drawing11front, drawing11back, drawing12front, drawing12back, drawing13front, drawing13back, drawing14front, drawing14back, drawing15front, drawing15back
let funnypicture1, funnypicture2, funnypicture3, funnypicture5,funnypicture4,funnypicture6,funnypicture7,funnypicture8,funnypicture9,funnypicture10,funnypicture11,funnypicture12,funnypicture13, funnypicture14, funnypicture15, funnypicture16, funnypicture17, funnypicture18, funnypicture19, funnypicture20
let gif1, gif2, gif3, gif4, gif5, gif7, gif8, gif9, gif10, gif11, gif12, gif13, gif15, gif16, gif17, gif18, gif19, gif20
let thetaX = 0
let thetaY = 0
let mouseStart = {x: 0, y: 0}

let shirts = []

let drawings = []

let funstuff = []


const controlCircleSize = 25
let shirtControlCircleData
let drawingControlCircleData

let funstuffcontrolcircledata

let toggleButtons
const toggleButtonWidth = 100
const toggleButtonHeight = 50
const numToggles = 4
// const toggleButtonNames = ['single', 'grid', 'doodles']


let counter = 0
let overallState = 1
const numStates = 4


function preload(){
  shirt1front = loadImage('shirt1-front.png');
  shirt1back = loadImage('test.png');

  shirt2front = loadImage('shirt2-front.png');
  shirt2back = loadImage('shirt2-back.png');

  shirt3front = loadImage('shirt3-front.png');
  shirt3back = loadImage('shirt3-back.png');

  shirt4front = loadImage('shirt4-front.png');
  shirt4back = loadImage('shirt4-back.png');

  shirt5front = loadImage('shirt5-front.png');
  shirt5back = loadImage('shirt5-back.png');

  shirt6front = loadImage('shirt6-front.png');
  shirt6back = loadImage('shirt6-back.png');

  shirt7front = loadImage('shirt7-front.png');
  shirt7back = loadImage('shirt7-back.png');

  shirt8front = loadImage('shirt8-front.png');
  shirt8back = loadImage('shirt8-back.png');

  shirt9front = loadImage('shirt9-front.png');
  shirt9back = loadImage('shirt9-back.png');

  shirt10front = loadImage('shirt10-front.png');
  shirt10back = loadImage('shirt10-back.png');

  shirt11front = loadImage('shirt11-front.png');
  shirt11back = loadImage('shirt11-front.png');

  shirt12front = loadImage('shirt12-front.png');
  shirt12front = loadImage('shirt12-front.png');

  shirt13front = loadImage('shirt13-front.png');
  shirt13back = loadImage('shirt13-back.png');

  shirt14front = loadImage('shirt14-front.png');
  shirt14back = loadImage('shirt14-back.png');

  drawing1front = loadImage('drawing-1.png')
  drawing1back= loadImage('drawing-2.png')
  
  drawing2front = loadImage('drawing-3.png')
  drawing2back= loadImage('drawing-4.png')
  
  drawing3front = loadImage('drawing-5.png')
  drawing3back= loadImage('drawing-6.png')
  
  drawing4front = loadImage('drawing-7.png')
  drawing4back= loadImage('drawing-8.png')
  
  drawing5front = loadImage('drawing-9.png')
  drawing5back= loadImage('drawing-10.png')
  
  drawing6front = loadImage('drawing-11.png')
  drawing6back= loadImage('drawing-12.png')
  
  drawing7front = loadImage('drawing-13.png')
  drawing7back= loadImage('drawing-14.png')
  
  drawing8front = loadImage('drawing-15.png')
  drawing8back= loadImage('drawing-16.png')
  
  drawing9front = loadImage('drawing-18.png')
  drawing9back= loadImage('drawing-19.png')
  
  drawing10front = loadImage('drawing-19.png')
  drawing10back= loadImage('drawing-20.png')
  
   drawing11front = loadImage('drawing-21.png')
  drawing11back= loadImage('drawing-22.png')
  
  drawing12front = loadImage('drawing-23.png')
  drawing12back= loadImage('drawing-24.png')
  
  drawing13front = loadImage('drawing-25.png')
  drawing13back= loadImage('drawing-26.png')
  
  drawing14front = loadImage('drawing-29.png')
  drawing14back= loadImage('drawing-28.png')
  
  drawing15front = loadImage('drawing-27.png')
  drawing15back= loadImage('drawing-30.png')

  funnypicture1 = loadImage('funnypicture-1.png')

  funnypicture2 = loadImage('funnypicture-2.jpg')

  funnypicture3 = loadImage('funnypicture-3.jpg')

  funnypicture4 = loadImage('funnypicture-4.jpg')

  funnypicture5 = loadImage('funnypicture-5.jpg')

  funnypicture6 = loadImage('funnypicture-6.jpg')

  funnypicture7 = loadImage('funnypicture-7.jpg')

  funnypicture8 = loadImage('funnypicture-8.jpg')

  funnypicture9 = loadImage('funnypicture-9.jpg')

  funnypicture10 = loadImage('funnypicture-10.jpg')

  funnypicture11 = loadImage('funnypicture-11.jpg')

  funnypicture12 = loadImage('funnypicture-12.jpg')

  funnypicture13 = loadImage('funnypicture-13.jpg')
  
  funnypicture14 = loadImage('funnypicture-14.jpg')

  funnypicture16 = loadImage('funnypicture-16.jpg')

  funnypicture17 = loadImage('funnypicture-17.jpg')

  funnypicture18 = loadImage('funnypicture-18.jpg')

  funnypicture15 = loadImage('funnypicture-15.jpg')

  funnypicture19 = loadImage('funnypicture-19.jpg')

  funnypicture20 = loadImage('funnypicture-20.jpg')

  gif1 = loadImage('adorable-dog.gif')
  
  gif2 = loadImage('giphy-2.gif')

  gif3 = loadImage('giphy-3.gif')

  gif4 = loadImage('giphy-4.gif')

  gif5 = loadImage('giphy-5.gif')

  gif7 = loadImage('giphy-7.gif')

  gif8 = loadImage('giphy-8.gif')

  gif9 = loadImage('giphy-9.gif')

  gif10 = loadImage('giphy-10.gif')

  gif11 = loadImage('giphy-11.gif')

  gif12 = loadImage('giphy-12.gif')

  gif13 = loadImage('giphy-13.gif')

  gif14 = loadImage('giphy-14.gif')

  gif15 = loadImage('giphy-15.gif')

  gif16 = loadImage('giphy-16.gif')

  gif17 = loadImage('giphy-17.gif')
  
  gif18 = loadImage('giphy-18.gif')

  gif19 = loadImage('giphy-19.gif')

  gif20 = loadImage('giphy-20.gif')

  const shirt1 = {
    front: shirt1front,
    back: shirt1back,
  }

  const shirt2 = {
    front: shirt2front,
    back: shirt2back,
  }
  
  const shirt7 = {
    front: shirt7front,
    back: shirt7back,
  }

  const shirt8 = {
    front: shirt8front,
    back: shirt8back,
  }
  
  const shirt5 = {
    front: shirt5front,
    back: shirt5back,
  }

  const shirt6 = {
    front: shirt6front,
    back: shirt6back,
  }

  const shirt3 = {
    front: shirt3front,
    back: shirt3back,

    
  }
  const shirt4 = {
    front: shirt4front,
    back: shirt4back,

    
  }
  
  const shirt9 = {
    front: shirt9front,
    back: shirt9back,

    
  }

  const shirt10 = {
    front: shirt10front,
    back: shirt10back,

    
  }

  const shirt11 = {
    front: shirt11front,
    back: shirt11front,

    
  }

  const shirt12 = {
    front: shirt12front,
    back: shirt12front,

    
  }

  const shirt13 = {
    front: shirt13front,
    back: shirt13back,

    
  }

  const shirt14 = {
    front: shirt14front,
    back: shirt14back,

    
  }

  const drawing1 = {
    front: drawing1front,
    back: drawing1back,

    
  }

  const drawing2 = {
    front: drawing2front,
    back: drawing2back,
  }

  const drawing3 = {
    front: drawing3back,
    back: drawing3front,
  }

  const drawing4 = {
    front: drawing4front,
    back: drawing4back,
  }

  const drawing5 = {
    front: drawing5front,
    back: drawing5back,
  }

  const drawing6 = {
    front: drawing6front,
    back: drawing6back,
  }

  const drawing7 = {
    front: drawing7front,
    back: drawing7back,
  }

  const drawing8 = {
    front: drawing8front,
    back: drawing8back,
  }

  const drawing9 = {
    front: drawing9front,
    back: drawing9back,
  }

  const drawing10 = {
    front: drawing10front,
    back: drawing10back,
  }

  const drawing11 = {
    front: drawing11front,
    back: drawing11back,
  }

  const drawing12 = {
    front: drawing12front,
    back: drawing12back,
  }
  
  const drawing13 = {
    front: drawing13front,
    back: drawing13back,
  }

 const drawing15 = {
    front: drawing15front,
    back: drawing15back,
  }

  const drawing14 = {
    front: drawing14front,
    back: drawing14back,
  }


  const funpic1 = {
    front: funnypicture1,
    back: gif1,
  }
  const funpic2 = {
    front: funnypicture2,
    back: gif2,
  }
  const funpic3 = {
    front: funnypicture3,
    back: gif3,
  }
  const funpic4 = {
    front: funnypicture4,
    back: gif4,
  }
  const funpic5 = {
    front: funnypicture5,
    back: gif5,
  }
  const funpic6 = {
    front: funnypicture6,
    back: funnypicture6,
  }
  const funpic7 = {
    front: funnypicture7,
    back: gif7,
  }
  const funpic8 = {
    front: funnypicture8,
    back: gif8,
  }
  const funpic9 = {
    front: funnypicture9,
    back: gif9,
  }
  const funpic10 = {
    front: funnypicture10,
    back: gif10,
  }
  const funpic11 = {
    front: funnypicture11,
    back: gif11,
  }
  const funpic12 = {
    front: funnypicture12,
    back: gif12,
  }
  const funpic13 = {
    front: funnypicture13,
    back: gif13,
  }
  const funpic14 = {
    front: funnypicture14,
    back: gif14,
  }

  const funpic15 = {
    front: funnypicture15,
    back: gif15,
  }

  const funpic16 = {
    front: funnypicture16,
    back: gif16,
  }

  const funpic17 = {
    front: funnypicture17,
    back: gif17,
  }

  const funpic18 = {
    front: funnypicture18,
    back: gif18,
  }

  const funpic19 = {
    front: funnypicture19,
    back: gif19,
  }

  const funpic20 = {
    front: funnypicture20,
    back: gif20,
  }

  

  shirts = [shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7, shirt8, shirt9, shirt10, shirt11, shirt12, shirt13, shirt14]
   drawings = [drawing1, drawing2, drawing3, drawing4, drawing5, drawing6, drawing7, drawing8, drawing9, drawing10, drawing11, drawing12, drawing13, drawing14, drawing15]
   funstuff = [funpic1 , funpic2, funpic3, funpic4,funpic5, funpic6, funpic7, funpic8, funpic9, funpic10, funpic11, funpic12, funpic13, funpic14, funpic15, funpic16, funpic17, funpic18, funpic19, funpic20]
}

function setup() {
  createCanvas(canvasWidth, canvasHeight, WEBGL);  
  shirtControlCircleData = Array.from({length: shirts.length}, (el, i) => {
    const x = canvasWidth/2 - controlCircleSize * 2
    const y = -canvasHeight/2 + controlCircleSize * 1.01 + (i + 1) * (controlCircleSize * 1.9)
    const col = [random(0, 255), random(0, 255), random(0, 255),]
    return {
        x,y, col
    }
})

drawingControlCircleData  = Array.from({length: drawings.length}, (el, i) => {
  const x = canvasWidth/2 - controlCircleSize * 2
  const y = -canvasHeight/2 + controlCircleSize * 1.01 + (i + 1) * (controlCircleSize * 1.8)
  const col = [random(0, 255), random(0, 255), random(0, 255),]
  return {
      x,y, col
  }
})

funstuffControlCircleData  = Array.from({length: funstuff.length}, (el, i) => {
  const x = canvasWidth/2 - controlCircleSize * 2
  const y = -canvasHeight/2 + controlCircleSize * 1.01 + (i + 1) * (controlCircleSize * 1.5)
  const col = [random(0, 255), random(0, 255), random(0, 255),]
  return {
      x,y, col
  }
})

toggleButtons = Array.from({ length: numToggles}, (el, i  ) => {
  const x = - ((numToggles - 1) * toggleButtonWidth) + (i * toggleButtonWidth * 1.5) - toggleButtonWidth/2
  const y = -canvasHeight/2 + 50
  const col = [random(255), random(255), random(255)]
  const hoverCol = [random(255), random(255), random(255)]
  return {
    x,
    y,
    col,
    hoverCol,
    width: toggleButtonWidth,
    height: toggleButtonHeight
  } 
})

}

function draw(){
  background(120, 120, 120, 100)
  rectMode(CENTER);
  drawToggleButtons()
  renderCurrentState(overallState)
}

function mousePressed(){
  mouseStart = {x: mouseX, y: mouseY}
  checkCircles(mouseX - canvasWidth/2, mouseY - canvasHeight/2)
  const clicked = (checkToggles(mouseX - canvasWidth/2, mouseY - canvasHeight/2))
  
  if(clicked){
    overallState = clicked
    }
  

}

function mouseDragged(){
    thetaY = map(Math.abs(mouseX - mouseStart.x), 0,  200, 0, TWO_PI)
    thetaX = map(Math.abs(mouseY - mouseStart.y), 0,  200, 0, TWO_PI)
    // console.log(theta)
}


const drawShirtControlCircles = () => {
  
  shirtControlCircleData.forEach((datum, idx) => {
          stroke(0)
          if(idx === counter){
              fill(datum.col)
          }else{
              noFill()
          }
          
          ellipse(datum.x, datum.y, 30)
      })
  
}

const drawDrawingControlCircles = () => {
  
  drawingControlCircleData.forEach((datum, idx) => {
          stroke(0)
          if(idx === counter){
              fill(datum.col)
          }else{
              noFill()
          }
          
          ellipse(datum.x, datum.y, 30)
      })
  
}

const drawFunStuffControlCircles = () => {
  
  funstuffControlCircleData.forEach((datum, idx) => {
          stroke(0)
          if(idx === counter){
              fill(datum.col)
          }else{
              noFill()
          }
          
          ellipse(datum.x, datum.y, 30)
      })
  
}

const drawToggleButtons = () => {
  toggleButtons.forEach(button => {
    fill(button.col)
    rect(button.x, button.y, button.width, button.height, 120)
  })
  
}



// const checkHover = () => {
//   if(mouseX > canvasWidth/4 && 
//       mouseX < canvasWidth/4 + canvasWidth/2 &&
//       mouseY > canvasHeight/4 && 
//       mouseY < canvasHeight/4 + canvasHeight/2){
//           return true
//       }else{
//           return false
//       }

// }

const checkCircles = (mX, mY) => {
  console.log(mX, mY)
  if(overallState === 2){
    shirtControlCircleData.forEach((circlePosition, idx) => {
      if(mX > circlePosition.x - controlCircleSize/2 &&
          mX < circlePosition.x + controlCircleSize/2 &&
          mY > circlePosition.y - controlCircleSize/2 &&
          mY < circlePosition.y + controlCircleSize/2){
              counter = idx
          }
  })
  }else if(overallState === 3){
    drawingControlCircleData.forEach((circlePosition, idx) => {
      if(mX > circlePosition.x - controlCircleSize/2 &&
          mX < circlePosition.x + controlCircleSize/2 &&
          mY > circlePosition.y - controlCircleSize/2 &&
          mY < circlePosition.y + controlCircleSize/2){
              counter = idx
          }
  })

}else if(overallState === 4){
  funstuffControlCircleData.forEach((circlePosition, idx) => {
    if(mX > circlePosition.x - controlCircleSize/2 &&
        mX < circlePosition.x + controlCircleSize/2 &&
        mY > circlePosition.y - controlCircleSize/2 &&
        mY < circlePosition.y + controlCircleSize/2){
            counter = idx
        }
})

  }
}

const checkToggles = (mX, mY) => {
  console.log(mX, mY)
  const toggleChecks = toggleButtons.map((toggle, idx) => {
      if(mX > toggle.x  - toggleButtonWidth/2&&
          mX < toggle.x + toggleButtonWidth/2 &&
          mY > toggle.y - + toggleButtonHeight/2 &&
          mY < toggle.y + toggleButtonHeight/2){
              return idx + 1
          }else{
            return false
          }
  })
  const found = toggleChecks.filter((el, i) => el > 0)
  if(found){
    return found[0] 
  }
}


function drawBackgroundBox(size, xOff, yOff){
  push()
    translate(xOff - imgSize/4, yOff,0)
    rotateX(-thetaX)
    rotateY(-thetaY)
    fill(130)
    box(size,size,1)
  pop()
}


function drawShirtSide(img, size, xOff, yOff, side){
  push()
    noStroke()
    translate(xOff, yOff, side)
    translate(xOff,yOff, -side)
    rotateY(thetaY)
    rotateX(thetaX)
    translate(xOff, yOff, side)
    // console.log(img)
    texture(img)
    rect(0,0, size, size)
  pop()
}




function drawGridShirtSide(img, size, xOff, yOff, side){
  push()
    noStroke()
    translate(-size/2 + xOff, -size/2 + yOff, side)
    // translate(size/2,size/2, -side)
    rotateY(thetaY)
    rotateX(thetaX)
    // translate(-size/2, -size/2, side)
    
    texture(img)
    rect(0,0, size, size)
  pop()
}



const renderCurrentState = (overallState) => {
  // console.log(overallState)
  switch(overallState){
    case 1:
      drawGrid()
      return
    case 2: 
      drawCloseUp()
      drawShirtControlCircles()
      return
      case 3:
        showDrawings()
        drawDrawingControlCircles()
        return
        case 4:
          showFunStuff()
          drawFunStuffControlCircles()
          return
    default : 
      return
  }
}

const drawGrid = () => {

    // rotateX(PI)
  let count = 0
  for(let i = 0; i< numCols; i++){
    for(let j = 0; j < numRows; j++){
      // drawBackgroundBox(imgSize, (i * imgSize) - canvasWidth/4, -100)

      drawGridShirtSide(shirts[count].front, gridImageSize, 
                      (i * gridImageSize) - canvasWidth/6, 
                      (j * gridImageSize) - canvasHeight/6 + 100, 2)
      drawGridShirtSide(shirts[count].back, gridImageSize,
                      (i * gridImageSize) - canvasWidth/6,  
                      (j * gridImageSize) - canvasHeight/6 + 100, -2)
      //shirtCount++
      count++
    }

  }
}


const drawCloseUp = () => {
  console.log(counter, shirts)
  console.log(shirts[counter])
  drawShirtSide(shirts[counter].front, imgSize, 0, 0, 1)
  drawShirtSide(shirts[counter].back, imgSize, 0, 0 , -1)
}

const showDrawings = () => {
  console.log(counter, drawings)
  console.log(drawings[counter])
  drawShirtSide(drawings[counter].front, imgSize, 0, 0, 1)
  drawShirtSide(drawings[counter].back, imgSize, 0, 0 , -1)
}

const showFunStuff = () => {
  console.log(counter, funstuff)
  console.log(funstuff[counter])
  drawShirtSide(funstuff[counter].front, imgSize, 0, 0, 1)
  drawShirtSide(funstuff[counter].back, imgSize, 0, 0 , -1)
}
