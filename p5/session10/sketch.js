var img = [];
var _cursor = 0 ;
var imageServer = "dat://c494f2d93d718d8f9416f7af8fe9e4d8eb0377acf032ad68f412be84fc06c8f9";
var linkListImg = imageServer + "/img/";

var timeAtLastNext = 0;

function setup() {
  	createCanvas(300, 300);
  	background(0);
    loadStrings(linkListImg, stringLoaded);
}

function stringLoaded(monText){
  monText = monText[16]
  monText = monText.split("href=\"");
  monText.shift();
  monText.shift();

  for(var c = 0 ; c < monText.length ; c = c + 1){
    img.push("");
  }
  for(var c = 0 ; c < monText.length ; c = c + 1){
    monText[c] = monText[c].split("\">");
    monText[c] = monText[c].shift();
    var num = monText[c].replace("/img/jaffe", "");
    num = num.replace(".jpg", "");
    num = parseInt(num);
    img[num-1] = loadImage(imageServer+monText[c]);
  }
}

function draw() {
	background(0);

  if(img.length == 0 ){
    return;
  }
  var size = 25;
  for(var x = 0 ; x < width ; x = x + size){
    for(var y = 0 ; y < height ; y = y + size){
      
      var _x = map(x, 0, width, 0, img[_cursor].width);
      var _y = map(y, 0, height, 0, img[_cursor].height);

      fill(img[_cursor].get(_x, _y));
      rect(x, y, size, size);
      noStroke();
    }  
  }

  if(millis() - timeAtLastNext > 1000/24 ){
    imgNext();
  }
}

function imgNext(){
  timeAtLastNext = millis();
  _cursor = _cursor + 1;
  if(_cursor >= img.length){
    _cursor = 0;
  }
}




