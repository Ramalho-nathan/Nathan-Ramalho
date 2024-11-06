import React, { useEffect } from 'react'
import ParticleConfig from '../../assets/configParticle/particle.json'
function Particle() {
    useEffect(() =>{
        if(window.particlesJS) {
            window.particlesJS('particles-js', ParticleConfig);
        }
    }, []);
    return <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%' }}></div>;
}

export default Particle