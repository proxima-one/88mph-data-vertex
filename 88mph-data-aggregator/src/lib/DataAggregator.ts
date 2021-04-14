// Import the crypto getRandomValues shim (**BEFORE** the shims)
//https://docs.ethers.io/v5/migration/web3/#migration-from-web3-js--contracts
//provider.getBlockWithTransactions(100004)
//"block" provider.on
//import "react-native-get-random-values";

// Import the the ethers shims (**BEFORE** ethers)
//import "@ethersproject/shims";

//import { FunctionKeys, Keys } from 'utility-types';
//values
//call function

import { ethers, Contract } from "ethers";
//import "@types/fs-extra";
import * as fs from "fs-extra";
import { LoadVertexClient, VertexClient } from "./DataVertexClient";
//import contract

class DataAggregator {
  name: string;
  id: any;
  datasources: Map<string, Datasource>;
  datasourceTemplates: Map<string, DatasourceTemplate>; //
  vertexConfig: any;
  constructor(
    name: string,
    id: any,
    datasources: Map<string, Datasource>,
    datasourceTemplates: Map<string, DatasourceTemplate>,
    vertexConfig: any = {}
  ) {
    this.name = name;
    this.id = id;
    this.datasources = datasources; //if
    this.datasourceTemplates = datasourceTemplates; //if
    this.vertexConfig = vertexConfig;
    //LoadDataVertex(vertexConfig)
  }

  async start() {
    console.log("Starting...");
    //console.log(this.datasources);

    for (const [name, datasource] of Array.from(this.datasources.entries())) {
      console.log(name.toString());
      datasource.start();
    }

    for (const [, templateDatasource] of Object.entries(
      this.datasourceTemplates
    )) {
      templateDatasource.start();
    }
  }

  status(): boolean {
    //unknown
    return true;
  }
}

export class Loader {
  static async LoadDataAggregator(
    dataAggregatorConfig: any
  ): Promise<DataAggregator> {
    let name = dataAggregatorConfig.name;
    let id = dataAggregatorConfig.id;
    const datasources = await this.LoadDatasources(
      dataAggregatorConfig.datasources
    );
    const datasourceTemplates = await this.LoadDatasourceTemplates(
      dataAggregatorConfig.templates
    );
    let vertexConfig = dataAggregatorConfig;
    return new DataAggregator(
      name,
      id,
      datasources,
      datasourceTemplates,
      vertexConfig
    );
  }

  static async LoadDatasources(
    datasourceConfigList: any
  ): Promise<Map<string, Datasource>> {
    if (Array.isArray(datasourceConfigList)) {
      let res = new Map<string, Datasource>(
        await Promise.all(
          datasourceConfigList.map(async (datasourceConfig: any) => {
            const resp = await this.LoadDatasource(datasourceConfig);
            return [resp.name, resp] as [string, Datasource];
          })
        )
      );
      return res;
    }
    return new Map<string, Datasource>();
  }

  static async LoadDatasource(datasourceConfig: any): Promise<Datasource> {
    let datasourceTemplate = await this.LoadDatasourceTemplate(
      datasourceConfig
    );
    let dAddress = datasourceConfig.source.address;
    let datasource = datasourceTemplate.newDatasource(dAddress);
    return datasource;
  }

  static async LoadDatasourceTemplates(
    datasourceTemplateConfigList: any
  ): Promise<Map<string, DatasourceTemplate>> {
    if (Array.isArray(datasourceTemplateConfigList)) {
      //console.log(datasourceConfigList)
      let res = new Map<string, DatasourceTemplate>(
        await Promise.all(
          datasourceTemplateConfigList.map(
            async (datasourceTemplateConfig: any) => {
              const resp = await this.LoadDatasourceTemplate(
                datasourceTemplateConfig
              );
              return [resp.name, resp] as [string, DatasourceTemplate];
            }
          )
        )
      );
      return res;
    }
    return new Map<string, DatasourceTemplate>();
  }

  static LoadABI(abiName: string, datasourceConfig: any): string {
    let abiText = "";
    let contracts = datasourceConfig.contracts;
    for (let contract of contracts) {
      if (contract.name == abiName) {
        let abiText = fs.readFileSync(contract.file).toString();
        return abiText;
      }
    }
    return abiText;
  }

  static async LoadMappings(
    datasourceConfig: any
  ): Promise<Map<string, Mapping>> {
    let datasourceFile = "." + datasourceConfig.handlers.main;
    const mappings = await import(datasourceFile);
    let eventMappings = new Map<string, Mapping>();
    for (const [name, fn] of Object.entries(mappings)) {
      let eventName: string = name.replace(/handler/i, "");
      //encode
      //coercing type
      try {
        //var mapFn: EventHandlerFn;
        //if (typeof fn == "function") mapFn = fn as EventHandlerFn;
        let filter: ethers.EventFilter = { topics: [eventName] };
        let m: Mapping = {
          name: eventName,
          filter: filter,
          mapFn: fn as ((event: any) => void)
        };
        eventMappings.set(eventName, m);
      } catch (err) {
        console.log(err);
      }
    }
    return eventMappings;
  }

  static async LoadDatasourceTemplate(
    datasourceTemplateConfig: any
  ): Promise<DatasourceTemplate> {
    let name = datasourceTemplateConfig.name;
    let abi = this.LoadABI(
      datasourceTemplateConfig.source.abi,
      datasourceTemplateConfig
    );
    let startBlock = 12181131; //datasourceTemplateConfig.source.startBlock;
    let provider = await this.LoadProvider(datasourceTemplateConfig.client);
    const mappings = await this.LoadMappings(datasourceTemplateConfig);
    let config = datasourceTemplateConfig;
    return new DatasourceTemplate(name, abi, mappings, provider, config);
  }

  //Check provider
  static async LoadProvider(clientConfig: any): Promise<any> {
    let startBlock = clientConfig.startBlock;
    let name = clientConfig.name;
    let network = clientConfig.network;
    //web3 providers
    let ip = [
      "http:68.203.22.34:30303",
      "http://3.140.31.60:30303",
      "http:18.141.229.119:30303",
      "enode://b7523c0b8b5e34296b7fc51fddef2fc3931b3a4e9abe50dfe0a9d7549258a5de0607f7e323a4200ecfee1554a2920d413973777e899322f81930e459eaa65428@18.141.229.119:30303"
    ];
    const RPC_HOST = ip[3];
    let provider = ethers.getDefaultProvider("mainnet"); //providers.JsonRpcProvider(RPC_HOST);
    //
    //check the connection for the provider, run error if there is an issue,
    return provider;
  }
}

class DatasourceTemplate {
  name: string;
  abi: any;
  datasources: Map<string, Datasource>;
  config: any;
  startBlock: number;
  mappings: Map<string, Mapping>;
  provider: any;
  //client
  //init vars
  constructor(
    name: string,
    abi: string,
    mappings: Map<string, Mapping>,
    provider: any,
    config: any = {}
  ) {
    this.name = name;
    this.provider = provider;
    this.mappings = mappings;
    this.config = config;
    this.abi = abi;
    this.startBlock = config.startBlock || 11316134;
    this.datasources = new Map<string, Datasource>();
  }

  add(src: string | string[]): void {
    if (typeof src == "string") {
      console.log(src);
      let datasource = this.newDatasource(src);
      this.datasources.set(src, datasource);
    } else {
      for (let addr of src) {
        let datasource = this.newDatasource(addr);
        this.datasources.set(addr, datasource);
      }
    }
  }

  newDatasource(address: string): Datasource {
    return new Datasource(
      this.name,
      ethers.utils.getAddress(address),
      this.abi,
      this.mappings,
      this.provider,
      this.config
    );
  }
  async start(startBlock: number = this.startBlock) {
    try {
      startBlock = 12181131;
      for (const [, datasource] of Array.from(this.datasources.entries())) {
        await datasource.start(startBlock);
      }
    } catch (err) {
      console.log(err);
    }
  }

  stop(): void {
    for (const [, datasource] of Array.from(this.datasources.entries())) {
      datasource.stop();
    }
  }
}

type Source = ethers.Contract;
class Datasource {
  name: string;
  address: string;
  abi: any;
  provider: any;
  source!: Source;
  latestBlock: number;
  currentBlockSynced: number;
  config: any;
  offset: number;
  mappings: Map<string, Mapping>;
  dest!: VertexClient;
  listeners: Map<string, any>;
  startBlock: number;

  constructor(
    name: string,
    address: string,
    abi: any,
    mappings: Map<string, Mapping>,
    provider: any,
    config: any = {}
  ) {
    this.name = name;
    this.provider = provider;
    this.mappings = mappings;
    this.address = address;
    this.abi = abi;
    this.config = config;
    this.listeners = new Map<string, any>();
    this.offset = 1000;
    this.startBlock = config.startBlock || 11316134; //offset
    this.currentBlockSynced = this.startBlock;
    this.latestBlock = 0;
    this._attachDest(config);
  }

  async start(startBlock: number = this.startBlock) {
    try {
      this._attachSource(this.address);
      this._attachDest();
      let resp = await this.updateCurrentBlock();
      await this.sync();
    } catch (err) {
      console.log(err);
    }
  }

  async updateCurrentBlock() {
    this.latestBlock = await this.provider.getBlockNumber("latest");
    return this.latestBlock;
  }

  _attachSource(src?: string | string[]) {
    try {
      this.source = new ethers.Contract(
        ethers.utils.getAddress(this.address),
        this.abi,
        this.provider
      );
      //console.log(this.source.once);
    } catch (err) {
      console.log(err);
    }
  }

  _attachDest(destConfig?: any) {
    try {
      //set context params
      this.dest = LoadVertexClient(this.config);
    } catch (err) {
      console.log(err);
    }
  }
  // // //get events, attachMappings
  // _attachMappings(mappings: Map<string, any>) {
  //   //filter, and then mapping
  //   //for each, set a
  //   //
  //   //create the filters for the mappings
  //   //src
  //   //dest
  //   //this.mappings =

  subscribe(from: number = this.currentBlockSynced): void {
    for (const [name, mapping] of Array.from(this.mappings.entries())) {
      if (name.includes("block")) {
        let blockListener = this.provider.on(mapping.name, mapping.mapFn);
        this.listeners.set(name, blockListener);
      } else {
        let eventListener = this.source.on(mapping.name, e => {
          mapping.mapFn(e);
        });
        this.listeners.set(name, eventListener);
      }
    }
  }

  async sync() {
    console.log(this.startBlock, this.currentBlockSynced, this.latestBlock);
    while (this.currentBlockSynced < this.latestBlock - this.offset) {
      //console.log("sync");
      await this.syncMappings(
        this.currentBlockSynced,
        this.currentBlockSynced + this.offset
      );
      this.currentBlockSynced += this.offset;
      if (this.currentBlockSynced % (this.offset * 100) == 0) {
        await this.updateCurrentBlock();
      }
      await delay(1000);
    }
    this.subscribe(this.currentBlockSynced);
  }

  async syncMappings(from: number, to: number) {
    const filter = {
      address: ethers.utils.getAddress(this.address)
      //topics:
    };
    //let eventLogs = await this.provider.source.getLogs("latest");
    //console.log(eventLogs.toString());
    this.source
      .queryFilter(filter, from, to)
      .then(async (events: any[]) => {
        //console.log(events.toString());
        events.forEach(event => {
          //console.log(event);
          if (
            event != undefined &&
            event.event != undefined &&
            this.mappings.get(event.event)
          ) {
            //console.log(event.toString());
            //let fragment = this.source.interface.parseLog();
            //this.source.interface.decodeEventLog();
            let name = event.event;
            console.log("Name: " + name);
            //console.log(event.event);
            let mapping = this.mappings.get(name);
            //console.log(mapping);

            if (mapping) {
              let eventArgs = event.args;
              //console.log(eventArgs);
              mapping.mapFn(event);
            }
          }
        });
        this.currentBlockSynced = to;
        console.log("Done: " + this.currentBlockSynced);
      })
      .catch(err => {
        console.log(err);
        console.log("With value: ", event);
      });
    await delay(500);
  }

  status(): [number, number, number] {
    return [this.startBlock, this.currentBlockSynced, this.latestBlock];
  }

  stop(): void {
    this.source.removeAllListeners();
    this.listeners = new Map<string, any>();
  }
}

type Mapping = {
  name: string;
  filter: ethers.EventFilter;
  mapFn: (event: any) => void;
};

interface EventHandlerFn {
  mapFn: (event: any) => void;
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
