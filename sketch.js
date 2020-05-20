let img
    function preload() {
      img = loadImage('room.png');
    }
    function setup() {
      createCanvas(W = windowWidth, windowHeight);
      colorMode(HSB, 360, 100, 100, 1)
      background(0);
    }

    let index = 0
    function draw() {
      background(0);
      divide(0, 0, windowWidth, windowHeight, 6, 0, 0, windowWidth, windowHeight)
    }

    function divide(x, y, w, h, depth, ix, iy, iw, ih) {
      if (depth > 0) {
        const n = noise(w / width * 2, w / height * 2, frameCount / 800 * depth)
        if (depth-- % 2 === 1) {
          divide(x, y, w * n, h, depth,
            ix, iy, iw / 2, ih)
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
      } else {
        push()
        noFill()
        image(img, x, y, w, h, ix, iy, iw, ih)
        pop()
        //text(index, x, y + 10)
      }
    }
