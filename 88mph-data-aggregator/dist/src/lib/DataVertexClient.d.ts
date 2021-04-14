import { DocumentNode } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
export declare function useFetch<TData = any, TVariables = Record<string, any>>(operation: DocumentNode, variables?: Record<string, any>): GqlFetchResult<TData>;
declare type GqlFetchResult<TData = any> = {
    data?: TData;
    errors?: Error[];
};
export declare class VertexClient {
    name: any;
    config: any;
    source: any;
    middleware: any;
    client: GraphQLClient;
    constructor(name: string, source: any, middleware?: any, config?: any);
    Fetch<TData = any, TVariables = Record<string, any>>(operation: DocumentNode, variables?: Record<string, any>): Promise<GqlFetchResult<TData>>;
}
export declare function LoadVertexClient(config: any): VertexClient;
export {};
//# sourceMappingURL=DataVertexClient.d.ts.map