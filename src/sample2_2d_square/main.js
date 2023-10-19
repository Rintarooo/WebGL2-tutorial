import { initShaderProgram } from "./init-shader.js";
import { initBuffers } from "./init-buffers.js";
import { drawScene } from "./draw-scene.js";

// Call init once the webpage has loaded
window.onload = main;

function main() {
  const canvas = document.getElementById("glcanvas");
  // canvas.width = 500;//window.innerWidth;
  // canvas.height = 500;//window.innerHeight;

  const gl = canvas.getContext("webgl2");
  if (gl === null) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }

  /*
  https://webglfundamentals.org/webgl/lessons/webgl-anti-patterns.html
  https://webglfundamentals.org/webgl/lessons/ja/webgl-resizing-the-canvas.html
  */
  // main関数が呼び出された時の、GLコンテキストのcanvasの、ブラウザにおける表示サイズを取得。
  const 
    width = gl.canvas.clientWidth,
    height = gl.canvas.clientHeight;
  // GLコンテキストのcanvasの、描画バッファーのサイズを、ブラウザにおける表示サイズに合わせて更新。
  gl.canvas.width = width;
  gl.canvas.height = height;

  // Initialize a shader program object
  const program = initShaderProgram(gl);
  const buffers = initBuffers(gl);
  drawScene(gl, program, buffers);
}
