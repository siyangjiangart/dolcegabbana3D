/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 ../public/model.gltf 
*/

import React from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('./model.gltf')
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera makeDefault={false} far={100} near={0.1} fov={39.598} position={[10.245, 1.332, 6.738]} rotation={[0.078, 0.991, -0.049]} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials.base} position={[0, 0.829, 0]} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials.WoodFineDark003_4K} position={[0, -0.238, 0]} scale={2.104} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials.hand} position={[0, 1.689, 0]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['cuschi 1.001']} position={[-0.141, 2.238, -0.389]} rotation={[-0.032, -0.54, 0.411]} scale={0.82} />
      <mesh geometry={nodes.Cube003.geometry} material={materials.c2} position={[-0.111, 2.317, -1.387]} rotation={[-0.12, -0.604, 0.365]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials.c3} position={[-0.818, 2.225, 0.041]} rotation={[-0.039, 0.09, 0.429]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['cuschi 1']} position={[-1.097, 2.336, -1.158]} rotation={[0.053, -0.635, 0.551]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials.c2} position={[-0.846, 2.302, 1.309]} rotation={[-0.155, 0.83, 0.702]} />
      <mesh geometry={nodes.Cube.geometry} material={materials.c2} position={[0.125, 2.346, 1.271]} rotation={[0.064, 0.618, 0.326]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
