import {positions, colors, indices} from './bufferData/3dcube.js';

function initBuffers(gl, program) {  
  // Create VAO instance
  const cubeVAO = gl.createVertexArray();
  // Bind VAO
  gl.bindVertexArray(cubeVAO);

  // VBO position
  const positionBuffer = initPositionBuffer(gl);
  // it tells gl context how to interpret the data in shader
  gl.vertexAttribPointer(program.aVertexPosition, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(program.aVertexPosition);

  // VBO color
  const colorBuffer = initColorBuffer(gl);
  // it tells gl context how to interpret the data in shader
  gl.vertexAttribPointer(program.aVertexColor, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(program.aVertexColor);
  
  // IBO
  const [indexBuffer, index_array_size] = initIndexBuffer(gl);

  // UnBind
  gl.bindVertexArray(null);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

  return {
    vao: cubeVAO,
    ibo: indexBuffer,
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