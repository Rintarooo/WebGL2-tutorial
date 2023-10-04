  // Vertex shader program
//   const vsSource = 
//    `#version 300 es
//     precision mediump float;

//     in vec4 aVertexPosition;
//     uniform mat4 uModelViewMatrix;
//     uniform mat4 uProjectionMatrix;
//     void main(void) {
//       gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
//     }
// `;

const vsSource = 
`#version 300 es
 precision mediump float;

 in vec3 aVertexPosition;
 void main(void) {
   gl_Position = vec4(aVertexPosition, 1.0);
 }
`;


  // Fragment shader program
  const fsSource =
  `#version 300 es
   precision mediump float;
   
   out vec4 FragColor;
   void main(void) {
      FragColor = vec4(0.5, 1.0, 1.0, 1.0);
   }
  `;


//
// Initialize a shader program, so WebGL knows how to draw our data
//
function initShaderProgram(gl) {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
  
    // Create the shader program
  
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
  
    // If creating the shader program failed, alert
  
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      alert(
        `Unable to initialize the shader program: ${gl.getProgramInfoLog(
          shaderProgram
        )}`
      );
      return null;
    }
  
    return shaderProgram;
  }
  
  //
  // creates a shader of the given type, uploads the source and
  // compiles it.
  //
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

  export { initShaderProgram };