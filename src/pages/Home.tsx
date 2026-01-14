import Header from '../components/Header';
import Silk from '../components/Silk';

export default function Home() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
            <Header />
            <Silk
                speed={2}
                scale={1}
                color="#222222"
                noiseIntensity={0}
                rotation={0}
            />
        </div>
    );
}
