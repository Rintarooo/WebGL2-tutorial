 // Vertex shader program
 const vsSource = 
 `#version 300 es
 precision mediump float;

 // Supplied vertex position attribute
 in vec3 aVertexPosition;
 in vec3 aVertexColor;
 uniform mat4 uModelViewMatrix;
 uniform mat4 uProjectionMatrix;
 out vec4 vVertexColor;

 void main(void) {
   // Set the position in clipspace coordinates
   gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);
   vVertexColor = vec4(aVertexColor, 1.0);
 }
`;

export default vsSource;

