package models
//user

//update  user  type
type DPool struct {
	ID                           *string    `json:"id"`
	Address                      *string    `json:"address"`
	MoneyMarket                  *string    `json:"moneyMarket"`
	Stablecoin                   *string    `json:"stablecoin"`
	InterestModel                *string    `json:"interestModel"`
	//Users                        []*User    //`json:"users"`
  UserIDs                      []*string  `json:"userIds"`
	NumUsers                     *int       `json:"numUsers"`
	//Deposits                     []*Deposit //`json:"deposits"`
  DepositIDs                    []*string  `json:"depositIds"`
	NumDeposits                  *int       `json:"numDeposits"`
	NumActiveDeposits            *string    `json:"numActiveDeposits"`
	TotalActiveDeposit           *string    `json:"totalActiveDeposit"`
	TotalHistoricalDeposit       *string    `json:"totalHistoricalDeposit"`
	TotalInterestPaid            *string    `json:"totalInterestPaid"`
	UnfundedDepositAmount        *string    `json:"unfundedDepositAmount"`
	//Funders                      []*Funder  //`json:"funders"`
  FunderIDs                     []*string  `json:"funderIds"`
	NumFunders                   *string    `json:"numFunders"`
  FundingIDs                     []*string  `json:"fundingIds"`
	//Fundings                     []*Funding //`json:"fundings"`
	NumFundings                  *string    `json:"numFundings"`
	MinDepositPeriod             *float64   `json:"MinDepositPeriod"`
	MaxDepositPeriod             *float64   `json:"MaxDepositPeriod"`
	MinDepositAmount             *float64   `json:"MinDepositAmount"`
	MaxDepositAmount             *float64   `json:"MaxDepositAmount"`
	MphMintingMultiplier         *float64   `json:"mphMintingMultiplier"`
	MphDepositorRewardMultiplier *float64   `json:"mphDepositorRewardMultiplier"`
	MphFunderRewardMultiplier    *float64   `json:"mphFunderRewardMultiplier"`
	OneYearInterestRate          *float64   `json:"oneYearInterestRate"`
	Surplus                      *string    `json:"surplus"`
	MoneyMarketIncomeIndex       *string    `json:"moneyMarketIncomeIndex"`
	OracleInterestRate           *string    `json:"oracleInterestRate"`
}

type DPoolInput struct {
	ID                           *string         `json:"id"`
	Address                      *string         `json:"address"`
	MoneyMarket                  *string         `json:"moneyMarket"`
	Stablecoin                   *string         `json:"stablecoin"`
	InterestModel                *string         `json:"interestModel"`
	UserIDs                        []*string    `json:"userids"`
	//ids
	NumUsers                     *int            `json:"numUsers"`
	Deposits                     []*string       `json:"depositIds"`
	//ids
	NumDeposits                  *int            `json:"numDeposits"`
	NumActiveDeposits            *string         `json:"numActiveDeposits"`
	TotalActiveDeposit           *string         `json:"totalActiveDeposit"`
	TotalHistoricalDeposit       *string         `json:"totalHistoricalDeposit"`
	TotalInterestPaid            *string         `json:"totalInterestPaid"`
	UnfundedDepositAmount        *string         `json:"unfundedDepositAmount"`
	FunderIDs                      []*string       `json:"funderIds"`
	//ids
	NumFunders                   *string         `json:"numFunders"`
	FundingIDs                     []*string     `json:"fundingIds"`
	//ids
	NumFundings                  *string         `json:"numFundings"`
	MinDepositPeriod             *float64        `json:"MinDepositPeriod"`
	MaxDepositPeriod             *float64        `json:"MaxDepositPeriod"`
	MinDepositAmount             *float64        `json:"MinDepositAmount"`
	MaxDepositAmount             *float64        `json:"MaxDepositAmount"`
	MphMintingMultiplier         *float64        `json:"mphMintingMultiplier"`
	MphDepositorRewardMultiplier *float64        `json:"mphDepositorRewardMultiplier"`
	MphFunderRewardMultiplier    *float64        `json:"mphFunderRewardMultiplier"`
	OneYearInterestRate          *float64        `json:"oneYearInterestRate"`
	Surplus                      *string         `json:"surplus"`
	MoneyMarketIncomeIndex       *string         `json:"moneyMarketIncomeIndex"`
	OracleInterestRate           *string         `json:"oracleInterestRate"`
}
