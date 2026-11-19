import { execSync } from 'node:child_process';
const nodeVersion = execSync('node -v');
const npmVersion = execSync('npm -v');
console.log(`Node version: ${nodeVersion}`);
console.log(`NPM version: ${npmVersion}`);