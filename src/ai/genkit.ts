
import genkit from '@genkit-ai/next';
import {googleAI} from '@genkit-ai/googleai';
import {ai} from '@genkit-ai/ai';

// Initialize Genkit
genkit({
  plugins: [
    googleAI(),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

export {ai};
