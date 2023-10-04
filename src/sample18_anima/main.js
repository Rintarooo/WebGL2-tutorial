import { initShaderProgram } from "./init-shader.js";
import { initBuffers } from "./init-buffers.js";
import { initTransforms } from "./init-transforms.js";
import { draw } from "./draw-scene.js";

// Call init once the webpage has loaded
window.onload = main;
// main()

function main() {
    // Retrieve the canvas
    const canvas = document.getElementById("webgl-canvas");
  
    // Set the canvas to the size of the screen
    canvas.width = window.innerWidth;//800;
    canvas.height = window.innerHeight;//800;
  
    // Retrieve a WebGL context
    const gl = canvas.getContext("webgl2");

    // Call the functions in an appropriate order
    const program = initShaderProgram(gl);
    const buffers = initBuffers(gl, program);
    // initTransforms(gl, program);
    // draw(gl, program, buffers);
    // requestAnimationFrame(animateLoop);
    let deltaTime = 0;
    let then = 0;
    let degree = 45;
    const scale_degree = 200;

    function animateLoop(now) {
      // 時間の単位をミリ秒から秒に変換する。
      now *= 0.001;
      // 現在時刻から、前回のフレームの時刻を引く。
      deltaTime = now - then;
      // 次回のフレームで利用するために、現在時刻を記憶しておく。
      then = now;

      initTransforms(gl, program, degree);
      draw(gl, program, buffers);
      degree += scale_degree * deltaTime;  
      requestAnimationFrame(animateLoop);
    }
    requestAnimationFrame(animateLoop);
    
  }
  
