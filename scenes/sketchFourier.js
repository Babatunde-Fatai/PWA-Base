let time = 0;
let wave = [];
let path = [];

let slider;

function setup() {
  createCanvas(windowWidth, windowHeight - 20);
  slider = createSlider(1, 50, 5);
 
}

function draw() {
  background(0);
  translate(width / 3, height / 2)
   

 translate(200, 0)
  let x = 0;
  let y = 0;
  let n = 6; // number of circles

  for (let i = 0; i < slider.value() /*n*/; i++) {
    let prevx = x;
    let prevy = y;

    let n = i * 2 + 1;
    //let n = i * 2 * 2 + 1; //efil tower
    let radius = 75 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    //fill(255);
    stroke(255);
    line(prevx, prevy, x, y);
    //ellipse(x, y, 8);
  }
  wave.unshift(y);


  translate(200, 0);
  line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

 if (wave.length > width / 1.5) { //where to clip so as not to generate infinitely

  wave.pop();
   
 }

 

  time += 0.05;
}







//   translate(150, 200);

//   let x = 0;
//   let y = 0;

//   for (let i = 0; i < slider.value(); i++) {
//     let prevx = x;
//     let prevy = y;

//     let n = i * 2 + 1;
//     let radius = 75 * (4 / (n * PI));
//     x += radius * cos(n * time);
//     y += radius * sin(n * time);

//     stroke(255, 100);
//     noFill();
//     ellipse(prevx, prevy, radius * 2);

//     //fill(255);
//     stroke(255);
//     line(prevx, prevy, x, y);
//     //ellipse(x, y, 8);
//   }
//   wave.unshift(y);


//   translate(200, 0);
//   line(x - 200, y, 0, wave[0]);
//   beginShape();
//   noFill();
//   for (let i = 0; i < wave.length; i++) {
//     vertex(i, wave[i]);
//   }
//   endShape();

//   time += 0.05;


//   if (wave.length > 250) {
//     wave.pop();
//   }
// }
