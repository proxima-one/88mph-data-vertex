//import
import assert from "assert";
import { expect } from "chai";
import { GraphQLClient } from "graphql-request";

import { getSdk } from "../src/generated/models/queries";

//https://github.com/ardeois/graphql-codegen-typescript-mock-data

describe("data vertex test for modules", async () => {
  describe("Should be able to get queries", async function() {
    //client
    {
      const queries = await setup();
      console.log("query");
      console.log(Object.entries(queries));
      console.log(queries.keys());
      for (var name of Array.from(queries.keys())) {
        console.log(name);
        it("should be able to query in high frequency: " + name, async () => {
          let queryStruct = queries.get(name);
          assert(queryStruct);
          console.log("Testing");
          let result = await queryStruct.query(queryStruct.variables);
          console.log(result);
          //errors
        });
      }
    }
  });
});

async function setup(): Promise<Map<string, QueryStruct>> {
  let endpoint = "http://0.0.0.0:4000/query";
  const client = new GraphQLClient(endpoint, { headers: {} });
  //test client connection
  console.log(client);
  const sdk = getSdk(client);
  let queries = new Map<string, QueryStruct>();
  queries.set("dPools", { query: sdk.dpools });
  queries.set("dPoolsLatest", {
    query: sdk.dpoolsLatest
  });
  queries.set("user", {
    query: sdk.User,
    variables: { id: "00000", prove: false }
  });
  queries.set("funder", {
    query: sdk.Funder,
    variables: { id: "00000", prove: false }
  });
  queries.set("dpool", {
    query: sdk.DPool,
    variables: { id: "00000", prove: false }
  });
  console.log(queries);
  return queries;
}

type QueryFunction = (a: any) => any;

type QueryStruct = {
  variables?: any;
  query: QueryFunction;
};

async function testHighFreqQuery(
  name: string,
  queryStruct: any,
  expected?: any
) {
  //it should be able to load
  //it should be able to save
}
