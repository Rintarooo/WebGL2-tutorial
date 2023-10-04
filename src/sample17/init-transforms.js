
function initTransforms(gl, program){
    // Create a perspective matrix, a special matrix that is
      // used to simulate the distortion of perspective in a camera.
      // Our field of view is 45 degrees, with a width/height
      // and we only want to see objects between 0.1 units
      // and 100 units away from the camera.
      

      const fieldOfView = (45 * Math.PI) / 180; // in radians
      const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
      const zNear = 0.1;
      const zFar = 1000.0;
      const projectionMatrix = mat4.create();
    
      // note: glmatrix.js always has the first argument
      // as the destination to receive the result.
      mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

      // https://github.com/sessamekesh/IndigoCS-webgl-tutorials/blob/dff2ce9800d5cabc5bf8e226b8fce1df0df2f489/02%20-%20Rotating%20Cube/app.js#L189-L197
      // https://github.com/Rintarooo/OpenGLCourseJP/blob/8c44261979c88b02b6ba0d373ec07963b5126d3a/src/shading_models/main.cpp#L341-L353

      var camPos = [1.45,1.1,3.1];//[3.15,1.45,3.1];//[5,5,5];//[500, 300, 500];
      var camAim = [0,0,0]//[0,0,-8];//[0, -100, 0];
      var camUp = [0, 1, 0];

      // // Compute the camera's matrix using look at.
      // var cameraMatrix = mat4.lookAt(cameraPosition, cameraTarget, up);
      // const viewMatrix = mat4.create();
      // mat4.lookAt(viewMatrix, camAim, camPos, camUp);
      // const modelMatrix = mat4.create();
      // mat4.identity(modelMatrix);

      // mat4.lookAt(cameraMatrix, [0, 0, -8], [0, 0, 0], [0, 1, 0]);

      // // Make a view matrix from the camera matrix.
      // var viewMatrix = mat4.inverse(cameraMatrix);

      // // create a viewProjection matrix. This will both apply perspective
      // // AND move the world so that the camera is effectively the origin
      // var viewProjectionMatrix = mat4.multiply(projectionMatrix, viewMatrix);

      // Set the drawing position to the "identity" point, which is
      // the center of the scene.
      const modelViewMatrix = mat4.create();
      // const modelViewMatrix = mat4.multiply(viewMatrix, modelMatrix);
      // mat4.lookAt(modelViewMatrix, [0, 0, -8], [0, 0, 0], [0, 1, 0]);
      // mat4.lookAt(modelViewMatrix, ...camAim, ...camPos, ...camUp);
      // mat4.lookAt(modelViewMatrix, camAim, camPos, camUp);
      mat4.lookAt(modelViewMatrix, camPos, camAim, camUp);

      // const cubeRotation = 1.5;
    
      // // Now move the drawing position a bit to where we want to
      // // start drawing the square.
      // mat4.translate(
      //   modelViewMatrix, // destination matrix
      //   modelViewMatrix, // matrix to translate
      //   [-0.0, 0.0, -6.0]
      // ); // amount to translate
    
      // mat4.rotate(
      //   modelViewMatrix, // destination matrix
      //   modelViewMatrix, // matrix to rotate
      //   cubeRotation, // amount to rotate in radians
      //   [0, 0, 1]
      // ); // axis to rotate around (Z)
      // mat4.rotate(
      //   modelViewMatrix, // destination matrix
      //   modelViewMatrix, // matrix to rotate
      //   cubeRotation * 0.7, // amount to rotate in radians
      //   [0, 1, 0]
      // ); // axis to rotate around (Y)
      // mat4.rotate(
      //   modelViewMatrix, // destination matrix
      //   modelViewMatrix, // matrix to rotate
      //   cubeRotation * 0.3, // amount to rotate in radians
      //   [1, 0, 0]
      // ); // axis to rotate around (X)
    
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