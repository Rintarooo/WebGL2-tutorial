var mouse = { x: 0, y: 0 };
var wheel = 45;//1;  // 初期のスケール値

function callbackEventZoom(event) {
    event.preventDefault();  // デフォルトのスクロール動作を停止

    let scaleIncrement = 5.;  // ズームの増減量

    // ホイールの回転方向によってスケールを増減
    if (event.deltaY < 0) {
        // ホイールを上に回転（ズームイン）
        wheel += scaleIncrement;
    } else {
        // ホイールを下に回転（ズームアウト）
        wheel -= scaleIncrement;
    }

    // // キャンバスのコンテキストを取得
    // var ctx = event.target.getContext("2d");

    // ズームの中心点をマウスの位置に設定
    // var x = event.clientX - event.target.offsetLeft;
    // var y = event.clientY - event.target.offsetTop;

    // // ズーム処理
    // ctx.translate(x, y);
    // ctx.scale(wheel, wheel);
    // ctx.translate(-x, -y);

    // ここでキャンバスを再描画するなどの処理を追加...
    console.log("event.clientX: " + event.clientX + "\nevent.target.offsetLeft: " + event.target.offsetLeft)
}

function callbackEventMouseMove(event) {
    var x = event.clientX;
    var y = event.clientY;
  
    // WebGLの座標系に合わせて座標を変換
    var rect = event.target.getBoundingClientRect();
    x = ((x - rect.left) / rect.width) * 2 - 1;
    y = ((y - rect.top) / rect.height) * 2 - 1;
  
    // console.log("event.rect: " + event.clientX + "\nevent.target.offsetLeft: " + event.target.offsetLeft)

    let scaleIncrement = 30.;  // ズームの増減量

    // 座標を更新
    mouse.x = x * scaleIncrement;
    mouse.y = y * scaleIncrement;
    console.log("mouse.x: " + mouse.x + "\nmouse.y: " + mouse.y)
}

export {callbackEventZoom, callbackEventMouseMove, mouse, wheel};