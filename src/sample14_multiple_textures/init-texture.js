function initTextures(gl, img_url){
  const tex = gl.createTexture();
  const img = new Image();
  if (!img) {
    console.log('Failed to create the image object');
  }
  img.src = img_url;  
  img.onload=()=>{
    gl.bindTexture(gl.TEXTURE_2D, tex);    
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    // 拡大
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    // 縮小
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);// gl.LINEAR_MIPMAP_LINEAR
    gl.generateMipmap(gl.TEXTURE_2D);  
    gl.bindTexture(gl.TEXTURE_2D, null);  
  };  
  return tex;
}

export { initTextures };

