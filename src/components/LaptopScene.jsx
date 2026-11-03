import React, { Component, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const CHARACTER_IMAGE = '/images/abirami-laptop.png';

function CharacterImage({ texture }) {
  const characterRef = useRef();
  const { viewport } = useThree();

  const [width, height] = useMemo(() => {
    const aspect = texture.image.width / texture.image.height;
    const imageHeight = Math.min(viewport.height * 0.88, (viewport.width * 0.9) / aspect);
    return [imageHeight * aspect, imageHeight];
  }, [texture, viewport.height, viewport.width]);

  useFrame((state) => {
    if (!characterRef.current) return;
    const time = state.clock.getElapsedTime();
    characterRef.current.position.y = -0.08 + Math.sin(time * 0.8) * 0.06;
    characterRef.current.rotation.y = Math.sin(time * 0.45) * 0.07;
    characterRef.current.rotation.z = Math.sin(time * 0.6) * 0.012;
  });

  return (
    <group ref={characterRef} position={[0, -0.08, 0]}>
      <mesh>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial
          map={texture}
          transparent
          alphaTest={0.02}
          side={THREE.DoubleSide}
          toneMapped={false}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function FloatingTechBadge({ position, label, color, iconSymbol, speed = 1, delay = 0 }) {
  const badgeRef = useRef();

  useFrame((state) => {
    if (!badgeRef.current) return;
    const time = state.clock.getElapsedTime() * speed + delay;
    badgeRef.current.position.y = position[1] + Math.sin(time) * 0.12;
    badgeRef.current.rotation.y = Math.sin(time * 0.7) * 0.2;
    badgeRef.current.rotation.z = Math.cos(time * 0.5) * 0.1;
  });

  const badgeTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 128;
    const context = canvas.getContext('2d');

    context.fillStyle = 'rgba(12, 10, 24, 0.95)';
    context.strokeStyle = color;
    context.lineWidth = 6;

    const radius = 24;
    context.beginPath();
    context.moveTo(radius, 0);
    context.lineTo(256 - radius, 0);
    context.quadraticCurveTo(256, 0, 256, radius);
    context.lineTo(256, 128 - radius);
    context.quadraticCurveTo(256, 128, 256 - radius, 128);
    context.lineTo(radius, 128);
    context.quadraticCurveTo(0, 128, 0, 128 - radius);
    context.lineTo(0, radius);
    context.quadraticCurveTo(0, 0, radius, 0);
    context.closePath();
    context.fill();
    context.stroke();

    context.fillStyle = color;
    context.font = 'bold 36px "Outfit", sans-serif';
    context.textAlign = 'center';
    context.fillText(iconSymbol, 55, 78);

    context.fillStyle = '#ffffff';
    context.font = 'bold 28px "Outfit", sans-serif';
    context.textAlign = 'left';
    context.fillText(label, 95, 75);

    return new THREE.CanvasTexture(canvas);
  }, [label, color, iconSymbol]);

  return (
    <group ref={badgeRef} position={position}>
      <mesh>
        <planeGeometry args={[1.1, 0.55]} />
        <meshBasicMaterial map={badgeTexture} transparent side={THREE.DoubleSide} />
      </mesh>
      <pointLight color={color} intensity={0.5} distance={1.2} />
    </group>
  );
}

function Scene({ characterTexture }) {
  const { viewport } = useThree();
  const sidePosition = Math.max(0, Math.min(1.8, viewport.width * 0.27, viewport.width / 2 - 0.72));
  const upperPosition = Math.min(1.55, viewport.height * 0.36);
  const lowerPosition = -Math.min(0.9, viewport.height * 0.22);
  const bottomPosition = -Math.min(1.4, viewport.height * 0.33);

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 5, 4]} intensity={1.8} color="#00f0ff" />
      <pointLight position={[-4, 3, -2]} intensity={2.5} color="#8b5cf6" />
      <pointLight position={[3, -2, 2]} intensity={1.2} color="#a855f7" />

      <Stars radius={40} depth={20} count={600} factor={3} saturation={1} fade speed={1.2} />
      {characterTexture && <CharacterImage texture={characterTexture} />}

      <FloatingTechBadge position={[-sidePosition, upperPosition - 0.35, 0.2]} label="Java 21" color="#f97316" iconSymbol="☕" speed={1.1} delay={0.2} />
      <FloatingTechBadge position={[sidePosition, upperPosition - 0.4, 0.15]} label="React" color="#00f0ff" iconSymbol="⚛" speed={0.9} delay={1.4} />
      <FloatingTechBadge position={[-sidePosition, lowerPosition, 0.3]} label="Spring" color="#22c55e" iconSymbol="🌱" speed={1.2} delay={2.1} />
      <FloatingTechBadge position={[sidePosition, lowerPosition, 0.25]} label="MySQL" color="#38bdf8" iconSymbol="🐬" speed={1.0} delay={0.8} />
      <FloatingTechBadge position={[-sidePosition * 0.72, upperPosition, -0.5]} label="JS / TS" color="#eab308" iconSymbol="⚡" speed={0.8} delay={1.8} />
      <FloatingTechBadge position={[sidePosition * 0.72, upperPosition - 0.05, -0.4]} label="HTML/CSS" color="#ec4899" iconSymbol="🌐" speed={1.3} delay={2.6} />
      <FloatingTechBadge position={[0, bottomPosition, 0.4]} label="ESP32 IoT" color="#a855f7" iconSymbol="📡" speed={0.7} delay={3.0} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2 + 0.1}
        minPolarAngle={Math.PI / 3}
        maxAzimuthAngle={Math.PI / 4}
        minAzimuthAngle={-Math.PI / 4}
      />
    </>
  );
}

function CharacterFallback() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center sm:h-[480px] lg:h-[540px]">
      <img
        src={CHARACTER_IMAGE}
        alt="Abirami sitting behind a laptop"
        className="h-full max-h-[400px] w-auto max-w-full object-contain drop-shadow-[0_0_35px_rgba(139,92,246,0.35)] sm:max-h-[480px] lg:max-h-[540px]"
      />
    </div>
  );
}

class SceneErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D hero scene failed; showing the character image fallback.', error, errorInfo);
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch {
    return false;
  }
}

export default function HeroCharacterScene() {
  const [hasWebGL] = useState(supportsWebGL);
  const [characterTexture, setCharacterTexture] = useState(null);

  useEffect(() => {
    let active = true;
    let loadedTexture;
    const image = new window.Image();
    image.onload = () => {
      if (!active) return;
      loadedTexture = new THREE.Texture(image);
      loadedTexture.colorSpace = THREE.SRGBColorSpace;
      loadedTexture.anisotropy = 8;
      loadedTexture.needsUpdate = true;
      setCharacterTexture(loadedTexture);
    };
    image.onerror = () => {
      if (!active) return;
      console.error(`Unable to load hero character at ${CHARACTER_IMAGE}.`);
    };
    image.src = CHARACTER_IMAGE;

    return () => {
      active = false;
      image.onload = null;
      image.onerror = null;
      loadedTexture?.dispose();
    };
  }, []);

  if (!hasWebGL) return <CharacterFallback />;

  return (
    <div className="relative flex h-[400px] w-full items-center justify-center select-none sm:h-[480px] lg:h-[540px]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-purple-600/25 via-indigo-600/10 to-cyan-400/25 blur-[80px] sm:h-[450px] sm:w-[450px]" />
      </div>
      <SceneErrorBoundary fallback={<CharacterFallback />}>
        <Canvas
          camera={{ position: [0, 1.2, 5], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="h-full w-full"
        >
          <Scene characterTexture={characterTexture} />
        </Canvas>
      </SceneErrorBoundary>
      {!characterTexture && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <img
            src={CHARACTER_IMAGE}
            alt="Abirami sitting behind a laptop"
            className="h-full max-h-[400px] w-auto max-w-full object-contain sm:max-h-[480px] lg:max-h-[540px]"
          />
        </div>
      )}
      <div className="pointer-events-none absolute bottom-1 right-2 flex items-center gap-2 rounded-full border border-purple-500/20 bg-[#090814]/70 px-3 py-1 text-[11px] font-mono text-purple-300/60 backdrop-blur-sm sm:right-6">
        <span className="h-2 w-2 animate-ping rounded-full bg-cyan-400" />
        <span>Drag to rotate 3D view</span>
      </div>
    </div>
  );
}
