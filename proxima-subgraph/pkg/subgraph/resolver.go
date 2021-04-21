func getEnv(key string, defaultVal string) string {
	if value, exists := os.LookupEnv(key); exists {
	  return value
  }
    return defaultVal
}

//Query Resolvers Class/Struct
func StartDatabase(tableList []string) (*proxima.ProximaDB, error) {
	ip := getEnv("DB_ADDRESS" , "0.0.0.0")
	port :=  getEnv("DB_PORT", "50051")
	proximaDB := proxima.NewProximaDB(ip, port)
	_, err := proximaDB.OpenAll(tableList)
	if err != nil {
		return proximaDB, err
	}
	return proximaDB, nil
}

func CreateResolvers(db *proxima.ProximaDB, ds *datasource.Datasource) (gql.Config) {
	c := cache.New(5*time.Minute, 10*time.Minute)
	loader, _  := SetDataloader(c, db, ds)
	return resolver.NewResolver(loader)
}

func SetDataloader(c *cache.Cache, db *proxima.ProximaDB, ds *datasource.Datasource) (*dataloader.Dataloader, error) {
	loader , err:= dataloader.NewDataloader(c, db, ds)
	if err != nil {
		return nil, err
	}
	return loader, nil
}
