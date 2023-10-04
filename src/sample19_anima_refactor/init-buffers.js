import {positions, colors, indices} from './bufferData/3dcube.js';

// Set up the buffers for the square
function initBuffers(gl, program) {  

    //// Create VAO instance
    const cubeVAO = gl.createVertexArray();
    // Bind it so we can work on it
    gl.bindVertexArray(cubeVAO);

    // VBO position
    const positionBuffer = initPositionBuffer(gl);
    //// Provide instructions for VAO to use data later in draw
    gl.enableVertexAttribArray(program.aVertexPosition);
    gl.vertexAttribPointer(program.aVertexPosition, 3, gl.FLOAT, false, 0, 0);

    // VBO color
    const colorBuffer = initColorBuffer(gl);
    //// Provide instructions for VAO to use data later in draw
    gl.enableVertexAttribArray(program.aVertexColor);
    gl.vertexAttribPointer(program.aVertexColor, 3, gl.FLOAT, false, 0, 0);
    
    // IBO
    const [indexBuffer, index_array_size] = initIndexBuffer(gl);

    //// Clean
    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

    return {
      vao: cubeVAO,
      ibo: indexBuffer,
      position: positionBuffer,
      color: colorBuffer,
      index_array_size: index_array_size
    };
  }

// VBO position
function initPositionBuffer(gl) {
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  return positionBuffer;
}

// VBO color
function initColorBuffer(gl) {
  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  return colorBuffer;
}

// IBO
function initIndexBuffer(gl) {
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
  return [indexBuffer, indices.length];
}

export { initBuffers };