
'use server';

import {googleAI} from '@genkit-ai/googleai';
import {configureGenkit} from 'genkit';

// This is the primary entrypoint for Genkit.
// It is required that this file is imported before any other Genkit files.
configureGenkit({
  plugins: [googleAI()],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

export {ai} from '@genkit-ai/ai';
