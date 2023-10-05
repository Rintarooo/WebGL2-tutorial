function initTransforms(gl, program, degree){
      const fieldOfView = (60 * Math.PI) / 180; // in radians
      const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
      const zNear = 0.1;
      const zFar = 1000.0;
      const projectionMatrix = mat4.create();
      mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

      let 
        // modelMatrix = mat4.create(),
        viewMatrix = mat4.create(),
        modelViewMatrix = mat4.create();
      // mat4.identity(modelMatrix);
      // mat4.translate(
      //   modelMatrix, // destination matrix
      //   modelMatrix, // matrix to translate
      //   [-0.0, 0.0, -5*degree]
      // ); // amount to translate
      // // 360で割った余りを計算
      degree = degree % 360;
      // 角度をラジアンに変換
      const radian = degree * (Math.PI / 180);
      // mat4.rotate(
      //   modelMatrix, // destination matrix
      //   modelMatrix, // matrix to rotate
      //   radian * 1.0, // amount to rotate in radians
      //   [0, 1, 0]
      // ); // axis to rotate around (Y)
      mat4.translate(
        modelViewMatrix, // destination matrix
        modelViewMatrix, // matrix to translate
        [0,0,-1.0]
      ); // amount to translate
      // mat4.rotate(
      //   modelViewMatrix, // destination matrix
      //   modelViewMatrix, // matrix to rotate
      //   radian * 0.8, // amount to rotate in radians
      //   [1, 0, 0]
      // ); // axis to rotate around (X)
      // mat4.rotate(
      //   modelViewMatrix, // destination matrix
      //   modelViewMatrix, // matrix to rotate
      //   radian * 0.1, // amount to rotate in radians
      //   [0, 0, 1]
      // ); // axis to rotate around (Z)
      mat4.rotate(
        modelViewMatrix, // destination matrix
        modelViewMatrix, // matrix to rotate
        radian * 50.0, // amount to rotate in radians
        [0, 1, 0]
      ); // axis to rotate around (Y)

      // console.log(modelMatrix);
      const camPos = [1.45, 1.1, 3.1], camAim = [0, 0, -1.0], camUp = [0, 1, 0];
      mat4.lookAt(viewMatrix, camPos, camAim, camUp);
      // mat4.multiply(modelViewMatrix, modelViewMatrix, viewMatrix);
      mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);

      // // 360で割った余りを計算
      // degree = degree % 360;
      // // 角度をラジアンに変換
      // const radian = degree * (Math.PI / 180);
      // const radius = 3.0;
      // // cos, sin関数に入力
      // const camPosX = radius * Math.cos(radian);
      // const camPosZ = radius * Math.sin(radian);
      // // console.log("Cosine of " + degree + " degrees: " + camPosX);
      // // console.log("Sine of " + degree + " degrees: " + camPosY);

      // let camPos = [camPosX, 1.1, camPosZ];
      
      //// normalMatrix
      let normalMatrix = mat4.create();
      mat4.copy(normalMatrix, modelViewMatrix);
      mat4.invert(normalMatrix, normalMatrix);
      mat4.transpose(normalMatrix, normalMatrix);
      gl.uniformMatrix4fv(program.uNormalMatrix, false, normalMatrix);

    
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