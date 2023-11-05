// Call init once the webpage has loaded
window.onload = draw;

function draw(){
  // canvas要素取得
  const canvas_id = "webgl-canvas";
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

  const img = new Image();
  // img.src='./textureImg/bobobo.png';
  img.src='./textureImg/webgl.png';
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
    ctx.beginPath();
    ctx.moveTo(30, 96);
    ctx.lineTo(70, 66);
    ctx.lineTo(103, 76);
    ctx.lineTo(170, 15);
    ctx.stroke();
  };
}
