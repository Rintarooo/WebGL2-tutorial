 // Vertex shader program
 const vsSource = 
 `#version 300 es
 precision mediump float;

 // Supplied vertex position attribute
 in vec3 aVertexPosition;
 in vec3 aVertexNormal;

 uniform mat4 uModelViewMatrix;
 uniform mat4 uProjectionMatrix;
 uniform mat4 uNormalMatrix;
 uniform vec3 uLightPosition;

 out vec3 vNormal;
 out vec3 vEyeVector;
 out vec3 vLightRay;

 void main(void) {
  gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);
  vec4 light = uModelViewMatrix * vec4(uLightPosition, 1.0);

  vec4 vertex = uModelViewMatrix * vec4(aVertexPosition, 1.0);
  vNormal = vec3(uNormalMatrix * vec4(aVertexNormal, 1.0));
  vEyeVector = -vec3(vertex.xyz);
  vLightRay = vertex.xyz - light.xyz;
}
`;

export default vsSource;