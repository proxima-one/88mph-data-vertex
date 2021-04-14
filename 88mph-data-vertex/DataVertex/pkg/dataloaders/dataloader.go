package dataloader

import (
  _ "github.com/proxima-one/proxima-data-vertex/pkg/models"
  _ "github.com/json-iterator/go"
  proxima "github.com/proxima-one/proxima-db-client-go/pkg/database"
)

type Dataloader struct {
	db *proxima.ProximaDatabase
}

func NewDataloader(db *proxima.ProximaDatabase) (*Dataloader, error) {
	return &Dataloader{
		db: db,
	}, nil
}


//entity  basics

//by id

//batch

//slices, for limits

//


// //Generated by the dataloader itself
// ///dataloaders for proxima
// func (d *Dataloader) LoadProximaBlockStats(args map[string]interface{}) (*models.ProximaBlockStats, error) {
//     value := models.BlockStats{}
//     json.Unmarshal(result.GetValue(), &value)
//     proof := GenerateProof(result.GetProof())
//     blockStats := &models.ProximaBlockStats{BlockStats: &value, Proof: &proof}
//     return blockStats, nil
//     //updateBlockStats()
// }
