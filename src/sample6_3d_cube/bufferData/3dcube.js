/* 

       V7 (-0.5, 0.5, -0.5)_________ V6 (0.5, 0.5, -0.5)
       /|                          /|
      / |                         / |
V3 (-0.5, 0.5, 0.5)_________ V2 (0.5, 0.5, 0.5)
     |  |                        |  |
     |  | V4 (-0.5, -0.5, -0.5)  |  | V5 (0.5, -0.5, -0.5)
     | /                         | /
     |/                          |/
V0 (-0.5, -0.5, 0.5)_________ V1 (0.5, -0.5, 0.5)

*/

// Each vertex V0 ~ V7 has individual color in each face, so define 24 vertex position in this case.
const positions = [
    // Front face
    -0.5, -0.5, 0.5, 
    0.5, -0.5, 0.5, 
    0.5, 0.5, 0.5, 
    -0.5, 0.5, 0.5,

    // Back face
    -0.5, -0.5, -0.5, 
    -0.5, 0.5, -0.5, 
    0.5, 0.5, -0.5, 
    0.5, -0.5, -0.5,

    // Top face
    -0.5, 0.5, -0.5, 
    -0.5, 0.5, 0.5, 
    0.5, 0.5, 0.5, 
    0.5, 0.5, -0.5,

    // Bottom face
    -0.5, -0.5, -0.5, 
    0.5, -0.5, -0.5, 
    0.5, -0.5, 0.5, 
    -0.5, -0.5, 0.5,

    // Right face
    0.5, -0.5, -0.5, 
    0.5, 0.5, -0.5, 
    0.5, 0.5, 0.5, 
    0.5, -0.5, 0.5,

    // Left face
    -0.5, -0.5, -0.5, 
    -0.5, -0.5, 0.5, 
    -0.5, 0.5, 0.5, 
    -0.5, 0.5, -0.5,
    ];

const faceColors = [
    [1.0, 1.0, 1.0], // Front face: white
    [1.0, 0.0, 0.0], // Back face: red
    [0.0, 1.0, 0.0], // Top face: green
    [0.0, 0.0, 1.0], // Bottom face: blue
    [1.0, 1.0, 0.0], // Right face: yellow
    [1.0, 0.0, 1.0], // Left face: purple
    ];

    var colors = [];

    for (var j = 0; j < faceColors.length; ++j) {
    const c = faceColors[j];
    // Repeat each color four times for the four vertices of the face
    colors = colors.concat(c, c, c, c);
    }

// This array defines each face as two triangles, using the
// indices into the vertex array to specify each triangle's
// position.
const indices = [
    // Front face
    0, 1, 2,
    0, 2, 3,
    // Back face
    4, 5, 6,
    4, 6, 7,
    // Top face
    8, 9, 10,
    8, 10, 11,
    // Bottom face
    12, 13, 14,
    12, 14, 15,
    // Right face
    16, 17, 18,
    16, 18, 19,
    // Left face
    20, 21, 22,
    20, 22, 23
];

    
export {positions, colors, indices};