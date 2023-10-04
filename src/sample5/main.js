import { initShaderProgram} from "./shader.js";
import { initBuffers } from "./init-buffers.js";
import { drawScene } from "./draw-scene.js";
// canvasを取得する
// canvasの領域を指定する
// WebGLコンテキストの取得
// クリアする色の指定
// canvasをクリア

main()

function main(){
    var c = document.getElementById("glcanvas");
    c.width = window.innerWidth;// 500;
    c.height = window.innerHeight;// 500;

    // WebGLコンテキストの取得
    var gl = c.getContext("webgl2");

    // Only continue if WebGL is available and working
    if (gl === null) {
        alert(
        "Unable to initialize WebGL. Your browser or machine may not support it."
        );
        return;
    }

    // Initialize a shader program; this is where all the lighting
    // for the vertices and so forth is established.
    const shaderProgram = initShaderProgram(gl);

    // Collect all the info needed to use the shader program.
    // Look up which attribute our shader program is using
    // for aVertexPosition and look up uniform locations.
    const programInfo = {
        program: shaderProgram,
        attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
        },
        // uniformLocations: {
        // projectionMatrix: gl.getUniformLocation(
        //     shaderProgram,
        //     "uProjectionMatrix"
        // ),
        // modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
        // },
    };
    // Here's where we call the routine that builds all the
    // objects we'll be drawing.
    const buffers = initBuffers(gl);


    if (buffers[0] === null) {
        alert(
        "Unable to get buffers."
        );
        return;
    }

    if (buffers[1] === null) {
        alert(
        "Unable to get buffers."
        );
        return;
    }
    // Draw the scene
    drawScene(gl, programInfo, buffers);

}