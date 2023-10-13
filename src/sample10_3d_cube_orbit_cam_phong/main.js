import { initShaderProgram } from "./init-shader.js";
import { initBuffers } from "./init-buffers.js";
import { initTransforms, updateTransforms } from "./do-transforms.js";
import { drawScene } from "./draw-scene.js";
import { callbackEventZoom, callbackEventMouseMove } from "./callback-events.js";

// Call init once the webpage has loaded
window.onload = main;

// ドラッグ中かどうかを示すフラグ
var isDragging = false;
export {isDragging};

function main() {
  // Retrieve the canvas
  const canvas = document.getElementById("webgl-canvas");

  // Retrieve a WebGL context
  const gl = canvas.getContext("webgl2");

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

  const program = initShaderProgram(gl);
  const buffers = initBuffers(gl, program);
  initTransforms(gl, program);
  let 
    deltaTime,
    then = 0,
    degree = 45;
  const scale_degree = 50;

  function animateLoop(now) {
    // 時間の単位をミリ秒から秒に変換する。
    now *= 0.001;
    // 現在時刻から、前回のフレームの時刻を引く。
    deltaTime = now - then;
    // 次回のフレームで利用するために、現在時刻を記憶しておく。
    then = now;

    updateTransforms(gl, program, degree);
    drawScene(gl, program, buffers);
    degree -= scale_degree * deltaTime;  
    requestAnimationFrame(animateLoop);
  }
  requestAnimationFrame(animateLoop);
  
}
  
