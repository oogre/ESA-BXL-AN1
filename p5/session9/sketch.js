var img = [];
var _cursor = 0 ;
function setup() {
  	createCanvas(windowWidth, windowHeight);
  	background(0);
  	/*img.push(loadImage("../img/jaffe10.jpg"));
  	img.push(loadImage("../img/jaffe11.jpg"));
  	img.push(loadImage("../img/jaffe12.jpg"));
  	img.push(loadImage("../img/jaffe13.jpg"));
  	img.push(loadImage("../img/jaffe14.jpg"));
  	img.push(loadImage("../img/jaffe15.jpg"));
  	img.push(loadImage("../img/jaffe16.jpg"));
  	img.push(loadImage("../img/jaffe17.jpg"));
  	img.push(loadImage("../img/jaffe18.jpg"));
  	img.push(loadImage("../img/jaffe19.jpg"));
  	img.push(loadImage("../img/jaffe20.jpg"));*/
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "/img", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                let t = allText.split("href=\"")
                t.shift()
                t = t.map(r=>r.split("\""))
                for(let i of t){
                  loadImage(i[0], load);
                }
            }
        }
    }
    rawFile.send(null);
}
function load(i){
  console.log(i)
  img.push(i);
}
function draw() {
	background(0);
  if(img.length == 0 )return;
	image(img[_cursor], 0, 0, 300, 300);
	_cursor = _cursor + 1;
	if(_cursor >= img.length){
		_cursor = 0;
	}
}






