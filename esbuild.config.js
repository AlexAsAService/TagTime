import path from 'path';
import esbuild from 'esbuild';

const isProd = process.env.NODE_ENV === 'production';

esbuild.build({
  logLevel: 'info',
  entryPoints: ['src/backend/index.ts'],
  platform: 'node',
  target: 'node18',
  format: 'esm',
  bundle: true,
  external: ['express', 'mongoose'],
  tsconfig: './tsconfig.json',
  outdir: 'dist/backend',
  minify: true,
  nodePaths: [path.resolve(process.cwd(), 'node_modules/')],
  sourcemap: true,
}).catch(() => process.exit(1));