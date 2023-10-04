// canvasを取得する
// canvasの領域を指定する
// WebGLコンテキストの取得
// クリアする色の指定
// canvasをクリア


function main(){
    // canvasの取得と領域してい
    var c = document.getElementById("webgl");
    c.width = 500;
    c.height = 500;

    // WebGLコンテキストの取得
    var gl = c.getContext("webgl2");

    // クリアする色の指定
    gl.clearColor(0.7, 0.7, 0.7, 1.0);

    // canvasのクリア
    gl.clear(gl.COLOR_BUFFER_BIT);
}