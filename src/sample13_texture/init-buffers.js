import {positions, indices, textureCoordinates} from './bufferData/3dcube.js';
import calculateNormals from './calc-normal.js'

function initBuffers(gl, program) {  
  // Create VAO instance
  const cubeVAO = gl.createVertexArray();
  // Bind VAO
  gl.bindVertexArray(cubeVAO);

  // VBO position
  const positionBuffer = initPositionBuffer(gl);
  gl.enableVertexAttribArray(program.aVertexPosition);
  // it tells gl context how to interpret the data in shader
  gl.vertexAttribPointer(program.aVertexPosition, 3, gl.FLOAT, false, 0, 0);

  // VBO normal
  const normalBuffer = initNormalBuffer(gl);
  gl.enableVertexAttribArray(program.aVertexNormal);
  // it tells gl context how to interpret the data in shader
  gl.vertexAttribPointer(program.aVertexNormal, 3, gl.FLOAT, false, 0, 0);

  
  // VBO Texture Coord
  const textureCoordBuffer = initTextureCoordBuffer(gl);
  gl.enableVertexAttribArray(program.aVertexTextureCoord);
  // it tells gl context how to interpret the data in shader
  gl.vertexAttribPointer(program.aVertexTextureCoord, 2, gl.FLOAT, false, 0, 0)
  

  // IBO
  const [indexBuffer, index_array_size] = initIndexBuffer(gl);
  
  // UnBind
  gl.bindVertexArray(null);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
  // gl.bindTexture(gl.TEXTURE_2D, null);

  return {
    vao: cubeVAO,
    ibo: indexBuffer,
    index_array_size: index_array_size,
    // tex: textureCoordBuffer
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

// Texture Coord
function initTextureCoordBuffer(gl){
  // console.log(textureCoordinates);
  const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates), gl.STATIC_DRAW);
  return textureCoordBuffer;
}

export { initBuffers };