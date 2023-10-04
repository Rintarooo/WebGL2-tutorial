// canvasを取得する
// canvasの領域を指定する
// WebGLコンテキストの取得
// クリアする色の指定
// canvasをクリア

let gl;

main()

function main(){
    // canvasの取得と領域してい
    const c = document.getElementById("glcanvas");
    c.width = window.innerWidth;// 500;
    c.height = window.innerHeight;// 500;

    // WebGLコンテキストの取得
    // let gl = c.getContext("webgl2");
    gl = c.getContext("webgl2");

    if (gl === null) {
        alert(
        "Unable to initialize WebGL. Your browser or machine may not support it."
        );
        return;
    }

    // クリアする色の指定
    gl.clearColor(0.7, 0.7, 0.7, 1.0);

    // canvasのクリア
    gl.clear(gl.COLOR_BUFFER_BIT);
}