// Sets the GAMEORA version for a build (package.json + a CHANGELOG section),
// so every GitHub Actions run gets a higher version and auto-update can see it.
// Usage: node scripts/gameora-version.mjs 1.0.12
import { readFile, writeFile } from "node:fs/promises";

const version = process.argv[2];
if (!/^\d+\.\d+\.\d+$/.test(version ?? "")) {
  console.error("Usage: node scripts/gameora-version.mjs <major.minor.patch>");
  process.exit(1);
}

const pkg = JSON.parse(await readFile("package.json", "utf8"));
pkg.version = version;
await writeFile("package.json", `${JSON.stringify(pkg, null, 2)}\n`);

const changelog = await readFile("CHANGELOG.md", "utf8");
if (!changelog.includes(`## [${version}]`)) {
  const date = new Date().toISOString().slice(0, 10);
  const section = `## [${version}] - ${date}\n\n### Changed\n\n- GAMEORA Windows build ${version}.\n\n`;
  const at = changelog.indexOf("\n## [");
  const next = at === -1 ? `${changelog.trimEnd()}\n\n${section}` : `${changelog.slice(0, at + 1)}${section}${changelog.slice(at + 1)}`;
  await writeFile("CHANGELOG.md", next);
}
console.log(`GAMEORA version ${version}`);
