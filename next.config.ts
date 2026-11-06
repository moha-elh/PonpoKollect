import type { NextConfig } from "next";

// Static export: the whole site is HTML/CSS/JS in out/, hostable anywhere.
const config: NextConfig = { output: "export", trailingSlash: true };
export default config;
