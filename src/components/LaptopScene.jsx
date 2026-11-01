import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

function useCodeDisplayTexture() {
  return useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 640;
    const ctx = canvas.getContext('2d');

    // IDE background
    ctx.fillStyle = '#080812';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // IDE Top Bar
    ctx.fillStyle = '#121124';
    ctx.fillRect(0, 0, canvas.width, 48);

    // Window controls
    ctx.fillStyle = '#ff5f56';
    ctx.beginPath();
    ctx.arc(24, 24, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffbd2e';
    ctx.beginPath();
    ctx.arc(46, 24, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#27c93f';
    ctx.beginPath();
    ctx.arc(68, 24, 7, 0, Math.PI * 2);
    ctx.fill();

    // Tab title
    ctx.fillStyle = '#a855f7';
    ctx.font = 'bold 18px "JetBrains Mono", monospace';
    ctx.fillText('LifeConnectController.java', 105, 30);

    ctx.fillStyle = '#64748b';
    ctx.font = '16px "JetBrains Mono", monospace';
    ctx.fillText('App.jsx', 370, 30);
    ctx.fillText('esp32_firmware.cpp', 480, 30);

    // Code lines with vibrant syntax highlighting
    const lines = [
      { text: '// Abirami R V — Full Stack & IoT Engineering', color: '#6b7280' },
      { text: '@RestController', color: '#f43f5e' },
      { text: '@RequestMapping("/api/v1/lifeconnect")', color: '#38bdf8' },
      { text: 'public class LifeConnectService {', color: '#c084fc' },
      { text: '    @Autowired private DonorRepository donorRepo;', color: '#e2e8f0' },
      { text: '    @Autowired private EmergencyMatcher emergencyService;', color: '#e2e8f0' },
      { text: '', color: '#ffffff' },
      { text: '    @PostMapping("/match/emergency")', color: '#00f0ff' },
      { text: '    public ResponseEntity<List<Donor>> findImmediateDonors(', color: '#818cf8' },
      { text: '            @RequestBody EmergencyQuery query) {', color: '#a78bfa' },
      { text: '        GeoLocation patientLocation = query.getLocation();', color: '#f3f4f6' },
      { text: '        BloodGroup requiredGroup = query.getBloodGroup();', color: '#f3f4f6' },
      { text: '        // Real-time geospatial distance calculation (Leaflet)', color: '#4ade80' },
      { text: '        return ResponseEntity.ok(emergencyService.getNearest(patientLocation, requiredGroup));', color: '#38bdf8' },
      { text: '    }', color: '#818cf8' },
      { text: '}', color: '#c084fc' },
      { text: '// ESP32 Realtime Transit Status: [ACTIVE] WiFi AP Connected', color: '#00f0ff' }
    ];

    ctx.font = '20px "JetBrains Mono", monospace';
    let y = 85;
    lines.forEach((line, index) => {
      ctx.fillStyle = '#334155';
      ctx.fillText(String(index + 1).padStart(2, '0'), 25, y);

      ctx.fillStyle = line.color;
      ctx.fillText(line.text, 65, y);
      y += 32;
    });

    ctx.fillStyle = '#00f0ff';
    ctx.fillRect(850, 435, 12, 24);

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 16;
    return texture;
  }, []);
}

function LaptopModel({ mousePos }) {
  const laptopGroupRef = useRef();
  const screenTexture = useCodeDisplayTexture();

  useFrame((state) => {
    if (!laptopGroupRef.current) return;
    const t = state.clock.getElapsedTime();
    laptopGroupRef.current.position.y = Math.sin(t * 0.8) * 0.08 - 0.2;
    laptopGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      laptopGroupRef.current.rotation.y,
      Math.sin(t * 0.4) * 0.15 + (mousePos.x * 0.3),
      0.05
    );
    laptopGroupRef.current.rotation.x = THREE.MathUtils.lerp(
      laptopGroupRef.current.rotation.x,
      0.15 - (mousePos.y * 0.2),
      0.05
    );
  });

  return (
    <group ref={laptopGroupRef} position={[0, -0.2, 0]} rotation={[0.15, -0.15, 0]}>
      {/* LAPTOP BASE CHASSIS */}
      <mesh position={[0, -0.05, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.1, 2.2]} />
        <meshStandardMaterial color="#12111d" metalness={0.85} roughness={0.25} />
      </mesh>

      {/* Chassis Edge Trim */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[3.22, 0.02, 2.22]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.6} />
      </mesh>

      {/* KEYBOARD RECESS */}
      <mesh position={[0, 0.005, -0.2]}>
        <boxGeometry args={[2.7, 0.02, 1.2]} />
        <meshStandardMaterial color="#08070f" metalness={0.5} roughness={0.6} />
      </mesh>

      {/* KEYBOARD KEYS ROW */}
      <mesh position={[0, 0.02, -0.2]}>
        <boxGeometry args={[2.6, 0.015, 1.1]} />
        <meshStandardMaterial color="#1e1c33" roughness={0.4} emissive="#7c3aed" emissiveIntensity={0.15} />
      </mesh>

      {/* TRACKPAD */}
      <mesh position={[0, 0.005, 0.65]}>
        <boxGeometry args={[0.9, 0.01, 0.6]} />
        <meshStandardMaterial color="#1a1829" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* HINGE */}
      <mesh position={[0, 0.02, -1.08]}>
        <cylinderGeometry args={[0.06, 0.06, 3.0, 16]} rotation={[0, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#2d2a45" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* LAPTOP SCREEN */}
      <group position={[0, 0.02, -1.08]} rotation={[-1.15, 0, 0]}>
        <mesh position={[0, 1.05, -0.04]} castShadow>
          <boxGeometry args={[3.2, 2.1, 0.06]} />
          <meshStandardMaterial color="#100f1c" metalness={0.9} roughness={0.2} />
        </mesh>

        <mesh position={[0, 1.05, -0.075]}>
          <circleGeometry args={[0.22, 32]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1.5} roughness={0.1} />
        </mesh>

        <mesh position={[0, 1.05, 0.01]}>
          <boxGeometry args={[3.15, 2.05, 0.02]} />
          <meshStandardMaterial color="#05050a" roughness={0.8} />
        </mesh>

        <mesh position={[0, 1.05, 0.025]}>
          <planeGeometry args={[2.95, 1.85]} />
          <meshBasicMaterial map={screenTexture} toneMapped={false} />
        </mesh>

        <mesh position={[0, 2.02, 0.025]}>
          <circleGeometry args={[0.015, 16]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.8} />
        </mesh>
      </group>
    </group>
  );
}

function FloatingTechBadge({ position, label, color, iconSymbol, speed = 1, delay = 0 }) {
  const badgeRef = useRef();

  useFrame((state) => {
    if (!badgeRef.current) return;
    const t = state.clock.getElapsedTime() * speed + delay;
    badgeRef.current.position.y = position[1] + Math.sin(t) * 0.12;
    badgeRef.current.rotation.y = Math.sin(t * 0.7) * 0.2;
    badgeRef.current.rotation.z = Math.cos(t * 0.5) * 0.1;
  });

  const badgeTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(12, 10, 24, 0.95)';
    ctx.strokeStyle = color;
    ctx.lineWidth = 6;
    
    const r = 24;
    ctx.beginPath();
    ctx.moveTo(r, 0);
    ctx.lineTo(256 - r, 0);
    ctx.quadraticCurveTo(256, 0, 256, r);
    ctx.lineTo(256, 128 - r);
    ctx.quadraticCurveTo(256, 128, 256 - r, 128);
    ctx.lineTo(r, 128);
    ctx.quadraticCurveTo(0, 128, 0, 128 - r);
    ctx.lineTo(0, r);
    ctx.quadraticCurveTo(0, 0, r, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.font = 'bold 36px "Outfit", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(iconSymbol, 55, 78);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px "Outfit", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(label, 95, 75);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, [label, color, iconSymbol]);

  return (
    <group ref={badgeRef} position={position}>
      <mesh castShadow>
        <planeGeometry args={[1.1, 0.55]} />
        <meshBasicMaterial map={badgeTexture} transparent={true} side={THREE.DoubleSide} />
      </mesh>
      <pointLight color={color} intensity={0.5} distance={1.2} />
    </group>
  );
}

function Scene({ mousePos }) {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 5, 4]} intensity={1.8} color="#00f0ff" />
      <pointLight position={[-4, 3, -2]} intensity={2.5} color="#8b5cf6" />
      <pointLight position={[3, -2, 2]} intensity={1.2} color="#a855f7" />

      <Stars radius={40} depth={20} count={600} factor={3} saturation={1} fade speed={1.2} />

      <LaptopModel mousePos={mousePos} />

      <FloatingTechBadge position={[-2.3, 1.4, 0.4]} label="Java 21" color="#f97316" iconSymbol="☕" speed={1.1} delay={0.2} />
      <FloatingTechBadge position={[2.3, 1.3, 0.3]} label="React" color="#00f0ff" iconSymbol="⚛" speed={0.9} delay={1.4} />
      <FloatingTechBadge position={[-2.4, -0.6, 0.8]} label="Spring" color="#22c55e" iconSymbol="🌱" speed={1.2} delay={2.1} />
      <FloatingTechBadge position={[2.4, -0.5, 0.7]} label="MySQL" color="#38bdf8" iconSymbol="🐬" speed={1.0} delay={0.8} />
      <FloatingTechBadge position={[-1.7, 2.3, -0.5]} label="JS / TS" color="#eab308" iconSymbol="⚡" speed={0.8} delay={1.8} />
      <FloatingTechBadge position={[1.7, 2.2, -0.4]} label="HTML/CSS" color="#ec4899" iconSymbol="🌐" speed={1.3} delay={2.6} />
      <FloatingTechBadge position={[0, -1.5, 1.0]} label="ESP32 IoT" color="#a855f7" iconSymbol="📡" speed={0.7} delay={3.0} />

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

function LaptopFallback() {
  return (
    <div className="relative w-full h-[380px] sm:h-[460px] flex items-center justify-center p-4">
      <div className="relative w-full max-w-[480px] bg-[#0c0a1a] rounded-2xl border-2 border-purple-500/40 p-5 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-purple-500/20">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs font-mono text-purple-300">LifeConnectApplication.java</span>
          <span className="text-xs text-cyan-400 font-mono">AR 3D IDE</span>
        </div>
        <pre className="font-mono text-xs sm:text-sm text-gray-300 space-y-1 overflow-hidden leading-relaxed">
          <div className="text-purple-400">@SpringBootApplication</div>
          <div className="text-cyan-300">public class LifeConnect &#123;</div>
          <div className="text-emerald-400 pl-4">// Abirami R V — Full Stack Developer</div>
          <div className="text-yellow-300 pl-4">public static void main(String[] args) &#123;</div>
          <div className="text-blue-300 pl-8">SpringApplication.run(LifeConnect.class, args);</div>
          <div className="text-yellow-300 pl-4">&#125;</div>
          <div className="text-cyan-300">&#125;</div>
        </pre>
        <div className="mt-4 pt-3 border-t border-purple-500/20 flex flex-wrap gap-2">
          {['☕ Java', '⚛ React.js', '🌱 Spring Boot', '🐬 MySQL', '📡 ESP32'].map((tech) => (
            <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded-lg bg-purple-500/20 text-cyan-300 border border-cyan-400/30">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LaptopScene() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!hasWebGL) {
    return <LaptopFallback />;
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-gradient-to-tr from-purple-600/20 via-indigo-600/10 to-cyan-400/20 blur-[80px] -z-10 animate-pulse-glow" />
      </div>

      <Suspense fallback={<LaptopFallback />}>
        <Canvas
          camera={{ position: [0, 1.2, 5.0], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="w-full h-full"
        >
          <Scene mousePos={mousePos} />
        </Canvas>
      </Suspense>

      <div className="absolute bottom-1 right-2 sm:right-6 pointer-events-none flex items-center gap-2 text-[11px] font-mono text-purple-300/60 bg-[#090814]/70 px-3 py-1 rounded-full border border-purple-500/20 backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>Drag to rotate 3D view</span>
      </div>
    </div>
  );
}
