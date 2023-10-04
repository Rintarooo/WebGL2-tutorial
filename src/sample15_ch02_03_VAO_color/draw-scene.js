function draw(gl, program, buffers) {
  const clearColor = [0.7,0.7,0.7];
  gl.clearColor(...clearColor, 1);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // // Use the buffers we've constructed
  // gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
  // gl.vertexAttribPointer(program.aVertexPosition, 3, gl.FLOAT, false, 0, 0);
  // gl.enableVertexAttribArray(program.aVertexPosition);

  // // Bind IBO
  // gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.index);

  // Bind the VAO
  gl.bindVertexArray(buffers.vao);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.ibo);

  // Draw to the scene using triangle primitives
  gl.drawElements(gl.TRIANGLES, buffers.index_array.length, gl.UNSIGNED_SHORT, 0);

  // Clean
  gl.bindVertexArray(null);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
}


  export { draw };