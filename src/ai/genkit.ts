
import {genkit} from '@genkit-ai/next';
import {googleAI} from '@genkit-ai/googleai';
import {firebaseAuth} from '@genkit-ai/firebase';
import {ai} from '@genkit-ai/ai';

// Initialize Genkit
genkit({
  plugins: [
    firebaseAuth(),
    googleAI(),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

export {ai};
