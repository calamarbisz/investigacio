
    let img
		let value=0
    function preload() {
      img = loadImage('room.png');
    }
    function setup() {
      createCanvas(W = windowWidth, windowHeight);
      colorMode(HSB, 360, 100, 100, 1)
      background(img, windowWidth,windowHeight);
    }

function mouseClicked(event) {
  console.log(event);
}

    let index = 0
    function draw() {
      //background();
      divide(0, 0, windowWidth, windowHeight, 6, 0, 0, windowWidth, windowHeight)
    }

    function divide(x, y, w, h, depth, ix, iy, iw, ih) {
      if (depth > 0) {
        const n = noise(w / width * 1, w / height * 2, frameCount / 2000 * depth)
        if (depth-- % 3 === 1) {
          divide(x, y, w * n, h, depth,
            ix, iy, iw / 5, ih)
          divide(x + w * n, y, w - w * n, h, depth,
            ix + iw / 2, iy, iw / 2, ih)
        } else {
          divide(x, y, w, h * n, depth,
            ix, iy, iw, ih / 2
          )
          divide(x, y + h * n, w, h - h * n, depth,
            ix, iy + ih / 2, iw, ih / 2
          )
        }
      } else if (mouseClicked) {
        push()
        noFill()
        image(img, x, y, w, h, ix, iy, iw, ih)
        noStroke()
        rect(x, y, w, h)
        pop()
        //text(index, x, y + 10)
      } 
    }

