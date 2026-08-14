# @pontx/massive

[![SDK quality: unit 100%, E2E passing](https://pontx.dev/badges/sdk/massive.svg)](https://pontx.dev/en/sdks/massive#quality)

Type-safe TypeScript SDK and dedicated CLI for the officially documented [Massive REST API](https://massive.com/docs/rest/quickstart).

## Install

```bash
npm install @pontx/massive
```

## SDK

Use your own Massive account, API key, subscription, and market-data entitlements:

```ts
import { createMassiveClient } from "@pontx/massive";

const client = createMassiveClient({ apiKey: process.env.MASSIVE_API_KEY! });
const result = await client.common.getPreviousClose("AAPL", {});
```

## CLI

```bash
npm install --global @pontx/massive
export MASSIVE_API_KEY="your-key"
pontx-massive --help
pontx-massive call common.getPreviousClose --stocksTicker AAPL --dry-run
```

Pontx publishes generated code and API metadata; it does not proxy, cache, bundle, or redistribute Massive market-data responses. Your use of the upstream service remains subject to [Massive's terms](https://massive.com/legal/market-data-terms-of-service).

- [Pontx Hub documentation](https://pontx.dev/en/sdks/massive)
- [Source](https://github.com/pontjs/massive)
- License: MIT
