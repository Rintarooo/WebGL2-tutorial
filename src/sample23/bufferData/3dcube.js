/*
V3                    V2
(-0.5, 0.5, 0)        (0.5, 0.5, 0)
X---------------------X
|                     |
|                     |
|       (0, 0)        |
|                     |
|                     |
X---------------------X
V0                    V1
(-0.5, -0.5, 0)       (0.5, -0.5, 0)
*/
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
    0,
    1,
    2,
    0,
    2,
    3, // front
    4,
    5,
    6,
    4,
    6,
    7, // back
    8,
    9,
    10,
    8,
    10,
    11, // top
    12,
    13,
    14,
    12,
    14,
    15, // bottom
    16,
    17,
    18,
    16,
    18,
    19, // right
    20,
    21,
    22,
    20,
    22,
    23, // left
];

    
export {positions, colors, indices};