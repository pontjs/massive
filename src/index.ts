import { createGracefulClient } from "@pontx/sdk";
import { APIs } from "./apis/massive/apis";
import { specMeta } from "./apis/massive/apiMeta";

export type MassiveClientOptions = {
  apiKey: string;
  baseUrl?: string;
};

export function createMassiveClient({
  apiKey,
  baseUrl = "https://api.massive.com"
}: MassiveClientOptions) {
  if (!apiKey.trim()) {
    throw new Error("A Massive API key is required");
  }

  return createGracefulClient<APIs>({
    pontxSpecMeta: specMeta as any,
    baseUrl,
    baseRequestFn: async (url, init) => {
      const headers = new Headers(init?.headers);
      headers.set("Authorization", `Bearer ${apiKey}`);
      const response = await fetch(url, { ...init, headers });
      return response.json();
    }
  });
}
