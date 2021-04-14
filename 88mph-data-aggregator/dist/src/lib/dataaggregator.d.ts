import { ethers } from "ethers";
import { VertexClient } from "./DataVertexClient";
declare class DataAggregator {
    name: string;
    id: any;
    datasources: Map<string, Datasource>;
    datasourceTemplates: Map<string, DatasourceTemplate>;
    vertexConfig: any;
    constructor(name: string, id: any, datasources: Map<string, Datasource>, datasourceTemplates: Map<string, DatasourceTemplate>, vertexConfig?: any);
    start(): Promise<void>;
    status(): boolean;
}
export declare class Loader {
    static LoadDataAggregator(dataAggregatorConfig: any): Promise<DataAggregator>;
    static LoadDatasources(datasourceConfigList: any): Promise<Map<string, Datasource>>;
    static LoadDatasource(datasourceConfig: any): Promise<Datasource>;
    static LoadDatasourceTemplates(datasourceTemplateConfigList: any): Promise<Map<string, DatasourceTemplate>>;
    static LoadABI(abiName: string, datasourceConfig: any): string;
    static LoadMappings(datasourceConfig: any): Promise<Map<string, Mapping>>;
    static LoadDatasourceTemplate(datasourceTemplateConfig: any): Promise<DatasourceTemplate>;
    static LoadProvider(clientConfig: any): Promise<any>;
}
declare class DatasourceTemplate {
    name: string;
    abi: any;
    datasources: Map<string, Datasource>;
    config: any;
    startBlock: number;
    mappings: Map<string, Mapping>;
    provider: any;
    constructor(name: string, abi: string, mappings: Map<string, Mapping>, provider: any, config?: any);
    add(src: string | string[]): void;
    newDatasource(address: string): Datasource;
    start(startBlock?: number): Promise<void>;
    stop(): void;
}
declare type Source = ethers.Contract;
declare class Datasource {
    name: string;
    address: string;
    abi: any;
    provider: any;
    source: Source;
    latestBlock: number;
    currentBlockSynced: number;
    config: any;
    offset: number;
    mappings: Map<string, Mapping>;
    dest: VertexClient;
    listeners: Map<string, any>;
    startBlock: number;
    constructor(name: string, address: string, abi: any, mappings: Map<string, Mapping>, provider: any, config?: any);
    start(startBlock?: number): Promise<void>;
    updateCurrentBlock(): Promise<number>;
    _attachSource(src?: string | string[]): void;
    _attachDest(destConfig?: any): void;
    subscribe(from?: number): void;
    sync(): Promise<void>;
    syncMappings(from: number, to: number): Promise<void>;
    status(): [number, number, number];
    stop(): void;
}
declare type Mapping = {
    name: string;
    filter: ethers.EventFilter;
    mapFn: (event: any) => void;
};
export {};
//# sourceMappingURL=dataaggregator.d.ts.map