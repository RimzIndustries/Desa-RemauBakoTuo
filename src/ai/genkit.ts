import * as genkit from '@genkit-ai/ai';
import { googleAI } from '@genkit-ai/googleai';

// This is the primary entrypoint for Genkit.
// It is required that this file is imported before any other Genkit files.
export const ai = genkit.genkit({
  plugins: [googleAI()],
});
