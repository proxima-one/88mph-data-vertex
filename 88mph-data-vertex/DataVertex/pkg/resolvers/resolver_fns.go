package resolvers

import (
models "github.com/proxima-one/proxima-data-vertex/pkg/models"
json "github.com/json-iterator/go"
"context"
"fmt"
)

func (r *mutationResolver) PutDPoolList(ctx context.Context, input models.DPoolListInput) (*bool, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("DPoolLists")
_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
boolResult := true
if err != nil {
 boolResult = false
}
  return &boolResult, err

}


func (r *mutationResolver) PutDPool(ctx context.Context, input models.DPoolInput) (*bool, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("DPools")
_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
boolResult := true
if err != nil {
 boolResult = false
}
  return &boolResult, err

}


func (r *mutationResolver) PutUser(ctx context.Context, input models.UserInput) (*bool, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("UserInputs")
_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
boolResult := true
if err != nil {
 boolResult = false
}
  return &boolResult, err

}


func (r *mutationResolver) PutUserTotalDeposit(ctx context.Context, input models.UserTotalDepositInput) (*bool, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("UserTotalDepositInputs")
_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
boolResult := true
if err != nil {
 boolResult = false
}
  return &boolResult, err

}


func (r *mutationResolver) PutDeposit(ctx context.Context, input models.DepositInput) (*bool, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("Deposits")
_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
boolResult := true
if err != nil {
 boolResult = false
}
  return &boolResult, err

}


func (r *mutationResolver) PutFunder(ctx context.Context, input models.FunderInput) (*bool, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("Funders")
_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
boolResult := true
if err != nil {
 boolResult = false
}
  return &boolResult, err

}


func (r *mutationResolver) PutFunderTotalInterest(ctx context.Context, input models.FunderTotalInterestInput) (*bool, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("FunderTotalInterestInputs")
_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
boolResult := true
if err != nil {
 boolResult = false
}
  return &boolResult, err

}


func (r *mutationResolver) PutFunding(ctx context.Context, input models.FundingInput) (*bool, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("FundingInputs")
_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
boolResult := true
if err != nil {
 boolResult = false
}
  return &boolResult, err

}


func (r *mutationResolver) PutMPHHolder(ctx context.Context, input models.MPHHolderInput) (*bool, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("MPHHolderInputs")
_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
boolResult := true
if err != nil {
 boolResult = false
}
  return &boolResult, err

}


func (r *mutationResolver) PutMph(ctx context.Context, input models.MPHInput) (*bool, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("MPHInputs")
_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
boolResult := true
if err != nil {
 boolResult = false
}
  return &boolResult, err

}


func (r *queryResolver) DPoolList(ctx context.Context, id string, prove *bool) (*models.DPoolList, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("DPoolLists")
result, err := table.Get(id, args["prove"].(bool))
if err != nil {
  return nil, err
}
data := result.GetValue();
//fmt.Println(data)
var value models.DPoolList;
json.Unmarshal(data, &value)
return &value, nil

}


func (r *queryResolver) DPoolLists(ctx context.Context, first *int, last *int, limit *int, prove *bool) ([]*models.DPoolList, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("DPoolLists")
result, err := table.Scan(*first, *last, *limit, args["prove"].(bool),  args)
if err != nil {
  return nil, err
}

fmt.Println(result)
var value []*models.DPoolList;
////data := result.GetValue();
//json.Unmarshal(data, &value)
return value, nil

}


func (r *queryResolver) DPoolListSearch(ctx context.Context, queryText string, prove *bool) ([]*models.DPoolList, error) {
	args := DefaultInputs;
//table, _ := r.db.GetTable("DPoolLists")

result, err := r.db.Query("DPoolLists", queryText, args)
if err != nil {
  return nil, err
}
fmt.Println(result)
//data := result.GetValue();
var value []*models.DPoolList;
//json.Unmarshal(data, &value)
return value, nil

}


func (r *queryResolver) DPool(ctx context.Context, id string, prove *bool) (*models.DPool, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("DPools")
result, err := table.Get(id, args["prove"].(bool))
if err != nil {
  return nil, err
}
//fmt.Println(result.GetValue())
data := result.GetValue();
var value models.DPool;
json.Unmarshal(data, &value)
return &value, nil

}


func (r *queryResolver) DPools(ctx context.Context, first *int, last *int, limit *int, prove *bool) ([]*models.DPool, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("DPools")
result, err := table.Scan(*first, *last, *limit, args["prove"].(bool),  args)
if err != nil {
  return nil, err
}
////data := result.GetValue();
value  := make([]*models.DPool, 0)
for _, dataRow := range result {
	var val models.DPool;
	json.Unmarshal(dataRow.GetValue(), &val)
	value = append(value, &val)
}

//json.Unmarshal(data, &value)
return value, nil

}


func (r *queryResolver) DPoolSearch(ctx context.Context, queryText string, prove *bool) ([]*models.DPool, error) {
args := DefaultInputs;
//table, _ := r.db.GetTable("DPools")
result, err := r.db.Query("DPools", queryText, args)
if err != nil {
  return nil, err
}
//data := result.GetValue();

value  := make([]*models.DPool, 0)
for _, dataRow := range result {
	var val models.DPool;
	json.Unmarshal(dataRow.GetValue(), &val)
	value = append(value, &val)
}

//json.Unmarshal(data, &value)
return value, nil
}


func (r *queryResolver) User(ctx context.Context, id string, prove *bool) (*models.User, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("Users")
result, err := table.Get(id, args["prove"].(bool))
if err != nil {
  return nil, err
}
data := result.GetValue();
var value models.User;
json.Unmarshal(data, &value)
return &value, nil

}


func (r *queryResolver) Users(ctx context.Context, first *int, last *int, limit *int, prove *bool) ([]*models.User, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("Users")
_, err := table.Scan(*first, *last, *limit, args["prove"].(bool),  args)
if err != nil {
  return nil, err
}
//data := result.GetValue();
var value []*models.User;
//json.Unmarshal(data, &value)
return value, nil

}


func (r *queryResolver) UserSearch(ctx context.Context, queryText string, prove *bool) ([]*models.User, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("Users")
result, err := table.Query(queryText, args["prove"].(bool))
if err != nil {
  return nil, err
}
fmt.Println(result)
//data := result.GetValue();
var value []*models.User;
//json.Unmarshal(data, &value)
return value, nil

}


func (r *queryResolver) UserTotalDeposit(ctx context.Context, id string, prove *bool) (*models.UserTotalDeposit, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("UserTotalDeposits")
result, err := table.Get(id, args["prove"].(bool))
if err != nil {
  return nil, err
}
data := result.GetValue();
var value models.UserTotalDeposit;
json.Unmarshal(data, &value)
return &value, nil

}


func (r *queryResolver) UserTotalDeposits(ctx context.Context, first *int, last *int, limit *int, prove *bool) ([]*models.UserTotalDeposit, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("UserTotalDeposits")
_, err := table.Scan(*first, *last, *limit, args["prove"].(bool),  args)
if err != nil {
  return nil, err
}
//data := result.GetValue();
var value []*models.UserTotalDeposit;
//json.Unmarshal(data, &value)
return value, nil

}


func (r *queryResolver) UserTotalDepositSearch(ctx context.Context, queryText string, prove *bool) ([]*models.UserTotalDeposit, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("UserTotalDeposits")
_, err := table.Query(queryText, args["prove"].(bool))
if err != nil {
  return nil, err
}
//data := result.GetValue();
var value []*models.UserTotalDeposit;
//json.Unmarshal(data, &value)
return value, nil

}


func (r *queryResolver) Deposit(ctx context.Context, id string, prove *bool) (*models.Deposit, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("Deposits")
result, err := table.Get(id, args["prove"].(bool))
if err != nil {
  return nil, err
}
data := result.GetValue();
var value models.Deposit;
json.Unmarshal(data, &value)
return &value, nil

}


func (r *queryResolver) Deposits(ctx context.Context, first *int, last *int, limit *int, prove *bool) ([]*models.Deposit, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("Deposits")
_, err := table.Scan(*first, *last, *limit, args["prove"].(bool),  args)
if err != nil {
  return nil, err
}
//data := result.GetValue();
var value []*models.Deposit;
//json.Unmarshal(data, &value)
return value, nil

}


func (r *queryResolver) DepositSearch(ctx context.Context, queryText string, prove *bool) ([]*models.Deposit, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("Deposits")
_, err := table.Query(queryText, args["prove"].(bool))
if err != nil {
  return nil, err
}
//data := result.GetValue();
var value []*models.Deposit;
//json.Unmarshal(data, &value)
return value, nil

}


func (r *queryResolver) Funder(ctx context.Context, id string, prove *bool) (*models.Funder, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("Funders")
result, err := table.Get(id, args["prove"].(bool))
if err != nil {
  return nil, err
}
data := result.GetValue();
var value models.Funder;
json.Unmarshal(data, &value)
return &value, nil

}


func (r *queryResolver) Funders(ctx context.Context, first *int, last *int, limit *int, prove *bool) ([]*models.Funder, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("Funders")
_, err := table.Scan(*first, *last, *limit, args["prove"].(bool),  args)
if err != nil {
  return nil, err
}
//data := result.GetValue();
var value []*models.Funder;
//json.Unmarshal(data, &value)
return value, nil

}


func (r *queryResolver) FunderSearch(ctx context.Context, queryText string, prove *bool) ([]*models.Funder, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("Funders")
_, err := table.Query(queryText, args["prove"].(bool))
if err != nil {
  return nil, err
}
//data := result.GetValue();
var value []*models.Funder;
//json.Unmarshal(data, &value)
return value, nil

}


func (r *queryResolver) FunderTotalInterest(ctx context.Context, id string, prove *bool) (*models.FunderTotalInterest, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("FunderTotalInterests")
result, err := table.Get(id, args["prove"].(bool))
if err != nil {
  return nil, err
}
data := result.GetValue();
var value models.FunderTotalInterest;
json.Unmarshal(data, &value)
return &value, nil

}


func (r *queryResolver) FunderTotalInterests(ctx context.Context, first *int, last *int, limit *int, prove *bool) ([]*models.FunderTotalInterest, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("FunderTotalInterests")
_, err := table.Scan(*first, *last, *limit, args["prove"].(bool),  args)
if err != nil {
  return nil, err
}
//data := result.GetValue();
var value []*models.FunderTotalInterest;
//json.Unmarshal(data, &value)
return value, nil

}


func (r *queryResolver) FunderTotalInterestSearch(ctx context.Context, queryText string, prove *bool) ([]*models.FunderTotalInterest, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("FunderTotalInterests")
_, err := table.Query(queryText, args["prove"].(bool))
if err != nil {
  return nil, err
}
//data := result.GetValue();
var value []*models.FunderTotalInterest;
//json.Unmarshal(data, &value)
return value, nil

}


func (r *queryResolver) Funding(ctx context.Context, id string, prove *bool) (*models.Funding, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("Fundings")
result, err := table.Get(id, args["prove"].(bool))
if err != nil {
  return nil, err
}
data := result.GetValue();
var value models.Funding;
json.Unmarshal(data, &value)
return &value, nil

}


func (r *queryResolver) Fundings(ctx context.Context, first *int, last *int, limit *int, prove *bool) ([]*models.Funding, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("Fundings")
_, err := table.Scan(*first, *last, *limit, args["prove"].(bool),  args)
if err != nil {
  return nil, err
}
//data := result.GetValue();
var value []*models.Funding;
//json.Unmarshal(data, &value)
return value, nil

}


func (r *queryResolver) FundingSearch(ctx context.Context, queryText string, prove *bool) ([]*models.Funding, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("Fundings")
_, err := table.Query(queryText, args["prove"].(bool))
if err != nil {
  return nil, err
}
//data := result.GetValue();
var value []*models.Funding;
//json.Unmarshal(data, &value)
return value, nil

}


func (r *queryResolver) MPHHolder(ctx context.Context, id string, prove *bool) (*models.MPHHolder, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("MPHHolders")
result, err := table.Get(id, args["prove"].(bool))
if err != nil {
  return nil, err
}
data := result.GetValue();
var value models.MPHHolder;
json.Unmarshal(data, &value)
return &value, nil

}


func (r *queryResolver) MPHHolders(ctx context.Context, first *int, last *int, limit *int, prove *bool) ([]*models.MPHHolder, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("MPHHolders")
_, err := table.Scan(*first, *last, *limit, args["prove"].(bool),  args)
if err != nil {
  return nil, err
}
//data := result.GetValue();
var value []*models.MPHHolder;
//json.Unmarshal(data, &value)
return value, nil

}


func (r *queryResolver) MPHHolderSearch(ctx context.Context, queryText string, prove *bool) ([]*models.MPHHolder, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("MPHHolders")
_, err := table.Query(queryText, args["prove"].(bool))
if err != nil {
  return nil, err
}
//data := result.GetValue();
var value []*models.MPHHolder;
//json.Unmarshal(data, &value)
return value, nil

}


func (r *queryResolver) Mph(ctx context.Context, id string, prove *bool) (*models.Mph, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("Mphs")
result, err := table.Get(id, args["prove"].(bool))
if err != nil {
  return nil, err
}
data := result.GetValue();
var value models.Mph;
json.Unmarshal(data, &value)
return &value, nil

}


func (r *queryResolver) MPHs(ctx context.Context, first *int, last *int, limit *int, prove *bool) ([]*models.Mph, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("Mphs")
_, err := table.Scan(*first, *last, *limit, args["prove"].(bool),  args)
if err != nil {
  return nil, err
}
//data := result.GetValue();
var value []*models.Mph;
//json.Unmarshal(data, &value)
return value, nil

}


func (r *queryResolver) MPHSearch(ctx context.Context, queryText string, prove *bool) ([]*models.Mph, error) {
	args := DefaultInputs;
table, _ := r.db.GetTable("Mphs")
_, err := table.Query(queryText, args["prove"].(bool))
if err != nil {
  return nil, err
}
//data := result.GetValue();
var value []*models.Mph;
//json.Unmarshal(data, &value)
return value, nil

}

// Mutation returns gql.MutationResolver implementation.
