function initLights(gl, program) {
  // Material parameters for shading
  // http://www.barradeau.com/nicoptere/dump/materials.html 
  const 
      shininess = 1.0,//10,
      lightColor = [1, 1, 1, 1],
      lightAmbient = [1, 1, 1, 1],//[0.1, 0.1, 0.1, 1],//[0.03, 0.03, 0.03, 1],
      lightSpecular = [1, 1, 1, 1],
      lightPositon = [0, 9, 6],//[2.2, 1.4, -1],//[-0.6, -0.8, -1.4],//[-0.6, -1.5, -2.4],//[-3.0, -3.0, -3.0],
      materialDiffuse = [0.507, 0.507, 0.507, 1],//[46 / 256, 99 / 256, 191 / 256, 1],
      materialAmbient = [0.192, 0.192, 0.192, 1],//[1, 1, 1, 1],
      materialSpecular = [0.508, 0.508, 0.508, 1];//[1, 1, 1, 1];

  gl.uniform4fv(program.uLightDiffuse, lightColor);
  gl.uniform4fv(program.uLightAmbient, lightAmbient);
  gl.uniform4fv(program.uLightSpecular, lightSpecular);
  gl.uniform3fv(program.uLightDirection, lightPositon);
  gl.uniform4fv(program.uMaterialDiffuse, materialDiffuse);
  gl.uniform4fv(program.uMaterialAmbient, materialAmbient);
  gl.uniform4fv(program.uMaterialSpecular, materialSpecular);
  gl.uniform1f(program.uShininess, shininess);
}

export { initLights };