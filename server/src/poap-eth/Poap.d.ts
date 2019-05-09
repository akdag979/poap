/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";
import { TransactionOverrides } from ".";

export class Poap extends Contract {
  functions: {
    supportsInterface(interfaceId: string): Promise<boolean>;

    getApproved(tokenId: number | string | BigNumber): Promise<string>;

    isAdmin(account: string): Promise<boolean>;

    isEventMinter(
      eventId: number | string | BigNumber,
      account: string
    ): Promise<boolean>;

    tokenOfOwnerByIndex(
      owner: string,
      index: number | string | BigNumber
    ): Promise<BigNumber>;

    tokenByIndex(index: number | string | BigNumber): Promise<BigNumber>;

    ownerOf(tokenId: number | string | BigNumber): Promise<string>;

    balanceOf(owner: string): Promise<BigNumber>;

    isApprovedForAll(owner: string, operator: string): Promise<boolean>;

    tokenEvent(tokenId: number | string | BigNumber): Promise<BigNumber>;

    tokenURI(tokenId: number | string | BigNumber): Promise<string>;

    renounceEventMinter(
      eventId: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    removeEventMinter(
      eventId: number | string | BigNumber,
      account: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    unpause(overrides?: TransactionOverrides): Promise<ContractTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      tokenId: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    addAdmin(
      account: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    pause(overrides?: TransactionOverrides): Promise<ContractTransaction>;

    renounceAdmin(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    addEventMinter(
      eventId: number | string | BigNumber,
      account: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setBaseURI(
      baseURI: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    approve(
      to: string,
      tokenId: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      to: string,
      approved: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokenId: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    mintToken(
      eventId: number | string | BigNumber,
      to: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    mintTokenBatch(
      eventId: number | string | BigNumber,
      to: (string)[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    burn(
      tokenId: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    initialize(overrides?: TransactionOverrides): Promise<ContractTransaction>;

    totalSupply(): Promise<BigNumber>;
    paused(): Promise<boolean>;
    name(): Promise<string>;
    symbol(): Promise<string>;
  };
  filters: {
    EventToken(eventId: null, tokenId: null): EventFilter;

    Paused(account: null): EventFilter;

    Unpaused(account: null): EventFilter;

    AdminAdded(account: string | null): EventFilter;

    AdminRemoved(account: string | null): EventFilter;

    EventMinterAdded(
      eventId: number | string | BigNumber | null,
      account: string | null
    ): EventFilter;

    EventMinterRemoved(
      eventId: number | string | BigNumber | null,
      account: string | null
    ): EventFilter;

    Transfer(
      from: string | null,
      to: string | null,
      tokenId: number | string | BigNumber | null
    ): EventFilter;

    Approval(
      owner: string | null,
      approved: string | null,
      tokenId: number | string | BigNumber | null
    ): EventFilter;

    ApprovalForAll(
      owner: string | null,
      operator: string | null,
      approved: null
    ): EventFilter;
  };
}