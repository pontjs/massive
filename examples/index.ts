import { createMassiveClient } from "../src";

const apiKey = process.env.MASSIVE_API_KEY;
if (!apiKey) throw new Error("Set MASSIVE_API_KEY to run this example");

const client = createMassiveClient({ apiKey });
const response = await client.common.getPreviousClose("AAPL", {});
console.log(response);
