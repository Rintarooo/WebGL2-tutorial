function drawScene(gl, program, buffers) {  
  const clearColor = [0.7,0.7,0.7];
  gl.clearColor(...clearColor, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // Use the buffers we've constructed
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
  // it tells gl context how to interpret the data in shader
  gl.vertexAttribPointer(program.aVertexPosition, buffers.position_dim, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(program.aVertexPosition);
    
  const 
    primitiveType = gl.TRIANGLE_STRIP,// 描画するプリミティブの種類
    offset = 0,// 配列の左から何番目の頂点から描画するか
    vertexCount = 4;// 描画する頂点の個数
  gl.drawArrays(primitiveType, offset, vertexCount);

  // Unbind VBO
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
}

export { drawScene };