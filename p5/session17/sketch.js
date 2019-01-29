/*----------------------------------------*\
  ESA-BXL-AN1 - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-12-07 09:18:06
  @Last Modified time: 2019-01-11 13:43:19
\*----------------------------------------*/
var mic;
var fft;
var waves = [];

//var angle =PI/4;
function setup() {
  // put setup code here
  createCanvas(1000, 1000);
  mic = new p5.AudioIn();
    mic.start();
  fft = new p5.FFT(0.9, 64);
  
   fft.setInput(mic);

   
}




function draw() {
    // put drawing code here
    
  background(0);

  
  var vol = mic.getLevel();
  var colour = vol*10000;
  waves.push(fft.waveform());
  if(waves.length > 100){
    waves.shift();
  }
  
  noStroke();
  stroke(colour*random(), colour*random(), colour*random()); // spectrum is green
  line(width/2, 50, width/2, 900);
  

  //noFill()

  translate( width/2, height);
  for(var i = 0 ; i < waves.length ; i ++){
    var hBarbuleNormalized = i /  waves.length;
      var lBarbuleNormalized = sin(hBarbuleNormalized*PI);
    var lBarbule = lBarbuleNormalized * 300;
      var hBarbule = hBarbuleNormalized * 1000;
      push();
      translate( 0, -hBarbule);
      rotate(0.1);
      beginShape();
      for(var j = 0 ; j < waves[i].length ; j ++){
        vertex(j/waves[i].length * lBarbule, waves[i][j]*100);
      }
      endShape();
      rotate(-0.1);
      rotate(-0.1);
      beginShape();
      for(var j = 0 ; j < waves[i].length ; j ++){
        vertex(-j/waves[i].length * lBarbule, waves[i][j]*100);
      }
      endShape();
      pop();
  }
}


function mouseClicked(){
  save('myCanvas.png');
  return false;
}

function LerpAngle( a,  b,  t)
{
    var delta = Repeat((b - a), 360);
    if (delta > 180)
        delta -= 360;
    return a + delta * Clamp01(t);
}
function Repeat( t,  length)
{
    return Clamp(t - floor(t / length) * length, 0.0, length);
}
function Clamp( value,  min,  max)
{
    if (value < min)
        value = min;
    else if (value > max)
        value = max;
    return value;
}
function Clamp01( value)
{
    return Clamp(value, 0, 1);
}

