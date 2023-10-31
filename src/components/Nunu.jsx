/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from 'react';
import { useGLTF, useAnimations, useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Nunu(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/src/static/nunu.glb');
  const { actions } = useAnimations(animations, group); // list of animations can be found in /src/static/animations.md
  const [, getKeyboardInput] = useKeyboardControls();

  useFrame(() => {
    const { forward, backward, left, right } = getKeyboardInput();
    actions['nunu_idle01.anm'].play();
    if (forward || backward || left || right) {
      actions['nunu_run01.anm'].play();
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="SkinnedMesh">
        <group name="skinned_mesh">
          <skinnedMesh
            name="mesh_0"
            geometry={nodes.mesh_0.geometry}
            material={materials.Nunu_Base_Mat}
            skeleton={nodes.mesh_0.skeleton}
          />
          <skinnedMesh
            name="mesh_0_1"
            geometry={nodes.mesh_0_1.geometry}
            material={materials.willump}
            skeleton={nodes.mesh_0_1.skeleton}
          />
          <skinnedMesh
            name="mesh_0_2"
            geometry={nodes.mesh_0_2.geometry}
            material={materials.claws_short}
            skeleton={nodes.mesh_0_2.skeleton}
          />
          <skinnedMesh
            name="mesh_0_3"
            geometry={nodes.mesh_0_3.geometry}
            material={materials.claws_long}
            skeleton={nodes.mesh_0_3.skeleton}
          />
          <skinnedMesh
            name="mesh_0_4"
            geometry={nodes.mesh_0_4.geometry}
            material={materials.teeth_small}
            skeleton={nodes.mesh_0_4.skeleton}
          />
          <skinnedMesh
            name="mesh_0_5"
            geometry={nodes.mesh_0_5.geometry}
            material={materials.teeth_smile}
            skeleton={nodes.mesh_0_5.skeleton}
          />
          <skinnedMesh
            name="mesh_0_6"
            geometry={nodes.mesh_0_6.geometry}
            material={materials.teeth_big}
            skeleton={nodes.mesh_0_6.skeleton}
          />
          {/* <skinnedMesh
            name="mesh_0_7"
            geometry={nodes.mesh_0_7.geometry}
            material={materials.snowman}
            skeleton={nodes.mesh_0_7.skeleton}
          /> */}
          <primitive object={nodes.Root} />
          <primitive object={nodes.Root_Wil} />
          <primitive object={nodes.C_Lip_Low_B_SKN} />
          <primitive object={nodes.L_Lip_Low_B_SKN} />
          <primitive object={nodes.L_Lip_Low_Corner_B_SKN} />
          <primitive object={nodes.R_Lip_Low_B_SKN} />
          <primitive object={nodes.R_Lip_Low_Corner_B_SKN} />
          <primitive object={nodes.C_Buffbone_Glb_Layout_Loc} />
          <primitive object={nodes.C_Buffbone_Glb_Center_Loc} />
          <primitive object={nodes.Buffbone_Glb_Ground_Loc} />
          <primitive object={nodes.C_Buffbone_Glb_Overhead_Loc} />
          <primitive object={nodes.Buffbone_Glb_Channel_Loc} />
          <primitive object={nodes.Buffbone_Glb_Weapon_1} />
          <primitive object={nodes.L_Buffbone_Glb_Knee_Loc} />
          <primitive object={nodes.R_Buffbone_Glb_Knee_Loc} />
          <primitive object={nodes.Buffbone_Cstm_Healthbar} />
          {/* <primitive object={nodes.Snowman_Root} /> */}
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/src/static/nunu.glb');

export default Nunu;
