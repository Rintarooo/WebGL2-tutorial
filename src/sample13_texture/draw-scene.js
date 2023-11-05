// import { calcMatModel } from "./do-transforms.js";
import { updateTransforms } from "./do-transforms.js";

function drawScene(gl, program, buffers, degree, info_obj_trans, tex) {
  const width = gl.canvas.clientWidth;
  const height = gl.canvas.clientHeight;
  gl.canvas.width = width;
  gl.canvas.height = height;

  const clearColor = [0.7,0.7,0.7];
  gl.clearColor(...clearColor, 1); 
  gl.clearDepth(1.0); // Clear everything
  gl.enable(gl.DEPTH_TEST); // Enable depth testing
  gl.depthFunc(gl.LEQUAL); // Near things obscure far things
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);// Flip texture image
  // gl.enable(gl.BLEND);
  // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  // Bind the VAO
  gl.bindVertexArray(buffers.vao);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.ibo);

  // Bind Texture Coord
  // gl.bindBuffer(gl.ARRAY_BUFFER, buffers.tex);
  // // // it tells gl context how to interpret the data in shader
  // gl.enableVertexAttribArray(program.aVertexTextureCoord);
  // gl.vertexAttribPointer(program.aVertexTextureCoord, 2, gl.FlOAT, false, 0, 0)
  
  /*  
  const tex = gl.createTexture();
  const img = new Image();
  if (!img) {
    console.log('Failed to create the image object');
  }
  // gl.bindTexture(gl.TEXTURE_2D, tex);
  img.src='./textureImg/webgl.png';  
  img.onload=()=>{
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
    // 拡大
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    // 縮小
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);// gl.LINEAR_MIPMAP_LINEAR
    // gl.generateMipmap(gl.TEXTURE_2D);
    gl.bindTexture(gl.TEXTURE_2D, null);  
  };
  */


  // gl.TEXTURE0 + slot picks which of the texture read ports in the fragment shader to use
  gl.activeTexture(gl.TEXTURE0);
  // gl.TEXTURE_2D is the input slot we use to provide the GPU with information about the texture
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.uniform1i(program.uSampler, 0);
  

  // console.log( buffers.index_array_size );
  // console.log( "info_obj_trans.length: " + info_obj_trans.length);
  for (let i = 0; i < info_obj_trans.length; i++){
    updateTransforms(gl, program, degree, info_obj_trans[i]);
    gl.drawElements(gl.TRIANGLES, buffers.index_array_size, gl.UNSIGNED_SHORT, 0);
    // gl.enable(gl.CULL_FACE);
    // gl.cullFace(gl.FRONT);
    // gl.drawElements(gl.TRIANGLES, buffers.index_array_size, gl.UNSIGNED_SHORT, 0);
    // gl.cullFace(gl.BACK);
    // gl.drawElements(gl.TRIANGLES, buffers.index_array_size, gl.UNSIGNED_SHORT, 0);
    // gl.disable(gl.CULL_FACE);
}

  // Clean
  gl.bindVertexArray(null);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
  // gl.bindTexture(gl.TEXTURE_2D, null);
}

export { drawScene };