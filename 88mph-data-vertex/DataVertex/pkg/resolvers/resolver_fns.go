package resolvers

import (
	"context"
	"fmt"

	graphql "github.com/99designs/gqlgen/graphql"
	json "github.com/json-iterator/go"
	dataloader "github.com/proxima-one/proxima-data-vertex/pkg/dataloaders"
	models "github.com/proxima-one/proxima-data-vertex/pkg/models"
	proximaIterables "github.com/proxima-one/proxima-db-client-go/pkg/iterables"
)

func (r *dPoolResolver) Users(ctx context.Context, obj *models.DPool) ([]*models.User, error) {
	//func (r *dPoolResolver) $EntityNames(ctx context.Context, obj *models.DPool) ([]*models.User, error) {

	if obj.UserIDs == nil {
		return make([]*models.User, 0), nil
	}
	var keys []string
	for _, k := range obj.UserIDs {
		if k != nil {
			keys = append(keys, *k)
		}
	}
	entities, loaderErr := dataloader.For(ctx).UserById.LoadAll(keys)
	if loaderErr != nil {
		return make([]*models.User, 0), nil
	}
	var args map[string]interface{} = graphql.GetFieldContext(ctx).Args
	//check argument context
	//context check the args, where, orderBy, orderDirection, first, last, prove
	//getDefaults/getTheContextArgs
	//from identifier,
	//use to get from context
	results, err := proximaIterables.Search(entities, args["where"], args["orderBy"], args["direction"].(bool), args["first"].(int), args["last"].(int), "")
	if err != nil {
		return make([]*models.User, 0), nil
	}
	return results.([]*models.User), nil
	//}

}

func (r *dPoolResolver) Deposits(ctx context.Context, obj *models.DPool) ([]*models.Deposit, error) {
	//func (r *dPoolResolver) $EntityNames(ctx context.Context, obj *models.DPool) ([]*models.User, error) {

	if obj.DepositIDs == nil {
		return make([]*models.Deposit, 0), nil
	}
	var keys []string
	for _, k := range obj.DepositIDs {
		if k != nil {
			keys = append(keys, *k)
		}
	}
	entities, loaderErr := dataloader.For(ctx).DepositById.LoadAll(keys)
	if loaderErr != nil {
		return make([]*models.Deposit, 0), nil
	}
	var args map[string]interface{} = graphql.GetFieldContext(ctx).Args
	//check argument context
	//context check the args, where, orderBy, orderDirection, first, last, prove
	//getDefaults/getTheContextArgs
	//from identifier,
	//use to get from context
	results, err := proximaIterables.Search(entities, args["where"], args["orderBy"], args["direction"].(bool), args["first"].(int), args["last"].(int), "")
	if err != nil {
		return make([]*models.Deposit, 0), nil
	}
	return results.([]*models.Deposit), nil
	//}

}

func (r *dPoolResolver) Funders(ctx context.Context, obj *models.DPool) ([]*models.Funder, error) {
	//func (r *dPoolResolver) $EntityNames(ctx context.Context, obj *models.DPool) ([]*models.User, error) {

	if obj.FunderIDs == nil {
		return make([]*models.Funder, 0), nil
	}
	var keys []string
	for _, k := range obj.FunderIDs {
		if k != nil {
			keys = append(keys, *k)
		}
	}
	entities, loaderErr := dataloader.For(ctx).FunderById.LoadAll(keys)
	if loaderErr != nil {
		return make([]*models.Funder, 0), nil
	}
	var args map[string]interface{} = graphql.GetFieldContext(ctx).Args
	//check argument context
	//context check the args, where, orderBy, orderDirection, first, last, prove
	//getDefaults/getTheContextArgs
	//from identifier,
	//use to get from context
	results, err := proximaIterables.Search(entities, args["where"], args["orderBy"], args["direction"].(bool), args["first"].(int), args["last"].(int), "")
	if err != nil {
		return make([]*models.Funder, 0), nil
	}
	return results.([]*models.Funder), nil
	//}

}

func (r *dPoolResolver) Fundings(ctx context.Context, obj *models.DPool) ([]*models.Funding, error) {
	//func (r *dPoolResolver) $EntityNames(ctx context.Context, obj *models.DPool) ([]*models.User, error) {

	if obj.FundingIDs == nil {
		return make([]*models.Funding, 0), nil
	}
	var keys []string
	for _, k := range obj.FundingIDs {
		if k != nil {
			keys = append(keys, *k)
		}
	}
	entities, loaderErr := dataloader.For(ctx).FundingById.LoadAll(keys)
	if loaderErr != nil {
		return make([]*models.Funding, 0), nil
	}
	var args map[string]interface{} = graphql.GetFieldContext(ctx).Args
	//check argument context
	//context check the args, where, orderBy, orderDirection, first, last, prove
	//getDefaults/getTheContextArgs
	//from identifier,
	//use to get from context
	results, err := proximaIterables.Search(entities, args["where"], args["orderBy"], args["direction"].(bool), args["first"].(int), args["last"].(int), "")
	if err != nil {
		return make([]*models.Funding, 0), nil
	}
	return results.([]*models.Funding), nil
	//}

}

func (r *dPoolListResolver) Pools(ctx context.Context, obj *models.DPoolList) ([]*models.DPool, error) {
	//func (r *dPoolResolver) $EntityNames(ctx context.Context, obj *m	models.DPool) ([]*models.User, error) {
	//fmt.Println(obj)
	if obj.DPoolIDs == nil || true {
		return make([]*models.DPool, 0), nil
	}
	var keys []string
	for _, k := range obj.DPoolIDs {
		if k != nil {
			keys = append(keys, *k)
		}
	}
	entities, loaderErr := dataloader.For(ctx).DPoolById.LoadAll(keys)
	if loaderErr != nil {
		return make([]*models.DPool, 0), nil
	}
	var args map[string]interface{} = graphql.GetFieldContext(ctx).Args
	//check argument context
	//context check the args, where, orderBy, orderDirection, first, last, prove
	//getDefaults/getTheContextArgs
	//from identifier,
	//use to get from context
	results, err := proximaIterables.Search(entities, args["where"], args["orderBy"], args["direction"].(bool), args["first"].(int), args["last"].(int), "")
	if err != nil {
		return make([]*models.DPool, 0), nil
	}
	return results.([]*models.DPool), nil
	//}

}

func (r *depositResolver) User(ctx context.Context, obj *models.Deposit) (*models.User, error) {
	if obj.UserID == nil {
		return nil, nil
	}
	result, err := dataloader.For(ctx).UserById.LoadThunk(*obj.UserID)()
	if err != nil {
		return nil, err
	}
	return result, nil
}

func (r *depositResolver) Pool(ctx context.Context, obj *models.Deposit) (*models.DPool, error) {
	if obj.DPoolID == nil {
		return nil, nil
	}
	result, err := dataloader.For(ctx).DPoolById.LoadThunk(*obj.DPoolID)()
	if err != nil {
		return nil, err
	}
	return result, nil
}

func (r *fractionalDepositResolver) Deposit(ctx context.Context, obj *models.FractionalDeposit) (*models.Deposit, error) {
	if obj.DepositID == nil {
		return nil, nil
	}
	result, err := dataloader.For(ctx).DepositById.LoadThunk(*obj.DepositID)()
	if err != nil {
		return nil, err
	}
	return result, nil
}

func (r *funderResolver) Pools(ctx context.Context, obj *models.Funder) ([]*models.DPool, error) {
	//func (r *dPoolResolver) $EntityNames(ctx context.Context, obj *models.DPool) ([]*models.User, error) {

	if obj.DPoolIDs == nil {
		return make([]*models.DPool, 0), nil
	}
	var keys []string
	for _, k := range obj.DPoolIDs {
		if k != nil {
			keys = append(keys, *k)
		}
	}
	entities, loaderErr := dataloader.For(ctx).DPoolById.LoadAll(keys)
	if loaderErr != nil {
		return make([]*models.DPool, 0), nil
	}
	var args map[string]interface{} = graphql.GetFieldContext(ctx).Args
	//check argument context
	//context check the args, where, orderBy, orderDirection, first, last, prove
	//getDefaults/getTheContextArgs
	//from identifier,
	//use to get from context
	results, err := proximaIterables.Search(entities, args["where"], args["orderBy"], args["direction"].(bool), args["first"].(int), args["last"].(int), "")
	if err != nil {
		return make([]*models.DPool, 0), nil
	}
	return results.([]*models.DPool), nil
	//}

}

func (r *funderResolver) Fundings(ctx context.Context, obj *models.Funder) ([]*models.Funding, error) {
	//func (r *dPoolResolver) $EntityNames(ctx context.Context, obj *models.DPool) ([]*models.User, error) {

	if obj.FundingIDs == nil {
		return make([]*models.Funding, 0), nil
	}
	var keys []string
	for _, k := range obj.FundingIDs {
		if k != nil {
			keys = append(keys, *k)
		}
	}
	entities, loaderErr := dataloader.For(ctx).FundingById.LoadAll(keys)
	if loaderErr != nil {
		return make([]*models.Funding, 0), nil
	}
	var args map[string]interface{} = graphql.GetFieldContext(ctx).Args
	//check argument context
	//context check the args, where, orderBy, orderDirection, first, last, prove
	//getDefaults/getTheContextArgs
	//from identifier,
	//use to get from context
	results, err := proximaIterables.Search(entities, args["where"], args["orderBy"], args["direction"].(bool), args["first"].(int), args["last"].(int), "")
	if err != nil {
		return make([]*models.Funding, 0), nil
	}
	return results.([]*models.Funding), nil
	//}

}

func (r *funderResolver) TotalInterestByPool(ctx context.Context, obj *models.Funder) ([]*models.FunderTotalInterest, error) {
	//func (r *dPoolResolver) $EntityNames(ctx context.Context, obj *models.DPool) ([]*models.User, error) {

	if obj.FunderTotalInterestIDs == nil {
		return make([]*models.FunderTotalInterest, 0), nil
	}
	var keys []string
	for _, k := range obj.FunderTotalInterestIDs {
		if k != nil {
			keys = append(keys, *k)
		}
	}
	entities, loaderErr := dataloader.For(ctx).FunderTotalInterestById.LoadAll(keys)
	if loaderErr != nil {
		return make([]*models.FunderTotalInterest, 0), nil
	}
	var args map[string]interface{} = graphql.GetFieldContext(ctx).Args
	//check argument context
	//context check the args, where, orderBy, orderDirection, first, last, prove
	//getDefaults/getTheContextArgs
	//from identifier,
	//use to get from context
	results, err := proximaIterables.Search(entities, args["where"], args["orderBy"], args["direction"].(bool), args["first"].(int), args["last"].(int), "")
	if err != nil {
		return make([]*models.FunderTotalInterest, 0), nil
	}
	return results.([]*models.FunderTotalInterest), nil
	//}

}

func (r *funderTotalInterestResolver) Funder(ctx context.Context, obj *models.FunderTotalInterest) (*models.Funder, error) {
	if obj.FunderID == nil {
		return nil, nil
	}
	result, err := dataloader.For(ctx).FunderById.LoadThunk(*obj.FunderID)()
	if err != nil {
		return nil, err
	}
	return result, nil
}

func (r *funderTotalInterestResolver) Pool(ctx context.Context, obj *models.FunderTotalInterest) (*models.DPool, error) {
	if obj.DPoolID == nil {
		return nil, nil
	}
	result, err := dataloader.For(ctx).DPoolById.LoadThunk(*obj.DPoolID)()
	if err != nil {
		return nil, err
	}
	return result, nil
}

func (r *fundingResolver) Funder(ctx context.Context, obj *models.Funding) (*models.Funder, error) {
	if obj.FunderID == nil {
		return nil, nil
	}
	result, err := dataloader.For(ctx).FunderById.LoadThunk(*obj.FunderID)()
	if err != nil {
		return nil, err
	}
	return result, nil
}

func (r *fundingResolver) Pool(ctx context.Context, obj *models.Funding) (*models.DPool, error) {
	if obj.DPoolID == nil {
		return nil, nil
	}
	result, err := dataloader.For(ctx).DPoolById.LoadThunk(*obj.DPoolID)()
	if err != nil {
		return nil, err
	}
	return result, nil
}

func (r *mutationResolver) UpdateDPoolList(ctx context.Context, input models.DPoolListInput) (*bool, error) {

	args := DefaultInputs
	boolResult := false
	table, err := r.db.GetTable("DPoolLists")
	fmt.Println("Table")
	fmt.Println(r.db.GetCurrentDatabaseConfig())
	fmt.Print(table)
	if err != nil {
		fmt.Println("Issues getting table")
		fmt.Println(table)
		fmt.Println(err)
		return &boolResult, err
	}
	//fmt.Println()
	_, err = table.Put(*input.ID, input, args["prove"].(bool), args)
	if err != nil {
		fmt.Println("Issues putting value into table")
		fmt.Println(err)
		boolResult = false
	}
	return &boolResult, err

}

func (r *mutationResolver) UpdateDPool(ctx context.Context, input models.DPoolInput) (*bool, error) {

	args := DefaultInputs
	table, _ := r.db.GetTable("DPools")
	_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
	boolResult := true
	if err != nil {
		boolResult = false
	}
	return &boolResult, err

}

func (r *mutationResolver) UpdateUser(ctx context.Context, input models.UserInput) (*bool, error) {

	args := DefaultInputs
	table, _ := r.db.GetTable("Users")
	_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
	boolResult := true
	if err != nil {
		boolResult = false
	}
	return &boolResult, err

}

func (r *mutationResolver) UpdateUserTotalDeposit(ctx context.Context, input models.UserTotalDepositInput) (*bool, error) {

	args := DefaultInputs
	table, _ := r.db.GetTable("UserTotalDeposits")
	_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
	boolResult := true
	if err != nil {
		boolResult = false
	}
	return &boolResult, err

}

func (r *mutationResolver) UpdateDeposit(ctx context.Context, input models.DepositInput) (*bool, error) {

	args := DefaultInputs
	table, _ := r.db.GetTable("Deposits")
	_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
	boolResult := true
	if err != nil {
		boolResult = false
	}
	return &boolResult, err

}

func (r *mutationResolver) UpdateFunder(ctx context.Context, input models.FunderInput) (*bool, error) {

	args := DefaultInputs
	table, _ := r.db.GetTable("Funders")
	_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
	boolResult := true
	if err != nil {
		boolResult = false
	}
	return &boolResult, err

}

func (r *mutationResolver) UpdateFunderTotalInterest(ctx context.Context, input models.FunderTotalInterestInput) (*bool, error) {

	args := DefaultInputs
	table, _ := r.db.GetTable("FunderTotalInterests")
	_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
	boolResult := true
	if err != nil {
		boolResult = false
	}
	return &boolResult, err

}

func (r *mutationResolver) UpdateFunding(ctx context.Context, input models.FundingInput) (*bool, error) {

	args := DefaultInputs
	table, _ := r.db.GetTable("Fundings")
	_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
	boolResult := true
	if err != nil {
		boolResult = false
	}
	return &boolResult, err

}

func (r *mutationResolver) UpdateMPHHolder(ctx context.Context, input models.MPHHolderInput) (*bool, error) {

	args := DefaultInputs
	table, _ := r.db.GetTable("MPHHolders")
	_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
	boolResult := true
	if err != nil {
		boolResult = false
	}
	return &boolResult, err

}

func (r *mutationResolver) UpdateMph(ctx context.Context, input models.MPHInput) (*bool, error) {

	args := DefaultInputs
	table, _ := r.db.GetTable("MPHs")
	_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
	boolResult := true
	if err != nil {
		boolResult = false
	}
	return &boolResult, err

}

func (r *mutationResolver) UpdateVest(ctx context.Context, input models.VestInput) (*bool, error) {

	args := DefaultInputs
	table, _ := r.db.GetTable("Vests")
	_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
	boolResult := true
	if err != nil {
		boolResult = false
	}
	return &boolResult, err

}

func (r *mutationResolver) UpdateFractionalDeposit(ctx context.Context, input models.FractionalDepositInput) (*bool, error) {

	args := DefaultInputs
	table, _ := r.db.GetTable("FractionalDeposits")
	_, err := table.Put(*input.ID, input, args["prove"].(bool), args)
	boolResult := true
	if err != nil {
		boolResult = false
	}
	return &boolResult, err

}

func (r *queryResolver) DPoolList(ctx context.Context, id string, prove *bool) (*models.DPoolList, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	//fmt.Println()
	args["id"] = id
	table, tableErr := r.db.GetTable("DPoolLists")
	if tableErr != nil || table == nil {
		fmt.Println("Issue getting the table")
		fmt.Println(tableErr)
		return nil, tableErr
	}
	result, err := table.Get(id, args["prove"].(bool))
	fmt.Printf("%+v\n", result)
	if err != nil {
		fmt.Println("Error getting value")
		fmt.Println(err)
		return nil, err
	}
	data := result.GetValue()
	fmt.Print(string(data))
	var val models.DPoolList
	err = json.Unmarshal(data, &val)
	if err != nil {
		fmt.Println("Error unmarshalling data")
		fmt.Println(err)
		return nil, err
	}
	p := GenerateProof(result.GetProof())
	val.Proof = &p
	fmt.Printf("%+v\n", val)
	return &val, nil
	//}

}

func (r *queryResolver) DPoolLists(ctx context.Context, where *string, orderBy *string, asc *bool, first *int, last *int, limit *int, prove *bool) ([]*models.DPoolList, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	if limit != nil {
		args["limit"] = *limit
	}
	if first != nil {
		args["first"] = *first
	}
	if last != nil {
		args["last"] = *last
	}
	if asc != nil {
		args["direction"] = *asc
	}
	if orderBy != nil {
		args["order_by"] = *orderBy
	}
	if where != nil {
		args["where"] = *where
	}
	table, _ := r.db.GetTable("DPoolLists")
	result, err := table.Search(args["where"].(string), args["order_by"].(string), args["direction"].(bool), args["first"].(int), args["last"].(int), args["prove"].(bool), args)
	if err != nil {
		return nil, err
	}
	value := make([]*models.DPoolList, 0)
	for _, dataRow := range result {
		var val models.DPoolList
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil
	//}

}

func (r *queryResolver) DPoolListSearch(ctx context.Context, queryText string, prove *bool) ([]*models.DPoolList, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	table, _ := r.db.GetTable("DPoolLists")
	result, err := table.Query(queryText, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	value := make([]*models.DPoolList, 0)
	for _, dataRow := range result {
		var val models.DPoolList
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil

}

func (r *queryResolver) DPool(ctx context.Context, id string, prove *bool) (*models.DPool, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	args["id"] = id
	table, _ := r.db.GetTable("DPools")
	result, err := table.Get(id, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	data := result.GetValue()
	var val models.DPool
	err = json.Unmarshal(data, &val)
	if err != nil {
		return nil, err
	}
	p := GenerateProof(result.GetProof())
	val.Proof = &p

	return &val, nil
	//}

}

func (r *queryResolver) DPools(ctx context.Context, where *string, orderBy *string, asc *bool, first *int, last *int, limit *int, prove *bool) ([]*models.DPool, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	if limit != nil {
		args["limit"] = *limit
	}
	if first != nil {
		args["first"] = *first
	}
	if last != nil {
		args["last"] = *last
	}
	if asc != nil {
		args["direction"] = *asc
	}
	if orderBy != nil {
		args["order_by"] = *orderBy
	}
	if where != nil {
		args["where"] = *where
	}
	table, _ := r.db.GetTable("DPools")
	result, err := table.Search(args["where"].(string), args["order_by"].(string), args["direction"].(bool), args["first"].(int), args["last"].(int), args["prove"].(bool), args)
	if err != nil {
		return nil, err
	}
	value := make([]*models.DPool, 0)
	for _, dataRow := range result {
		var val models.DPool
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil
	//}

}

func (r *queryResolver) DPoolSearch(ctx context.Context, queryText string, prove *bool) ([]*models.DPool, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	table, _ := r.db.GetTable("DPools")
	result, err := table.Query(queryText, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	value := make([]*models.DPool, 0)
	for _, dataRow := range result {
		var val models.DPool
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil

}

func (r *queryResolver) User(ctx context.Context, id string, prove *bool) (*models.User, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	args["id"] = id
	table, _ := r.db.GetTable("Users")
	result, err := table.Get(id, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	data := result.GetValue()
	var val models.User
	err = json.Unmarshal(data, &val)
	if err != nil {
		return nil, err
	}
	p := GenerateProof(result.GetProof())
	val.Proof = &p

	return &val, nil
	//}

}

func (r *queryResolver) Users(ctx context.Context, where *string, orderBy *string, asc *bool, first *int, last *int, limit *int, prove *bool) ([]*models.User, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	if limit != nil {
		args["limit"] = *limit
	}
	if first != nil {
		args["first"] = *first
	}
	if last != nil {
		args["last"] = *last
	}
	if asc != nil {
		args["direction"] = *asc
	}
	if orderBy != nil {
		args["order_by"] = *orderBy
	}
	if where != nil {
		args["where"] = *where
	}
	table, _ := r.db.GetTable("Users")
	result, err := table.Search(args["where"].(string), args["order_by"].(string), args["direction"].(bool), args["first"].(int), args["last"].(int), args["prove"].(bool), args)
	if err != nil {
		return nil, err
	}
	value := make([]*models.User, 0)
	for _, dataRow := range result {
		var val models.User
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil
	//}

}

func (r *queryResolver) UserSearch(ctx context.Context, queryText string, prove *bool) ([]*models.User, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	table, _ := r.db.GetTable("Users")
	result, err := table.Query(queryText, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	value := make([]*models.User, 0)
	for _, dataRow := range result {
		var val models.User
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil

}

func (r *queryResolver) UserTotalDeposit(ctx context.Context, id string, prove *bool) (*models.UserTotalDeposit, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	args["id"] = id
	table, _ := r.db.GetTable("UserTotalDeposits")
	result, err := table.Get(id, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	data := result.GetValue()
	var val models.UserTotalDeposit
	err = json.Unmarshal(data, &val)
	if err != nil {
		return nil, err
	}
	p := GenerateProof(result.GetProof())
	val.Proof = &p

	return &val, nil
	//}

}

func (r *queryResolver) UserTotalDeposits(ctx context.Context, where *string, orderBy *string, asc *bool, first *int, last *int, limit *int, prove *bool) ([]*models.UserTotalDeposit, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	if limit != nil {
		args["limit"] = *limit
	}
	if first != nil {
		args["first"] = *first
	}
	if last != nil {
		args["last"] = *last
	}
	if asc != nil {
		args["direction"] = *asc
	}
	if orderBy != nil {
		args["order_by"] = *orderBy
	}
	if where != nil {
		args["where"] = *where
	}
	table, _ := r.db.GetTable("UserTotalDeposits")
	result, err := table.Search(args["where"].(string), args["order_by"].(string), args["direction"].(bool), args["first"].(int), args["last"].(int), args["prove"].(bool), args)
	if err != nil {
		return nil, err
	}
	value := make([]*models.UserTotalDeposit, 0)
	for _, dataRow := range result {
		var val models.UserTotalDeposit
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil
	//}

}

func (r *queryResolver) UserTotalDepositSearch(ctx context.Context, queryText string, prove *bool) ([]*models.UserTotalDeposit, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	table, _ := r.db.GetTable("UserTotalDeposits")
	result, err := table.Query(queryText, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	value := make([]*models.UserTotalDeposit, 0)
	for _, dataRow := range result {
		var val models.UserTotalDeposit
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil

}

func (r *queryResolver) Deposit(ctx context.Context, id string, prove *bool) (*models.Deposit, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	args["id"] = id
	table, _ := r.db.GetTable("Deposits")
	result, err := table.Get(id, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	data := result.GetValue()
	var val models.Deposit
	err = json.Unmarshal(data, &val)
	if err != nil {
		return nil, err
	}
	p := GenerateProof(result.GetProof())
	val.Proof = &p

	return &val, nil
	//}

}

func (r *queryResolver) Deposits(ctx context.Context, where *string, orderBy *string, asc *bool, first *int, last *int, limit *int, prove *bool) ([]*models.Deposit, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	if limit != nil {
		args["limit"] = *limit
	}
	if first != nil {
		args["first"] = *first
	}
	if last != nil {
		args["last"] = *last
	}
	if asc != nil {
		args["direction"] = *asc
	}
	if orderBy != nil {
		args["order_by"] = *orderBy
	}
	if where != nil {
		args["where"] = *where
	}
	table, _ := r.db.GetTable("Deposits")
	result, err := table.Search(args["where"].(string), args["order_by"].(string), args["direction"].(bool), args["first"].(int), args["last"].(int), args["prove"].(bool), args)
	if err != nil {
		return nil, err
	}
	value := make([]*models.Deposit, 0)
	for _, dataRow := range result {
		var val models.Deposit
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil
	//}

}

func (r *queryResolver) DepositSearch(ctx context.Context, queryText string, prove *bool) ([]*models.Deposit, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	table, _ := r.db.GetTable("Deposits")
	result, err := table.Query(queryText, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	value := make([]*models.Deposit, 0)
	for _, dataRow := range result {
		var val models.Deposit
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil

}

func (r *queryResolver) Funder(ctx context.Context, id string, prove *bool) (*models.Funder, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	args["id"] = id
	table, _ := r.db.GetTable("Funders")
	result, err := table.Get(id, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	data := result.GetValue()
	var val models.Funder
	err = json.Unmarshal(data, &val)
	if err != nil {
		return nil, err
	}
	p := GenerateProof(result.GetProof())
	val.Proof = &p

	return &val, nil
	//}

}

func (r *queryResolver) Funders(ctx context.Context, where *string, orderBy *string, asc *bool, first *int, last *int, limit *int, prove *bool) ([]*models.Funder, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	if limit != nil {
		args["limit"] = *limit
	}
	if first != nil {
		args["first"] = *first
	}
	if last != nil {
		args["last"] = *last
	}
	if asc != nil {
		args["direction"] = *asc
	}
	if orderBy != nil {
		args["order_by"] = *orderBy
	}
	if where != nil {
		args["where"] = *where
	}
	table, _ := r.db.GetTable("Funders")
	result, err := table.Search(args["where"].(string), args["order_by"].(string), args["direction"].(bool), args["first"].(int), args["last"].(int), args["prove"].(bool), args)
	if err != nil {
		return nil, err
	}
	value := make([]*models.Funder, 0)
	for _, dataRow := range result {
		var val models.Funder
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil
	//}

}

func (r *queryResolver) FunderSearch(ctx context.Context, queryText string, prove *bool) ([]*models.Funder, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	table, _ := r.db.GetTable("Funders")
	result, err := table.Query(queryText, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	value := make([]*models.Funder, 0)
	for _, dataRow := range result {
		var val models.Funder
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil

}

func (r *queryResolver) FunderTotalInterest(ctx context.Context, id string, prove *bool) (*models.FunderTotalInterest, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	args["id"] = id
	table, _ := r.db.GetTable("FunderTotalInterests")
	result, err := table.Get(id, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	data := result.GetValue()
	var val models.FunderTotalInterest
	err = json.Unmarshal(data, &val)
	if err != nil {
		return nil, err
	}
	p := GenerateProof(result.GetProof())
	val.Proof = &p

	return &val, nil
	//}

}

func (r *queryResolver) FunderTotalInterests(ctx context.Context, where *string, orderBy *string, asc *bool, first *int, last *int, limit *int, prove *bool) ([]*models.FunderTotalInterest, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	if limit != nil {
		args["limit"] = *limit
	}
	if first != nil {
		args["first"] = *first
	}
	if last != nil {
		args["last"] = *last
	}
	if asc != nil {
		args["direction"] = *asc
	}
	if orderBy != nil {
		args["order_by"] = *orderBy
	}
	if where != nil {
		args["where"] = *where
	}
	table, _ := r.db.GetTable("FunderTotalInterests")
	result, err := table.Search(args["where"].(string), args["order_by"].(string), args["direction"].(bool), args["first"].(int), args["last"].(int), args["prove"].(bool), args)
	if err != nil {
		return nil, err
	}
	value := make([]*models.FunderTotalInterest, 0)
	for _, dataRow := range result {
		var val models.FunderTotalInterest
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil
	//}

}

func (r *queryResolver) FunderTotalInterestSearch(ctx context.Context, queryText string, prove *bool) ([]*models.FunderTotalInterest, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	table, _ := r.db.GetTable("FunderTotalInterests")
	result, err := table.Query(queryText, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	value := make([]*models.FunderTotalInterest, 0)
	for _, dataRow := range result {
		var val models.FunderTotalInterest
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil

}

func (r *queryResolver) Funding(ctx context.Context, id string, prove *bool) (*models.Funding, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	args["id"] = id
	table, _ := r.db.GetTable("Fundings")
	result, err := table.Get(id, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	data := result.GetValue()
	var val models.Funding
	err = json.Unmarshal(data, &val)
	if err != nil {
		return nil, err
	}
	p := GenerateProof(result.GetProof())
	val.Proof = &p

	return &val, nil
	//}

}

func (r *queryResolver) Fundings(ctx context.Context, where *string, orderBy *string, asc *bool, first *int, last *int, limit *int, prove *bool) ([]*models.Funding, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	if limit != nil {
		args["limit"] = *limit
	}
	if first != nil {
		args["first"] = *first
	}
	if last != nil {
		args["last"] = *last
	}
	if asc != nil {
		args["direction"] = *asc
	}
	if orderBy != nil {
		args["order_by"] = *orderBy
	}
	if where != nil {
		args["where"] = *where
	}
	table, _ := r.db.GetTable("Fundings")
	result, err := table.Search(args["where"].(string), args["order_by"].(string), args["direction"].(bool), args["first"].(int), args["last"].(int), args["prove"].(bool), args)
	if err != nil {
		return nil, err
	}
	value := make([]*models.Funding, 0)
	for _, dataRow := range result {
		var val models.Funding
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil
	//}

}

func (r *queryResolver) FundingSearch(ctx context.Context, queryText string, prove *bool) ([]*models.Funding, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	table, _ := r.db.GetTable("Fundings")
	result, err := table.Query(queryText, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	value := make([]*models.Funding, 0)
	for _, dataRow := range result {
		var val models.Funding
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil

}

func (r *queryResolver) MPHHolder(ctx context.Context, id string, prove *bool) (*models.MPHHolder, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	args["id"] = id
	table, _ := r.db.GetTable("MPHHolders")
	result, err := table.Get(id, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	data := result.GetValue()
	var val models.MPHHolder
	err = json.Unmarshal(data, &val)
	if err != nil {
		return nil, err
	}
	p := GenerateProof(result.GetProof())
	val.Proof = &p

	return &val, nil
	//}

}

func (r *queryResolver) MPHHolders(ctx context.Context, where *string, orderBy *string, asc *bool, first *int, last *int, limit *int, prove *bool) ([]*models.MPHHolder, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	if limit != nil {
		args["limit"] = *limit
	}
	if first != nil {
		args["first"] = *first
	}
	if last != nil {
		args["last"] = *last
	}
	if asc != nil {
		args["direction"] = *asc
	}
	if orderBy != nil {
		args["order_by"] = *orderBy
	}
	if where != nil {
		args["where"] = *where
	}
	table, _ := r.db.GetTable("MPHHolders")
	result, err := table.Search(args["where"].(string), args["order_by"].(string), args["direction"].(bool), args["first"].(int), args["last"].(int), args["prove"].(bool), args)
	if err != nil {
		return nil, err
	}
	value := make([]*models.MPHHolder, 0)
	for _, dataRow := range result {
		var val models.MPHHolder
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil
	//}

}

func (r *queryResolver) MPHHolderSearch(ctx context.Context, queryText string, prove *bool) ([]*models.MPHHolder, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	table, _ := r.db.GetTable("MPHHolders")
	result, err := table.Query(queryText, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	value := make([]*models.MPHHolder, 0)
	for _, dataRow := range result {
		var val models.MPHHolder
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil

}

func (r *queryResolver) Mph(ctx context.Context, id string, prove *bool) (*models.Mph, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	args["id"] = id
	table, _ := r.db.GetTable("Mphs")
	result, err := table.Get(id, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	data := result.GetValue()
	var val models.Mph
	err = json.Unmarshal(data, &val)
	if err != nil {
		return nil, err
	}
	p := GenerateProof(result.GetProof())
	val.Proof = &p

	return &val, nil
	//}

}

func (r *queryResolver) MPHs(ctx context.Context, where *string, orderBy *string, asc *bool, first *int, last *int, limit *int, prove *bool) ([]*models.Mph, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	if limit != nil {
		args["limit"] = *limit
	}
	if first != nil {
		args["first"] = *first
	}
	if last != nil {
		args["last"] = *last
	}
	if asc != nil {
		args["direction"] = *asc
	}
	if orderBy != nil {
		args["order_by"] = *orderBy
	}
	if where != nil {
		args["where"] = *where
	}
	table, _ := r.db.GetTable("Mphs")
	result, err := table.Search(args["where"].(string), args["order_by"].(string), args["direction"].(bool), args["first"].(int), args["last"].(int), args["prove"].(bool), args)
	if err != nil {
		return nil, err
	}
	value := make([]*models.Mph, 0)
	for _, dataRow := range result {
		var val models.Mph
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil
	//}

}

func (r *queryResolver) MPHSearch(ctx context.Context, queryText string, prove *bool) ([]*models.Mph, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	table, _ := r.db.GetTable("Mphs")
	result, err := table.Query(queryText, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	value := make([]*models.Mph, 0)
	for _, dataRow := range result {
		var val models.Mph
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil

}

func (r *queryResolver) Vest(ctx context.Context, id string, prove *bool) (*models.Vest, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	args["id"] = id
	table, _ := r.db.GetTable("Vests")
	result, err := table.Get(id, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	data := result.GetValue()
	var val models.Vest
	err = json.Unmarshal(data, &val)
	if err != nil {
		return nil, err
	}
	p := GenerateProof(result.GetProof())
	val.Proof = &p

	return &val, nil
	//}

}

func (r *queryResolver) Vests(ctx context.Context, where *string, orderBy *string, asc *bool, first *int, last *int, limit *int, prove *bool) ([]*models.Vest, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	if limit != nil {
		args["limit"] = *limit
	}
	if first != nil {
		args["first"] = *first
	}
	if last != nil {
		args["last"] = *last
	}
	if asc != nil {
		args["direction"] = *asc
	}
	if orderBy != nil {
		args["order_by"] = *orderBy
	}
	if where != nil {
		args["where"] = *where
	}
	table, _ := r.db.GetTable("Vests")
	result, err := table.Search(args["where"].(string), args["order_by"].(string), args["direction"].(bool), args["first"].(int), args["last"].(int), args["prove"].(bool), args)
	if err != nil {
		return nil, err
	}
	value := make([]*models.Vest, 0)
	for _, dataRow := range result {
		var val models.Vest
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil
	//}

}

func (r *queryResolver) VestSearch(ctx context.Context, queryText string, prove *bool) ([]*models.Vest, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	table, _ := r.db.GetTable("Vests")
	result, err := table.Query(queryText, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	value := make([]*models.Vest, 0)
	for _, dataRow := range result {
		var val models.Vest
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil

}

func (r *queryResolver) FractionalDeposit(ctx context.Context, id string, prove *bool) (*models.FractionalDeposit, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	args["id"] = id
	table, _ := r.db.GetTable("FractionalDeposits")
	result, err := table.Get(id, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	data := result.GetValue()
	var val models.FractionalDeposit
	err = json.Unmarshal(data, &val)
	if err != nil {
		return nil, err
	}
	p := GenerateProof(result.GetProof())
	val.Proof = &p

	return &val, nil
	//}

}

func (r *queryResolver) FractionalDeposits(ctx context.Context, where *string, orderBy *string, asc *bool, first *int, last *int, limit *int, prove *bool) ([]*models.FractionalDeposit, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	if limit != nil {
		args["limit"] = *limit
	}
	if first != nil {
		args["first"] = *first
	}
	if last != nil {
		args["last"] = *last
	}
	if asc != nil {
		args["direction"] = *asc
	}
	if orderBy != nil {
		args["order_by"] = *orderBy
	}
	if where != nil {
		args["where"] = *where
	}
	table, _ := r.db.GetTable("FractionalDeposits")
	result, err := table.Search(args["where"].(string), args["order_by"].(string), args["direction"].(bool), args["first"].(int), args["last"].(int), args["prove"].(bool), args)
	if err != nil {
		return nil, err
	}
	value := make([]*models.FractionalDeposit, 0)
	for _, dataRow := range result {
		var val models.FractionalDeposit
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil
	//}

}

func (r *queryResolver) FractionalDepositSearch(ctx context.Context, queryText string, prove *bool) ([]*models.FractionalDeposit, error) {

	args := DefaultInputs
	if prove != nil {
		args["prove"] = *prove
	}
	table, _ := r.db.GetTable("FractionalDeposits")
	result, err := table.Query(queryText, args["prove"].(bool))
	if err != nil {
		return nil, err
	}
	value := make([]*models.FractionalDeposit, 0)
	for _, dataRow := range result {
		var val models.FractionalDeposit
		err = json.Unmarshal(dataRow.GetValue(), &val)
		if err != nil {
			return nil, err
		}
		p := GenerateProof(dataRow.GetProof())
		val.Proof = &p
		value = append(value, &val)
	}
	return value, nil

}

func (r *userResolver) Pools(ctx context.Context, obj *models.User) ([]*models.DPool, error) {
	//func (r *dPoolResolver) $EntityNames(ctx context.Context, obj *models.DPool) ([]*models.User, error) {

	if obj.DPoolIDs == nil {
		return make([]*models.DPool, 0), nil
	}
	var keys []string
	for _, k := range obj.DPoolIDs {
		if k != nil {
			keys = append(keys, *k)
		}
	}
	entities, loaderErr := dataloader.For(ctx).DPoolById.LoadAll(keys)
	if loaderErr != nil {
		return make([]*models.DPool, 0), nil
	}
	var args map[string]interface{} = graphql.GetFieldContext(ctx).Args
	//check argument context
	//context check the args, where, orderBy, orderDirection, first, last, prove
	//getDefaults/getTheContextArgs
	//from identifier,
	//use to get from context
	results, err := proximaIterables.Search(entities, args["where"], args["orderBy"], args["direction"].(bool), args["first"].(int), args["last"].(int), "")
	if err != nil {
		return make([]*models.DPool, 0), nil
	}
	return results.([]*models.DPool), nil
	//}

}

func (r *userResolver) Deposits(ctx context.Context, obj *models.User) ([]*models.Deposit, error) {
	//func (r *dPoolResolver) $EntityNames(ctx context.Context, obj *models.DPool) ([]*models.User, error) {

	if obj.DepositIDs == nil {
		return make([]*models.Deposit, 0), nil
	}
	var keys []string
	for _, k := range obj.DepositIDs {
		if k != nil {
			keys = append(keys, *k)
		}
	}
	entities, loaderErr := dataloader.For(ctx).DepositById.LoadAll(keys)
	if loaderErr != nil {
		return make([]*models.Deposit, 0), nil
	}
	var args map[string]interface{} = graphql.GetFieldContext(ctx).Args
	//check argument context
	//context check the args, where, orderBy, orderDirection, first, last, prove
	//getDefaults/getTheContextArgs
	//from identifier,
	//use to get from context
	results, err := proximaIterables.Search(entities, args["where"], args["orderBy"], args["direction"].(bool), args["first"].(int), args["last"].(int), "")
	if err != nil {
		return make([]*models.Deposit, 0), nil
	}
	return results.([]*models.Deposit), nil
	//}

}

func (r *userResolver) TotalDepositByPool(ctx context.Context, obj *models.User) ([]*models.UserTotalDeposit, error) {
	//func (r *dPoolResolver) $EntityNames(ctx context.Context, obj *models.DPool) ([]*models.User, error) {

	if obj.UserTotalDepositIDs == nil {
		return make([]*models.UserTotalDeposit, 0), nil
	}
	var keys []string
	for _, k := range obj.UserTotalDepositIDs {
		if k != nil {
			keys = append(keys, *k)
		}
	}
	entities, loaderErr := dataloader.For(ctx).UserTotalDepositById.LoadAll(keys)
	if loaderErr != nil {
		return make([]*models.UserTotalDeposit, 0), nil
	}
	var args map[string]interface{} = graphql.GetFieldContext(ctx).Args
	//check argument context
	//context check the args, where, orderBy, orderDirection, first, last, prove
	//getDefaults/getTheContextArgs
	//from identifier,
	//use to get from context
	results, err := proximaIterables.Search(entities, args["where"], args["orderBy"], args["direction"].(bool), args["first"].(int), args["last"].(int), "")
	if err != nil {
		return make([]*models.UserTotalDeposit, 0), nil
	}
	return results.([]*models.UserTotalDeposit), nil
	//}

}

func (r *userTotalDepositResolver) User(ctx context.Context, obj *models.UserTotalDeposit) (*models.User, error) {
	if obj.UserID == nil {
		return nil, nil
	}
	result, err := dataloader.For(ctx).UserById.LoadThunk(*obj.UserID)()
	if err != nil {
		return nil, err
	}
	return result, nil
}

func (r *userTotalDepositResolver) Pool(ctx context.Context, obj *models.UserTotalDeposit) (*models.DPool, error) {
	if obj.DPoolID == nil {
		return nil, nil
	}
	result, err := dataloader.For(ctx).DPoolById.LoadThunk(*obj.DPoolID)()
	if err != nil {
		return nil, err
	}
	return result, nil
}

// DPool returns gql.DPoolResolver implementation.
