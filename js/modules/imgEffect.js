import {Curtains, Plane} from "curtainsjs";
import vs from "../shaders/vertex.glsl";
import fs from "../shaders/fragment.glsl";

export const imgEffect = () => {
  // set up our WebGL context and append the canvas to our wrapper
  const curtains = new Curtains({
    container: "canvas",
    watchScroll: false,
    pixelRatio: Math.min(1.5, window.devicePixelRatio), // limit pixel ratio for performance
  });

  const planeElements = document.getElementsByClassName("multi-textures");

  // here we will handle which texture is visible and the timer to transition between images
  const slideshowState = {
    activeTextureIndex: 1,
    nextTextureIndex: 2, // does not care for now
    maxTextures: planeElements[0].querySelectorAll("img").length - 1, // -1 because displacement image does not count

    isChanging: false,
    transitionTimer: 0,
  };

  curtains.disableDrawing();

  // some basic parameters
  const params = {
    vertexShader: vs,
    fragmentShader: fs,
    uniforms: {
      transitionTimer: {
        name: "uTransitionTimer",
        type: "1f",
        value: 0,
      },
    },
  };

  const multiTexturesPlane = new Plane(curtains, planeElements[0], params);

  multiTexturesPlane
    .onLoading((texture) => {
      texture.setMinFilter(curtains.gl.LINEAR_MIPMAP_NEAREST);
    })
    .onReady(() => {
      // first we set our very first image as the active texture
      const activeTex = multiTexturesPlane.createTexture({
        sampler: "activeTex",
        fromTexture: multiTexturesPlane.textures[slideshowState.activeTextureIndex],
      });

      // next we set the second image as next texture but this is not mandatory
      // as we will reset the next texture on slide change
      const nextTex = multiTexturesPlane.createTexture({
        sampler: "nextTex",
        fromTexture: multiTexturesPlane.textures[slideshowState.nextTextureIndex],
      });

      setInterval(() => {
        if (!slideshowState.isChanging) {
          curtains.enableDrawing();
        }

        slideshowState.isChanging = true;

        // check what will be next image
        if (slideshowState.activeTextureIndex < slideshowState.maxTextures) {
          slideshowState.nextTextureIndex = slideshowState.activeTextureIndex + 1;
        } else {
          slideshowState.nextTextureIndex = 1;
        }

        // apply it to our next texture
        nextTex.setSource(multiTexturesPlane.images[slideshowState.nextTextureIndex]);

        setTimeout(() => {
          // disable drawing now that the transition is over
          curtains.disableDrawing();

          slideshowState.isChanging = false;
          slideshowState.activeTextureIndex = slideshowState.nextTextureIndex;
          // our next texture becomes our active texture
          activeTex.setSource(multiTexturesPlane.images[slideshowState.activeTextureIndex]);
          // reset timer
          slideshowState.transitionTimer = 0;
        }, 1700); // add a bit of margin to the timer
        
      }, 4000);
    })
    .onRender(() => {
      // increase or decrease our timer based on the active texture value
      if (slideshowState.isChanging) {
        // use damping to smoothen transition
        slideshowState.transitionTimer += (90 - slideshowState.transitionTimer) * 0.04;

        // force end of animation as damping is slower the closer we get from the end value
        if (slideshowState.transitionTimer >= 88.5 && slideshowState.transitionTimer !== 90) {
          slideshowState.transitionTimer = 90;
        }
      }

      // update our transition timer uniform
      multiTexturesPlane.uniforms.transitionTimer.value = slideshowState.transitionTimer;
    });
};
