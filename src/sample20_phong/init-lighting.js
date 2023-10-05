// import {shininess, lightColor, lightAmbient, lightSpecular, lightDirection, materialDiffuse, materialAmbient, materialSpecular} from '/bufferData/lighting.js'

function initLights(gl, program) {

    // https://github.com/Rintarooo/OpenGLCourseJP/blob/vm/src/shading_models/main.cpp#L341-L353
    // シェーディングのためのマテリアル情報
    // Material parameters for shading
    // Gold (http://www.barradeau.com/nicoptere/dump/materials.html)
    // Silver
    // static const glm::vec3 lightPos = glm::vec3(5.0f, 5.0f, 5.0f);
    // static const glm::vec3 diffColor = glm::vec3(0.50754f, 0.50754f, 0.50754);
    // static const glm::vec3 specColor = glm::vec3(0.508273f,0.508273f,0.508273f);
    // static const glm::vec3 ambiColor = glm::vec3(0.19225f, 0.19225f, 0.19225f);
    // static const float shininess = 51.2f;

    const 
        shininess = 1.0,//10,
        lightColor = [1, 1, 1, 1],
        lightAmbient = [0.03, 0.03, 0.03, 1],
        lightSpecular = [1, 1, 1, 1],
        lightDirection = [-0.6, -1.5, -2.4],//[-3.0, -3.0, -3.0]
        materialDiffuse = [0.507, 0.507, 0.507, 1],//[46 / 256, 99 / 256, 191 / 256, 1],
        materialAmbient = [0.192, 0.192, 0.192, 1],//[1, 1, 1, 1],
        materialSpecular = [0.508, 0.508, 0.508, 1];//[1, 1, 1, 1];

    gl.uniform4fv(program.uLightDiffuse, lightColor);
    gl.uniform4fv(program.uLightAmbient, lightAmbient);
    gl.uniform4fv(program.uLightSpecular, lightSpecular);
    gl.uniform3fv(program.uLightDirection, lightDirection);
    gl.uniform4fv(program.uMaterialDiffuse, materialDiffuse);
    gl.uniform4fv(program.uMaterialAmbient, materialAmbient);
    gl.uniform4fv(program.uMaterialSpecular, materialSpecular);
    gl.uniform1f(program.uShininess, shininess);
  }

  export { initLights };