function initBuffers(gl) {

  // Setting up the VBO (position)
  const positionBuffer = initPositionBuffer(gl);

  // UnBind
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  return {
    position: positionBuffer,
    position_dim: 2,
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

    */

  // Get the viewport's aspect ratio.
  const aspectRatio = gl.canvas.width / gl.canvas.height;
  // Adjust the positions to take the aspect ratio into account.
  const positions = [0.3, 0.3 * aspectRatio, 
                    -0.3, 0.3 * aspectRatio, 
                    0.3, -0.3 * aspectRatio,
                    -0.3, -0.3 * aspectRatio];

  // const positions = [0.5, 0.5, 
  //                   -0.5, 0.5, 
  //                    0.5, -0.5,
  //                   -0.5, -0.5];

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  return positionBuffer;
}

export { initBuffers };