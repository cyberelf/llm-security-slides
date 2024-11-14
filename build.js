import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const slidevDir = '.';
const distDir = './dist';

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Get all markdown files in the slidev directory
const markdownFiles = fs.readdirSync(slidevDir).filter(file => file.endsWith('.md') && file !== 'README.md');

markdownFiles.forEach(file => {
  const fileName = path.parse(file).name;
  const outputDir = path.join(distDir, fileName);

  // Build the markdown file
  execSync(`slidev build ${path.join(slidevDir, file)} -o ${outputDir} --base /${fileName} --per-slide`);
});

// Update the dist/index.html
const indexContent = markdownFiles.map(file => {
  const fileName = path.parse(file).name;
  return `<li><a href="./${fileName}/index.html">${fileName}</a></li>`;
}).join('\n');

const templateHtmlPath = path.join(slidevDir, 'template.html');
let templateHtmlContent = fs.readFileSync(templateHtmlPath, 'utf-8');
templateHtmlContent = templateHtmlContent.replace('<!-- CONTENT_PLACEHOLDER -->', indexContent);
fs.writeFileSync(path.join(distDir, 'index.html'), templateHtmlContent, 'utf-8');
