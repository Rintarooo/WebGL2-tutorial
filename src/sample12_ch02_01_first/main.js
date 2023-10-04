'use strict';

import { initShaderProgram } from "./shader.js";
import { draw } from "./draw-scene.js";
import { initBuffers } from "./init-buffers.js";


// Call init once the webpage has loaded
// window.onload = main;
main()

// Entry point to our application
function main() {
    // let program,
    // squareVertexBuffer,
    // squareIndexBuffer,
    // indices;
    // let program,
    // squareVertexBuffer,
    // squareIndexBuffer;
    // let indices=[];
    // Retrieve the canvas
    const canvas = document.getElementById("webgl-canvas");
  
    // Set the canvas to the size of the screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    // Retrieve a WebGL context
    // WebGLコンテキストの取得
    const gl = canvas.getContext("webgl2");
  
    // Set the clear color to be black
    gl.clearColor(0, 0, 0, 1);
  
    // Call the functions in an appropriate order
    const program = initShaderProgram(gl);
    const buffers = initBuffers(gl);
    draw(gl, program, buffers);
  }
  
