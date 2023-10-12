import { initShaderProgram } from "./init-shader.js";
import { initBuffers } from "./init-buffers.js";
import { initTransforms } from "./init-transforms.js";
import { drawScene } from "./draw-scene.js";

// Call init once the webpage has loaded
window.onload = main;

function main() {
  // Retrieve the canvas
  const canvas = document.getElementById("webgl-canvas");

  // Retrieve a WebGL context
  const gl = canvas.getContext("webgl2");

  const program = initShaderProgram(gl);
  const buffers = initBuffers(gl, program);
  initTransforms(gl, program);
  drawScene(gl, program, buffers);
}
  
