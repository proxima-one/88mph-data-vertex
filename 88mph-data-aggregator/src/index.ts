//import { ApolloProvider } from "@apollo/client";
//import "react-native-get-random-values";
//import "@types/fs-extra";
import fs from "fs-extra";
//import "@types/js-yaml";
import yaml from "js-yaml";
import { Loader } from "./lib/dataaggregator";
import { VertexClient, LoadVertexClient } from "./lib/DataVertexClient";

let default_config_path = "./app-config.yml";

//let vertexClient = VertexClient.Load(config);
//connect the data vertex to the relevant variables?
//set the context in the new context

export async function loadAggregator(
  app_config_path: string = default_config_path
) {
  let config = yaml.load(fs.readFileSync(app_config_path).toString());
  //check config
  console.log("Loading Config");
  //console.log(config);
  let dataAggregator = await Loader.LoadDataAggregator(config);
  console.log("Data Aggregator is Loaded");

  await dataAggregator.start();
  console.log("Started");
}
