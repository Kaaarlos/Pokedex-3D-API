import{
  Environment,
  OrbitControls,
  PerspectiveCamera,
}from "@react-three/drei";
import{Canvas} from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Pokedex } from "./component/pokedex";
import Scene from "./Scene";

function App() {
  const ref = useRef();
  return (
    <Scene/>
  );
}

export default App;
