import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "typescript",
    "cplusplus",
    "nextjs",
    "firebase",
    'nodejs',
    "css3",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "tailwindcss",
    "mongodb",
    "postman",
    "python",
    "postgresql",
    "vitejs",
  ];

  return (
    <div className="relative flex h-[22rem] w-full flex-col items-center justify-center overflow-hidden">
      {/* Outer Orbit */}
      <OrbitingCircles iconSize={50} radius={170} speed={1.2}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      {/* Inner Orbit */}
      <OrbitingCircles iconSize={35} radius={110} reverse speed={2}>
        {skills.slice().reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-transparent">
    <img
      src={src}
      alt=""
      className="w-8 h-8 object-contain duration-200 hover:scale-110"
    />
  </div>
);
