import vsSource from './shaders/vertex-shader-glsl.js';
import fsSource from './shaders/fragment-shader-glsl.js';

function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // Send the source to the shader object
  gl.shaderSource(shader, source);

  // Compile the shader program
  gl.compileShader(shader);

  // See if it compiled successfully
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}
  
// Create a program with the appropriate vertex and fragment shaders
function initShaderProgram(gl) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Create a program
  const program = gl.createProgram();
  // Attach the shaders to this program
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Could not initialize shaders');
  }

  // Use this program instance
  gl.useProgram(program);

  // We attach the location of these shader values to the program instance for easy access later in the code
  attachAttrib(gl, program);
  return program;
}

function attachAttrib(gl, program){
  //  gl.getAttribLocation(): attribute 変数名 (name) を指定して、attribute変数がどの位置（インデックス）にバインドされているかを問い合わせる。
  // この位置（インデックス）とは、頂点データをGPU（vertex shader側）に送信するときに、GPUがシェーダープログラム内の特定の属性変数を識別するための一種の識別子、または参照するもの。
  program.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
  program.aVertexNormal = gl.getAttribLocation(program, 'aVertexNormal');
  program.uProjectionMatrix = gl.getUniformLocation(program, 'uProjectionMatrix');
  program.uViewMatrix = gl.getUniformLocation(program, 'uViewMatrix');
  program.uModelMatrix = gl.getUniformLocation(program, 'uModelMatrix');
  program.uNormalMatrix = gl.getUniformLocation(program, 'uNormalMatrix');
  program.uMaterialAmbient = gl.getUniformLocation(program, 'uMaterialAmbient');
  program.uMaterialDiffuse = gl.getUniformLocation(program, 'uMaterialDiffuse');
  program.uMaterialSpecular = gl.getUniformLocation(program, 'uMaterialSpecular');
  program.uShininess = gl.getUniformLocation(program, 'uShininess');
  program.uLightAmbient = gl.getUniformLocation(program, 'uLightAmbient');
  program.uLightDiffuse = gl.getUniformLocation(program, 'uLightDiffuse');
  program.uLightSpecular = gl.getUniformLocation(program, 'uLightSpecular');
  program.uLightDirection = gl.getUniformLocation(program, 'uLightPosition');
  
}

export { initShaderProgram };