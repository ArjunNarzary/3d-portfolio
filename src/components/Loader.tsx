import { Html, useProgress } from '@react-three/drei';

import Colors from '../Colors';

const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html>
            <span className="canvas-load"></span>
            <p
                style={{
                    fontSize: 14,
                    color: Colors.lightWhite,
                    fontWeight: 800,
                    marginTop: 40,
                }}
            >
                {progress.toFixed(2)}%
            </p>
        </Html>
    );
};

export default Loader;
