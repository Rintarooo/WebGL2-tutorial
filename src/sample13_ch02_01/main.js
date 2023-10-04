'use strict';

import { initShaderProgram } from "./shader.js";
import { draw } from "./draw-scene.js";
import { initBuffers } from "./init-buffers.js";

// Call init once the webpage has loaded
// window.onload = main;
main()

function main() {
    // Retrieve the canvas
    const canvas = document.getElementById("webgl-canvas");
  
    // Set the canvas to the size of the screen
    canvas.width = 500;//window.innerWidth;
    canvas.height = 500;//window.innerHeight;
  
    // Retrieve a WebGL context
    const gl = canvas.getContext("webgl2");
    
    // Call the functions in an appropriate order
    const program = initShaderProgram(gl);
    const buffers = initBuffers(gl);
    draw(gl, program, buffers);
  }
  
