import html from "../assets/toolbox/color/html5.svg";
import css from "../assets/toolbox/color/css3.svg";
import javascript from "../assets/toolbox/color/javascript.svg";
import react from "../assets/toolbox/color/react.svg";
import php from "../assets/toolbox/color/php.svg";
import python from "../assets/toolbox/color/python.svg";
import mysql from "../assets/toolbox/color/mysql.svg";
import node from "../assets/toolbox/color/nodejs.svg";
import git from "../assets/toolbox/color/git.svg";
import figma from "../assets/toolbox/color/figma.svg";
import arduino from "../assets/toolbox/color/arduino.svg";
import typescript from "../assets/toolbox/color/typescript.svg";
import next from "../assets/toolbox/color/nextjs.svg";
import supabase from "../assets/toolbox/color/supabase.svg";
import postgresql from "../assets/toolbox/color/postgresql.svg";
import electron from "../assets/toolbox/color/electron.svg";
import pandas from "../assets/toolbox/color/pandas.svg";
import vite from "../assets/toolbox/color/vitejs.svg";
import mongodb from "../assets/toolbox/color/mongodb.svg";
import sqlite from "../assets/toolbox/color/sqlite.svg";
import redis from "../assets/toolbox/color/redis.svg";
import docker from "../assets/toolbox/color/docker.svg";
import powershell from "../assets/toolbox/color/powershell.svg";
import playwright from "../assets/toolbox/color/playwright.svg";
import selenium from "../assets/toolbox/color/selenium.svg";
import nmap from "../assets/toolbox/nmap.svg";

const brandIcons: Record<string, string> = {
  HTML: html,
  CSS: css,
  JavaScript: javascript,
  TypeScript: typescript,
  React: react,
  "Next.js": next,
  Supabase: supabase,
  PostgreSQL: postgresql,
  Electron: electron,
  pandas,
  Vite: vite,
  MongoDB: mongodb,
  SQLite: sqlite,
  Redis: redis,
  Docker: docker,
  PowerShell: powershell,
  Playwright: playwright,
  Selenium: selenium,
  Nmap: nmap,
  PHP: php,
  Python: python,
  MySQL: mysql,
  "Node.js": node,
  Git: git,
  Figma: figma,
  Arduino: arduino,
};

const categoryPaths: Record<string, string> = {
  openpyxl: "M14 3H5v18h14V8ZM14 3v5h5M8 12h8M8 16h8M12 12v8",
  "Machine Learning": "M6 6l4 4M18 6l-4 4M10 14l-4 4M14 14l4 4M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
  NLP: "M4 3h16v14H9l-5 4v-4H4ZM8 7h8M8 11h5",
  "UI/UX Design": "M3 3h18v18H3ZM3 8h18M8 8v13M12 12h5M12 16h3",
};
const fallbackPath = "M3 4h18v16H3ZM8 9l-3 3 3 3M16 9l3 3-3 3M13 8l-2 8";

export default function ToolboxIcon({ name }: { name: string }) {
  const logo = brandIcons[name];
  if (logo) {
    return (
      <img
        className="toolbox-icon toolbox-icon-brand"
        src={logo}
        data-icon={name}
        width="20"
        height="20"
        alt=""
        aria-hidden="true"
      />
    );
  }
  return (
    <svg
      className="toolbox-icon"
      data-icon={name}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={categoryPaths[name] || fallbackPath} />
    </svg>
  );
}
