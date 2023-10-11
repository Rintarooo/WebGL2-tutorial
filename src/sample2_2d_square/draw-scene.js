function drawScene(gl, program, buffers) {
  const clearColor = [0.7,0.7,0.7];
  gl.clearColor(...clearColor, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // Use the buffers we've constructed
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
  gl.vertexAttribPointer(program.aVertexPosition, buffers.position_dim, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(program.aVertexPosition);
    
  const offset = 0;
  const vertexCount = 4;
  gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
  // Clean after Drawing
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
}

export { drawScene };