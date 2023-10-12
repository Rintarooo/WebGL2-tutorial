function initBuffers(gl, program) {


  // Create VAO instance
  const squareVAO = gl.createVertexArray();
  // Bind VAO
  gl.bindVertexArray(squareVAO);

  // Setting up the VBO (position)
  const positionBuffer = initPositionBuffer(gl);
  gl.enableVertexAttribArray(program.aVertexPosition);
  // it tells gl context how to interpret the data in shader
  gl.vertexAttribPointer(program.aVertexPosition, 2, gl.FLOAT, false, 0, 0);

  // VBO (color)
  const colorBuffer = initColorBuffer(gl);
  //// Provide instructions for VAO to use data later in draw
  gl.enableVertexAttribArray(program.aVertexColor);
  gl.vertexAttribPointer(program.aVertexColor, 3, gl.FLOAT, false, 0, 0);  
  

  // IBO
  const [indexBuffer, index_array_size] = initIndexBuffer(gl);

  // UnBind VAO, VBO and IBO
  gl.bindVertexArray(null);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

  return {
    vao: squareVAO,
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

function initColorBuffer(gl){
      // vertex color
      const colors = [
        1.0,  0.0,  0.0,    // 赤
        0.0,  0.0,  1.0,    // 青
        0.0,  1.0,  0.0,    // 緑
        1.0,  1.0,  1.0,    // 白
      ];
      
      const colorVertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, colorVertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
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