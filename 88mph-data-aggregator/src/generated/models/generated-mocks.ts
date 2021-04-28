/* eslint-disable @typescript-eslint/no-use-before-define,@typescript-eslint/no-unused-vars,no-prototype-builtins */
import { DPool, DPoolInput, DPoolList, DPoolListInput, Deposit, DepositInput, FractionalDeposit, FractionalDepositInput, Funder, FunderInput, FunderTotalInterest, FunderTotalInterestInput, Funding, FundingInput, MPH, MPHHolder, MPHHolderInput, MPHInput, Proof, User, UserInput, UserTotalDeposit, UserTotalDepositInput, Vest, VestInput } from './models';

export const aDPool = (overrides?: Partial<DPool>): DPool => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'dd7e1984-bb7b-4f67-bc70-affba6fcb9f4',
        address: overrides && overrides.hasOwnProperty('address') ? overrides.address! : 'non',
        moneyMarket: overrides && overrides.hasOwnProperty('moneyMarket') ? overrides.moneyMarket! : 'qui',
        stablecoin: overrides && overrides.hasOwnProperty('stablecoin') ? overrides.stablecoin! : 'recusandae',
        interestModel: overrides && overrides.hasOwnProperty('interestModel') ? overrides.interestModel! : 'fugiat',
        users: overrides && overrides.hasOwnProperty('users') ? overrides.users! : [aUser()],
        UserIDs: overrides && overrides.hasOwnProperty('UserIDs') ? overrides.UserIDs! : ['officiis'],
        numUsers: overrides && overrides.hasOwnProperty('numUsers') ? overrides.numUsers! : 'dolorum',
        deposits: overrides && overrides.hasOwnProperty('deposits') ? overrides.deposits! : [aDeposit()],
        DepositIDs: overrides && overrides.hasOwnProperty('DepositIDs') ? overrides.DepositIDs! : ['voluptatem'],
        numDeposits: overrides && overrides.hasOwnProperty('numDeposits') ? overrides.numDeposits! : 'voluptas',
        numActiveDeposits: overrides && overrides.hasOwnProperty('numActiveDeposits') ? overrides.numActiveDeposits! : 'iusto',
        totalActiveDeposit: overrides && overrides.hasOwnProperty('totalActiveDeposit') ? overrides.totalActiveDeposit! : 'placeat',
        totalHistoricalDeposit: overrides && overrides.hasOwnProperty('totalHistoricalDeposit') ? overrides.totalHistoricalDeposit! : 'aut',
        totalInterestPaid: overrides && overrides.hasOwnProperty('totalInterestPaid') ? overrides.totalInterestPaid! : 'reiciendis',
        unfundedDepositAmount: overrides && overrides.hasOwnProperty('unfundedDepositAmount') ? overrides.unfundedDepositAmount! : 'excepturi',
        funders: overrides && overrides.hasOwnProperty('funders') ? overrides.funders! : [aFunder()],
        FunderIDs: overrides && overrides.hasOwnProperty('FunderIDs') ? overrides.FunderIDs! : ['placeat'],
        numFunders: overrides && overrides.hasOwnProperty('numFunders') ? overrides.numFunders! : 'magni',
        fundings: overrides && overrides.hasOwnProperty('fundings') ? overrides.fundings! : [aFunding()],
        FundingIDs: overrides && overrides.hasOwnProperty('FundingIDs') ? overrides.FundingIDs! : ['provident'],
        numFundings: overrides && overrides.hasOwnProperty('numFundings') ? overrides.numFundings! : 'quas',
        MinDepositPeriod: overrides && overrides.hasOwnProperty('MinDepositPeriod') ? overrides.MinDepositPeriod! : 'eligendi',
        MaxDepositPeriod: overrides && overrides.hasOwnProperty('MaxDepositPeriod') ? overrides.MaxDepositPeriod! : 'et',
        MinDepositAmount: overrides && overrides.hasOwnProperty('MinDepositAmount') ? overrides.MinDepositAmount! : 'velit',
        MaxDepositAmount: overrides && overrides.hasOwnProperty('MaxDepositAmount') ? overrides.MaxDepositAmount! : 'eum',
        mphDepositorRewardMintMultiplier: overrides && overrides.hasOwnProperty('mphDepositorRewardMintMultiplier') ? overrides.mphDepositorRewardMintMultiplier! : 'et',
        mphDepositorRewardTakeBackMultiplier: overrides && overrides.hasOwnProperty('mphDepositorRewardTakeBackMultiplier') ? overrides.mphDepositorRewardTakeBackMultiplier! : 'sit',
        mphFunderRewardMultiplier: overrides && overrides.hasOwnProperty('mphFunderRewardMultiplier') ? overrides.mphFunderRewardMultiplier! : 'est',
        oneYearInterestRate: overrides && overrides.hasOwnProperty('oneYearInterestRate') ? overrides.oneYearInterestRate! : 'dolorem',
        surplus: overrides && overrides.hasOwnProperty('surplus') ? overrides.surplus! : 'consequatur',
        moneyMarketIncomeIndex: overrides && overrides.hasOwnProperty('moneyMarketIncomeIndex') ? overrides.moneyMarketIncomeIndex! : 'et',
        oracleInterestRate: overrides && overrides.hasOwnProperty('oracleInterestRate') ? overrides.oracleInterestRate! : 'aut',
        proof: overrides && overrides.hasOwnProperty('proof') ? overrides.proof! : aProof(),
    };
};

export const aDPoolInput = (overrides?: Partial<DPoolInput>): DPoolInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'cd213dbe-6d90-49b9-a2e6-bd7a1705ad9d',
        address: overrides && overrides.hasOwnProperty('address') ? overrides.address! : 'et',
        moneyMarket: overrides && overrides.hasOwnProperty('moneyMarket') ? overrides.moneyMarket! : 'repellat',
        stablecoin: overrides && overrides.hasOwnProperty('stablecoin') ? overrides.stablecoin! : 'rerum',
        interestModel: overrides && overrides.hasOwnProperty('interestModel') ? overrides.interestModel! : 'est',
        UserIDs: overrides && overrides.hasOwnProperty('UserIDs') ? overrides.UserIDs! : ['corrupti'],
        numUsers: overrides && overrides.hasOwnProperty('numUsers') ? overrides.numUsers! : 'quo',
        DepositIDs: overrides && overrides.hasOwnProperty('DepositIDs') ? overrides.DepositIDs! : ['saepe'],
        numDeposits: overrides && overrides.hasOwnProperty('numDeposits') ? overrides.numDeposits! : 'est',
        numActiveDeposits: overrides && overrides.hasOwnProperty('numActiveDeposits') ? overrides.numActiveDeposits! : 'illum',
        totalActiveDeposit: overrides && overrides.hasOwnProperty('totalActiveDeposit') ? overrides.totalActiveDeposit! : 'architecto',
        totalHistoricalDeposit: overrides && overrides.hasOwnProperty('totalHistoricalDeposit') ? overrides.totalHistoricalDeposit! : 'et',
        totalInterestPaid: overrides && overrides.hasOwnProperty('totalInterestPaid') ? overrides.totalInterestPaid! : 'quo',
        unfundedDepositAmount: overrides && overrides.hasOwnProperty('unfundedDepositAmount') ? overrides.unfundedDepositAmount! : 'voluptatibus',
        FunderIDs: overrides && overrides.hasOwnProperty('FunderIDs') ? overrides.FunderIDs! : ['quaerat'],
        numFunders: overrides && overrides.hasOwnProperty('numFunders') ? overrides.numFunders! : 'voluptas',
        FundingIDs: overrides && overrides.hasOwnProperty('FundingIDs') ? overrides.FundingIDs! : ['omnis'],
        numFundings: overrides && overrides.hasOwnProperty('numFundings') ? overrides.numFundings! : 'alias',
        MinDepositPeriod: overrides && overrides.hasOwnProperty('MinDepositPeriod') ? overrides.MinDepositPeriod! : 'veritatis',
        MaxDepositPeriod: overrides && overrides.hasOwnProperty('MaxDepositPeriod') ? overrides.MaxDepositPeriod! : 'facere',
        MinDepositAmount: overrides && overrides.hasOwnProperty('MinDepositAmount') ? overrides.MinDepositAmount! : 'et',
        MaxDepositAmount: overrides && overrides.hasOwnProperty('MaxDepositAmount') ? overrides.MaxDepositAmount! : 'ut',
        mphDepositorRewardMintMultiplier: overrides && overrides.hasOwnProperty('mphDepositorRewardMintMultiplier') ? overrides.mphDepositorRewardMintMultiplier! : 'pariatur',
        mphDepositorRewardTakeBackMultiplier: overrides && overrides.hasOwnProperty('mphDepositorRewardTakeBackMultiplier') ? overrides.mphDepositorRewardTakeBackMultiplier! : 'numquam',
        mphFunderRewardMultiplier: overrides && overrides.hasOwnProperty('mphFunderRewardMultiplier') ? overrides.mphFunderRewardMultiplier! : 'et',
        oneYearInterestRate: overrides && overrides.hasOwnProperty('oneYearInterestRate') ? overrides.oneYearInterestRate! : 'eligendi',
        surplus: overrides && overrides.hasOwnProperty('surplus') ? overrides.surplus! : 'soluta',
        moneyMarketIncomeIndex: overrides && overrides.hasOwnProperty('moneyMarketIncomeIndex') ? overrides.moneyMarketIncomeIndex! : 'beatae',
        oracleInterestRate: overrides && overrides.hasOwnProperty('oracleInterestRate') ? overrides.oracleInterestRate! : 'eveniet',
    };
};

export const aDPoolList = (overrides?: Partial<DPoolList>): DPoolList => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '5210ca75-fb0f-4815-a50b-f1c810375fac',
        pools: overrides && overrides.hasOwnProperty('pools') ? overrides.pools! : [aDPool()],
        DPoolIDs: overrides && overrides.hasOwnProperty('DPoolIDs') ? overrides.DPoolIDs! : ['temporibus'],
        numPools: overrides && overrides.hasOwnProperty('numPools') ? overrides.numPools! : 'nulla',
        numUsers: overrides && overrides.hasOwnProperty('numUsers') ? overrides.numUsers! : 'illum',
        numActiveUsers: overrides && overrides.hasOwnProperty('numActiveUsers') ? overrides.numActiveUsers! : 'consequatur',
        numFunders: overrides && overrides.hasOwnProperty('numFunders') ? overrides.numFunders! : 'facere',
        proof: overrides && overrides.hasOwnProperty('proof') ? overrides.proof! : aProof(),
    };
};

export const aDPoolListInput = (overrides?: Partial<DPoolListInput>): DPoolListInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '9a13efca-a25e-4f4b-b8de-067d02aca680',
        DPoolIDs: overrides && overrides.hasOwnProperty('DPoolIDs') ? overrides.DPoolIDs! : ['facere'],
        numPools: overrides && overrides.hasOwnProperty('numPools') ? overrides.numPools! : 'et',
        numUsers: overrides && overrides.hasOwnProperty('numUsers') ? overrides.numUsers! : 'rerum',
        numActiveUsers: overrides && overrides.hasOwnProperty('numActiveUsers') ? overrides.numActiveUsers! : 'et',
        numFunders: overrides && overrides.hasOwnProperty('numFunders') ? overrides.numFunders! : 'aut',
    };
};

export const aDeposit = (overrides?: Partial<Deposit>): Deposit => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'c23e3322-255c-4eb7-bb9a-d8fc47712d88',
        nftID: overrides && overrides.hasOwnProperty('nftID') ? overrides.nftID! : 'aut',
        user: overrides && overrides.hasOwnProperty('user') ? overrides.user! : aUser(),
        UserID: overrides && overrides.hasOwnProperty('UserID') ? overrides.UserID! : 'pariatur',
        pool: overrides && overrides.hasOwnProperty('pool') ? overrides.pool! : aDPool(),
        DPoolID: overrides && overrides.hasOwnProperty('DPoolID') ? overrides.DPoolID! : 'in',
        amount: overrides && overrides.hasOwnProperty('amount') ? overrides.amount! : 'blanditiis',
        maturationTimestamp: overrides && overrides.hasOwnProperty('maturationTimestamp') ? overrides.maturationTimestamp! : 'sed',
        active: overrides && overrides.hasOwnProperty('active') ? overrides.active! : false,
        depositTimestamp: overrides && overrides.hasOwnProperty('depositTimestamp') ? overrides.depositTimestamp! : 'eum',
        depositLength: overrides && overrides.hasOwnProperty('depositLength') ? overrides.depositLength! : 'qui',
        interestEarned: overrides && overrides.hasOwnProperty('interestEarned') ? overrides.interestEarned! : 'consequatur',
        fundingID: overrides && overrides.hasOwnProperty('fundingID') ? overrides.fundingID! : 'molestiae',
        mintMPHAmount: overrides && overrides.hasOwnProperty('mintMPHAmount') ? overrides.mintMPHAmount! : 'consequatur',
        takeBackMPHAmount: overrides && overrides.hasOwnProperty('takeBackMPHAmount') ? overrides.takeBackMPHAmount! : 'qui',
        initialMoneyMarketIncomeIndex: overrides && overrides.hasOwnProperty('initialMoneyMarketIncomeIndex') ? overrides.initialMoneyMarketIncomeIndex! : 'enim',
        fundingInterestPaid: overrides && overrides.hasOwnProperty('fundingInterestPaid') ? overrides.fundingInterestPaid! : 'dicta',
        fundingRefundAmount: overrides && overrides.hasOwnProperty('fundingRefundAmount') ? overrides.fundingRefundAmount! : 'fuga',
        proof: overrides && overrides.hasOwnProperty('proof') ? overrides.proof! : aProof(),
    };
};

export const aDepositInput = (overrides?: Partial<DepositInput>): DepositInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '8de380cb-fb39-4207-a560-41d4c81639ac',
        nftID: overrides && overrides.hasOwnProperty('nftID') ? overrides.nftID! : 'nihil',
        UserID: overrides && overrides.hasOwnProperty('UserID') ? overrides.UserID! : 'ipsa',
        DPoolID: overrides && overrides.hasOwnProperty('DPoolID') ? overrides.DPoolID! : 'saepe',
        amount: overrides && overrides.hasOwnProperty('amount') ? overrides.amount! : 'esse',
        maturationTimestamp: overrides && overrides.hasOwnProperty('maturationTimestamp') ? overrides.maturationTimestamp! : 'veritatis',
        active: overrides && overrides.hasOwnProperty('active') ? overrides.active! : false,
        depositTimestamp: overrides && overrides.hasOwnProperty('depositTimestamp') ? overrides.depositTimestamp! : 'eum',
        depositLength: overrides && overrides.hasOwnProperty('depositLength') ? overrides.depositLength! : 'sint',
        interestEarned: overrides && overrides.hasOwnProperty('interestEarned') ? overrides.interestEarned! : 'aliquid',
        fundingID: overrides && overrides.hasOwnProperty('fundingID') ? overrides.fundingID! : 'maxime',
        mintMPHAmount: overrides && overrides.hasOwnProperty('mintMPHAmount') ? overrides.mintMPHAmount! : 'magnam',
        takeBackMPHAmount: overrides && overrides.hasOwnProperty('takeBackMPHAmount') ? overrides.takeBackMPHAmount! : 'voluptatibus',
        initialMoneyMarketIncomeIndex: overrides && overrides.hasOwnProperty('initialMoneyMarketIncomeIndex') ? overrides.initialMoneyMarketIncomeIndex! : 'ab',
        fundingInterestPaid: overrides && overrides.hasOwnProperty('fundingInterestPaid') ? overrides.fundingInterestPaid! : 'aut',
        fundingRefundAmount: overrides && overrides.hasOwnProperty('fundingRefundAmount') ? overrides.fundingRefundAmount! : 'et',
    };
};

export const aFractionalDeposit = (overrides?: Partial<FractionalDeposit>): FractionalDeposit => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '02473140-b13d-4176-a8c4-cda737a92eda',
        address: overrides && overrides.hasOwnProperty('address') ? overrides.address! : 'omnis',
        zeroCouponBondAddress: overrides && overrides.hasOwnProperty('zeroCouponBondAddress') ? overrides.zeroCouponBondAddress! : 'porro',
        ownerAddress: overrides && overrides.hasOwnProperty('ownerAddress') ? overrides.ownerAddress! : 'blanditiis',
        active: overrides && overrides.hasOwnProperty('active') ? overrides.active! : false,
        deposit: overrides && overrides.hasOwnProperty('deposit') ? overrides.deposit! : aDeposit(),
        DepositID: overrides && overrides.hasOwnProperty('DepositID') ? overrides.DepositID! : 'maxime',
        proof: overrides && overrides.hasOwnProperty('proof') ? overrides.proof! : aProof(),
    };
};

export const aFractionalDepositInput = (overrides?: Partial<FractionalDepositInput>): FractionalDepositInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'da053372-5bda-463b-a01e-a07954e128e1',
        address: overrides && overrides.hasOwnProperty('address') ? overrides.address! : 'eveniet',
        zeroCouponBondAddress: overrides && overrides.hasOwnProperty('zeroCouponBondAddress') ? overrides.zeroCouponBondAddress! : 'ea',
        ownerAddress: overrides && overrides.hasOwnProperty('ownerAddress') ? overrides.ownerAddress! : 'sed',
        active: overrides && overrides.hasOwnProperty('active') ? overrides.active! : true,
        DepositID: overrides && overrides.hasOwnProperty('DepositID') ? overrides.DepositID! : 'laboriosam',
    };
};

export const aFunder = (overrides?: Partial<Funder>): Funder => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '96feb96b-1727-4b39-9488-bff4c2b6ba4e',
        address: overrides && overrides.hasOwnProperty('address') ? overrides.address! : 'quasi',
        pools: overrides && overrides.hasOwnProperty('pools') ? overrides.pools! : [aDPool()],
        DPoolIDs: overrides && overrides.hasOwnProperty('DPoolIDs') ? overrides.DPoolIDs! : ['in'],
        numPools: overrides && overrides.hasOwnProperty('numPools') ? overrides.numPools! : 'sint',
        fundings: overrides && overrides.hasOwnProperty('fundings') ? overrides.fundings! : [aFunding()],
        FundingIDs: overrides && overrides.hasOwnProperty('FundingIDs') ? overrides.FundingIDs! : ['mollitia'],
        numFundings: overrides && overrides.hasOwnProperty('numFundings') ? overrides.numFundings! : 'est',
        totalMPHEarned: overrides && overrides.hasOwnProperty('totalMPHEarned') ? overrides.totalMPHEarned! : 'sapiente',
        totalInterestByPool: overrides && overrides.hasOwnProperty('totalInterestByPool') ? overrides.totalInterestByPool! : [aFunderTotalInterest()],
        FunderTotalInterestIDs: overrides && overrides.hasOwnProperty('FunderTotalInterestIDs') ? overrides.FunderTotalInterestIDs! : ['consequatur'],
        proof: overrides && overrides.hasOwnProperty('proof') ? overrides.proof! : aProof(),
    };
};

export const aFunderInput = (overrides?: Partial<FunderInput>): FunderInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '3f7ab024-785f-405c-94ec-83b0053abc52',
        address: overrides && overrides.hasOwnProperty('address') ? overrides.address! : 'sit',
        DPoolIDs: overrides && overrides.hasOwnProperty('DPoolIDs') ? overrides.DPoolIDs! : ['dolorem'],
        numPools: overrides && overrides.hasOwnProperty('numPools') ? overrides.numPools! : 'earum',
        FundingIDs: overrides && overrides.hasOwnProperty('FundingIDs') ? overrides.FundingIDs! : ['minima'],
        numFundings: overrides && overrides.hasOwnProperty('numFundings') ? overrides.numFundings! : 'et',
        totalMPHEarned: overrides && overrides.hasOwnProperty('totalMPHEarned') ? overrides.totalMPHEarned! : 'rerum',
        FunderTotalInterestIDs: overrides && overrides.hasOwnProperty('FunderTotalInterestIDs') ? overrides.FunderTotalInterestIDs! : ['molestiae'],
    };
};

export const aFunderTotalInterest = (overrides?: Partial<FunderTotalInterest>): FunderTotalInterest => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'b25d5d3e-e19f-4616-aa20-99ad2faca70d',
        funder: overrides && overrides.hasOwnProperty('funder') ? overrides.funder! : aFunder(),
        FunderID: overrides && overrides.hasOwnProperty('FunderID') ? overrides.FunderID! : 'similique',
        pool: overrides && overrides.hasOwnProperty('pool') ? overrides.pool! : aDPool(),
        DPoolID: overrides && overrides.hasOwnProperty('DPoolID') ? overrides.DPoolID! : 'totam',
        totalDeficitFunded: overrides && overrides.hasOwnProperty('totalDeficitFunded') ? overrides.totalDeficitFunded! : 'ut',
        totalHistoricalDeficitFunded: overrides && overrides.hasOwnProperty('totalHistoricalDeficitFunded') ? overrides.totalHistoricalDeficitFunded! : 'placeat',
        totalInterestEarned: overrides && overrides.hasOwnProperty('totalInterestEarned') ? overrides.totalInterestEarned! : 'rerum',
        totalHistoricalInterestEarned: overrides && overrides.hasOwnProperty('totalHistoricalInterestEarned') ? overrides.totalHistoricalInterestEarned! : 'odit',
        totalRecordedFundedDepositAmount: overrides && overrides.hasOwnProperty('totalRecordedFundedDepositAmount') ? overrides.totalRecordedFundedDepositAmount! : 'eos',
        proof: overrides && overrides.hasOwnProperty('proof') ? overrides.proof! : aProof(),
    };
};

export const aFunderTotalInterestInput = (overrides?: Partial<FunderTotalInterestInput>): FunderTotalInterestInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '751c8b7d-7b16-418e-a690-c6117bfa9d3f',
        FunderID: overrides && overrides.hasOwnProperty('FunderID') ? overrides.FunderID! : 'aut',
        DPoolID: overrides && overrides.hasOwnProperty('DPoolID') ? overrides.DPoolID! : 'nostrum',
        totalDeficitFunded: overrides && overrides.hasOwnProperty('totalDeficitFunded') ? overrides.totalDeficitFunded! : 'molestiae',
        totalHistoricalDeficitFunded: overrides && overrides.hasOwnProperty('totalHistoricalDeficitFunded') ? overrides.totalHistoricalDeficitFunded! : 'fugiat',
        totalInterestEarned: overrides && overrides.hasOwnProperty('totalInterestEarned') ? overrides.totalInterestEarned! : 'quis',
        totalHistoricalInterestEarned: overrides && overrides.hasOwnProperty('totalHistoricalInterestEarned') ? overrides.totalHistoricalInterestEarned! : 'vero',
        totalRecordedFundedDepositAmount: overrides && overrides.hasOwnProperty('totalRecordedFundedDepositAmount') ? overrides.totalRecordedFundedDepositAmount! : 'quaerat',
    };
};

export const aFunding = (overrides?: Partial<Funding>): Funding => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '4fefe0af-12da-4f93-9aa6-179865062606',
        nftID: overrides && overrides.hasOwnProperty('nftID') ? overrides.nftID! : 'voluptatem',
        funder: overrides && overrides.hasOwnProperty('funder') ? overrides.funder! : aFunder(),
        FunderID: overrides && overrides.hasOwnProperty('FunderID') ? overrides.FunderID! : 'eos',
        pool: overrides && overrides.hasOwnProperty('pool') ? overrides.pool! : aDPool(),
        DPoolID: overrides && overrides.hasOwnProperty('DPoolID') ? overrides.DPoolID! : 'explicabo',
        fromDepositID: overrides && overrides.hasOwnProperty('fromDepositID') ? overrides.fromDepositID! : 'quam',
        toDepositID: overrides && overrides.hasOwnProperty('toDepositID') ? overrides.toDepositID! : 'sed',
        active: overrides && overrides.hasOwnProperty('active') ? overrides.active! : true,
        recordedFundedDepositAmount: overrides && overrides.hasOwnProperty('recordedFundedDepositAmount') ? overrides.recordedFundedDepositAmount! : 'et',
        recordedMoneyMarketIncomeIndex: overrides && overrides.hasOwnProperty('recordedMoneyMarketIncomeIndex') ? overrides.recordedMoneyMarketIncomeIndex! : 'voluptate',
        initialFundedDepositAmount: overrides && overrides.hasOwnProperty('initialFundedDepositAmount') ? overrides.initialFundedDepositAmount! : 'rem',
        fundedDeficitAmount: overrides && overrides.hasOwnProperty('fundedDeficitAmount') ? overrides.fundedDeficitAmount! : 'minima',
        totalInterestEarned: overrides && overrides.hasOwnProperty('totalInterestEarned') ? overrides.totalInterestEarned! : 'odit',
        creationTimestamp: overrides && overrides.hasOwnProperty('creationTimestamp') ? overrides.creationTimestamp! : 'nesciunt',
        mphRewardEarned: overrides && overrides.hasOwnProperty('mphRewardEarned') ? overrides.mphRewardEarned! : 'maiores',
        refundAmount: overrides && overrides.hasOwnProperty('refundAmount') ? overrides.refundAmount! : 'fugiat',
        proof: overrides && overrides.hasOwnProperty('proof') ? overrides.proof! : aProof(),
    };
};

export const aFundingInput = (overrides?: Partial<FundingInput>): FundingInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '456f70c1-34a9-4c95-94ac-a2ba5bb548d6',
        nftID: overrides && overrides.hasOwnProperty('nftID') ? overrides.nftID! : 'ducimus',
        FunderID: overrides && overrides.hasOwnProperty('FunderID') ? overrides.FunderID! : 'aut',
        DPoolID: overrides && overrides.hasOwnProperty('DPoolID') ? overrides.DPoolID! : 'sit',
        fromDepositID: overrides && overrides.hasOwnProperty('fromDepositID') ? overrides.fromDepositID! : 'non',
        toDepositID: overrides && overrides.hasOwnProperty('toDepositID') ? overrides.toDepositID! : 'modi',
        active: overrides && overrides.hasOwnProperty('active') ? overrides.active! : false,
        recordedFundedDepositAmount: overrides && overrides.hasOwnProperty('recordedFundedDepositAmount') ? overrides.recordedFundedDepositAmount! : 'qui',
        recordedMoneyMarketIncomeIndex: overrides && overrides.hasOwnProperty('recordedMoneyMarketIncomeIndex') ? overrides.recordedMoneyMarketIncomeIndex! : 'sequi',
        initialFundedDepositAmount: overrides && overrides.hasOwnProperty('initialFundedDepositAmount') ? overrides.initialFundedDepositAmount! : 'iusto',
        fundedDeficitAmount: overrides && overrides.hasOwnProperty('fundedDeficitAmount') ? overrides.fundedDeficitAmount! : 'fuga',
        totalInterestEarned: overrides && overrides.hasOwnProperty('totalInterestEarned') ? overrides.totalInterestEarned! : 'eligendi',
        creationTimestamp: overrides && overrides.hasOwnProperty('creationTimestamp') ? overrides.creationTimestamp! : 'labore',
        mphRewardEarned: overrides && overrides.hasOwnProperty('mphRewardEarned') ? overrides.mphRewardEarned! : 'porro',
        refundAmount: overrides && overrides.hasOwnProperty('refundAmount') ? overrides.refundAmount! : 'nemo',
    };
};

export const aMPH = (overrides?: Partial<MPH>): MPH => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'f373c68b-aa35-49e2-81e2-217740893006',
        totalHistoricalReward: overrides && overrides.hasOwnProperty('totalHistoricalReward') ? overrides.totalHistoricalReward! : 'nemo',
        rewardPerSecond: overrides && overrides.hasOwnProperty('rewardPerSecond') ? overrides.rewardPerSecond! : 'enim',
        rewardPerMPHPerSecond: overrides && overrides.hasOwnProperty('rewardPerMPHPerSecond') ? overrides.rewardPerMPHPerSecond! : 'alias',
        proof: overrides && overrides.hasOwnProperty('proof') ? overrides.proof! : aProof(),
    };
};

export const aMPHHolder = (overrides?: Partial<MPHHolder>): MPHHolder => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'd31e96ec-9983-4325-b575-992eaee92d72',
        address: overrides && overrides.hasOwnProperty('address') ? overrides.address! : 'harum',
        totalHistoricalReward: overrides && overrides.hasOwnProperty('totalHistoricalReward') ? overrides.totalHistoricalReward! : 'dicta',
        proof: overrides && overrides.hasOwnProperty('proof') ? overrides.proof! : aProof(),
    };
};

export const aMPHHolderInput = (overrides?: Partial<MPHHolderInput>): MPHHolderInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '0a0d0ea4-430a-4a31-84ac-21dd19e1bca6',
        address: overrides && overrides.hasOwnProperty('address') ? overrides.address! : 'quas',
        totalHistoricalReward: overrides && overrides.hasOwnProperty('totalHistoricalReward') ? overrides.totalHistoricalReward! : 'saepe',
    };
};

export const aMPHInput = (overrides?: Partial<MPHInput>): MPHInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'ad88f10c-be69-4870-96cc-2755bec23382',
        totalHistoricalReward: overrides && overrides.hasOwnProperty('totalHistoricalReward') ? overrides.totalHistoricalReward! : 'ad',
        rewardPerSecond: overrides && overrides.hasOwnProperty('rewardPerSecond') ? overrides.rewardPerSecond! : 'illo',
        rewardPerMPHPerSecond: overrides && overrides.hasOwnProperty('rewardPerMPHPerSecond') ? overrides.rewardPerMPHPerSecond! : 'adipisci',
    };
};

export const aProof = (overrides?: Partial<Proof>): Proof => {
    return {
        root: overrides && overrides.hasOwnProperty('root') ? overrides.root! : 'dolores',
        proof: overrides && overrides.hasOwnProperty('proof') ? overrides.proof! : 'sint',
    };
};

export const aUser = (overrides?: Partial<User>): User => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'a5756f00-41a6-422a-8a7d-d13ee6a63750',
        address: overrides && overrides.hasOwnProperty('address') ? overrides.address! : 'error',
        pools: overrides && overrides.hasOwnProperty('pools') ? overrides.pools! : [aDPool()],
        DPoolIDs: overrides && overrides.hasOwnProperty('DPoolIDs') ? overrides.DPoolIDs! : ['dignissimos'],
        numPools: overrides && overrides.hasOwnProperty('numPools') ? overrides.numPools! : 'error',
        deposits: overrides && overrides.hasOwnProperty('deposits') ? overrides.deposits! : [aDeposit()],
        DepositIDs: overrides && overrides.hasOwnProperty('DepositIDs') ? overrides.DepositIDs! : ['minus'],
        numDeposits: overrides && overrides.hasOwnProperty('numDeposits') ? overrides.numDeposits! : 'qui',
        numActiveDeposits: overrides && overrides.hasOwnProperty('numActiveDeposits') ? overrides.numActiveDeposits! : 'architecto',
        totalDepositByPool: overrides && overrides.hasOwnProperty('totalDepositByPool') ? overrides.totalDepositByPool! : [aUserTotalDeposit()],
        UserTotalDepositIDs: overrides && overrides.hasOwnProperty('UserTotalDepositIDs') ? overrides.UserTotalDepositIDs! : ['incidunt'],
        totalMPHEarned: overrides && overrides.hasOwnProperty('totalMPHEarned') ? overrides.totalMPHEarned! : 'rerum',
        totalMPHPaidBack: overrides && overrides.hasOwnProperty('totalMPHPaidBack') ? overrides.totalMPHPaidBack! : 'illum',
        proof: overrides && overrides.hasOwnProperty('proof') ? overrides.proof! : aProof(),
    };
};

export const aUserInput = (overrides?: Partial<UserInput>): UserInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '5a1eb0d6-209e-483a-ad3f-fcb75e43f5b9',
        address: overrides && overrides.hasOwnProperty('address') ? overrides.address! : 'iste',
        DPoolIDs: overrides && overrides.hasOwnProperty('DPoolIDs') ? overrides.DPoolIDs! : ['autem'],
        numPools: overrides && overrides.hasOwnProperty('numPools') ? overrides.numPools! : 'inventore',
        DepositIDs: overrides && overrides.hasOwnProperty('DepositIDs') ? overrides.DepositIDs! : ['reiciendis'],
        numDeposits: overrides && overrides.hasOwnProperty('numDeposits') ? overrides.numDeposits! : 'nostrum',
        numActiveDeposits: overrides && overrides.hasOwnProperty('numActiveDeposits') ? overrides.numActiveDeposits! : 'itaque',
        UserTotalDepositIDs: overrides && overrides.hasOwnProperty('UserTotalDepositIDs') ? overrides.UserTotalDepositIDs! : ['tenetur'],
        totalMPHEarned: overrides && overrides.hasOwnProperty('totalMPHEarned') ? overrides.totalMPHEarned! : 'laborum',
        totalMPHPaidBack: overrides && overrides.hasOwnProperty('totalMPHPaidBack') ? overrides.totalMPHPaidBack! : 'nulla',
    };
};

export const aUserTotalDeposit = (overrides?: Partial<UserTotalDeposit>): UserTotalDeposit => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'd10e9006-20c7-45b6-a661-4ed60e759b2a',
        user: overrides && overrides.hasOwnProperty('user') ? overrides.user! : aUser(),
        UserID: overrides && overrides.hasOwnProperty('UserID') ? overrides.UserID! : 'nisi',
        pool: overrides && overrides.hasOwnProperty('pool') ? overrides.pool! : aDPool(),
        DPoolID: overrides && overrides.hasOwnProperty('DPoolID') ? overrides.DPoolID! : 'ut',
        totalActiveDeposit: overrides && overrides.hasOwnProperty('totalActiveDeposit') ? overrides.totalActiveDeposit! : 'placeat',
        totalHistoricalDeposit: overrides && overrides.hasOwnProperty('totalHistoricalDeposit') ? overrides.totalHistoricalDeposit! : 'est',
        totalInterestEarned: overrides && overrides.hasOwnProperty('totalInterestEarned') ? overrides.totalInterestEarned! : 'cum',
        totalHistoricalInterestEarned: overrides && overrides.hasOwnProperty('totalHistoricalInterestEarned') ? overrides.totalHistoricalInterestEarned! : 'eos',
        proof: overrides && overrides.hasOwnProperty('proof') ? overrides.proof! : aProof(),
    };
};

export const aUserTotalDepositInput = (overrides?: Partial<UserTotalDepositInput>): UserTotalDepositInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'f12116a8-e6f0-44d7-b9f9-05e42bcdc95a',
        UserID: overrides && overrides.hasOwnProperty('UserID') ? overrides.UserID! : 'velit',
        DPoolID: overrides && overrides.hasOwnProperty('DPoolID') ? overrides.DPoolID! : 'et',
        totalActiveDeposit: overrides && overrides.hasOwnProperty('totalActiveDeposit') ? overrides.totalActiveDeposit! : 'accusamus',
        totalHistoricalDeposit: overrides && overrides.hasOwnProperty('totalHistoricalDeposit') ? overrides.totalHistoricalDeposit! : 'mollitia',
        totalInterestEarned: overrides && overrides.hasOwnProperty('totalInterestEarned') ? overrides.totalInterestEarned! : 'repudiandae',
        totalHistoricalInterestEarned: overrides && overrides.hasOwnProperty('totalHistoricalInterestEarned') ? overrides.totalHistoricalInterestEarned! : 'consectetur',
    };
};

export const aVest = (overrides?: Partial<Vest>): Vest => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '8b48e5e1-5c6e-43f5-b593-865d128f1cd2',
        index: overrides && overrides.hasOwnProperty('index') ? overrides.index! : 'nobis',
        user: overrides && overrides.hasOwnProperty('user') ? overrides.user! : 'provident',
        amount: overrides && overrides.hasOwnProperty('amount') ? overrides.amount! : 'pariatur',
        vestPeriodInSeconds: overrides && overrides.hasOwnProperty('vestPeriodInSeconds') ? overrides.vestPeriodInSeconds! : 'maxime',
        creationTimestamp: overrides && overrides.hasOwnProperty('creationTimestamp') ? overrides.creationTimestamp! : 'aliquid',
        withdrawnAmount: overrides && overrides.hasOwnProperty('withdrawnAmount') ? overrides.withdrawnAmount! : 'ut',
        proof: overrides && overrides.hasOwnProperty('proof') ? overrides.proof! : aProof(),
    };
};

export const aVestInput = (overrides?: Partial<VestInput>): VestInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'ff69ae9c-f9d2-43a7-9625-691f75d040c9',
        index: overrides && overrides.hasOwnProperty('index') ? overrides.index! : 'aut',
        user: overrides && overrides.hasOwnProperty('user') ? overrides.user! : 'ea',
        amount: overrides && overrides.hasOwnProperty('amount') ? overrides.amount! : 'consequuntur',
        vestPeriodInSeconds: overrides && overrides.hasOwnProperty('vestPeriodInSeconds') ? overrides.vestPeriodInSeconds! : 'voluptas',
        creationTimestamp: overrides && overrides.hasOwnProperty('creationTimestamp') ? overrides.creationTimestamp! : 'veritatis',
        withdrawnAmount: overrides && overrides.hasOwnProperty('withdrawnAmount') ? overrides.withdrawnAmount! : 'placeat',
    };
};
