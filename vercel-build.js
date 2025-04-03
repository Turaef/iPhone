// This file is a build helper for Vercel
import { execSync } from 'child_process';

try {
  // Run the build
  console.log('Running Vite build...');
  execSync('vite build', { stdio: 'inherit' });

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
} 