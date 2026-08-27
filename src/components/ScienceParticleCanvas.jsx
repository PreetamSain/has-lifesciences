import React, { useRef, useEffect, useState } from 'react';

export default function ScienceParticleCanvas() {
  const canvasRef = useRef(null);
  const [currentShapeName, setCurrentShapeName] = useState('DNA HELIX');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width, height, centerX, centerY;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      centerX = width / 2;
      centerY = height / 2;
    };
    resize();
    window.addEventListener('resize', resize);

    // Mouse interaction
    const mouse = { x: -1000, y: -1000, radius: 90 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const PARTICLE_COUNT = 180;
    const particles = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: centerX + (Math.random() - 0.5) * width * 0.8,
        y: centerY + (Math.random() - 0.5) * height * 0.8,
        vx: 0,
        vy: 0,
        targetX: centerX,
        targetY: centerY,
        size: Math.random() * 2 + 1.8,
        alpha: Math.random() * 0.5 + 0.5,
        color: i % 4 === 0 ? '#00D2FF' : '#1566F3'
      });
    }

    // ----------------------------------------------------
    // SHAPE GENERATORS
    // ----------------------------------------------------
    let currentShapeIndex = 0;
    let rotationAngle = 0;

    const getHelixTargets = (time) => {
      const targets = [];
      const len = PARTICLE_COUNT;
      const strandLen = Math.floor(len / 2);
      const h = height * 0.65;
      const radius = Math.min(width, height) * 0.28;

      // Strand 1
      for (let i = 0; i < strandLen; i++) {
        const t = (i / strandLen) * Math.PI * 4 + time;
        const y = centerY - h / 2 + (i / strandLen) * h;
        const x = centerX + Math.cos(t) * radius;
        targets.push({ x, y });
      }

      // Strand 2 (Opposite phase)
      for (let i = 0; i < strandLen; i++) {
        const t = (i / strandLen) * Math.PI * 4 + Math.PI + time;
        const y = centerY - h / 2 + (i / strandLen) * h;
        const x = centerX + Math.cos(t) * radius;
        targets.push({ x, y });
      }

      while (targets.length < len) {
        targets.push({ x: centerX, y: centerY });
      }
      return targets;
    };

    const getHASMarkTargets = () => {
      const targets = [];
      const s = Math.min(width, height) * 0.16; // square size
      const gap = s * 1.1;

      // 5 blocks matching HAS logo geometry:
      // Top-Left, Center, Bottom-Right, Top-Right, Bottom-Left
      const blocks = [
        { cx: centerX - gap, cy: centerY - gap }, // Top-Left
        { cx: centerX, cy: centerY },             // Center
        { cx: centerX + gap, cy: centerY + gap }, // Bottom-Right
        { cx: centerX + gap, cy: centerY - gap }, // Top-Right
        { cx: centerX - gap, cy: centerY + gap }, // Bottom-Left
      ];

      const perBlock = Math.floor(PARTICLE_COUNT / blocks.length);

      blocks.forEach((block) => {
        for (let i = 0; i < perBlock; i++) {
          const rx = (Math.random() - 0.5) * s;
          const ry = (Math.random() - 0.5) * s;
          targets.push({ x: block.cx + rx, y: block.cy + ry });
        }
      });

      // Connector diagonal points
      while (targets.length < PARTICLE_COUNT) {
        const t = Math.random();
        targets.push({
          x: centerX + (t - 0.5) * gap,
          y: centerY + (t - 0.5) * gap
        });
      }
      return targets;
    };

    const getMoleculeTargets = (time) => {
      const targets = [];
      const r = Math.min(width, height) * 0.28;
      const ringNodes = 6;
      const perNode = Math.floor(PARTICLE_COUNT / (ringNodes + 6));

      // Benzene Core Hexagon
      for (let i = 0; i < ringNodes; i++) {
        const angle = (i / ringNodes) * Math.PI * 2 + time * 0.5;
        const nx = centerX + Math.cos(angle) * r;
        const ny = centerY + Math.sin(angle) * r;

        for (let j = 0; j < perNode; j++) {
          targets.push({
            x: nx + (Math.random() - 0.5) * 20,
            y: ny + (Math.random() - 0.5) * 20
          });
        }
      }

      // Outer functional orbital groups
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2 + Math.PI / 6 + time * 0.5;
        const nx = centerX + Math.cos(angle) * (r * 1.45);
        const ny = centerY + Math.sin(angle) * (r * 1.45);

        for (let j = 0; j < perNode; j++) {
          targets.push({
            x: nx + (Math.random() - 0.5) * 25,
            y: ny + (Math.random() - 0.5) * 25
          });
        }
      }

      while (targets.length < PARTICLE_COUNT) {
        targets.push({
          x: centerX + (Math.random() - 0.5) * r * 0.8,
          y: centerY + (Math.random() - 0.5) * r * 0.8
        });
      }
      return targets;
    };

    const getCapsuleTargets = (time) => {
      const targets = [];
      const rx = Math.min(width, height) * 0.35;
      const ry = Math.min(width, height) * 0.20;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const theta = (i / PARTICLE_COUNT) * Math.PI * 2 + time;
        const phi = Math.sin(i * 1.5 + time) * 0.5;
        const x = centerX + Math.cos(theta) * rx * Math.cos(phi);
        const y = centerY + Math.sin(theta) * ry + Math.sin(phi) * 20;
        targets.push({ x, y });
      }
      return targets;
    };

    // Cycle shapes every 4.5 seconds
    const shapeNames = [
      'DNA HELIX',
      'HAS MOLECULAR LATTICE',
      'PHYTOCHEMICAL RING',
      'BIO-CAPSULE MATRIX'
    ];

    const shapeInterval = setInterval(() => {
      currentShapeIndex = (currentShapeIndex + 1) % 4;
      setCurrentShapeName(shapeNames[currentShapeIndex]);
    }, 4500);

    // ----------------------------------------------------
    // ANIMATION LOOP (60 FPS)
    // ----------------------------------------------------
    let lastTime = 0;

    const render = (timestamp) => {
      const dt = (timestamp - lastTime) * 0.001;
      lastTime = timestamp;
      rotationAngle += 0.015;

      let currentTargets;
      if (currentShapeIndex === 0) {
        currentTargets = getHelixTargets(rotationAngle);
      } else if (currentShapeIndex === 1) {
        currentTargets = getHASMarkTargets();
      } else if (currentShapeIndex === 2) {
        currentTargets = getMoleculeTargets(rotationAngle * 0.5);
      } else {
        currentTargets = getCapsuleTargets(rotationAngle * 0.8);
      }

      ctx.clearRect(0, 0, width, height);

      // Update particle positions & draw
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const target = currentTargets[i] || { x: centerX, y: centerY };

        // Spring towards target
        const dx = target.x - p.x;
        const dy = target.y - p.y;
        p.vx += dx * 0.04;
        p.vy += dy * 0.04;

        // Mouse repulsion
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < mouse.radius && mdist > 0) {
          const force = (mouse.radius - mdist) / mouse.radius;
          p.vx += (mdx / mdist) * force * 6;
          p.vy += (mdy / mdist) * force * 6;
        }

        // Friction & integration
        p.vx *= 0.84;
        p.vy *= 0.84;
        p.x += p.vx;
        p.y += p.vy;
      }

      // Draw connecting lines between close particles
      ctx.lineWidth = 0.75;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const distSq = (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
          const maxDist = 42;

          if (distSq < maxDist * maxDist) {
            const alpha = 1 - Math.sqrt(distSq) / maxDist;
            ctx.strokeStyle = `rgba(21, 102, 243, ${alpha * 0.35})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw particle dots
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // White nucleus for center point
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.45, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(shapeInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] rounded-3xl border border-slate-200/80 bg-white/60 backdrop-blur-sm p-4 flex flex-col justify-between overflow-hidden">
      
      {/* Top Header Badge */}
      <div className="flex items-center justify-between px-3 pt-2">
        <div className="flex items-center gap-2 font-architekt text-[11px] text-[#1566F3] uppercase tracking-wider font-bold">
          <span className="w-2 h-2 rounded-full bg-[#1566F3] animate-pulse" />
          <span>KINETIC VECTOR ENGINE</span>
        </div>
        <div className="font-architekt text-[10px] text-slate-400 uppercase tracking-widest">
          INTERACTIVE 60 FPS
        </div>
      </div>

      {/* Main Canvas */}
      <canvas 
        ref={canvasRef} 
        className="w-full h-full cursor-crosshair touch-none"
      />

      {/* Bottom Dynamic Shape State Bar */}
      <div className="flex items-center justify-between px-3 pb-2 pt-2 border-t border-slate-100 font-architekt text-xs text-slate-500 uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <span className="text-slate-400">MORPHING:</span>
          <span className="text-[#1566F3] font-bold transition-all duration-300">{currentShapeName}</span>
        </div>
        <div className="text-[11px] text-slate-400">
          HOVER TO DISPERSE
        </div>
      </div>

    </div>
  );
}
