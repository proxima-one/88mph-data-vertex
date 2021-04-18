//imports
import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
  DocumentNode
} from "@apollo/client";

import * as context from "@apollo/client/link/context";
import React, { useState, useEffect, useContext } from "react";

import { request, GraphQLClient } from "graphql-request";

const VertexContext = React.createContext({});

export function useFetch<TData = any, TVariables = Record<string, any>>(
  operation: DocumentNode,
  variables?: Record<string, any>
): GqlFetchResult<TData> {
  // const [vertex, setVertex] = useState(() => {
  //   return new VertexClient("default", "http://0.0.0.0:4000");
  // });
  //block until this returns right?
  const vertex = new VertexClient("default", "http://0.0.0.0:4000/query");
  var result: GqlFetchResult<TData>;
  console.log("Variables and definitions");
  console.log(variables);
  console.log(operation);
  return vertex.Fetch<TData, TVariables>(operation, variables).then(data => {
    console.log(data.toString());
    return data;
  }) as GqlFetchResult;
}

//depromisify

type GqlFetchResult<TData = any> = {
  data?: TData;
  errors?: Error[];
};

// export function useQuery(operation: Document, vars: any): any {}
// export function useMutation(operation: Document, vars: any): any {}

//https://www.graphql-code-generator.com/docs/plugins/typescript-graphql-request
export class VertexClient {
  //static client that others can use
  name: any;
  config: any;
  source: any;
  middleware: any;
  client: GraphQLClient; //ApolloClient/Provider ApolloClient<InMemoryCache> |

  constructor(name: string, source: any, middleware?: any, config?: any) {
    this.name = name;
    this.source = source; //uri
    this.middleware = middleware; //no usage
    this.config = config;
    this.client = new GraphQLClient(this.source, { headers: {} });
    //this.setup();
  }

  // validate(client_uri, query, audit) {
  //   if (!(audit instanceof Function)) {
  //     throw new Error("Audit must be a function")
  //   }
  //   if (!(client_uri) || !(query) || !(audit)) {
  //      throw new Error("Missing an argument")
  //   }
  //   return true
  // }

  // setup(): void {
  //   const httpLink = new HttpLink({ uri: this.source });
  //   const authMiddleware = new ApolloLink((operation: any, forward: any) => {
  //     operation.setContext({
  //       headers: {
  //         authorization: "token"
  //       }
  //     });
  //     return forward(operation);
  //   });
  //
  //   // const client = new ApolloClient({
  //   //   cache: new InMemoryCache(),
  //   //   link: concat(authMiddleware, httpLink)
  //   // });
  //   //this.client = client;
  // }
  async Fetch<TData = any, TVariables = Record<string, any>>(
    operation: DocumentNode,
    variables?: Record<string, any>
  ): Promise<GqlFetchResult<TData>> {
    const requestHeaders = {
      authorization: "Bearer MY_TOKEN"
    };

    let result = await this.client
      .request(operation, variables, requestHeaders)
      .then(
        (data: TData): GqlFetchResult<TData> => {
          return { data: data };
        }
      )
      .catch(
        (errors: Error[]): GqlFetchResult<TData> => {
          return { errors: errors };
        }
      );
    return result;
  }
}

export function LoadVertexClient(config: any): VertexClient {
  let name = config.name;
  let middleware = {};
  let source = "http;//0.0.0.0:4000/query";
  let cfg = config;
  return new VertexClient(name, source, middleware, cfg);
  //this is what should return the correct VertexClient
}
//exports

//load(id), get

//save(id), toIDs, foreach, get ID
//then use a mutation with middleware
