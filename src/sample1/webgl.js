main();
const canvas = utils.getCanvas('webgl-canvas');

// Set the canvas to the size of the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//
// start here
//
function main() {
  const canvas = document.querySelector("#glcanvas");
  // Initialize the GL context
  const gl = canvas.getContext("webgl");

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it."
    );
    return;
  }

  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
}

function getCanvas(id) {
    // Find and return a DOM element given an ID
      const canvas = document.getElementById(id);
  
      if (!canvas) {
        console.error(`There is no canvas with id ${id} on this page.`);
        return null;
      }
  
      return canvas;
}