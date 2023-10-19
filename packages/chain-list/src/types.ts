// Copyright 2019-2022 @soul-wallet/chain-list authors & contributors
// SPDX-License-Identifier: Apache-2.0

export enum _ChainStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  STOPPED = 'STOPPED'
}

export enum _ChainProviderStatus {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  UNSTABLE = 'UNSTABLE'
}

export interface _ChainProvider {
  id_: number,
  chainId_: number,
  providerName: string,
  endpoint: string,
  providerMode: string,
  status: _ChainProviderStatus
}

export enum _AssetType {
  NATIVE = 'NATIVE',
  LOCAL = 'LOCAL',
  ERC20 = 'ERC20',
  ERC721 = 'ERC721',
  PSP22 = 'PSP22',
  PSP34 = 'PSP34',
  UNKNOWN = 'UNKNOWN'
}

export enum _SubstrateChainType {
  RELAYCHAIN = 'RELAYCHAIN',
  PARACHAIN = 'PARACHAIN'
}

export interface _ChainInfo {
  slug: string,
  name: string,
  chainStatus: _ChainStatus,
  isTestnet: boolean,
  providers: Record<string, string>,
  substrateInfo: _SubstrateInfo | null,
  evmInfo: _EvmInfo | null,
  icon: string
}

export interface _ChainAsset {
  originChain: string,
  slug: string,
  name: string,
  symbol: string,
  decimals: number | null,
  priceId: string | null,
  minAmount: string | null,
  assetType: _AssetType,
  metadata: Record<any, any> | null,
  multiChainAsset: string | null,
  hasValue: boolean,
  icon: string
}

export interface _EvmInfo {
  evmChainId: number,
  blockExplorer: string | null,

  // some info about native tokens (for convenience)
  existentialDeposit: string,
  decimals: number,
  symbol: string,

  supportSmartContract: _AssetType[] | null,
  abiExplorer: string | null
}

export interface _FundStatus {
  IN_AUCTION: 'in_auction',
  WON: 'won',
  WITHDRAW: 'withdraw',
  FAILED: 'failed',
}

export interface _CrowdloanFund {
  relayChain: 'polkadot' | 'kusama'
  fundId: string
  paraId: number
  status: _FundStatus
  startTime: Date
  endTime: Date
  auctionIndex: number
  firstPeriod: number
  lastPeriod: number
}

export interface _SubstrateInfo {
  relaySlug: string | null,
  paraId: number | null,
  genesisHash: string,
  addressPrefix: number,
  crowdloanParaId: number | null,
  crowdloanUrl: string | null,
  crowdloanFunds: _CrowdloanFund[] | null,
  chainType: _SubstrateChainType,
  blockExplorer: string | null,

  // some info about native tokens (for convenience)
  existentialDeposit: string,
  decimals: number,
  symbol: string,

  hasNativeNft: boolean,
  supportStaking: boolean,
  supportSmartContract: _AssetType[] | null
}

export interface _MultiChainAsset {
  slug: string,
  originChainAsset: string,
  name: string,
  symbol: string,
  priceId: string,
  hasValue: boolean,
  icon: string,
}

export enum _AssetRefPath {
  XCM = 'XCM',
  MANTA_ZK = 'MANTA_ZK'
}

export interface _AssetRef {
  srcAsset: string,
  destAsset: string,

  srcChain: string,
  destChain: string,

  path: _AssetRefPath
}
