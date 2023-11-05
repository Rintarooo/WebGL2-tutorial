function initTextures(gl){
  // gl.createTexture() returns a pointer to where the texture data will be stored in GPU memory
  const tex = gl.createTexture();
  const img = new Image();
  if (!img) {
    console.log('Failed to create the image object');
  }
  // gl.bindTexture(gl.TEXTURE_2D, tex);
  // img.src='./textureImg/webgl.png';
  // img.src='./textureImg/bobobo.png';
  img.src='./textureImg/p1.png';
  // console.log("img.width: " + img.width);
  // console.log("img.height: " + img.height);

  
  img.onload=()=>{
    // handleTextureLoaded(img, tex);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    // // Set the parameters so we don't need mips
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    
    
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, img);
    // 拡大
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    // 縮小
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);// gl.LINEAR_MIPMAP_LINEAR
    gl.generateMipmap(gl.TEXTURE_2D);
    
    // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    gl.bindTexture(gl.TEXTURE_2D, null);  
  };



  // gl.bindTexture(gl.TEXTURE_2D, tex);
  // // Set the parameters so we don't need mips
  // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  // img.src='./textureImg/webgl.png';
  // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
  // gl.bindTexture(gl.TEXTURE_2D, null);   

  
  return tex;
}

// function handleTextureLoaded(gl, img, tex){
//   gl.bindTexture(gl.TEXTURE_2D, tex);
//   gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
//   // 拡大
//   gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
//   // 縮小
//   gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);// gl.LINEAR_MIPMAP_NEAREST
//   gl.generateMipmap(gl.TEXTURE_2D);
//   gl.bindTexture(gl.TEXTURE_2D, null);
// }

export { initTextures };

