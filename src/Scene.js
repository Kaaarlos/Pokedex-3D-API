import react from "react";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Pokedex } from "./component/pokedex";
import * as THREE from 'three'
import { Color } from 'three';

export default function Scene() {
  const ref = useRef();
  return (
    <div className="App">
      <Canvas
        camera={{
          position: [50, 10, 0],
          fov: 75,
        }}
        gl={{
          outputEncoding: THREE.sRGBEncoding,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.9,
        }}
      >
        <Suspense fallback={null}>
            <PresentationControls
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
            <Pokedex />
          </PresentationControls>
        </Suspense>
        <directionalLight
            position={[10,10,10]}
            color={'#fff'}
            intensity={1.3}
        />
        <ambientLight intensity = {.5} color={'#fff'}/>
      </Canvas>
    </div>
  );
}
