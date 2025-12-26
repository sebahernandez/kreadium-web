import { SiGithub, SiDocker, SiSupabase, SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiAstro, SiWordpress } from 'react-icons/si';
import LogoLoop from './logo-loop/LogoLoop';

const techLogos = [
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiAstro />, title: "Astro", href: "https://astro.build" },
  { node: <SiWordpress />, title: "WordPress", href: "https://wordpress.org" },
];

export default function TechLogosComponent() {
  return (
     <div style={{ height: '80px', position: 'relative', overflow: 'hidden'}}>
        <LogoLoop
        logos={techLogos}
        speed={80}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000"
        ariaLabel="Technology partners"
        />
    </div>
  );
}
