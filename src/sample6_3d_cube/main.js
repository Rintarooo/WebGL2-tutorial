import { initShaderProgram } from "./init-shader.js";
import { initBuffers } from "./init-buffers.js";
import { initTransforms } from "./init-transforms.js";
import { draw } from "./draw-scene.js";

// Call init once the webpage has loaded
window.onload = main;

function main() {
  // Retrieve the canvas
  const canvas = document.getElementById("webgl-canvas");

  // Set the canvas to the size of the screen
  canvas.width = 800;//window.innerWidth;
  canvas.height = 800;//window.innerHeight;

  // Retrieve a WebGL context
  const gl = canvas.getContext("webgl2");

  // Call the functions in an appropriate order
  const program = initShaderProgram(gl);
  const buffers = initBuffers(gl, program);
  initTransforms(gl, program);
  draw(gl, program, buffers);
}
  
