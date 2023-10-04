
function initTransforms(gl, program, x){
      const fieldOfView = (45 * Math.PI) / 180; // in radians
      const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
      const zNear = 0.1;
      const zFar = 1000.0;
      const projectionMatrix = mat4.create();
      mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

      // let camPos = [1.45,1.1,3.1];
      let camPos = [x,1.1,3.1];
      let camAim = [0,0,0]
      let camUp = [0, 1, 0];
      const modelViewMatrix = mat4.create();
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