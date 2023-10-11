import { initShaderProgram } from "./init-shader.js";
import { initBuffers } from "./init-buffers.js";
import { drawScene } from "./draw-scene.js";

// Call init once the webpage has loaded
window.onload = main;

function main() {
  const canvas = document.getElementById("glcanvas");

  const gl = canvas.getContext("webgl2");
  if (gl === null) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it."
    );
    return;
  }

  // https://webglfundamentals.org/webgl/lessons/webgl-anti-patterns.html
  const width = gl.canvas.clientWidth;
  const height = gl.canvas.clientHeight;
  gl.canvas.width = width;
  gl.canvas.height = height;
  // canvas.width = 500;//window.innerWidth;
  // canvas.height = 500;//window.innerHeight;

  // Initialize a shader program object
  const program = initShaderProgram(gl);
  const buffers = initBuffers(gl);
  drawScene(gl, program, buffers);
}
