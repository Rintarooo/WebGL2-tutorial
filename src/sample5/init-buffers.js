function initBuffers(gl) {
    const buffers = initPositionBuffer(gl);
  
    return {
      position: buffers[0],
      index: buffers[1],
    };
  }
  
  function initPositionBuffer(gl) {  
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


    // Setting up the VBO
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    
    // Indices defined in counter-clockwise order
    indices = [0, 1, 2, 0, 2, 3];

    // Setting up the IBO
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    // 頂点データ：gl.ARRAY_BUFFER
    // インデックスデータ：gl.ELEMENT_ARRAY_BUFFER


    // 一旦、バインドを解除。あとで（draw-scene.jsで）バインドし直す。
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    
  
    return positionBuffer, indexBuffer;
  }
  
  export { initBuffers };