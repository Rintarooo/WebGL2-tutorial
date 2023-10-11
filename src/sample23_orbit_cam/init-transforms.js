import { mouse, wheel } from "./callback-events.js";

function deg2rad(x){
  return (x * Math.PI) / 180; 
}

function initTransforms(gl, program, degree){
  const 
    fov = Math.abs(wheel) % 180,//45,
    aspect = gl.canvas.clientWidth / gl.canvas.clientHeight,
    zNear = 0.1,
    zFar = 1000.0,
    projectionMatrix = mat4.create(),
    viewMatrix = mat4.create(),
    modelViewMatrix = mat4.create(),
    normalMatrix = mat4.create();
  mat4.perspective(projectionMatrix, deg2rad(fov), aspect, zNear, zFar);
      // console.log("mouse x: ", mouse.x);

      // let 
      //   // modelMatrix = mat4.create(),
      //   viewMatrix = mat4.create(),
      //   modelViewMatrix = mat4.create();
      // mat4.identity(modelMatrix);
      // mat4.translate(
      //   modelMatrix, // destination matrix
      //   modelMatrix, // matrix to translate
      //   [-0.0, 0.0, -5*degree]
      // ); // amount to translate

      // // // 360で割った余りを計算
      // degree = degree % 360;
      // // 角度をラジアンに変換
      // const radian = degree * (Math.PI / 180);
      
      // mat4.rotate(
      //   modelMatrix, // destination matrix
      //   modelMatrix, // matrix to rotate
      //   radian * 1.0, // amount to rotate in radians
      //   [0, 1, 0]
      // ); // axis to rotate around (Y)
      // mat4.translate(
      //   modelViewMatrix, // destination matrix
      //   modelViewMatrix, // matrix to translate
      //   [0,0,-1.0]
      // ); // amount to translate
      // mat4.rotate(
      //   modelViewMatrix, // destination matrix
      //   modelViewMatrix, // matrix to rotate
      //   mouse.x*0.1, // amount to rotate in radians
      //   // (mouse.x % 360) * (Math.PI / 180) * 1.5, // amount to rotate in radians
      //   [1, 0, 0]
      // ); // axis to rotate around (X)
        // mat4.rotate(
        //   modelViewMatrix, // destination matrix
        //   modelViewMatrix, // matrix to rotate
        //   radian * 50.0, // amount to rotate in radians
        //   [0, 1, 0]
        // ); // axis to rotate around (Y)
      // mat4.rotate(
      //   modelViewMatrix, // destination matrix
      //   modelViewMatrix, // matrix to rotate
      //   (mouse.y % 360) * (Math.PI / 180) * 1.5, // amount to rotate in radians
      //   [0, 0, 1]
      // ); // axis to rotate around (Z)

      // // console.log(modelMatrix);
      // // 360で割った余りを計算
      // degree = degree % 360;
      // // 角度をラジアンに変換
      // const radian = degree * (Math.PI / 180);
      const radius = 5.0;
      // // // cos, sin関数に入力
      // const camPosX = radius * Math.cos(radian);
      // const camPosZ = radius * Math.sin(radian);

      // const camPosX = radius * Math.cos(deg2rad(mouse.x))+1.45;
      // // const camPosZ = radius * Math.sin(mouse.y);
      // const camPosZ = radius * Math.sin(deg2rad(mouse.x))+3.1;
      // const camPosY = 1.1;//radius * Math.sin(deg2rad(mouse.y))+1.1;
      const 
        azimuth = mouse.x % 90, 
        elevation = mouse.y % 90;
      const 
        phi = deg2rad(90 - elevation),
        theta = deg2rad(azimuth);
      const
      camPosX = radius * Math.sin(phi) * Math.cos(theta),
      camPosY = radius * Math.cos(phi),
      camPosZ = radius * Math.sin(phi) * Math.sin(theta);
      // camPosX = 1.45 + radius * Math.sin(phi) * Math.cos(theta),
        // camPosY = 1.1 + radius * Math.cos(phi),
        // camPosZ = 3.1 + radius * Math.sin(phi) * Math.sin(theta);

      // // console.log("Cosine of " + degree + " degrees: " + camPosX);
      // // console.log("Sine of " + degree + " degrees: " + camPosY);
      console.log("camPosX: " + camPosX + ", camPosZ: " + camPosZ);

      const camPos = [camPosX, camPosY, camPosZ],//[camPosX, 1.1, camPosZ],//[1.45, 1.1, 3.1],//[camPosX, 1.1, 3.1],//[2*mouse.x, 1.1, 2*mouse.y],
            camAim = [0,0,0],//[0, 0, -1.0],
            camUp = [0, 1, 0];
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
      // let normalMatrix = mat4.create();
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