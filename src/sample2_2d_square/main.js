import { initBuffers } from "./init-buffers.js";
import { drawScene } from "./draw-scene.js";
import { vsSource, fsSource, initShaderProgram} from "./shader.js";

window.onload = main;

function main() {
  const canvas = document.getElementById("glcanvas");

  const gl = canvas.getContext("webgl2");
  
  const width = gl.canvas.clientWidth;
  const height = gl.canvas.clientHeight;
  gl.canvas.width = width;
  gl.canvas.height = height;

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it."
    );
    return;
  }

  // // Set clear color to black, fully opaque
  // gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // // Clear the color buffer with specified clear color
  // gl.clear(gl.COLOR_BUFFER_BIT);

  // Initialize a shader program; this is where all the lighting
  // for the vertices and so forth is established.
  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  // Collect all the info needed to use the shader program.
  // Look up which attribute our shader program is using
  // for aVertexPosition and look up uniform locations.
  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(
        shaderProgram,
        "uProjectionMatrix"
      ),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
    },
  };

  const buffers = initBuffers(gl);

  drawScene(gl, programInfo, buffers);
}
