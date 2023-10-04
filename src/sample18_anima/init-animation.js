// https://webglfundamentals.org/webgl/lessons/ja/webgl-animation.html
// Draw the scene repeatedly
function animateLoop(now) {
    // 時間の単位をミリ秒から秒に変換する。
    now *= 0.001;
    // 現在時刻から、前回のフレームの時刻を引く。
    deltaTime = now - then;
    // 次回のフレームで利用するために、現在時刻を記憶しておく。
    then = now;

    // drawScene(gl, programInfo, buffers, camRotation);
    camRotation += deltaTime;

    requestAnimationFrame(animateLoop);
    }
// requestAnimationFrame(animateLoop);


export { animateLoop };
