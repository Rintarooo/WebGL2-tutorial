// Call init once the webpage has loaded
window.onload = main;

function main() {
  // canvas要素取得
  const canvas_id = "hello-canvas-id";
  const canvas = document.getElementById(canvas_id);
  if (!canvas) {
    console.error(`There is no canvas with id ${canvas_id} on this page.`);
    return null;
  }

  // canvasのサイズ指定
  canvas.width = 800;
  canvas.height = 600;

  // 描画コンテキスト取得
  const ctx = canvas.getContext("2d");

  // 文字列を描画
  ctx.font = "40px serif";
  const 
    x_ = 20,
    y_ = 100,
    text = "Hello World! This area is canvas.";

  ctx.fillText(text, x_, y_);
}

function getCanvas(id) {
  // Find and return a DOM element given an ID
  const canvas = document.getElementById(id);
  if (!canvas) {
    console.error(`There is no canvas with id ${id} on this page.`);
    return null;
  }
  
  return canvas;
}