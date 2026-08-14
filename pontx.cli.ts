import { runCLI } from "pontx/sdk-cli";

export default runCLI({
  name: "pontx-massive",
  executeApi: {
    baseURL: "https://api.massive.com",
    beforeRequest: (request) => {
      const apiKey = process.env.MASSIVE_API_KEY?.trim();
      if (!apiKey) {
        throw new Error("Set MASSIVE_API_KEY before calling the Massive API");
      }
      const headers = new Headers(request.init.headers);
      headers.set("Authorization", `Bearer ${apiKey}`);
      return { ...request, init: { ...request.init, headers } };
    }
  },
  generateSamples: [{
    case: "nodejs",
    description: "Generate sample code for Node.js",
    generateSample: async () => `import { createMassiveClient } from "@pontx/massive";

const client = createMassiveClient({ apiKey: process.env.MASSIVE_API_KEY! });
const response = await client.getPreviousClose("AAPL", {});
console.log(response);
`
  }]
});
