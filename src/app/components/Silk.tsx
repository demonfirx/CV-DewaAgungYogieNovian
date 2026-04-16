import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { SilkFallback } from './SilkFallback';

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec3 uColor;
varying vec2 vUv;

// Simple 2D noise
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

// FBM
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  vec2 shift = vec2(100.0);
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < 5; ++i) {
    v += a * noise(p);
    p = rot * p * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 p = vUv * 3.0;
  
  // Create flowing silk motion
  vec2 q = vec2(0.);
  q.x = fbm(p + 0.00 * uTime);
  q.y = fbm(p + vec2(1.0));
  
  vec2 r = vec2(0.);
  r.x = fbm(p + 1.0 * q + vec2(1.7, 9.2) + 0.15 * uTime);
  r.y = fbm(p + 1.0 * q + vec2(8.3, 2.8) + 0.126 * uTime);
  
  float f = fbm(p + r);
  
  // Mix colors
  vec3 color1 = uColor * 0.3; // Darker variant
  vec3 color2 = uColor;       // Main color
  
  float mixFactor = f * f * f + 0.6 * f * f + 0.5 * f;
  vec3 color = mix(color1, color2, mixFactor * 1.2);
  
  // Bright Highlights
  color += vec3(0.8) * smoothstep(0.4, 0.8, f) * smoothstep(0.8, 0.4, f);
  
  gl_FragColor = vec4(color, 1.0);
}
`;

const SilkPlane = ({ color, speed = 1 }: { color: string, speed?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(() => {
    return {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(color) }
    };
  }, [color]);

  useFrame((state) => {
    if (meshRef.current && meshRef.current.material) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      if (material.uniforms) {
        material.uniforms.uTime.value = state.clock.elapsedTime * speed;
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[10, 10]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export const Silk = ({ color = "#7B7481", speed = 0.5, className = "" }: { color?: string, speed?: number, className?: string }) => {
  try {
    return (
      <div className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}>
        <Canvas 
          camera={{ position: [0, 0, 1] }} 
          dpr={[1, 2]}
          gl={{ 
            antialias: false,
            alpha: true,
            powerPreference: "high-performance"
          }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
        >
          <SilkPlane color={color} speed={speed} />
        </Canvas>
      </div>
    );
  } catch (error) {
    console.error('WebGL error, using fallback:', error);
    return <SilkFallback color={color} className={className} />;
  }
};