
// We call draw to render to our canvas
// function draw(gl, program, squareVertexBuffer, squareIndexBuffer) {
//     gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
//     gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  
//     // Use the buffers we've constructed
//     gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexBuffer);
//     gl.vertexAttribPointer(program.aVertexPosition, 3, gl.FLOAT, false, 0, 0);
//     gl.enableVertexAttribArray(program.aVertexPosition);
  
//     // Bind IBO
//     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, squareIndexBuffer);
  
//     // Indices defined in counter-clockwise order
//     const indices = [0, 1, 2, 0, 2, 3];

//     // Draw to the scene using triangle primitives
//     gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
  
//     // Clean
//     gl.bindBuffer(gl.ARRAY_BUFFER, null);
//     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
//   }

function draw(gl, program, buffers) {
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // Use the buffers we've constructed
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
  gl.vertexAttribPointer(program.aVertexPosition, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(program.aVertexPosition);

  // Bind IBO
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.index);

  // Indices defined in counter-clockwise order
  // const indices = [0, 1, 2, 0, 2, 3];
  // Draw to the scene using triangle primitives
  // gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
  gl.drawElements(gl.TRIANGLES, buffers.index_array.length, gl.UNSIGNED_SHORT, 0);

  // Clean
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
}


  export { draw };