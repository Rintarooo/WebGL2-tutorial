import { initShaderProgram } from "./init-shader.js";
import { initBuffers } from "./init-buffers.js";
import { initTransforms } from "./init-transforms.js";
import { initLights } from "./init-lighting.js";
import { draw } from "./draw-scene.js";
import { callbackEventZoom, callbackEventMouseMove } from "./callback-events.js";


// ドラッグ中かどうかを示すフラグ
var isDragging = false;
export {isDragging};

// Call init once the webpage has loaded
window.onload = main;
// main()

function main() {
    // Retrieve the canvas
    const canvas = document.getElementById("webgl-canvas");
    // window.onkeydown;
    // window.onkeyup;


    // マウスを押下したときのイベントリスナー
    canvas.addEventListener('mousedown', function(e) {
        isDragging = true;
    });

    // マウスを移動したときのイベントリスナー
    canvas.addEventListener("mousemove", callbackEventMouseMove, false);
    // マウスを離したときのイベントリスナー
    canvas.addEventListener('mouseup', function(e) {
      isDragging = false;
    });
    // console.log("isDragging: ", isDragging)
    canvas.addEventListener("wheel", callbackEventZoom, false);



    // Retrieve a WebGL context
    const gl = canvas.getContext("webgl2");

    const width = gl.canvas.clientWidth;
    const height = gl.canvas.clientHeight;
    gl.canvas.width = width;
    gl.canvas.height = height;

    // Call the functions in an appropriate order
    const program = initShaderProgram(gl);
    const buffers = initBuffers(gl, program);
    initLights(gl, program);


    let deltaTime = 0;
    let then = 0;
    let degree = 45;
    const scale_degree = 1;//50;

    function animateLoop(now) {
      // 時間の単位をミリ秒から秒に変換する。
      now *= 0.001;
      // 現在時刻から、前回のフレームの時刻を引く。
      deltaTime = now - then;
      // 次回のフレームで利用するために、現在時刻を記憶しておく。
      then = now;

      initTransforms(gl, program, degree);
      draw(gl, program, buffers);
      degree -= scale_degree * deltaTime;  
      requestAnimationFrame(animateLoop);
    }
    requestAnimationFrame(animateLoop);
    
  }
  
