import { defineConfig } from 'orval';

export default defineConfig({
  hktramways: {
    input: './openapi.yaml',
    output: {
      target: './dist/index.ts',
      baseUrl: 'https://api.hktramways.com/api/v1',
      client: 'fetch',
      clean: false,
    },
  },
});
