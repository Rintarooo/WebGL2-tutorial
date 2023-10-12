function deg2rad(x){
  return (x * Math.PI) / 180; 
}

function initTransforms(gl, program){
  const 
    fov = 45,
    aspect = gl.canvas.clientWidth / gl.canvas.clientHeight,
    zNear = 0.1,
    zFar = 1000.0,
    projectionMatrix = mat4.create(),
    modelViewMatrix = mat4.create();
  mat4.perspective(projectionMatrix, deg2rad(fov), aspect, zNear, zFar);

  const 
    camPos = [1.45, 1.1, 3.1],
    camAim = [0, 0, 0],
    camUp = [0, 1, 0];
  mat4.lookAt(modelViewMatrix, camPos, camAim, camUp);
  
  // Set the shader uniforms
  gl.uniformMatrix4fv(
    program.uProjectionMatrix,
    false,
    projectionMatrix
  );
  gl.uniformMatrix4fv(
    program.uModelViewMatrix,
    false,
    modelViewMatrix
  );
}

export { initTransforms };