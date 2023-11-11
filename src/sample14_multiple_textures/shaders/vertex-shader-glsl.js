 // Vertex shader program
 const vsSource = 
 `#version 300 es
 precision mediump float;

 in vec3 aVertexPosition;
 in vec3 aVertexNormal;
 in vec2 aVertexTextureCoord;

 uniform mat4 uModelMatrix;
 uniform mat4 uViewMatrix;
 uniform mat4 uProjectionMatrix;
 uniform mat4 uNormalMatrix;
 uniform vec3 uLightPosition;

 out vec3 vNormal;
 out vec3 vEyeVector;
 out vec3 vLightRay;
 out vec2 vTextureCoord;

 void main(void) {
  gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);
  vec4 light = vec4(uLightPosition, 1.0);

  vec4 vertex =  uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);
  vNormal = vec3(uNormalMatrix * vec4(aVertexNormal, 1.0));
  vEyeVector = -vec3(vertex.xyz);
  vLightRay = vertex.xyz - light.xyz;
  vTextureCoord = aVertexTextureCoord;
}
`;

export default vsSource;