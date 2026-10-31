import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const otherImageFormats = "png|apng|jpe?g|jfif|gif|svg|avif|bmp|ico|tiff?|heic|heif|jxl";
const imageExtension = new RegExp(`\\.(${otherImageFormats})$`, "i");
const imageReference = new RegExp(`\\.(${otherImageFormats})(?=$|[?#'"\x60\\s)])`, "i");
const otherImageData = /data:image\/(?!webp[;,])[a-z0-9.+-]+/i;
const problems = [];
let imageCount = 0;

async function checkFile(file) {
  const relative = path.relative(root, file);
  if (imageExtension.test(file)) {
    problems.push(`${relative}: convert this image to WebP and update its references.`);
  } else if (path.extname(file).toLowerCase() === ".webp") {
    const data = await readFile(file);
    if (data.toString("ascii", 0, 4) !== "RIFF" || data.toString("ascii", 8, 12) !== "WEBP") {
      problems.push(`${relative}: this file is not encoded as WebP.`);
    }
    imageCount += 1;
  } else if (/\.(?:[cm]?[jt]sx?|css|html)$/i.test(file)) {
    const lines = (await readFile(file, "utf8")).split(/\r?\n/);
    for (const [index, line] of lines.entries()) {
      if (imageReference.test(line) || otherImageData.test(line)) {
        problems.push(`${relative}:${index + 1}: picture references must use WebP.`);
      }
    }
  }
}

async function checkDirectory(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await checkDirectory(file);
    else if (entry.isFile()) await checkFile(file);
  }
}

await checkDirectory(path.join(root, "src"));
await checkDirectory(path.join(root, "public"));
await checkFile(path.join(root, "index.html"));

if (problems.length) {
  console.error(`WebP image check failed:\n${problems.join("\n")}`);
  process.exitCode = 1;
} else {
  console.log(`WebP image check passed (${imageCount} images).`);
}
