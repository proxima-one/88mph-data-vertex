"use strict";

import { ApolloProvider } from "@apollo/client";
import yaml from "@types/js-yaml";
import fs from "@types/fs-extra";
import {
  DataAggregator,
  DatasourceLoader,
  Datasource,
  DatasourceTemplate,
} from "./DataAggregatorLib.ts";

let app_config_path = "./app-config.yml";
let config = yaml.SafeLoad(fs.readFilSync(app_config_path));

let dataAggregator = LoadDataAggregator(config);
dataAggregator.start();
