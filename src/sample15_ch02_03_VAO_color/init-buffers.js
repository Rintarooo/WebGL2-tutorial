
// Set up the buffers for the square
function initBuffers(gl, program) {
    /*
      V0                    V3
      (-0.5, 0.5, 0)        (0.5, 0.5, 0)
      X---------------------X
      |                     |
      |                     |
      |       (0, 0)        |
      |                     |
      |                     |
      X---------------------X
      V1                    V2
      (-0.5, -0.5, 0)       (0.5, -0.5, 0)
    */
    const vertices = [
      -0.5, 0.5, 0,
      -0.5, -0.5, 0,
      0.5, -0.5, 0,
      0.5, 0.5, 0
    ];
  
    // Indices defined in counter-clockwise order
    const indices = [0, 1, 2, 0, 2, 3];

    //// Create VAO instance
    const squareVAO = gl.createVertexArray();
    // Bind it so we can work on it
    gl.bindVertexArray(squareVAO);

    // Setting up the VBO
    const squareVertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    //// Provide instructions for VAO to use data later in draw
    gl.enableVertexAttribArray(program.aVertexPosition);
    gl.vertexAttribPointer(program.aVertexPosition, 3, gl.FLOAT, false, 0, 0);




    ///// color
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

    //// Provide instructions for VAO to use data later in draw
    gl.enableVertexAttribArray(program.aVertexColor);
    gl.vertexAttribPointer(program.aVertexColor, 3, gl.FLOAT, false, 0, 0);
    




    // Setting up the IBO
    const squareIndexBuffer = gl.createBuffer();
    // 頂点データ：gl.ARRAY_BUFFER
    // インデックスデータ：gl.ELEMENT_ARRAY_BUFFER
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, squareIndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
  
    //// Clean
    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

    return {
      vao: squareVAO,
      ibo: squareIndexBuffer,
      position: squareVertexBuffer,
      color: colorVertexBuffer,
      index_array: indices
    };
  }

  export { initBuffers };