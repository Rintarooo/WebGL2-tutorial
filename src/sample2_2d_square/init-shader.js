import vsSource from './shaders/vertex-shader-glsl.js';
import fsSource from './shaders/fragment-shader-glsl.js';

function initShaderProgram(gl) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Create the shader program object
  const program = gl.createProgram();
  // Attach the shaders to this program
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);

  gl.linkProgram(program);

  // If creating the shader program failed, alert
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    alert(
      `Unable to initialize the shader program: ${gl.getProgramInfoLog(
        program
      )}`
    );
    return null;
  }
  // Tell gl context this program instance when drawing
  gl.useProgram(program);
  attachAttrib2program(gl, program);
  return program;
}
  
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // Send the source to the shader object
  gl.shaderSource(shader, source);

  // Compile the shader program
  gl.compileShader(shader);

  // See if it compiled successfully
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(
      `An error occurred compiling the shaders: ${gl.getShaderInfoLog(shader)}`
    );
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function attachAttrib2program(gl, program) {
  // We attach the location of these shader values to the `program` instance for easy access later in the code(`gl.vertexAttribPointer` function)
  //  gl.getAttribLocation: vertex shaderの入力変数であるattributeを指定して、その変数がどのインデックスにバインドされているかを問い合わせる。
  // JavaScriptのオブジェクト（ここでは`program`）のプロパティ（`aVertexPosition`）に格納.
  // この位置（インデックス）は、頂点データをGPUに送信するときに、そのデータがどの属性変数に対応するのかを指示するために使用されます。
  // 具体的には、`gl.vertexAttribPointer`関数を呼び出すときにこの位置（インデックス）を指定します。
  // これにより、頂点バッファ（メモリ内の頂点データのブロック）のデータが、
  // シェーダープログラム内の特定の属性変数（例えば`aVertexPosition`）に関連付けられます。
  program.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
}

export { initShaderProgram };