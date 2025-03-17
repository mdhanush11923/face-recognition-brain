import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" }, // Click to create particles
          // onHover: { enable: true, mode: "repulse" }, // Hover effect
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: {
          // value: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"], // Multiple colors
          value: "#fff",
          // value: "#a1a1aa",
        },
        links: {
          color: "#fff",
          // color: "#a1a1aa",
          distance: 200,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          outModes: { default: "bounce" },
        },
        number: { density: { enable: true }, value: 150 },
        opacity: { value: 0.5 },
        shape: { type: "square" }, // You can change this to "square", "image", etc.
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }),
    []
  );

  return init ? <Particles id="tsparticles" options={options} /> : null;
};

export default ParticlesBackground;
