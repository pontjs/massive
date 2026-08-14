export const specMeta = {
  name: "Massive Stock Market Data API",
  hasTags: true,
  url: [
    {
      url: "https://api.massive.com"
    }
  ],
  apis: {
    "common/getLastTrade": {
      method: "GET",
      path: "/v2/last/trade/{stocksTicker}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["stocksTicker"],
      queryParams: null,
      bodyParams: null
    },

    "common/getPreviousClose": {
      method: "GET",
      path: "/v2/aggs/ticker/{stocksTicker}/prev",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["stocksTicker"],
      queryParams: ["adjusted"],
      bodyParams: null
    },

    "common/getAggregateBars": {
      method: "GET",
      path: "/v2/aggs/ticker/{stocksTicker}/range/{multiplier}/{timespan}/{from}/{to}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["stocksTicker", "multiplier", "timespan", "from", "to"],
      queryParams: ["adjusted", "sort", "limit"],
      bodyParams: null
    },

    "common/getMarketSnapshot": {
      method: "GET",
      path: "/v3/snapshot",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["ticker.any_of", "type", "order", "limit", "sort"],
      bodyParams: null
    },

    "common/listTickers": {
      method: "GET",
      path: "/v3/reference/tickers",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["ticker", "type", "market", "exchange", "cusip", "cik", "date", "search", "active", "order", "limit", "sort"],
      bodyParams: null
    },

    "common/getTickerDetails": {
      method: "GET",
      path: "/v3/reference/tickers/{ticker}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["ticker"],
      queryParams: ["date"],
      bodyParams: null
    }
  }
} as const;
