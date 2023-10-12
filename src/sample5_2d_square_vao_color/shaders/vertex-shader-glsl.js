// Vertex shader program
const vsSource = 
`#version 300 es
 precision mediump float;

in vec2 aVertexPosition;
in vec3 aVertexColor;
out vec4 vVertexColor;

 void main(void) {
  gl_Position = vec4(aVertexPosition, 0.0, 1.0);
  vVertexColor = vec4(aVertexColor, 1.0);
}
`;

export default vsSource;