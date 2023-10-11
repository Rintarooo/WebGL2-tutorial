function drawScene(gl, program, buffers) {
  const clearColor = [0.7,0.7,0.7];
  gl.clearColor(...clearColor, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // Use the buffers we've constructed
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
  gl.vertexAttribPointer(program.aVertexPosition, buffers.position_dim, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(program.aVertexPosition);

  // Bind IBO
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.ibo);
    
  gl.drawElements(gl.TRIANGLES, buffers.index_array_size, gl.UNSIGNED_SHORT, 0);

  // Unbind VBO and IBO
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
}

export { drawScene };