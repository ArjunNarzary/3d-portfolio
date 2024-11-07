import { Suspense } from 'react';

import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Colors from '../../Colors';
import CanvasLoader from '../Loader';

interface IBallCanvasProps {
    icon: string;
}
interface IBallProps {
    imgUrl: string;
}
const Ball = ({ imgUrl }: IBallProps) => {
    const [decal] = useTexture([imgUrl]);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial color={Colors.mashColor} polygonOffset polygonOffsetFactor={-5} flatShading />
                <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} />
            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon }: IBallCanvasProps) => {
    return (
        <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={icon} />
            </Suspense>
            
            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;
