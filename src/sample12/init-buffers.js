import {positions, indices} from './bufferData/3dcube.js';
import calculateNormals from './calc-normal.js'

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

  // VBO normal
  const normalBuffer = initNormalBuffer(gl);
  // it tells gl context how to interpret the data in shader
  gl.enableVertexAttribArray(program.aVertexNormal);
  gl.vertexAttribPointer(program.aVertexNormal, 3, gl.FLOAT, false, 0, 0);
  
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

// VBO normal
function initNormalBuffer(gl) {
  const normalBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
  const normals = calculateNormals(positions, indices);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
  return normalBuffer;
}

// IBO
function initIndexBuffer(gl) {
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
  return [indexBuffer, indices.length];
}

export { initBuffers };