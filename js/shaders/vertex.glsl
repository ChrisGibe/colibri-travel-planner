precision mediump float;

// default mandatory variables
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

// varyings : notice we've got 3 texture coords varyings
// one for the displacement texture
// one for our visible texture
// and one for the upcoming texture
varying vec3 vVertexPosition;
varying vec2 vTextureCoord;
varying vec2 vActiveTextureCoord;
varying vec2 vNextTextureCoord;

// textures matrices
uniform mat4 activeTexMatrix;
uniform mat4 nextTexMatrix;

// custom uniforms
uniform float uTransitionTimer;


void main() {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);

    // varyings
    vTextureCoord = aTextureCoord;
    vActiveTextureCoord = (activeTexMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
    vNextTextureCoord = (nextTexMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;

    vVertexPosition = aVertexPosition;
}