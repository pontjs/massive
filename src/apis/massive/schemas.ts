/**
 * @description Error payload returned when Massive cannot authorize or fulfill a request.
 */
export type ErrorResponse = {
  /**
   * @description Machine-readable request status.
   */
  status?: string;
  /**
   * @description Short error category or message.
   */
  error?: string;
  /**
   * @description Additional human-readable error detail.
   */
  message?: string;
  /**
   * @description Server-assigned request identifier for support and diagnostics.
   */
  request_id?: string;
}

/**
 * @description OHLC aggregate constructed from qualifying trades in one time window.
 */
export type AggregateBar = {
  /**
   * @description Exchange ticker symbol; commonly present in previous-day responses.
   */
  T?: string;
  /**
   * @description Close price.
   */
  c: number;
  /**
   * @description Highest price.
   */
  h: number;
  /**
   * @description Lowest price.
   */
  l: number;
  /**
   * @description Number of transactions in the aggregate window.
   */
  n?: number;
  /**
   * @description Open price.
   */
  o: number;
  /**
   * @description True for an OTC aggregate; omitted when false.
   */
  otc?: boolean;
  /**
   * @description Window start as a Unix timestamp in milliseconds.
   */
  t: number;
  /**
   * @description Trading volume.
   */
  v: number;
  /**
   * @description Volume-weighted average price.
   */
  vw?: number;
}

/**
 * @description AggregateResponse data structure
 */
export type AggregateResponse = {
  /**
   * @description Exchange ticker symbol.
   */
  ticker: string;
  /**
   * @description Whether prices are adjusted for splits.
   */
  adjusted?: boolean;
  /**
   * @description Number of base minute or day aggregates queried.
   */
  queryCount: number;
  /**
   * @description Server-assigned request identifier.
   */
  request_id?: string;
  /**
   * @description Number of result bars returned.
   */
  resultsCount: number;
  /**
   * @description Request status.
   */
  status: string;
  /**
   * @description An array of results containing the requested data.
   */
  results?: Array<AggregateBar>;
  /**
   * @description Absolute URL for the next page, when present. Authentication may still need to be supplied.
   */
  next_url?: string;
}

/**
 * @description LastTrade data structure
 */
export type LastTrade = {
  /**
   * @description Exchange ticker symbol.
   */
  T: string;
  /**
   * @description Trade condition codes.
   */
  c?: Array<number>;
  /**
   * @description Trade size including any fractional component, encoded as a decimal string.
   */
  ds: string;
  /**
   * @description Trade correction indicator.
   */
  e?: number;
  /**
   * @description Trade Reporting Facility receipt time as a Unix timestamp in nanoseconds.
   */
  f?: number;
  /**
   * @description Trade identifier, unique per ticker/exchange/TRF combination.
   */
  i: string;
  /**
   * @description Price per whole share.
   */
  p: number;
  /**
   * @description Increasing event sequence number for the ticker; gaps are possible.
   */
  q: number;
  /**
   * @description Trade Reporting Facility identifier.
   */
  r?: number;
  /**
   * @description Trade size in shares.
   */
  s?: number;
  /**
   * @description SIP receipt time as a Unix timestamp in nanoseconds.
   */
  t: number;
  /**
   * @description Exchange identifier; resolve through Massive exchange reference data.
   */
  x: number;
  /**
   * @description Participant/exchange event time as a Unix timestamp in nanoseconds.
   */
  y: number;
  /**
   * @description Listing tape: 1=A (NYSE), 2=B (NYSE Arca/NYSE American), 3=C (Nasdaq).
   */
  z?: 1 | 2 | 3;
}

/**
 * @description LastTradeResponse data structure
 */
export type LastTradeResponse = {
  /**
   * @description Server-assigned request identifier.
   */
  request_id: string;
  results?: LastTrade;
  /**
   * @description Request status.
   */
  status: string;
}

/**
 * @description Metrics for the current trading session; availability varies by asset class and entitlement.
 */
export type SnapshotSession = {
  /**
   * @description Absolute session price change.
   */
  change?: number;
  /**
   * @description Session percentage change.
   */
  change_percent?: number;
  early_trading_change?: number;
  early_trading_change_percent?: number;
  regular_trading_change?: number;
  regular_trading_change_percent?: number;
  late_trading_change?: number;
  late_trading_change_percent?: number;
  close?: number;
  high?: number;
  low?: number;
  open?: number;
  volume?: number;
  previous_close?: number;
  price?: number;
  vwap?: number;
  /**
   * @description Last update as a Unix timestamp in nanoseconds.
   */
  last_updated?: number;
}

/**
 * @description SnapshotQuote data structure
 */
export type SnapshotQuote = {
  /**
   * @description Unix timestamp in nanoseconds.
   */
  last_updated?: number;
  /**
   * @description Data recency label.
   */
  timeframe?: string;
  ask?: number;
  ask_size?: number;
  ask_exchange?: number;
  bid?: number;
  bid_size?: number;
  bid_exchange?: number;
}

/**
 * @description SnapshotTrade data structure
 */
export type SnapshotTrade = {
  /**
   * @description Unix timestamp in nanoseconds.
   */
  last_updated?: number;
  timeframe?: string;
  id?: string;
  price?: number;
  size?: number;
  exchange?: number;
  conditions?: Array<number>;
}

/**
 * @description SnapshotMinuteBar data structure
 */
export type SnapshotMinuteBar = {
  close?: number;
  high?: number;
  low?: number;
  open?: number;
  transactions?: number;
  volume?: number;
  vwap?: number;
  /**
   * @description Unix timestamp in nanoseconds.
   */
  last_updated?: number;
}

/**
 * @description UnifiedSnapshot data structure
 */
export type UnifiedSnapshot = {
  /**
   * @description The ticker symbol for the asset.
   */
  ticker: string;
  /**
   * @description The name of this contract.
   */
  name?: string;
  /**
   * @description The asset class for this ticker.
   */
  type?: 'crypto' | 'fx' | 'indices' | 'options' | 'stocks';
  /**
   * @description The market status for the market that trades this ticker. Possible values for stocks, options, crypto, and forex snapshots are open, closed, early_trading, or late_trading. Possible values for indices snapshots are regular_trading, closed, early_trading, and late_trading.
   */
  market_status?: 'open' | 'closed' | 'early_trading' | 'regular_trading' | 'late_trading';
  /**
   * @description Error category for this ticker.
   */
  error?: string;
  /**
   * @description Error detail for this ticker.
   */
  message?: string;
  /**
   * @description Massive Fair Market Value; limited to eligible Business plans.
   */
  fmv?: number;
  /**
   * @description FMV calculation time as a Unix timestamp in nanoseconds.
   */
  fmv_last_updated?: number;
  session?: SnapshotSession;
  last_quote?: SnapshotQuote;
  last_trade?: SnapshotTrade;
  last_minute?: SnapshotMinuteBar;
}

/**
 * @description UnifiedSnapshotResponse data structure
 */
export type UnifiedSnapshotResponse = {
  /**
   * @description Absolute URL for the next page, when present.
   */
  next_url?: string;
  /**
   * @description A request id assigned by the server.
   */
  request_id: string;
  /**
   * @description An array of results containing the requested data.
   */
  results?: Array<UnifiedSnapshot>;
  /**
   * @description The status of this request's response.
   */
  status: string;
}

/**
 * @description Ticker data structure
 */
export type Ticker = {
  /**
   * @description Whether the asset was actively traded on the queried date.
   */
  active?: boolean;
  /**
   * @description The name of the currency that this asset is priced against.
   */
  base_currency_name?: string;
  /**
   * @description ISO 4217 code of the priced-against currency.
   */
  base_currency_symbol?: string;
  /**
   * @description The CIK number for this ticker.
   */
  cik?: string;
  /**
   * @description The composite OpenFIGI number for this ticker.
   */
  composite_figi?: string;
  /**
   * @description The name of the currency that this asset is traded with.
   */
  currency_name?: string;
  /**
   * @description ISO 4217 trading currency code.
   */
  currency_symbol?: string;
  /**
   * @description The last date that the asset was traded.
   */
  delisted_utc?: string;
  /**
   * @description The information is accurate up to this time.
   */
  last_updated_utc?: string;
  /**
   * @description The locale of the asset.
   */
  locale?: 'global' | 'us';
  /**
   * @description The market type of the asset.
   */
  market?: 'crypto' | 'fx' | 'indices' | 'otc' | 'stocks';
  /**
   * @description The name of the asset. For stocks/equities this will be the companies registered name. For crypto/fx this will be the name of the currency or coin pair.
   */
  name: string;
  /**
   * @description ISO 10383 MIC of the primary exchange.
   */
  primary_exchange?: string;
  /**
   * @description The share Class OpenFIGI number for this ticker.
   */
  share_class_figi?: string;
  /**
   * @description The exchange symbol that this item is traded under.
   */
  ticker: string;
  /**
   * @description Massive ticker-type code.
   */
  type?: string;
}

/**
 * @description TickerListResponse data structure
 */
export type TickerListResponse = {
  /**
   * @description The total number of results for this request.
   */
  count?: number;
  /**
   * @description Absolute URL for the next page, when present.
   */
  next_url?: string;
  /**
   * @description A request id assigned by the server.
   */
  request_id?: string;
  /**
   * @description An array of tickers that match your query. Note: Although you can query by CUSIP, due to legal reasons we do not return the CUSIP in the response.
   */
  results?: Array<Ticker>;
  /**
   * @description The status of this request's response.
   */
  status?: string;
}

/**
 * @description Address data structure
 */
export type Address = {
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
}

/**
 * @description Visual-branding URLs may require the same API key when fetched.
 */
export type Branding = {
  icon_url?: string;
  logo_url?: string;
}

/**
 * @description TickerDetails data structure
 */
export type TickerDetails = any

/**
 * @description TickerDetailsResponse data structure
 */
export type TickerDetailsResponse = {
  /**
   * @description The total number of results for this request.
   */
  count?: number;
  /**
   * @description A request id assigned by the server.
   */
  request_id?: string;
  results?: TickerDetails;
  /**
   * @description The status of this request's response.
   */
  status?: string;
}