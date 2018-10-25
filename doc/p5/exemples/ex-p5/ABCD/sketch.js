var nums = [100, 65, 76, 72];
var words = ["A", "B", "C", "D"];
var index = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  for (var i = 0; i < 4; i++) {
    ellipse(i * 100 + 100, 200, nums[i], nums[i]);
  }
  textSize(32);
  fill(255);
  for (var i = 0; i < 4; i++) {
    text(words[i], i * 100 + 100, 200);
  }
}
