/**
 * @author pontx-generator
 * @description API 类型定义
 */

import type * as schemas from './schemas';

export declare namespace APIs {
  export type GetPreviousCloseParams = {
    /**
     * @description Return split-adjusted results
     */
    adjusted?: boolean;
  };

  export type GetAggregateBarsParams = {
    /**
     * @description Whether results are adjusted for stock splits.
     */
    adjusted?: boolean;
    /**
     * @description Order bars by their start timestamp.
     */
    sort?: 'asc' | 'desc';
    /**
     * @description Maximum number of base aggregates queried to construct results.
     */
    limit?: number;
  };

  export type GetMarketSnapshotParams = {
    /**
     * @description Comma-separated tickers
     */
    'ticker.any_of'?: string;
    /**
     * @description Filter by asset class.
     */
    type?: 'crypto' | 'fx' | 'indices' | 'options' | 'stocks';
    /**
     * @description Order results using the selected sort field.
     */
    order?: 'asc' | 'desc';
    /**
     * @description Maximum results
     */
    limit?: number;
    /**
     * @description Field used for result ordering.
     */
    sort?: 'ticker';
  };

  export type ListTickersParams = {
    /**
     * @description Ticker filter
     */
    ticker?: string;
    /**
     * @description Ticker type code from the Ticker Types endpoint.
     */
    type?: string;
    /**
     * @description Market filter
     */
    market?: 'stocks' | 'crypto' | 'fx' | 'otc' | 'indices';
    /**
     * @description Primary exchange Market Identifier Code (MIC), for example `XNAS`.
     */
    exchange?: string;
    /**
     * @description CUSIP to query. CUSIPs may be used as filters but are not returned for legal reasons.
     */
    cusip?: string;
    /**
     * @description SEC Central Index Key.
     */
    cik?: string;
    /**
     * @description Point-in-time date in `YYYY-MM-DD` format; defaults to the latest available date.
     */
    date?: string;
    /**
     * @description Search text matched against ticker symbols and company names.
     */
    search?: string;
    /**
     * @description Active-listing filter
     */
    active?: boolean;
    /**
     * @description Order results using the selected sort field.
     */
    order?: 'asc' | 'desc';
    /**
     * @description Maximum number of results per page.
     */
    limit?: number;
    /**
     * @description Field used for ordering.
     */
    sort?: 'ticker' | 'name' | 'market' | 'locale' | 'primary_exchange' | 'currency_symbol';
  };

  export type GetTickerDetailsParams = {
    /**
     * @description Point-in-time date in `YYYY-MM-DD` format; defaults to the latest available date.
     */
    date?: string;
  };

}

// ============ API 集合类型 ============

/**
 * API 类型定义
 */
export type APIs = {
  /**
   * GET /v2/last/trade/{stocksTicker}
   * Retrieve the latest available trade for a case-sensitive stock ticker. The result includes price, size, exchange, conditions, and nanosecond timestamps when supplied by the feed. Availability and recency depend on the account's stock-data plan.
   * @summary: Get the last stock trade
   */
  getLastTrade: (
    /**
     * @description Case-sensitive stock ticker, for example `AAPL`.
     */
    stocksTicker: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.LastTradeResponse>;

  /**
   * GET /v2/aggs/ticker/{stocksTicker}/prev
   * Retrieve the previous trading day's OHLC, volume, VWAP, and transaction count for a stock ticker. Results are split-adjusted by default.
   * @summary: Get previous-day aggregate
   */
  getPreviousClose: (
    /**
     * @description Case-sensitive stock ticker, for example `AAPL`.
     */
    stocksTicker: string,
    params: APIs.GetPreviousCloseParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.AggregateResponse>;

  /**
   * GET /v2/aggs/ticker/{stocksTicker}/range/{multiplier}/{timespan}/{from}/{to}
   * Retrieve historical OHLC and volume bars over a custom date range in Eastern Time. Bars are built from qualifying trades; an interval with no eligible trades is omitted rather than returned as an empty bar.
   * @summary: Get custom aggregate bars
   */
  getAggregateBars: (
    /**
     * @description Case-sensitive stock ticker, for example `AAPL`.
     */
    stocksTicker: string,
    /**
     * @description Timespan multiplier
     */
    multiplier: number,
    /**
     * @description Bar unit
     */
    timespan: 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year',
    /**
     * @description Start date in `YYYY-MM-DD` format or Unix timestamp in milliseconds.
     */
    from: string,
    /**
     * @description End date in `YYYY-MM-DD` format or Unix timestamp in milliseconds.
     */
    to: string,
    params: APIs.GetAggregateBarsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.AggregateResponse>;

  /**
   * GET /v3/snapshot
   * Retrieve paginated snapshots across stocks, options, forex, crypto, and indices. A snapshot can include current session metrics plus the latest trade, quote, and minute bar according to plan entitlements.
   * @summary: Get unified market snapshots
   */
  getMarketSnapshot: (
    params: APIs.GetMarketSnapshotParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.UnifiedSnapshotResponse>;

  /**
   * GET /v3/reference/tickers
   * Retrieve a paginated list of ticker symbols across supported asset classes. Filter by symbol, asset type, market, exchange, identifiers, date, search text, or active status.
   * @summary: List and search supported tickers
   */
  listTickers: (
    params: APIs.ListTickersParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.TickerListResponse>;

  /**
   * GET /v3/reference/tickers/{ticker}
   * Get ticker reference details. Official reference-data endpoint.
   * @summary: Get ticker reference details
   */
  getTickerDetails: (
    /**
     * @description Stock ticker
     */
    ticker: string,
    params: APIs.GetTickerDetailsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.TickerDetailsResponse>;

};

export declare namespace APIs {
}
