import SceneInit from './lib/SceneInit';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const mainArea = new SceneInit('mainAreaScene');
    mainArea.initialize();
    mainArea.animate();

    const loader = new GLTFLoader();

    loader.load('./tc_gltf.gltf', (gltf) => {
      gltf.scene.rotation.y = 7;
      gltf.scene.position.y = -2;
	  gltf.scene.position.x = -2;
      gltf.scene.scale.set(0.3, 0.3, 0.3);
      mainArea.scene.add(gltf.scene);
    }, undefined, error => {
      console.error(error);
    });
