import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import './App.css';
import {softShadows, OrbitControls} from '@react-three/drei';

softShadows();

function Box({position}){
  const mesh = useRef(null)
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.02))
  
  return(
      <mesh castShadow position = {position} ref = {mesh}>
          <boxBufferGeometry attach= 'geometry' args={[1,1,1]} />
          <meshStandardMaterial attach= 'material' color = 'pink'/> 
      </mesh>
  )
}




function App() {
  

  return (
    <>
      <Canvas shadows colorManangement camera = {{position: [-5, 2, 10], fov: 50}}>
        <ambientLight intensity = {0.2}/>
        <directionalLight
          castShadow 
          position = {[0,10,0]} 
          intensity = {1.5} 
          shadow-mapSize-Width = {1024}
          shadow-mapSize-Height = {1024}
          shadow-camera-far = {50}
          shadow-camera-left = {-10}
          shadow-camera-right = {10}
          shadow-camera-top = {10}
          shadow-camera-bottom = {-10}
          />
        <pointLight position = {[-10,0,20]} intensity={0.5}/>

        <group>
          <mesh receiveShadow rotation = {[-Math.PI / 2,0,1]} position = {[0,-3,0]}>
            <planeBufferGeometry attach='geometry' args = {[200,200]}/>
            <shadowMaterial attach='material' opacity = {0.3}/>  
         </mesh>
        </group>


        <Box position = {[0,0,0]}/>
        <Box position = {[4,0,-3]}/>
        <Box position = {[0,0,-5]}/>
        <Box position = {[5,0,-7]}/>
        
        
        
        <OrbitControls />

      </Canvas>
    </>
  );
}

export default App;
