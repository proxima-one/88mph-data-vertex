"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAggregator = void 0;
var tslib_1 = require("tslib");
//import { ApolloProvider } from "@apollo/client";
//import "react-native-get-random-values";
//import "@types/fs-extra";
var fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
//import "@types/js-yaml";
var js_yaml_1 = tslib_1.__importDefault(require("js-yaml"));
var dataaggregator_1 = require("./lib/dataaggregator");
var default_config_path = "./app-config.yml";
//let vertexClient = VertexClient.Load(config);
//connect the data vertex to the relevant variables?
//set the context in the new context
function loadAggregator(app_config_path) {
    if (app_config_path === void 0) { app_config_path = default_config_path; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var config, dataAggregator;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    config = js_yaml_1.default.load(fs_extra_1.default.readFileSync(app_config_path).toString());
                    //check config
                    console.log("Loading Config");
                    return [4 /*yield*/, dataaggregator_1.Loader.LoadDataAggregator(config)];
                case 1:
                    dataAggregator = _a.sent();
                    console.log("Data Aggregator is Loaded");
                    return [4 /*yield*/, dataAggregator.start()];
                case 2:
                    _a.sent();
                    console.log("Started");
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadAggregator = loadAggregator;
//# sourceMappingURL=index.js.map