import html from "../assets/toolbox/color/html5.webp";
import css from "../assets/toolbox/color/css3.webp";
import javascript from "../assets/toolbox/color/javascript.webp";
import react from "../assets/toolbox/color/react.webp";
import php from "../assets/toolbox/color/php.webp";
import python from "../assets/toolbox/color/python.webp";
import mysql from "../assets/toolbox/color/mysql.webp";
import node from "../assets/toolbox/color/nodejs.webp";
import git from "../assets/toolbox/color/git.webp";
import figma from "../assets/toolbox/color/figma.webp";
import arduino from "../assets/toolbox/color/arduino.webp";
import typescript from "../assets/toolbox/color/typescript.webp";
import next from "../assets/toolbox/color/nextjs.webp";
import supabase from "../assets/toolbox/color/supabase.webp";
import postgresql from "../assets/toolbox/color/postgresql.webp";
import electron from "../assets/toolbox/color/electron.webp";
import pandas from "../assets/toolbox/color/pandas.webp";
import vite from "../assets/toolbox/color/vitejs.webp";
import mongodb from "../assets/toolbox/color/mongodb.webp";
import sqlite from "../assets/toolbox/color/sqlite.webp";
import redis from "../assets/toolbox/color/redis.webp";
import docker from "../assets/toolbox/color/docker.webp";
import powershell from "../assets/toolbox/color/powershell.webp";
import playwright from "../assets/toolbox/color/playwright.webp";
import selenium from "../assets/toolbox/color/selenium.webp";
import nmap from "../assets/toolbox/nmap.webp";
import n8n from "../assets/toolbox/n8n.webp";
import express from "../assets/toolbox/color/express.webp";
import dotnet from "../assets/toolbox/color/dotnet.webp";
import github from "../assets/toolbox/color/github.webp";
import vscode from "../assets/toolbox/color/vscode.webp";
import openai from "../assets/toolbox/color/openai.webp";

const brandIcons: Record<string, string> = {
  HTML: html,
  HTML5: html,
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
  n8n,
  PHP: php,
  Python: python,
  MySQL: mysql,
  "Node.js": node,
  Git: git,
  Figma: figma,
  Arduino: arduino,
  "Arduino IDE": arduino,
  Express: express,
  "ASP.NET": dotnet,
  GitHub: github,
  "VS Code": vscode,
  ChatGPT: openai,
};

const categoryPaths: Record<string, string> = {
  openpyxl: "M14 3H5v18h14V8ZM14 3v5h5M8 12h8M8 16h8M12 12v8",
  xlrd: "M4 3h16v18H4ZM4 8h16M4 13h16M4 18h16M10 8v13M15 8v13",
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
