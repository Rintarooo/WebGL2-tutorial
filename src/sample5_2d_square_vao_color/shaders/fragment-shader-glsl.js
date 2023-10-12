// Fragment shader program
const fsSource =
`#version 300 es
 precision mediump float;
 
 in vec4 vVertexColor;
 out vec4 FragColor;

 void main(void) {
    FragColor = vVertexColor;
 }
`;

export default fsSource;