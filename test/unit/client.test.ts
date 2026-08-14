import { afterEach, describe, expect, it, vi } from "vitest";
import { createMassiveClient } from "../../src/index";

describe("@pontx/massive", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("rejects an empty API key", () => {
    expect(() => createMassiveClient({ apiKey: "   " })).toThrow(
      "A Massive API key is required",
    );
  });

  it("adds the caller-owned bearer credential and serializes parameters", async () => {
    const payload = { status: "OK", ticker: "AAPL", results: [] };
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify(payload), {
        headers: { "content-type": "application/json" },
      }),
    );
    vi.stubGlobal("fetch", fetchMock);
    const client = createMassiveClient({ apiKey: "test-api-key" });

    await expect(
      client.getPreviousClose("AAPL", { adjusted: true }),
    ).resolves.toEqual(payload);

    expect(fetchMock).toHaveBeenCalledOnce();
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe(
      "https://api.massive.com/v2/aggs/ticker/AAPL/prev?adjusted=true",
    );
    expect(init).toEqual(expect.objectContaining({ method: "GET" }));
    expect(new Headers(init.headers).get("Authorization")).toBe(
      "Bearer test-api-key",
    );
  });

  it("keeps the generated common controller as a backwards-compatible alias", () => {
    const client = createMassiveClient({ apiKey: "test-api-key" });

    expect(client.common.getPreviousClose).toBeTypeOf("function");
  });
});
