// Fragment shader program
const fsSource =
`#version 300 es
 precision mediump float;
 
 out vec4 FragColor;
 
 void main(void) {
    FragColor = vec4(0.5, 1.0, 1.0, 1.0);
 }
`;

export default fsSource;