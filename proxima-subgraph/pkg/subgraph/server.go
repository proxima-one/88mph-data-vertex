package main

import (
	"github.com/gin-gonic/gin"
	"os"
	_ "context"
	_ "github.com/99designs/gqlgen/graphql"
	"github.com/99designs/gqlgen/handler"
	proxima "github.com/proxima-one/proxima-db-client-go"
	resolver "github.com/proxima-one/binance-chain-subgraph/pkg/resolvers"
	datasource "github.com/proxima-one/binance-chain-subgraph/pkg/datasources"
	dataloader "github.com/proxima-one/binance-chain-subgraph/pkg/dataloader"
  gql "github.com/proxima-one/binance-chain-subgraph/pkg/gql"
	cache "github.com/patrickmn/go-cache"
	"time"
)


//set the subgraph here create the node (...) []


func start() {
	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()
	go r.POST("/query", SubgraphAPI())
	go r.GET("/", SubgraphPlayground())
	r.Run(":4000")
}

func SubgraphPlayground() gin.HandlerFunc {
	h := handler.Playground("GraphQL", "/query")
	return func(c *gin.Context) {
		h.ServeHTTP(c.Writer, c.Request)
	}
}

//add/start or create the DApp aggregator

//add/start/make database
//read

//add/start/ query handlers
  //models, tables, etc, cache

func SubgraphAPI() gin.HandlerFunc {
	//setupDatabases
	db, _ := StartDatabase(datasource.BinanceTableList)
	ds, _ := StartBinanceDatasource(db)
  //resolvers...
	subgraphResolvers := CreateResolvers(db, ds)
		h := handler.GraphQL(gql.NewExecutableSchema(subgraphResolvers))
  //Query  Resolvers
	return func(c *gin.Context) {
		h.ServeHTTP(c.Writer, c.Request)
	}
}
