'use client'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Setup sizes
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Geometry & ShaderMaterial
    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 32);

    const vertexShader = `
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec3 vNormal;
      varying vec3 vPosition;
      uniform float uTime;
      void main() {
        vec3 light = normalize(vec3(0.5, 1.0, 1.0));
        float fresnel = pow(1.0 - abs(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0))), 2.0);
        vec3 base = vec3(0.85, 0.88, 0.95);
        vec3 pink = vec3(1.0, 0.5 + 0.5*sin(uTime), 0.8 + 0.2*cos(uTime * 0.7));
        vec3 blue = vec3(0.5 + 0.5*cos(uTime * 0.8), 0.7, 1.0);
        vec3 color = base;
        color = mix(color, pink, smoothstep(0.2, 0.8, vNormal.y + 0.2*sin(uTime * 0.5)));
        color = mix(color, blue, smoothstep(0.2, 0.8, vNormal.x + 0.2*cos(uTime * 0.7)));
        color += fresnel * 0.7;
        float highlight = pow(max(dot(normalize(vNormal), light), 0.0), 32.0);
        color += highlight * vec3(1.0, 0.9, 1.0);
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const uniforms = { uTime: { value: 0 } };
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animation loop
    let frameId: number;
    const animate = () => {
      mesh.rotation.x += 0.001;
      mesh.rotation.y += 0.001;
      uniforms.uTime.value += 0.01;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
    />
  );
};

export default ThreeCanvas;