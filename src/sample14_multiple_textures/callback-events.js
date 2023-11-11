// azimuth（方位角）とelevation（仰角）
var mouse = { x: -20, y: 20 };
var wheel = 60;//45;//1;  // ホイールの初期のスケール値
const scaleIncrementZoom = 5.;  // ズームの増減量のスケーラー
const scaleIncrementMove = 100.;  // マウス移動量のスケーラー

import { isDragging } from "./main.js";

function callbackEventZoom(event) {
    event.preventDefault();  // デフォルトのスクロール動作を停止

    // ホイールの回転方向によってスケールを増減
    if (event.deltaY > 0) {
        // ホイールを上に回転（ズームイン）
        wheel += scaleIncrementZoom;
    } else {
        // ホイールを下に回転（ズームアウト）
        wheel -= scaleIncrementZoom;
    }
}

function callbackEventMouseMove(event) {
    if (isDragging) {
        var x = event.clientX;
        var y = event.clientY;
    
        // WebGLの座標系に合わせて座標を変換
        var rect = event.target.getBoundingClientRect();

        // ブラウザ左上座標からのキャンバスまでのオフセットを引いてキャンバス上のXY座標を求める
        // [0,width] -> [0,1] -> [0,2] -> [-1,1]
        x = ((x - rect.left) / rect.width) * 2 - 1;
        y = ((y - rect.top) / rect.height) * 2 - 1;

        // 座標を更新
        mouse.x = x * scaleIncrementMove;
        mouse.y = y * scaleIncrementMove;
    }
}

export {callbackEventZoom, callbackEventMouseMove, mouse, wheel};