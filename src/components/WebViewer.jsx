import { useRef, useCallback, useEffect } from "react";

import { TonemapPlugin, ViewerApp, addBasePlugins } from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import scrollAnimation from "../utils/model-animation";

gsap.registerPlugin(ScrollTrigger);

function WebViewer() {
  const canvasRef = useRef(null);

  const memorizedScrollAnimation = useCallback((position, target, onUpdate) => {
    if (position && target && onUpdate) {
      scrollAnimation(position, target, onUpdate);
    }
  }, []);

  const setupViewer = useCallback(async () => {
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });

    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;

    await addBasePlugins(viewer);

    viewer.renderer.refreshPipeline();
    // Import and add a GLB file.
    await viewer.load("scene-black.glb");
    // await manager.addFromPath("scene-black.glb");
    (await viewer.addPlugin(TonemapPlugin)).config.clipBackground = true;

    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: true });

    window.scrollTo(0, 0);

    let needsUpdate = true;
    const onUpdate = () => {
      needsUpdate = true;
      viewer.setDirty();
    };
    viewer.addEventListener("preFrame", () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });

    memorizedScrollAnimation(position, target, onUpdate);
  }, []);

  useEffect(() => {
    setupViewer();
  }, []);

  return (
    <div id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef} />
    </div>
  );
}

export default WebViewer;
