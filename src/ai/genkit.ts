
import {genkit} from '@genkit-ai/next';
import {googleAI} from '@genkit-ai/googleai';
import {firebase} from '@genkit-ai/firebase/plugin';
import { GoogleAuth } from 'google-auth-library';
import {ai, definePrompt} from '@genkit-ai/ai';

// Initialize Genkit
genkit({
  plugins: [
    firebase({
      flowStateStore: {
        collection: 'flow-states'
      },
      traceStore: {
        collection: 'traces'
      },
      credential: new GoogleAuth({
        scopes: 'https://www.googleapis.com/auth/cloud-platform',
      }),
    }),
    googleAI(),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

export {ai};
