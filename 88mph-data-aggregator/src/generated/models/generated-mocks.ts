/* eslint-disable @typescript-eslint/no-use-before-define,@typescript-eslint/no-unused-vars,no-prototype-builtins */
import {
  DPoolList,
  DPoolListInput,
  DPool,
  DPoolInput,
  User,
  UserInput,
  UserTotalDeposit,
  UserTotalDepositInput,
  Deposit,
  DepositInput,
  FunderInput,
  FunderTotalInterest,
  FunderTotalInterestInput,
  Funding,
  FundingInput,
  MPHHolder,
  MPHHolderInput,
  MPH,
  MPHInput,
  Proof,
  Funder
} from "./models";

export const aDPoolList = (overrides?: Partial<DPoolList>): DPoolList => {
  return {
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "5210ca75-fb0f-4815-a50b-f1c810375fac",
    pools:
      overrides && overrides.hasOwnProperty("pools")
        ? overrides.pools!
        : [aDPool()],
    numPools:
      overrides && overrides.hasOwnProperty("numPools")
        ? overrides.numPools!
        : 8457,
    numUsers:
      overrides && overrides.hasOwnProperty("numUsers")
        ? overrides.numUsers!
        : 8186,
    numActiveUsers:
      overrides && overrides.hasOwnProperty("numActiveUsers")
        ? overrides.numActiveUsers!
        : 52,
    numFunders:
      overrides && overrides.hasOwnProperty("numFunders")
        ? overrides.numFunders!
        : 7528,
    proof:
      overrides && overrides.hasOwnProperty("proof")
        ? overrides.proof!
        : aProof()
  };
};

export const aDPoolListInput = (
  overrides?: Partial<DPoolListInput>
): DPoolListInput => {
  return {
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "9a13efca-a25e-4f4b-b8de-067d02aca680",
    numPools:
      overrides && overrides.hasOwnProperty("numPools")
        ? overrides.numPools!
        : 4998,
    numUsers:
      overrides && overrides.hasOwnProperty("numUsers")
        ? overrides.numUsers!
        : 6430,
    numActiveUsers:
      overrides && overrides.hasOwnProperty("numActiveUsers")
        ? overrides.numActiveUsers!
        : 661,
    numFunders:
      overrides && overrides.hasOwnProperty("numFunders")
        ? overrides.numFunders!
        : 8048,
    ProofID:
      overrides && overrides.hasOwnProperty("ProofID")
        ? overrides.ProofID!
        : "dolor"
  };
};

export const aDPool = (overrides?: Partial<DPool>): DPool => {
  return {
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "dd7e1984-bb7b-4f67-bc70-affba6fcb9f4",
    address:
      overrides && overrides.hasOwnProperty("address")
        ? overrides.address!
        : "non",
    moneyMarket:
      overrides && overrides.hasOwnProperty("moneyMarket")
        ? overrides.moneyMarket!
        : "qui",
    stablecoin:
      overrides && overrides.hasOwnProperty("stablecoin")
        ? overrides.stablecoin!
        : "recusandae",
    interestModel:
      overrides && overrides.hasOwnProperty("interestModel")
        ? overrides.interestModel!
        : "fugiat",
    users:
      overrides && overrides.hasOwnProperty("users")
        ? overrides.users!
        : [aUser()],
    numUsers:
      overrides && overrides.hasOwnProperty("numUsers")
        ? overrides.numUsers!
        : 6206,
    deposits:
      overrides && overrides.hasOwnProperty("deposits")
        ? overrides.deposits!
        : [aDeposit()],
    numDeposits:
      overrides && overrides.hasOwnProperty("numDeposits")
        ? overrides.numDeposits!
        : 3281,
    numActiveDeposits:
      overrides && overrides.hasOwnProperty("numActiveDeposits")
        ? overrides.numActiveDeposits!
        : "iusto",
    totalActiveDeposit:
      overrides && overrides.hasOwnProperty("totalActiveDeposit")
        ? overrides.totalActiveDeposit!
        : "placeat",
    totalHistoricalDeposit:
      overrides && overrides.hasOwnProperty("totalHistoricalDeposit")
        ? overrides.totalHistoricalDeposit!
        : "aut",
    totalInterestPaid:
      overrides && overrides.hasOwnProperty("totalInterestPaid")
        ? overrides.totalInterestPaid!
        : "reiciendis",
    unfundedDepositAmount:
      overrides && overrides.hasOwnProperty("unfundedDepositAmount")
        ? overrides.unfundedDepositAmount!
        : "excepturi",
    funders:
      overrides && overrides.hasOwnProperty("funders")
        ? overrides.funders!
        : [aFunder()],
    numFunders:
      overrides && overrides.hasOwnProperty("numFunders")
        ? overrides.numFunders!
        : "magni",
    fundings:
      overrides && overrides.hasOwnProperty("fundings")
        ? overrides.fundings!
        : [aFunding()],
    numFundings:
      overrides && overrides.hasOwnProperty("numFundings")
        ? overrides.numFundings!
        : "quas",
    MinDepositPeriod:
      overrides && overrides.hasOwnProperty("MinDepositPeriod")
        ? overrides.MinDepositPeriod!
        : 6.93,
    MaxDepositPeriod:
      overrides && overrides.hasOwnProperty("MaxDepositPeriod")
        ? overrides.MaxDepositPeriod!
        : 4.32,
    MinDepositAmount:
      overrides && overrides.hasOwnProperty("MinDepositAmount")
        ? overrides.MinDepositAmount!
        : 1.99,
    MaxDepositAmount:
      overrides && overrides.hasOwnProperty("MaxDepositAmount")
        ? overrides.MaxDepositAmount!
        : 3.84,
    mphMintingMultiplier:
      overrides && overrides.hasOwnProperty("mphMintingMultiplier")
        ? overrides.mphMintingMultiplier!
        : 8.02,
    mphDepositorRewardMultiplier:
      overrides && overrides.hasOwnProperty("mphDepositorRewardMultiplier")
        ? overrides.mphDepositorRewardMultiplier!
        : 0.85,
    mphFunderRewardMultiplier:
      overrides && overrides.hasOwnProperty("mphFunderRewardMultiplier")
        ? overrides.mphFunderRewardMultiplier!
        : 7.72,
    oneYearInterestRate:
      overrides && overrides.hasOwnProperty("oneYearInterestRate")
        ? overrides.oneYearInterestRate!
        : 1.65,
    surplus:
      overrides && overrides.hasOwnProperty("surplus")
        ? overrides.surplus!
        : "consequatur",
    moneyMarketIncomeIndex:
      overrides && overrides.hasOwnProperty("moneyMarketIncomeIndex")
        ? overrides.moneyMarketIncomeIndex!
        : "et",
    oracleInterestRate:
      overrides && overrides.hasOwnProperty("oracleInterestRate")
        ? overrides.oracleInterestRate!
        : "aut",
    proof:
      overrides && overrides.hasOwnProperty("proof")
        ? overrides.proof!
        : aProof()
  };
};

export const aDPoolInput = (overrides?: Partial<DPoolInput>): DPoolInput => {
  return {
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "cd213dbe-6d90-49b9-a2e6-bd7a1705ad9d",
    address:
      overrides && overrides.hasOwnProperty("address")
        ? overrides.address!
        : "et",
    moneyMarket:
      overrides && overrides.hasOwnProperty("moneyMarket")
        ? overrides.moneyMarket!
        : "repellat",
    stablecoin:
      overrides && overrides.hasOwnProperty("stablecoin")
        ? overrides.stablecoin!
        : "rerum",
    interestModel:
      overrides && overrides.hasOwnProperty("interestModel")
        ? overrides.interestModel!
        : "est",
    numUsers:
      overrides && overrides.hasOwnProperty("numUsers")
        ? overrides.numUsers!
        : 7121,
    numDeposits:
      overrides && overrides.hasOwnProperty("numDeposits")
        ? overrides.numDeposits!
        : 6486,
    numActiveDeposits:
      overrides && overrides.hasOwnProperty("numActiveDeposits")
        ? overrides.numActiveDeposits!
        : "illum",
    totalActiveDeposit:
      overrides && overrides.hasOwnProperty("totalActiveDeposit")
        ? overrides.totalActiveDeposit!
        : "architecto",
    totalHistoricalDeposit:
      overrides && overrides.hasOwnProperty("totalHistoricalDeposit")
        ? overrides.totalHistoricalDeposit!
        : "et",
    totalInterestPaid:
      overrides && overrides.hasOwnProperty("totalInterestPaid")
        ? overrides.totalInterestPaid!
        : "quo",
    unfundedDepositAmount:
      overrides && overrides.hasOwnProperty("unfundedDepositAmount")
        ? overrides.unfundedDepositAmount!
        : "voluptatibus",
    numFunders:
      overrides && overrides.hasOwnProperty("numFunders")
        ? overrides.numFunders!
        : "voluptas",
    numFundings:
      overrides && overrides.hasOwnProperty("numFundings")
        ? overrides.numFundings!
        : "alias",
    MinDepositPeriod:
      overrides && overrides.hasOwnProperty("MinDepositPeriod")
        ? overrides.MinDepositPeriod!
        : 0.61,
    MaxDepositPeriod:
      overrides && overrides.hasOwnProperty("MaxDepositPeriod")
        ? overrides.MaxDepositPeriod!
        : 7.55,
    MinDepositAmount:
      overrides && overrides.hasOwnProperty("MinDepositAmount")
        ? overrides.MinDepositAmount!
        : 4.32,
    MaxDepositAmount:
      overrides && overrides.hasOwnProperty("MaxDepositAmount")
        ? overrides.MaxDepositAmount!
        : 5.41,
    mphMintingMultiplier:
      overrides && overrides.hasOwnProperty("mphMintingMultiplier")
        ? overrides.mphMintingMultiplier!
        : 3.45,
    mphDepositorRewardMultiplier:
      overrides && overrides.hasOwnProperty("mphDepositorRewardMultiplier")
        ? overrides.mphDepositorRewardMultiplier!
        : 7.35,
    mphFunderRewardMultiplier:
      overrides && overrides.hasOwnProperty("mphFunderRewardMultiplier")
        ? overrides.mphFunderRewardMultiplier!
        : 5.01,
    oneYearInterestRate:
      overrides && overrides.hasOwnProperty("oneYearInterestRate")
        ? overrides.oneYearInterestRate!
        : 6.93,
    surplus:
      overrides && overrides.hasOwnProperty("surplus")
        ? overrides.surplus!
        : "soluta",
    moneyMarketIncomeIndex:
      overrides && overrides.hasOwnProperty("moneyMarketIncomeIndex")
        ? overrides.moneyMarketIncomeIndex!
        : "beatae",
    oracleInterestRate:
      overrides && overrides.hasOwnProperty("oracleInterestRate")
        ? overrides.oracleInterestRate!
        : "eveniet"
  };
};

export const aUser = (overrides?: Partial<User>): User => {
  return {
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "a5756f00-41a6-422a-8a7d-d13ee6a63750",
    address:
      overrides && overrides.hasOwnProperty("address")
        ? overrides.address!
        : "error",
    pools:
      overrides && overrides.hasOwnProperty("pools")
        ? overrides.pools!
        : [aDPool()],
    numPools:
      overrides && overrides.hasOwnProperty("numPools")
        ? overrides.numPools!
        : "error",
    deposits:
      overrides && overrides.hasOwnProperty("deposits")
        ? overrides.deposits!
        : [aDeposit()],
    numDeposits:
      overrides && overrides.hasOwnProperty("numDeposits")
        ? overrides.numDeposits!
        : "qui",
    numActiveDeposits:
      overrides && overrides.hasOwnProperty("numActiveDeposits")
        ? overrides.numActiveDeposits!
        : "architecto",
    totalDepositByPool:
      overrides && overrides.hasOwnProperty("totalDepositByPool")
        ? overrides.totalDepositByPool!
        : [aUserTotalDeposit()],
    totalMPHEarned:
      overrides && overrides.hasOwnProperty("totalMPHEarned")
        ? overrides.totalMPHEarned!
        : "rerum",
    totalMPHPaidBack:
      overrides && overrides.hasOwnProperty("totalMPHPaidBack")
        ? overrides.totalMPHPaidBack!
        : "illum",
    proof:
      overrides && overrides.hasOwnProperty("proof")
        ? overrides.proof!
        : aProof()
  };
};

export const aUserInput = (overrides?: Partial<UserInput>): UserInput => {
  return {
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "5a1eb0d6-209e-483a-ad3f-fcb75e43f5b9",
    address:
      overrides && overrides.hasOwnProperty("address")
        ? overrides.address!
        : "iste",
    numPools:
      overrides && overrides.hasOwnProperty("numPools")
        ? overrides.numPools!
        : "inventore",
    numDeposits:
      overrides && overrides.hasOwnProperty("numDeposits")
        ? overrides.numDeposits!
        : "nostrum",
    numActiveDeposits:
      overrides && overrides.hasOwnProperty("numActiveDeposits")
        ? overrides.numActiveDeposits!
        : "itaque",
    totalMPHEarned:
      overrides && overrides.hasOwnProperty("totalMPHEarned")
        ? overrides.totalMPHEarned!
        : "laborum",
    totalMPHPaidBack:
      overrides && overrides.hasOwnProperty("totalMPHPaidBack")
        ? overrides.totalMPHPaidBack!
        : "nulla",
    ProofID:
      overrides && overrides.hasOwnProperty("ProofID")
        ? overrides.ProofID!
        : "veritatis"
  };
};

export const aUserTotalDeposit = (
  overrides?: Partial<UserTotalDeposit>
): UserTotalDeposit => {
  return {
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "d10e9006-20c7-45b6-a661-4ed60e759b2a",
    user:
      overrides && overrides.hasOwnProperty("user") ? overrides.user! : aUser(),
    pool:
      overrides && overrides.hasOwnProperty("pool")
        ? overrides.pool!
        : aDPool(),
    totalActiveDeposit:
      overrides && overrides.hasOwnProperty("totalActiveDeposit")
        ? overrides.totalActiveDeposit!
        : "placeat",
    totalHistoricalDeposit:
      overrides && overrides.hasOwnProperty("totalHistoricalDeposit")
        ? overrides.totalHistoricalDeposit!
        : "est",
    totalInterestEarned:
      overrides && overrides.hasOwnProperty("totalInterestEarned")
        ? overrides.totalInterestEarned!
        : "cum",
    totalHistoricalInterestEarned:
      overrides && overrides.hasOwnProperty("totalHistoricalInterestEarned")
        ? overrides.totalHistoricalInterestEarned!
        : "eos",
    proof:
      overrides && overrides.hasOwnProperty("proof")
        ? overrides.proof!
        : aProof()
  };
};

export const aUserTotalDepositInput = (
  overrides?: Partial<UserTotalDepositInput>
): UserTotalDepositInput => {
  return {
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "f12116a8-e6f0-44d7-b9f9-05e42bcdc95a",
    totalActiveDeposit:
      overrides && overrides.hasOwnProperty("totalActiveDeposit")
        ? overrides.totalActiveDeposit!
        : "accusamus",
    totalHistoricalDeposit:
      overrides && overrides.hasOwnProperty("totalHistoricalDeposit")
        ? overrides.totalHistoricalDeposit!
        : "mollitia",
    totalInterestEarned:
      overrides && overrides.hasOwnProperty("totalInterestEarned")
        ? overrides.totalInterestEarned!
        : "repudiandae",
    totalHistoricalInterestEarned:
      overrides && overrides.hasOwnProperty("totalHistoricalInterestEarned")
        ? overrides.totalHistoricalInterestEarned!
        : "consectetur",
    ProofID:
      overrides && overrides.hasOwnProperty("ProofID")
        ? overrides.ProofID!
        : "ipsum"
  };
};

export const aDeposit = (overrides?: Partial<Deposit>): Deposit => {
  return {
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "c23e3322-255c-4eb7-bb9a-d8fc47712d88",
    nftID:
      overrides && overrides.hasOwnProperty("nftID") ? overrides.nftID! : "aut",
    user:
      overrides && overrides.hasOwnProperty("user") ? overrides.user! : aUser(),
    pool:
      overrides && overrides.hasOwnProperty("pool")
        ? overrides.pool!
        : aDPool(),
    amount:
      overrides && overrides.hasOwnProperty("amount")
        ? overrides.amount!
        : "blanditiis",
    maturationTimestamp:
      overrides && overrides.hasOwnProperty("maturationTimestamp")
        ? overrides.maturationTimestamp!
        : "sed",
    active:
      overrides && overrides.hasOwnProperty("active")
        ? overrides.active!
        : false,
    depositTimestamp:
      overrides && overrides.hasOwnProperty("depositTimestamp")
        ? overrides.depositTimestamp!
        : "eum",
    interestEarned:
      overrides && overrides.hasOwnProperty("interestEarned")
        ? overrides.interestEarned!
        : "consequatur",
    fundingID:
      overrides && overrides.hasOwnProperty("fundingID")
        ? overrides.fundingID!
        : "molestiae",
    mintMPHAmount:
      overrides && overrides.hasOwnProperty("mintMPHAmount")
        ? overrides.mintMPHAmount!
        : "consequatur",
    takeBackMPHAmount:
      overrides && overrides.hasOwnProperty("takeBackMPHAmount")
        ? overrides.takeBackMPHAmount!
        : "qui",
    initialMoneyMarketIncomeIndex:
      overrides && overrides.hasOwnProperty("initialMoneyMarketIncomeIndex")
        ? overrides.initialMoneyMarketIncomeIndex!
        : "enim",
    proof:
      overrides && overrides.hasOwnProperty("proof")
        ? overrides.proof!
        : aProof()
  };
};

export const aDepositInput = (
  overrides?: Partial<DepositInput>
): DepositInput => {
  return {
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "8de380cb-fb39-4207-a560-41d4c81639ac",
    nftID:
      overrides && overrides.hasOwnProperty("nftID")
        ? overrides.nftID!
        : "nihil",
    amount:
      overrides && overrides.hasOwnProperty("amount")
        ? overrides.amount!
        : "esse",
    maturationTimestamp:
      overrides && overrides.hasOwnProperty("maturationTimestamp")
        ? overrides.maturationTimestamp!
        : "veritatis",
    active:
      overrides && overrides.hasOwnProperty("active")
        ? overrides.active!
        : false,
    depositTimestamp:
      overrides && overrides.hasOwnProperty("depositTimestamp")
        ? overrides.depositTimestamp!
        : "eum",
    interestEarned:
      overrides && overrides.hasOwnProperty("interestEarned")
        ? overrides.interestEarned!
        : "aliquid",
    fundingID:
      overrides && overrides.hasOwnProperty("fundingID")
        ? overrides.fundingID!
        : "maxime",
    mintMPHAmount:
      overrides && overrides.hasOwnProperty("mintMPHAmount")
        ? overrides.mintMPHAmount!
        : "magnam",
    takeBackMPHAmount:
      overrides && overrides.hasOwnProperty("takeBackMPHAmount")
        ? overrides.takeBackMPHAmount!
        : "voluptatibus",
    initialMoneyMarketIncomeIndex:
      overrides && overrides.hasOwnProperty("initialMoneyMarketIncomeIndex")
        ? overrides.initialMoneyMarketIncomeIndex!
        : "ab",
    ProofID:
      overrides && overrides.hasOwnProperty("ProofID")
        ? overrides.ProofID!
        : "iusto"
  };
};

export const aFunderInput = (overrides?: Partial<FunderInput>): FunderInput => {
  return {
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "3f7ab024-785f-405c-94ec-83b0053abc52",
    address:
      overrides && overrides.hasOwnProperty("address")
        ? overrides.address!
        : "sit",
    numPools:
      overrides && overrides.hasOwnProperty("numPools")
        ? overrides.numPools!
        : "earum",
    numFundings:
      overrides && overrides.hasOwnProperty("numFundings")
        ? overrides.numFundings!
        : "et",
    totalMPHEarned:
      overrides && overrides.hasOwnProperty("totalMPHEarned")
        ? overrides.totalMPHEarned!
        : "rerum",
    ProofID:
      overrides && overrides.hasOwnProperty("ProofID")
        ? overrides.ProofID!
        : "nulla"
  };
};

export const aFunderTotalInterest = (
  overrides?: Partial<FunderTotalInterest>
): FunderTotalInterest => {
  return {
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "b25d5d3e-e19f-4616-aa20-99ad2faca70d",
    funder:
      overrides && overrides.hasOwnProperty("funder")
        ? overrides.funder!
        : aFunder(),
    pool:
      overrides && overrides.hasOwnProperty("pool")
        ? overrides.pool!
        : aDPool(),
    totalDeficitFunded:
      overrides && overrides.hasOwnProperty("totalDeficitFunded")
        ? overrides.totalDeficitFunded!
        : "ut",
    totalHistoricalDeficitFunded:
      overrides && overrides.hasOwnProperty("totalHistoricalDeficitFunded")
        ? overrides.totalHistoricalDeficitFunded!
        : "placeat",
    totalInterestEarned:
      overrides && overrides.hasOwnProperty("totalInterestEarned")
        ? overrides.totalInterestEarned!
        : "rerum",
    totalHistoricalInterestEarned:
      overrides && overrides.hasOwnProperty("totalHistoricalInterestEarned")
        ? overrides.totalHistoricalInterestEarned!
        : "odit",
    totalRecordedFundedDepositAmount:
      overrides && overrides.hasOwnProperty("totalRecordedFundedDepositAmount")
        ? overrides.totalRecordedFundedDepositAmount!
        : "eos",
    proof:
      overrides && overrides.hasOwnProperty("proof")
        ? overrides.proof!
        : aProof()
  };
};

export const aFunderTotalInterestInput = (
  overrides?: Partial<FunderTotalInterestInput>
): FunderTotalInterestInput => {
  return {
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "751c8b7d-7b16-418e-a690-c6117bfa9d3f",
    totalDeficitFunded:
      overrides && overrides.hasOwnProperty("totalDeficitFunded")
        ? overrides.totalDeficitFunded!
        : "molestiae",
    totalHistoricalDeficitFunded:
      overrides && overrides.hasOwnProperty("totalHistoricalDeficitFunded")
        ? overrides.totalHistoricalDeficitFunded!
        : "fugiat",
    totalInterestEarned:
      overrides && overrides.hasOwnProperty("totalInterestEarned")
        ? overrides.totalInterestEarned!
        : "quis",
    totalHistoricalInterestEarned:
      overrides && overrides.hasOwnProperty("totalHistoricalInterestEarned")
        ? overrides.totalHistoricalInterestEarned!
        : "vero",
    totalRecordedFundedDepositAmount:
      overrides && overrides.hasOwnProperty("totalRecordedFundedDepositAmount")
        ? overrides.totalRecordedFundedDepositAmount!
        : "quaerat",
    ProofID:
      overrides && overrides.hasOwnProperty("ProofID")
        ? overrides.ProofID!
        : "saepe"
  };
};

export const aFunding = (overrides?: Partial<Funding>): Funding => {
  return {
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "4fefe0af-12da-4f93-9aa6-179865062606",
    nftID:
      overrides && overrides.hasOwnProperty("nftID")
        ? overrides.nftID!
        : "voluptatem",
    funder:
      overrides && overrides.hasOwnProperty("funder")
        ? overrides.funder!
        : aFunder(),
    pool:
      overrides && overrides.hasOwnProperty("pool")
        ? overrides.pool!
        : aDPool(),
    fromDepositID:
      overrides && overrides.hasOwnProperty("fromDepositID")
        ? overrides.fromDepositID!
        : "quam",
    toDepositID:
      overrides && overrides.hasOwnProperty("toDepositID")
        ? overrides.toDepositID!
        : "sed",
    active:
      overrides && overrides.hasOwnProperty("active")
        ? overrides.active!
        : true,
    recordedFundedDepositAmount:
      overrides && overrides.hasOwnProperty("recordedFundedDepositAmount")
        ? overrides.recordedFundedDepositAmount!
        : "et",
    recordedMoneyMarketIncomeIndex:
      overrides && overrides.hasOwnProperty("recordedMoneyMarketIncomeIndex")
        ? overrides.recordedMoneyMarketIncomeIndex!
        : "voluptate",
    initialFundedDepositAmount:
      overrides && overrides.hasOwnProperty("initialFundedDepositAmount")
        ? overrides.initialFundedDepositAmount!
        : "rem",
    fundedDeficitAmount:
      overrides && overrides.hasOwnProperty("fundedDeficitAmount")
        ? overrides.fundedDeficitAmount!
        : "minima",
    totalInterestEarned:
      overrides && overrides.hasOwnProperty("totalInterestEarned")
        ? overrides.totalInterestEarned!
        : "odit",
    mintMPHAmount:
      overrides && overrides.hasOwnProperty("mintMPHAmount")
        ? overrides.mintMPHAmount!
        : "eos",
    proof:
      overrides && overrides.hasOwnProperty("proof")
        ? overrides.proof!
        : aProof()
  };
};

export const aFundingInput = (
  overrides?: Partial<FundingInput>
): FundingInput => {
  return {
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "456f70c1-34a9-4c95-94ac-a2ba5bb548d6",
    nftID:
      overrides && overrides.hasOwnProperty("nftID")
        ? overrides.nftID!
        : "ducimus",
    fromDepositID:
      overrides && overrides.hasOwnProperty("fromDepositID")
        ? overrides.fromDepositID!
        : "non",
    toDepositID:
      overrides && overrides.hasOwnProperty("toDepositID")
        ? overrides.toDepositID!
        : "modi",
    active:
      overrides && overrides.hasOwnProperty("active")
        ? overrides.active!
        : false,
    recordedFundedDepositAmount:
      overrides && overrides.hasOwnProperty("recordedFundedDepositAmount")
        ? overrides.recordedFundedDepositAmount!
        : "qui",
    recordedMoneyMarketIncomeIndex:
      overrides && overrides.hasOwnProperty("recordedMoneyMarketIncomeIndex")
        ? overrides.recordedMoneyMarketIncomeIndex!
        : "sequi",
    initialFundedDepositAmount:
      overrides && overrides.hasOwnProperty("initialFundedDepositAmount")
        ? overrides.initialFundedDepositAmount!
        : "iusto",
    fundedDeficitAmount:
      overrides && overrides.hasOwnProperty("fundedDeficitAmount")
        ? overrides.fundedDeficitAmount!
        : "fuga",
    totalInterestEarned:
      overrides && overrides.hasOwnProperty("totalInterestEarned")
        ? overrides.totalInterestEarned!
        : "eligendi",
    mintMPHAmount:
      overrides && overrides.hasOwnProperty("mintMPHAmount")
        ? overrides.mintMPHAmount!
        : "ut",
    ProofID:
      overrides && overrides.hasOwnProperty("ProofID")
        ? overrides.ProofID!
        : "eveniet"
  };
};

export const aMPHHolder = (overrides?: Partial<MPHHolder>): MPHHolder => {
  return {
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "d31e96ec-9983-4325-b575-992eaee92d72",
    address:
      overrides && overrides.hasOwnProperty("address")
        ? overrides.address!
        : "harum",
    mphBalance:
      overrides && overrides.hasOwnProperty("mphBalance")
        ? overrides.mphBalance!
        : "dolore",
    stakedMPHBalance:
      overrides && overrides.hasOwnProperty("stakedMPHBalance")
        ? overrides.stakedMPHBalance!
        : "dolorum",
    totalHistoricalReward:
      overrides && overrides.hasOwnProperty("totalHistoricalReward")
        ? overrides.totalHistoricalReward!
        : "dicta",
    proof:
      overrides && overrides.hasOwnProperty("proof")
        ? overrides.proof!
        : aProof()
  };
};

export const aMPHHolderInput = (
  overrides?: Partial<MPHHolderInput>
): MPHHolderInput => {
  return {
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "0a0d0ea4-430a-4a31-84ac-21dd19e1bca6",
    address:
      overrides && overrides.hasOwnProperty("address")
        ? overrides.address!
        : "quas",
    mphBalance:
      overrides && overrides.hasOwnProperty("mphBalance")
        ? overrides.mphBalance!
        : "voluptatem",
    stakedMPHBalance:
      overrides && overrides.hasOwnProperty("stakedMPHBalance")
        ? overrides.stakedMPHBalance!
        : "consequatur",
    totalHistoricalReward:
      overrides && overrides.hasOwnProperty("totalHistoricalReward")
        ? overrides.totalHistoricalReward!
        : "saepe",
    ProofID:
      overrides && overrides.hasOwnProperty("ProofID")
        ? overrides.ProofID!
        : "ratione"
  };
};

export const aMPH = (overrides?: Partial<MPH>): MPH => {
  return {
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "f373c68b-aa35-49e2-81e2-217740893006",
    totalSupply:
      overrides && overrides.hasOwnProperty("totalSupply")
        ? overrides.totalSupply!
        : "autem",
    totalStakedMPHBalance:
      overrides && overrides.hasOwnProperty("totalStakedMPHBalance")
        ? overrides.totalStakedMPHBalance!
        : "excepturi",
    totalHistoricalReward:
      overrides && overrides.hasOwnProperty("totalHistoricalReward")
        ? overrides.totalHistoricalReward!
        : "nemo",
    rewardPerSecond:
      overrides && overrides.hasOwnProperty("rewardPerSecond")
        ? overrides.rewardPerSecond!
        : "enim",
    rewardPerMPHPerSecond:
      overrides && overrides.hasOwnProperty("rewardPerMPHPerSecond")
        ? overrides.rewardPerMPHPerSecond!
        : "alias",
    proof:
      overrides && overrides.hasOwnProperty("proof")
        ? overrides.proof!
        : aProof()
  };
};

export const aMPHInput = (overrides?: Partial<MPHInput>): MPHInput => {
  return {
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "ad88f10c-be69-4870-96cc-2755bec23382",
    totalSupply:
      overrides && overrides.hasOwnProperty("totalSupply")
        ? overrides.totalSupply!
        : "consequatur",
    totalStakedMPHBalance:
      overrides && overrides.hasOwnProperty("totalStakedMPHBalance")
        ? overrides.totalStakedMPHBalance!
        : "accusantium",
    totalHistoricalReward:
      overrides && overrides.hasOwnProperty("totalHistoricalReward")
        ? overrides.totalHistoricalReward!
        : "ad",
    rewardPerSecond:
      overrides && overrides.hasOwnProperty("rewardPerSecond")
        ? overrides.rewardPerSecond!
        : "illo",
    rewardPerMPHPerSecond:
      overrides && overrides.hasOwnProperty("rewardPerMPHPerSecond")
        ? overrides.rewardPerMPHPerSecond!
        : "adipisci",
    ProofID:
      overrides && overrides.hasOwnProperty("ProofID")
        ? overrides.ProofID!
        : "doloribus"
  };
};

export const aProof = (overrides?: Partial<Proof>): Proof => {
  return {
    root:
      overrides && overrides.hasOwnProperty("root")
        ? overrides.root!
        : "dolores",
    proof:
      overrides && overrides.hasOwnProperty("proof") ? overrides.proof! : "sint"
  };
};

export const aFunder = (overrides?: Partial<Funder>): Funder => {
  return {
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "96feb96b-1727-4b39-9488-bff4c2b6ba4e",
    address:
      overrides && overrides.hasOwnProperty("address")
        ? overrides.address!
        : "quasi",
    pools:
      overrides && overrides.hasOwnProperty("pools")
        ? overrides.pools!
        : [aDPool()],
    numPools:
      overrides && overrides.hasOwnProperty("numPools")
        ? overrides.numPools!
        : "sint",
    fundings:
      overrides && overrides.hasOwnProperty("fundings")
        ? overrides.fundings!
        : [aFunding()],
    numFundings:
      overrides && overrides.hasOwnProperty("numFundings")
        ? overrides.numFundings!
        : "est",
    totalMPHEarned:
      overrides && overrides.hasOwnProperty("totalMPHEarned")
        ? overrides.totalMPHEarned!
        : "sapiente",
    totalInterestByPool:
      overrides && overrides.hasOwnProperty("totalInterestByPool")
        ? overrides.totalInterestByPool!
        : [aFunderTotalInterest()],
    proof:
      overrides && overrides.hasOwnProperty("proof")
        ? overrides.proof!
        : aProof()
  };
};
