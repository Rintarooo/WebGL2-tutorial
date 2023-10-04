function initTransforms(gl, program, degree){
      const fieldOfView = (60 * Math.PI) / 180; // in radians
      const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
      const zNear = 0.1;
      const zFar = 1000.0;
      const projectionMatrix = mat4.create();
      mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

      // let camPos = [1.45,1.1,3.1];
      
      // 360で割った余りを計算
      degree = degree % 360;
      // 角度をラジアンに変換
      const radian = degree * (Math.PI / 180);
      const radius = 3.0;
      // cos, sin関数に入力
      const camPosX = radius * Math.cos(radian);
      const camPosZ = radius * Math.sin(radian);
      // console.log("Cosine of " + degree + " degrees: " + camPosX);
      // console.log("Sine of " + degree + " degrees: " + camPosY);
      let camPos = [camPosX, 1.1, camPosZ];
      
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