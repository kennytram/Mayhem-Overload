// const loadingBar = document.getElementById('loading-bar');
// let loadedImages = 0;
// let totalImages = document.images.length;

// // Update the loading bar as images load
// function updateLoadingBar() {
//   loadedImages++;
//   let percentLoaded = (loadedImages / totalImages) * 100;
//   loadingBar.style.width = percentLoaded + '%';
// }

// // Hide the loading bar when all images have loaded
// function hideLoadingBar() {
//   loadingBar.style.opacity = 0;
//   setTimeout(function() {
//     loadingBar.style.display = 'block';
//   }, 10000);
// }

// // Add event listeners to each image to track loading progress
// for (let i = 0; i < totalImages; i++) {
//   const img = document.images[i];
//   img.addEventListener('load', updateLoadingBar);
//   img.addEventListener('error', updateLoadingBar);
//   img.addEventListener('load', function() {
//     if (loadedImages === totalImages) {
//       hideLoadingBar();
//     }
//   });
// }

// // Show the loading bar initially
// loadingBar.style.display = 'block';

const loadingString = "LOADING";
const boxes = [];
const eyes = [];
let reverse = false;

//Creating the selectors for each of the loading boxes and the eyes
for (let i = 0; i < loadingString.length; i++) {
  boxes.push(document.querySelector(`#${loadingString[i]}`));
}

for (let i = 0; i < 2; i++) {
  eyes.push(document.querySelector(`#eye${i}`));
}

//This determines the position of the eyes based on what direction we are going
//as well as start the eye shaking once the eyes have moved
function setEyes(reverse) {
  for (let i = 0; i < eyes.length; i++) {
    TweenMax.to(eyes[i], 0.25, {
      rotation: i === 0 ? -45 : 45,
      scaleY: 3,
      ease: Power2.easeInOut,
      onComplete: () => {
        let delay = 0;

        for (let j = 0; j < 21; j++) {
          TweenMax.to(eyes[i], 0.1, {
            y: j % 2 === 0 ? -1 : 1,
            delay,
            ease: Power2.easeInOut
          });

          delay += 0.1;
        }
      }
    });
  }

  expandBoxes(reverse);
}

//This expands each of the loading boxes in the proper order
//based on what direction BoxBoy! wants to go
function expandBoxes(reverse) {
  let delay = 0.25;
  let z = -1;

  if (reverse) {
    let x = 70 * 6;

    for (let i = boxes.length; i > 0; i--) {
      TweenMax.set(boxes[i - 1], { zIndex: z });

      const from = {
        x,
        delay
      };

      const xMinusSixty = x - 60;

      const to = {
        display: "block",
        delay,
        color: i === 1 ? "red" : "black",
        x: xMinusSixty,
        onComplete: () => {
          if (i === 1) {
            moveBoxBoy(reverse);
          }
        }
      };

      TweenMax.fromTo(boxes[i - 1], 0.25, from, to);
      delay += 0.33;
      x = xMinusSixty;
      z -= 1;
    }
  } else {
    let x = 0;

    for (let i = 0; i < boxes.length; i++) {
      TweenMax.set(boxes[i], { zIndex: z });

      const from = {
        x,
        delay
      };

      const xPlusSixty = x + 60;

      const to = {
        display: "block",
        delay,
        color: i === 6 ? "red" : "black",
        x: xPlusSixty,
        ease: Power2.easeInOut,
        onComplete: () => {
          if (i === 6) {
            moveBoxBoy(reverse);
          }
        }
      };

      TweenMax.fromTo(boxes[i], 0.25, from, to);
      delay += 0.33;
      x = xPlusSixty;
      z -= 1;
    }
  }
}

//Once the loading boxes have expanded this will move the box all the 
//to the last box and reset the process in the opposite direction
function moveBoxBoy(reverse) {
  const boxBoy = document.querySelector("#boy");
  const increment = 1 / 7 - 0.02;
  const moving = reverse ? 0 : 60 * 7;
  let delay = 0;

  if (reverse) {
    for (let i = boxes.length; i > 0; i--) {
      TweenMax.to(boxes[i - 1], 0.001, {
        delay,
        display: "none"
      });

      delay += increment;
    }

    TweenMax.to(boxBoy, 1, {
      x: moving,
      onComplete: () => {
        for (let i = 0; i < eyes.length; i++) {
          TweenMax.to(eyes[i], 0.5, {
            x: 0,
            rotation: 0,
            scaleY: 1,
            ease: Power2.easeInOut,
            onComplete:
              i === 1
                ? () => {
                    reverse = !reverse;
                    setEyes(reverse);
                  }
                : undefined
          });
        }
      }
    });
  } else {
    for (let i = 0; i < boxes.length; i++) {
      TweenMax.to(boxes[i], 0.001, {
        delay,
        display: "none"
      });

      delay += increment;
    }

    TweenMax.to(boxBoy, 1, {
      x: moving,
      onComplete: () => {
        for (let i = 0; i < eyes.length; i++) {
          TweenMax.to(eyes[i], 0.5, {
            x: -15,
            rotation: 0,
            scaleY: 1,
            onComplete:
              i === 1
                ? () => {
                    reverse = !reverse;
                    setEyes(reverse);
                  }
                : undefined
          });
        }
      }
    });
  }
}

setEyes(reverse);
