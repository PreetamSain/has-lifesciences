import React, { useRef, useEffect } from 'react';

/**
 * =========================================================================
 * HAS LIFESCIENCES - GOLDEN MASTER PARTICLE ENGINE (LOCKED STATE)
 * User Verified & Approved on 2026-08-27
 * -------------------------------------------------------------------------
 * Colors:
 *  - Primary Royal Blue: #1566F3 (~65%)
 *  - Luminous Cyan:      #00D2FF (~20% - every 5th particle)
 *  - Dark Ink Depth:     #030914 (~15% - every 3rd particle)
 *  - White Nucleus:      #FFFFFF (inner core radius: size * 0.4 on all nodes)
 * 
 * Animation:
 *  - 1:1 Continuous cubic spline morphing flight
 *  - Shapes: DNA Helix ➔ Curcumin Molecule ➔ HAS CDMO Emblem (No middle line) ➔ Lipid Sphere
 *  - Hold Time: 3.2s | Flight Time: 1.5s (Ease-in-out cubic)
 * =========================================================================
 */

export default function ScienceParticleEngine() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = 0, height = 0, centerX = 0, centerY = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
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
    const mouse = { x: -1000, y: -1000, radius: 140 };
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

    // ----------------------------------------------------
    // EXACT ORIGINAL PERMANENT PARTICLE PALETTE:
    // 1. Royal Blue (#1566F3) ~65%
    // 2. Luminous Cyan (#00D2FF) ~20%
    // 3. Architectural Dark Ink (#030914) ~15%
    // 4. White Nucleus Core (#FFFFFF) on every node
    // ----------------------------------------------------
    const TOTAL_PARTICLES = 320;
    const particles = [];

    for (let i = 0; i < TOTAL_PARTICLES; i++) {
      const angle = (i / TOTAL_PARTICLES) * Math.PI * 2;
      const arcDist = ((i % 7) - 3) * 26;

      particles.push({
        x: centerX + (Math.random() - 0.5) * 380,
        y: centerY + (Math.random() - 0.5) * 380,
        z: 0,
        vx: 0,
        vy: 0,
        arcX: Math.cos(angle) * arcDist,
        arcY: Math.sin(angle) * arcDist,
        size: Math.random() * 1.6 + 1.8,
        scale: 1,
        colorType: i % 5 === 0 ? 'cyan' : (i % 3 === 0 ? 'dark' : 'blue'),
        idx: i
      });
    }

    // Directional signal pulses for HAS shape
    const pulseCount = 18;
    const pulses = Array.from({ length: pulseCount }, (_, i) => ({
      progress: (i / pulseCount),
      branch: i % 3,
      speed: 0.009 + (i % 3) * 0.002
    }));

    // ----------------------------------------------------
    // PRE-CALCULATED EXACT HAS SVG MASTER METRICS
    // ----------------------------------------------------
    const poly = [
      { x: 349, y: 11.45 },
      { x: 349, y: 127.78 },
      { x: 263.22, y: 127.78 },
      { x: 232.67, y: 158.34 },
      { x: 232.66, y: 244.11 },
      { x: 116.34, y: 244.11 },
      { x: 116.34, y: 360.44 },
      { x: 0.01, y: 360.44 },
      { x: 0.01, y: 244.11 },
      { x: 116.33, y: 244.11 },
      { x: 116.33, y: 127.78 },
      { x: 202.11, y: 127.78 },
      { x: 232.67, y: 97.22 },
      { x: 232.67, y: 11.45 }
    ];

    const isPointInPoly = (px, py, vertices) => {
      let inside = false;
      for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
        const xi = vertices[i].x, yi = vertices[i].y;
        const xj = vertices[j].x, yj = vertices[j].y;
        const intersect = ((yi > py) !== (yj > py)) &&
          (px < (xj - xi) * (py - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
      }
      return inside;
    };

    // ----------------------------------------------------
    // SHAPE 0: REALISTIC 3D DNA DOUBLE HELIX
    // ----------------------------------------------------
    const getDNATargets = (rot) => {
      const targets = [];
      const numRungs = 24;
      const particlesPerRung = 6;
      const strandLen = Math.floor((TOTAL_PARTICLES - numRungs * particlesPerRung) / 2);
      const h = height * 0.82;
      const radius = Math.min(width, height) * 0.26;
      const focalLength = 350;

      for (let i = 0; i < strandLen; i++) {
        const t = (i / strandLen) * Math.PI * 5 + rot;
        const normY = (i / strandLen) - 0.5;
        const y = normY * h;

        // Strand A
        const xA = Math.cos(t) * radius;
        const zA = Math.sin(t) * radius;
        targets.push({ x: xA, y, z: zA });

        // Strand B (180 deg offset)
        const xB = Math.cos(t + Math.PI) * radius;
        const zB = Math.sin(t + Math.PI) * radius;
        targets.push({ x: xB, y, z: zB });
      }

      for (let r = 0; r < numRungs; r++) {
        const t = (r / numRungs) * Math.PI * 5 + rot;
        const normY = (r / numRungs) - 0.5;
        const y = normY * h;

        const xA = Math.cos(t) * radius;
        const zA = Math.sin(t) * radius;
        const xB = Math.cos(t + Math.PI) * radius;
        const zB = Math.sin(t + Math.PI) * radius;

        for (let p = 0; p < particlesPerRung; p++) {
          const frac = (p + 1) / (particlesPerRung + 1);
          targets.push({
            x: xA + (xB - xA) * frac,
            y: y + (Math.random() - 0.5) * 3,
            z: zA + (zB - zA) * frac
          });
        }
      }

      while (targets.length < TOTAL_PARTICLES) {
        targets.push({ x: 0, y: 0, z: 0 });
      }

      return targets.map(t => {
        const scale = focalLength / (focalLength + t.z);
        return {
          x: centerX + t.x * scale,
          y: centerY + t.y * scale,
          z: t.z,
          scale
        };
      });
    };

    // ----------------------------------------------------
    // SHAPE 1: CURCUMINOID PHYTO-ACTIVE (C21H20O6)
    // ----------------------------------------------------
    const getCurcuminTargets = (rot) => {
      const targets = [];
      const scaleFactor = Math.min(width, height) * 0.0024;
      const angle = Math.sin(rot * 0.3) * 0.04;

      const leftRing = [
        { x: -280, y: 0 }, { x: -240, y: -45 }, { x: -170, y: -45 },
        { x: -130, y: 0 }, { x: -170, y: 45 }, { x: -240, y: 45 }
      ];
      const leftGroups = [{ x: -335, y: 0 }, { x: -275, y: -90 }];
      const backbone = [
        { x: -130, y: 0 }, { x: -80, y: -30 }, { x: -30, y: 0 },
        { x: 20, y: -30 }, { x: 70, y: 0 }, { x: 120, y: -30 }, { x: 170, y: 0 }
      ];
      const carbonyls = [{ x: -30, y: 55 }, { x: 70, y: 55 }];
      const rightRing = [
        { x: 170, y: 0 }, { x: 210, y: -45 }, { x: 280, y: -45 },
        { x: 320, y: 0 }, { x: 280, y: 45 }, { x: 210, y: 45 }
      ];
      const rightGroups = [{ x: 375, y: 0 }, { x: 315, y: -90 }];

      const allBonds = [
        [leftRing[0], leftRing[1]], [leftRing[1], leftRing[2]], [leftRing[2], leftRing[3]],
        [leftRing[3], leftRing[4]], [leftRing[4], leftRing[5]], [leftRing[5], leftRing[0]],
        [leftRing[0], leftGroups[0]], [leftRing[1], leftGroups[1]],
        [backbone[0], backbone[1]], [backbone[1], backbone[2]], [backbone[2], backbone[3]],
        [backbone[3], backbone[4]], [backbone[4], backbone[5]], [backbone[5], backbone[6]],
        [backbone[2], carbonyls[0]], [backbone[4], carbonyls[1]],
        [rightRing[0], rightRing[1]], [rightRing[1], rightRing[2]], [rightRing[2], rightRing[3]],
        [rightRing[3], rightRing[4]], [rightRing[4], rightRing[5]], [rightRing[5], rightRing[0]],
        [rightRing[3], rightGroups[0]], [rightRing[2], rightGroups[1]]
      ];

      const perBond = Math.floor(TOTAL_PARTICLES / allBonds.length);

      allBonds.forEach(([start, end]) => {
        for (let p = 0; p < perBond; p++) {
          const frac = p / perBond;
          const rawX = (start.x + (end.x - start.x) * frac) * scaleFactor;
          const rawY = (start.y + (end.y - start.y) * frac) * scaleFactor;

          const cosA = Math.cos(angle);
          const sinA = Math.sin(angle);
          const rx = rawX * cosA - rawY * sinA;
          const ry = rawX * sinA + rawY * cosA;

          targets.push({
            x: centerX + rx,
            y: centerY + ry,
            z: 0,
            scale: 1
          });
        }
      });

      while (targets.length < TOTAL_PARTICLES) {
        targets.push({
          x: centerX + (Math.random() - 0.5) * 60,
          y: centerY + (Math.random() - 0.5) * 60,
          z: 0,
          scale: 1
        });
      }

      return targets;
    };

    // ----------------------------------------------------
    // SHAPE 2: HAS CDMO MASTER GEOMETRIC MONOGRAM
    // ----------------------------------------------------
    const getHASLatticeTargets = () => {
      const targets = [];
      const size = Math.min(width, height) * 0.76;
      const scale = size / 360;
      const originX = centerX - (349 * scale) / 2;
      const originY = centerY - (372 * scale) / 2;

      const sqTL = { x1: 0, y1: 11.45, x2: 116.33, y2: 127.78 };
      const sqBR = { x1: 232.67, y1: 244.11, x2: 349, y2: 360.44 };

      // Top-Left Detached Square (60 particles)
      for (let i = 0; i < 60; i++) {
        let lx, ly;
        if (i < 40) {
          const pPos = i / 40;
          if (pPos < 0.25) { lx = sqTL.x1 + (pPos / 0.25) * 116.33; ly = sqTL.y1; }
          else if (pPos < 0.5) { lx = sqTL.x2; ly = sqTL.y1 + ((pPos - 0.25) / 0.25) * 116.33; }
          else if (pPos < 0.75) { lx = sqTL.x2 - ((pPos - 0.5) / 0.25) * 116.33; ly = sqTL.y2; }
          else { lx = sqTL.x1; ly = sqTL.y2 - ((pPos - 0.75) / 0.25) * 116.33; }
        } else {
          lx = sqTL.x1 + Math.random() * 116.33;
          ly = sqTL.y1 + Math.random() * 116.33;
        }
        targets.push({ x: originX + lx * scale, y: originY + ly * scale, z: 0, scale: 1 });
      }

      // Bottom-Right Detached Square (60 particles)
      for (let i = 0; i < 60; i++) {
        let lx, ly;
        if (i < 40) {
          const pPos = i / 40;
          if (pPos < 0.25) { lx = sqBR.x1 + (pPos / 0.25) * 116.33; ly = sqBR.y1; }
          else if (pPos < 0.5) { lx = sqBR.x2; ly = sqBR.y1 + ((pPos - 0.25) / 0.25) * 116.33; }
          else if (pPos < 0.75) { lx = sqBR.x2 - ((pPos - 0.5) / 0.25) * 116.33; ly = sqBR.y2; }
          else { lx = sqBR.x1; ly = sqBR.y2 - ((pPos - 0.75) / 0.25) * 116.33; }
        } else {
          lx = sqBR.x1 + Math.random() * 116.33;
          ly = sqBR.y1 + Math.random() * 116.33;
        }
        targets.push({ x: originX + lx * scale, y: originY + ly * scale, z: 0, scale: 1 });
      }

      // Continuous Merged TR ➔ Center ➔ BL Ribbon (200 particles)
      const polyPerimeterPoints = 120;
      for (let i = 0; i < polyPerimeterPoints; i++) {
        const segFrac = i / polyPerimeterPoints;
        const totalSegments = poly.length;
        const currentSegIndex = Math.floor(segFrac * totalSegments);
        const nextSegIndex = (currentSegIndex + 1) % totalSegments;
        const segSubFrac = (segFrac * totalSegments) - currentSegIndex;

        const p1 = poly[currentSegIndex];
        const p2 = poly[nextSegIndex];
        const lx = p1.x + (p2.x - p1.x) * segSubFrac;
        const ly = p1.y + (p2.y - p1.y) * segSubFrac;

        targets.push({ x: originX + lx * scale, y: originY + ly * scale, z: 0, scale: 1 });
      }

      let attempts = 0;
      while (targets.length < TOTAL_PARTICLES && attempts < 3000) {
        attempts++;
        const testX = Math.random() * 349;
        const testY = 11.45 + Math.random() * (360.44 - 11.45);

        if (isPointInPoly(testX, testY, poly)) {
          targets.push({ x: originX + testX * scale, y: originY + testY * scale, z: 0, scale: 1 });
        }
      }

      while (targets.length < TOTAL_PARTICLES) {
        targets.push({ x: centerX, y: centerY, z: 0, scale: 1 });
      }

      return targets;
    };

    // ----------------------------------------------------
    // SHAPE 3: LIPID NANO-MICELLE & SOFTGEL SPHERE (3D Fibonacci)
    // ----------------------------------------------------
    const getMicelleTargets = (rot) => {
      const targets = [];
      const radius = Math.min(width, height) * 0.36;
      const focalLength = 350;
      const phi = Math.PI * (3 - Math.sqrt(5));

      for (let i = 0; i < TOTAL_PARTICLES; i++) {
        const y = 1 - (i / (TOTAL_PARTICLES - 1)) * 2;
        const radiusAtY = Math.sqrt(1 - y * y);
        const theta = phi * i + rot * 0.6;

        const rawX = Math.cos(theta) * radiusAtY * radius;
        const rawY = y * radius;
        const rawZ = Math.sin(theta) * radiusAtY * radius;

        const rotX = 0.3;
        const rx = rawX;
        const ry = rawY * Math.cos(rotX) - rawZ * Math.sin(rotX);
        const rz = rawY * Math.sin(rotX) + rawZ * Math.cos(rotX);

        const scale = focalLength / (focalLength + rz);
        targets.push({
          x: centerX + rx * scale,
          y: centerY + ry * scale,
          z: rz,
          scale
        });
      }

      return targets;
    };

    // ----------------------------------------------------
    // SEAMLESS 1:1 INTERPOLATING CONTINUOUS MORPH ENGINE
    // ----------------------------------------------------
    let currentShapeIndex = 0;
    let nextShapeIndex = 1;
    let isTransitioning = false;
    let transitionStartTime = 0;
    let lastSwitchTime = performance.now();
    let globalAngle = 0;

    const HOLD_DURATION = 3200;  // 3.2s stable shape
    const MORPH_DURATION = 1500; // 1.5s fluid particle flight

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const getTargetsForShape = (idx, angle) => {
      if (idx === 0) return getDNATargets(angle);
      if (idx === 1) return getCurcuminTargets(angle);
      if (idx === 2) return getHASLatticeTargets();
      return getMicelleTargets(angle);
    };

    // ----------------------------------------------------
    // 60 FPS RENDER LOOP
    // ----------------------------------------------------
    const render = (now) => {
      globalAngle += 0.012;

      const elapsed = now - lastSwitchTime;

      if (!isTransitioning && elapsed > HOLD_DURATION) {
        isTransitioning = true;
        transitionStartTime = now;
        nextShapeIndex = (currentShapeIndex + 1) % 4;
      }

      let t = 0;
      let easedT = 0;
      if (isTransitioning) {
        const transElapsed = now - transitionStartTime;
        t = Math.min(1, transElapsed / MORPH_DURATION);
        easedT = easeInOutCubic(t);

        if (transElapsed >= MORPH_DURATION) {
          isTransitioning = false;
          currentShapeIndex = nextShapeIndex;
          lastSwitchTime = now;
          t = 0;
          easedT = 0;
        }
      }

      const targetsA = getTargetsForShape(currentShapeIndex, globalAngle);
      const targetsB = getTargetsForShape(isTransitioning ? nextShapeIndex : currentShapeIndex, globalAngle);

      ctx.clearRect(0, 0, width, height);

      // Update particle coordinates smoothly along 1-to-1 spline curves
      for (let i = 0; i < TOTAL_PARTICLES; i++) {
        const p = particles[i];
        const tA = targetsA[i] || { x: centerX, y: centerY, scale: 1, z: 0 };
        const tB = targetsB[i] || { x: centerX, y: centerY, scale: 1, z: 0 };

        let goalX, goalY, goalZ, goalScale;

        if (isTransitioning) {
          const arcSine = Math.sin(t * Math.PI);
          goalX = tA.x + (tB.x - tA.x) * easedT + p.arcX * arcSine;
          goalY = tA.y + (tB.y - tA.y) * easedT + p.arcY * arcSine;
          goalZ = (tA.z || 0) + ((tB.z || 0) - (tA.z || 0)) * easedT;
          goalScale = (tA.scale || 1) + ((tB.scale || 1) - (tA.scale || 1)) * easedT;
        } else {
          goalX = tA.x;
          goalY = tA.y;
          goalZ = tA.z || 0;
          goalScale = tA.scale || 1;
        }

        const dx = goalX - p.x;
        const dy = goalY - p.y;
        p.vx = (p.vx + dx * 0.14) * 0.74;
        p.vy = (p.vy + dy * 0.14) * 0.74;

        // Mouse repulsion
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < mouse.radius && mdist > 0) {
          const force = (mouse.radius - mdist) / mouse.radius;
          p.vx += (mdx / mdist) * force * 12;
          p.vy += (mdy / mdist) * force * 12;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.z = goalZ;
        p.scale = goalScale;
      }

      // Smooth line visibility during transition
      const lineVisibility = isTransitioning 
        ? Math.max(0, (1 - Math.sin(t * Math.PI) * 1.3)) 
        : 1;

      const activeDisplayShape = isTransitioning && t > 0.5 ? nextShapeIndex : currentShapeIndex;

      if (lineVisibility > 0.05) {

        // --- 1. DNA HELIX BONDS (ROYAL BLUE & CYAN) ---
        if (activeDisplayShape === 0) {
          ctx.lineWidth = 0.85;
          for (let i = 0; i < 200; i += 2) {
            const p1 = particles[i];
            const p2 = particles[i + 2];
            if (p1 && p2 && Math.hypot(p1.x - p2.x, p1.y - p2.y) < 55) {
              ctx.strokeStyle = `rgba(21, 102, 243, ${0.45 * (p1.scale || 1) * lineVisibility})`;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
          for (let i = 1; i < 200; i += 2) {
            const p1 = particles[i];
            const p2 = particles[i + 2];
            if (p1 && p2 && Math.hypot(p1.x - p2.x, p1.y - p2.y) < 55) {
              ctx.strokeStyle = `rgba(0, 210, 255, ${0.45 * (p1.scale || 1) * lineVisibility})`;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
          for (let i = 200; i < particles.length - 1; i += 6) {
            const p1 = particles[i];
            const p2 = particles[i + 5];
            if (p1 && p2) {
              ctx.strokeStyle = `rgba(21, 102, 243, ${0.25 * lineVisibility})`;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }

        // --- 2. CURCUMINOID CHEMICAL BONDS ---
        else if (activeDisplayShape === 1) {
          ctx.lineWidth = 1;
          for (let i = 0; i < particles.length - 1; i++) {
            const p1 = particles[i];
            const p2 = particles[i + 1];
            const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (dist < 28) {
              ctx.strokeStyle = `rgba(21, 102, 243, ${0.4 * lineVisibility})`;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }

        // --- 3. HAS CDMO CONTROL GRID (NO MIDDLE CUTTING LINE) ---
        else if (activeDisplayShape === 2) {
          const size = Math.min(width, height) * 0.76;
          const scale = size / 360;
          const originX = centerX - (349 * scale) / 2;
          const originY = centerY - (372 * scale) / 2;

          const centerTR = { x: originX + (232.67 + 349) / 2 * scale, y: originY + (11.45 + 127.78) / 2 * scale };
          const centerHub = { x: originX + (116.34 + 232.66) / 2 * scale, y: originY + (127.78 + 244.11) / 2 * scale };
          const centerTL = { x: originX + (0 + 116.33) / 2 * scale, y: originY + (11.45 + 127.78) / 2 * scale };
          const centerBL = { x: originX + (0.01 + 116.34) / 2 * scale, y: originY + (244.11 + 360.44) / 2 * scale };
          const centerBR = { x: originX + (232.67 + 349) / 2 * scale, y: originY + (244.11 + 360.44) / 2 * scale };

          // Internal lattice connections
          ctx.lineWidth = 0.65;
          for (let i = 0; i < particles.length; i += 3) {
            const p1 = particles[i];
            for (let j = i + 1; j < Math.min(i + 8, particles.length); j++) {
              const p2 = particles[j];
              const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
              if (dist < 22) {
                ctx.strokeStyle = `rgba(21, 102, 243, ${0.35 * lineVisibility})`;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
              }
            }
          }

          // Flowing signal energy pulses reaching ALL 3 Branches without drawing any visible background lines
          pulses.forEach((pulse) => {
            pulse.progress = (pulse.progress + pulse.speed) % 1;
            const pt = pulse.progress;
            let px, py;

            if (pt < 0.4) {
              const frac = pt / 0.4;
              px = centerTR.x + (centerHub.x - centerTR.x) * frac;
              py = centerTR.y + (centerHub.y - centerTR.y) * frac;
            } else {
              const frac = (pt - 0.4) / 0.6;
              const dest = pulse.branch === 0 ? centerTL : (pulse.branch === 1 ? centerBL : centerBR);
              px = centerHub.x + (dest.x - centerHub.x) * frac;
              py = centerHub.y + (dest.y - centerHub.y) * frac;
            }

            ctx.fillStyle = `rgba(0, 210, 255, ${lineVisibility})`;
            ctx.beginPath();
            ctx.arc(px, py, 3.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = `rgba(255, 255, 255, ${lineVisibility})`;
            ctx.beginPath();
            ctx.arc(px, py, 1.8, 0, Math.PI * 2);
            ctx.fill();
          });
        }

        // --- 4. LIPID MICELLE BONDS ---
        else if (activeDisplayShape === 3) {
          ctx.lineWidth = 0.65;
          for (let i = 0; i < particles.length - 1; i += 4) {
            const p1 = particles[i];
            const p2 = particles[i + 1];
            if (p1 && p2 && Math.hypot(p1.x - p2.x, p1.y - p2.y) < 32) {
              ctx.strokeStyle = `rgba(21, 102, 243, ${0.3 * (p1.scale || 1) * lineVisibility})`;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // ----------------------------------------------------
      // DRAW EXACT ORIGINAL PARTICLE NODES (PERMANENT COLORS)
      // ----------------------------------------------------
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const depthScale = Math.max(0.4, Math.min(1.4, p.scale || 1));
        const finalSize = p.size * depthScale;
        const depthAlpha = Math.max(0.25, Math.min(1, depthScale));

        if (p.colorType === 'cyan') {
          ctx.fillStyle = `rgba(0, 210, 255, ${depthAlpha * 0.95})`;
        } else if (p.colorType === 'dark') {
          ctx.fillStyle = `rgba(3, 9, 20, ${depthAlpha * 0.85})`;
        } else {
          ctx.fillStyle = `rgba(21, 102, 243, ${depthAlpha * 0.95})`;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, finalSize, 0, Math.PI * 2);
        ctx.fill();

        // Original Clean white nucleus core (finalSize * 0.4)
        ctx.fillStyle = `rgba(255, 255, 255, ${depthAlpha * 0.9})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, finalSize * 0.4, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[540px] sm:h-[600px] lg:h-[680px] flex items-center justify-center overflow-hidden select-none">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full cursor-crosshair touch-none"
      />
    </div>
  );
}
