import { initShaderProgram } from "./init-shader.js";
import { initBuffers } from "./init-buffers.js";
import { initTransforms, updateTransforms } from "./do-transforms.js";
import { initLights } from "./init-lighting.js";
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
  initLights(gl, program);
  let 
    deltaTime,
    then = 0,
    degree = 45;
  const scale_degree = 70;//50;

  initTransforms(gl, program, degree);
  // const	info_obj_trans = {
	// 	obj0: {offset_x : 0, offset_z : 0, obj_scale: 1},
	// 	obj1: {offset_x: 0, offset_z : 2, obj_scale: 0.5}
	// };
  
  // const	info_obj_trans = [
  //   {offset_x : 0, offset_z : 0, obj_scale: 1},
  //   {offset_x: 0, offset_z : 2, obj_scale: 0.5},
  //   {offset_x: 2, offset_z : 1, obj_scale: 0.4},
  //   {offset_x: -2, offset_z : 1, obj_scale: 0.2},
  //   {offset_x: 4, offset_z : 0.5, obj_scale: 0.1},
  //   {offset_x: 1.4, offset_z : -2, obj_scale: 1.3},
  //   {offset_x: 1.8, offset_z : -3, obj_scale: 0.5},
  // ];

  const info_obj_trans = [];

  for (let i = 0; i < 40; i++) {
    const randomOffsetX = Math.random() * 8 - 4; // -4から4までの乱数
    // const randomOffsetX = Math.random() * 3; // -4から4までの乱数
    const randomOffsetZ = Math.random() * 8 - 4; // -4から4までの乱数
    // const randomOffsetZ = Math.random() * 3; // -4から4までの乱数
    // const randomObjScale = Math.random() * 2 - 2; // -4から4までの乱数
    const randomObjScale = Math.random() * 8 - 4; // -4から4までの乱数
    const obj = {
      offset_x: randomOffsetX,
      offset_z: randomOffsetZ,
      obj_scale: randomObjScale,
    };

    info_obj_trans.push(obj);
  }


	// 	obj0:,
	// 	obj1: {offset_x: 0, offset_z : 2, obj_scale: 0.5}
	// };  
  function animateLoop(now) {
    // 時間の単位をミリ秒から秒に変換する。
    now *= 0.001;
    // 現在時刻から、前回のフレームの時刻を引く。
    deltaTime = now - then;
    // 次回のフレームで利用するために、現在時刻を記憶しておく。
    then = now;

    // updateTransforms(gl, program, degree, info_obj_trans);
    drawScene(gl, program, buffers, degree, info_obj_trans);
    degree -= scale_degree * deltaTime;  
    requestAnimationFrame(animateLoop);
  }
  requestAnimationFrame(animateLoop);
  
}
  
