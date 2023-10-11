function initBuffers(gl) {

  // Setting up the VBO (position)
  const positionBuffer = initPositionBuffer(gl);

  // IBO
  const [indexBuffer, index_array_size] = initIndexBuffer(gl);

  // UnBind
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

  return {
    position: positionBuffer,
    position_dim: 2,
    ibo: indexBuffer,
    index_array_size: index_array_size
};
}


// VBO position
function initPositionBuffer(gl) {
  
    /*
   V1(-0.5, 0.5)        V0(0.5, 0.5)
      X---------------------X
      |                     |
      |                     |
      |                     |
      |                     |
      |                     |
      |                     |
      |                     |
      X---------------------X
    V3(-0.5, -0.5)      V2(0.5, -0.5)
    
    2 triangles are drawed in counterclockwise.
    - V1 and V2 are common edges.
    - triangle 1：V0(0.5, 0.5), V1(-0.5, 0.5), V2(0.5, -0.5)
    - triangle 2：V2(0.5, -0.5), V1(-0.5, 0.5), V3(-0.5, -0.5)

    const positions = [0.5, 0.5, 
                      -0.5, 0.5, 
                      0.5, -0.5,
                      -0.5, -0.5];
    */

  // Get the viewport's aspect ratio.
  const aspectRatio = gl.canvas.width / gl.canvas.height;
  // Adjust the positions to take the aspect ratio into account.
  const positions = [0.3, 0.3 * aspectRatio, 
                    -0.3, 0.3 * aspectRatio, 
                    0.3, -0.3 * aspectRatio,
                    -0.3, -0.3 * aspectRatio];

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  return positionBuffer;
}


// IBO
function initIndexBuffer(gl) {
  const indices = [0,1,2,2,1,3];
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
  return [indexBuffer, indices.length];
}


export { initBuffers };