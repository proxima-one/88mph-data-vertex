"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadVertexClient = exports.VertexClient = exports.useFetch = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var graphql_request_1 = require("graphql-request");
var VertexContext = react_1.default.createContext({});
function useFetch(operation, variables) {
    // const [vertex, setVertex] = useState(() => {
    //   return new VertexClient("default", "http://0.0.0.0:4000");
    // });
    //block until this returns right?
    var vertex = new VertexClient("default", "http://0.0.0.0:4000/query");
    var result;
    console.log("Variables and definitions");
    console.log(variables);
    console.log(operation);
    return vertex.Fetch(operation, variables).then(function (data) {
        console.log(data.toString());
        return data;
    });
}
exports.useFetch = useFetch;
// export function useQuery(operation: Document, vars: any): any {}
// export function useMutation(operation: Document, vars: any): any {}
//https://www.graphql-code-generator.com/docs/plugins/typescript-graphql-request
var VertexClient = /** @class */ (function () {
    function VertexClient(name, source, middleware, config) {
        this.name = name;
        this.source = source; //uri
        this.middleware = middleware; //no usage
        this.config = config;
        this.client = new graphql_request_1.GraphQLClient(this.source, { headers: {} });
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
    VertexClient.prototype.Fetch = function (operation, variables) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var requestHeaders, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestHeaders = {
                            authorization: "Bearer MY_TOKEN"
                        };
                        return [4 /*yield*/, this.client
                                .request(operation, variables, requestHeaders)
                                .then(function (data) {
                                return { data: data };
                            })
                                .catch(function (errors) {
                                return { errors: errors };
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return VertexClient;
}());
exports.VertexClient = VertexClient;
function LoadVertexClient(config) {
    var name = config.name;
    var middleware = {};
    var source = "http;//0.0.0.0:4000/query";
    var cfg = config;
    return new VertexClient(name, source, middleware, cfg);
    //this is what should return the correct VertexClient
}
exports.LoadVertexClient = LoadVertexClient;
//exports
//load(id), get
//save(id), toIDs, foreach, get ID
//then use a mutation with middleware
//# sourceMappingURL=DataVertexClient.js.map