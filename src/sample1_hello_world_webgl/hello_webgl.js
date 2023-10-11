// Call init once the webpage has loaded
window.onload = main;

function main(){
    // canvas要素取得
    const canvas = document.getElementById("webgl-canvas-id");

    // WebGLコンテキストの取得
    const gl = canvas.getContext("webgl2");

    // WebGLコンテキストの取得出来たかどうかチェック
    if (gl === null) {
        alert(
            "Unable to initialize WebGL. Your browser or machine may not support it."
        );
        return;
    }

    // canvasをクリアする色の指定、rgba
    gl.clearColor(0.7, 0.7, 0.7, 1.0);

    // canvasのクリア
    gl.clear(gl.COLOR_BUFFER_BIT);
}