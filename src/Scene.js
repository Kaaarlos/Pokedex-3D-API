import react from "react";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Pokedex } from "./component/pokedex";

export default function Scene() {
  const ref = useRef();
  return (
    <div className="App">
      <Canvas
        camera={{
          position: [50, 0, 0],
          fov: 80,
        }}
      >
        <Suspense fallback={null}>
            <Pokedex />
        </Suspense>
        <directionalLight
            position={[10,10,10]}
            color={'#fff'}
            intensity={1.3}
        />
        <ambientLight intensity = {.5} color={'#fff'}/>

        <OrbitControls/>
      </Canvas>
    </div>
  );
}
