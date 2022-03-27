// class Shape {
//     constructor (id, x, y) {
//         this.id = id
//         this.move(x, y)
//     }
    
//     move (x, y) {
//         this.x = x
//         this.y = y
//     }
// }


// class Draw extends Shape{
//     constructor(id, x, y) {
//         super(id, x, y) 
//         this.move(x, y)

//   }
// }

// let roundShape = new Shape(0, 200, 500)
// console.log(roundShape);


// let userOput = document.getElementById('output')
// let inputEntry = document.getElementById('txt');
// let btn = document.getElementById('show')
// inputEntry.setAttribute('class', 'userEntry')

// const indexOutput = [];
// let grd;
// let ctx;


// let c = document.getElementById('canvas');
// ctx = c.getContext("2d");

// grd = ctx.createLinearGradient(10, 150, 200, 0);
// grd.addColorStop(0, "goldenrod");
// grd.addColorStop(1, "orangered");


// function draw() {
// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.beginPath()
// // ctx.arc(90, 50, 40, 0, 2 * Math.PI)
// ctx.fillRect(80, 10, 500, 500);  
// ctx.fill()
// ctx.stroke()
// }
// draw()


// const createUserInput = (e) => {
//       if(e) {
//         indexOutput.push(inputEntry.value)
//           ctx.fillStyle = 'white'
//           ctx.font = "30px Arial san-serif";
//           ctx.fillText(indexOutput, 190, 50)
//           inputEntry.value  = ''
//         //   userOput.textContent = `${indexOutput}`
//       }
             
// }

// btn.addEventListener('click', createUserInput)

















// let sum = (a, b) => {
//     this.a = a
//     this.b = b

// }




// class Sum {
//     constructor(country, natives, data) {
//         this.country = country
//         this.natives = natives
//         this.data = data
//     }

//     getShape() {
//         return this
//     }
    
// }


// let total = new Sum("Germany", "Europains", "90m"  );  
// console.log(total) 


// var customer = { name: "Foo" }
// var card = { amount: 7, product: "Bar", unitprice: 42 }
// var message = `Hello ${customer.name},
// want to buy ${card.amount} ${card.product} for
// a total of ${card.amount * card.unitprice} bucks?`
// console.log(message)


// let parser = (input, match) => {
//     for(let pos = 0, lastPos = input.length; pos < lastPos; ) {
//         for(let i = 0; i < match.length; i++) {
//             match[i].pattern.lastIndex = pos
//             let found
//             if(found = match[i].pattern.exec() !== null){
//                 match[i].action(found)
//                 pos = match[i].pattern.lastIndex
//                 break

//             }
//         } 
//     } 
// }

// let report = (match) => {
//     console.log(JSON.stringify(match))
// }

// parser("Foo 1 Bar 7 Baz 42", [
//     { pattern: /Foo\s+(\d+)/y, action: (match) => report(match) },
//     { pattern: /Bar\s+(\d+)/y, action: (match) => report(match) },
//     { pattern: /Baz\s+(\d+)/y, action: (match) => report(match) },
//     { pattern: /\s*/y,         action: (match) => {}            }
// ])




// let gri = ctxx.createLinearGradient(0,0,0,0); 
// gri.addColorStop(0, "yellow")
// gri.addColorStop(1, "Teal")

// let c3 = document.querySelector('.shape')
// let btn = document.getElementById('show')
// let can = document.getElementsByTagName('canvas')
// let c2 = document.getElementById('mycanvas');

// function setUp() {   
//    let ctxx = c2.getContext("2d");
//    let grid = ctxx.createLinearGradient(0,0,200,0); 
//    grid.addColorStop(0, "brown")
//    grid.addColorStop(1, "green")

//    ctxx.fillStyle = grid;
//    ctxx.fillRect(10, 10, 350, 180) 

//    let draw = new Shape(400, ctxx = c2.getContext("2d"), 240, 40 )
//    ctxx.fillText(draw, 80, 80)
//    let a = document.createElement('div') 
//    a.append(JSON.stringify(draw))
//    a.style.color = 'blue'
//    c3.appendChild(a)
//    c3.appendChild(c2)
//    can.item([1])
//    console.log(draw) 
   
//    return draw
// }

// btn.addEventListener('click', setUp, {}, false) 





// var startTime = -1;
// var animationLength = 2000; // Animation length in milliseconds

// function doAnimation(timestamp) {
//   // Calculate animation progress
//   var progress = 0;

//   if (startTime < 0) {
//       startTime = timestamp;
//   } else {
//       progress = timestamp - startTime;
//   }

//   // Do animation ...
//   if (progress < animationLength) {
//       requestAnimationFrame(doAnimation);
//   }
// }

// // Start animation
// requestAnimationFrame(doAnimation);
// btn.click = doAnimation;


// <!-- <div class="container">

// <div class="form">
//     <input type="text" id="txt">
//     <button type="submit" id="show">Show</button>
// </div>
// <div class="cans">
    
//     <canvas id="canvas" width="650" height="300" style="border: 5px solid coral; background-color: black;"></canvas>


//     <canvas id="mycanvas" width="100" height="150" style="border: 1px solid red;"></canvas>
//     <div class="shape"></div>

//     <canvas id="myCanvas" width="400" height="200" style="border: 1px solid red;"></canvas>
//     <div class="shape"></div>
// </div>

// <h1 id="output"></h1>

// </div> -->


