// Fragment shader program
const fsSource =
`#version 300 es
precision mediump float;

uniform float uShininess;
uniform vec3 uLightPosition;
uniform vec4 uLightAmbient;
uniform vec4 uLightDiffuse;
uniform vec4 uLightSpecular;
uniform vec4 uMaterialAmbient;
uniform vec4 uMaterialDiffuse;
uniform vec4 uMaterialSpecular;
uniform sampler2D uSampler;

in vec3 vNormal;
in vec3 vEyeVector;
in vec3 vLightRay;
in vec2 vTextureCoord;

out vec4 FragColor;

void main(void) {
  // Normalized light direction
  vec3 L = normalize(vLightRay);

  // Normalized normal
  vec3 N = normalize(vNormal);

  float lambertTerm = dot(N, -L);
  // Ambient
  vec4 Ia = uLightAmbient * uMaterialAmbient;
  // Diffuse
  vec4 Id = vec4(0.0, 0.0, 0.0, 1.0);
  // Specular
  vec4 Is = vec4(0.0, 0.0, 0.0, 1.0);

  if (lambertTerm > 0.0) {
    Id = uLightDiffuse * uMaterialDiffuse * lambertTerm;
    vec3 E = normalize(vEyeVector);
    vec3 R = reflect(L, N);
    float specular = pow( max(dot(R, E), 0.0), uShininess);
    Is = uLightSpecular * uMaterialSpecular * specular;
  }

  // Final fargment color takes into account all light values that
  // were computed within the fragment shader
  vec4 LightingColor = vec4(vec3(Ia + Id + Is), 1.0);
  FragColor = LightingColor * texture(uSampler, vTextureCoord);
  // FragColor = texture(uSampler, vTextureCoord);
}
`;

export default fsSource;