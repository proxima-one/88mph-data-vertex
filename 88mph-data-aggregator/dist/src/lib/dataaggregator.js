"use strict";
// Import the crypto getRandomValues shim (**BEFORE** the shims)
//https://docs.ethers.io/v5/migration/web3/#migration-from-web3-js--contracts
//provider.getBlockWithTransactions(100004)
//"block" provider.on
//import "react-native-get-random-values";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
var tslib_1 = require("tslib");
// Import the the ethers shims (**BEFORE** ethers)
//import "@ethersproject/shims";
//import { FunctionKeys, Keys } from 'utility-types';
//values
//call function
var ethers_1 = require("ethers");
//import "@types/fs-extra";
var fs = tslib_1.__importStar(require("fs-extra"));
var DataVertexClient_1 = require("./DataVertexClient");
//import contract
var DataAggregator = /** @class */ (function () {
    function DataAggregator(name, id, datasources, datasourceTemplates, vertexConfig) {
        if (vertexConfig === void 0) { vertexConfig = {}; }
        this.name = name;
        this.id = id;
        this.datasources = datasources; //if
        this.datasourceTemplates = datasourceTemplates; //if
        this.vertexConfig = vertexConfig;
        //LoadDataVertex(vertexConfig)
    }
    DataAggregator.prototype.start = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _i, _a, _b, name_1, datasource, _c, _d, _e, templateDatasource;
            return tslib_1.__generator(this, function (_f) {
                console.log("Starting...");
                //console.log(this.datasources);
                for (_i = 0, _a = Array.from(this.datasources.entries()); _i < _a.length; _i++) {
                    _b = _a[_i], name_1 = _b[0], datasource = _b[1];
                    console.log(name_1.toString());
                    datasource.start();
                }
                for (_c = 0, _d = Object.entries(this.datasourceTemplates); _c < _d.length; _c++) {
                    _e = _d[_c], templateDatasource = _e[1];
                    templateDatasource.start();
                }
                return [2 /*return*/];
            });
        });
    };
    DataAggregator.prototype.status = function () {
        //unknown
        return true;
    };
    return DataAggregator;
}());
var Loader = /** @class */ (function () {
    function Loader() {
    }
    Loader.LoadDataAggregator = function (dataAggregatorConfig) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var name, id, datasources, datasourceTemplates, vertexConfig;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = dataAggregatorConfig.name;
                        id = dataAggregatorConfig.id;
                        return [4 /*yield*/, this.LoadDatasources(dataAggregatorConfig.datasources)];
                    case 1:
                        datasources = _a.sent();
                        return [4 /*yield*/, this.LoadDatasourceTemplates(dataAggregatorConfig.templates)];
                    case 2:
                        datasourceTemplates = _a.sent();
                        vertexConfig = dataAggregatorConfig;
                        return [2 /*return*/, new DataAggregator(name, id, datasources, datasourceTemplates, vertexConfig)];
                }
            });
        });
    };
    Loader.LoadDatasources = function (datasourceConfigList) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res, _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!Array.isArray(datasourceConfigList)) return [3 /*break*/, 2];
                        _a = Map.bind;
                        return [4 /*yield*/, Promise.all(datasourceConfigList.map(function (datasourceConfig) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var resp;
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.LoadDatasource(datasourceConfig)];
                                        case 1:
                                            resp = _a.sent();
                                            return [2 /*return*/, [resp.name, resp]];
                                    }
                                });
                            }); }))];
                    case 1:
                        res = new (_a.apply(Map, [void 0, _b.sent()]))();
                        return [2 /*return*/, res];
                    case 2: return [2 /*return*/, new Map()];
                }
            });
        });
    };
    Loader.LoadDatasource = function (datasourceConfig) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var datasourceTemplate, dAddress, datasource;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.LoadDatasourceTemplate(datasourceConfig)];
                    case 1:
                        datasourceTemplate = _a.sent();
                        dAddress = datasourceConfig.source.address;
                        datasource = datasourceTemplate.newDatasource(dAddress);
                        return [2 /*return*/, datasource];
                }
            });
        });
    };
    Loader.LoadDatasourceTemplates = function (datasourceTemplateConfigList) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res, _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!Array.isArray(datasourceTemplateConfigList)) return [3 /*break*/, 2];
                        _a = Map.bind;
                        return [4 /*yield*/, Promise.all(datasourceTemplateConfigList.map(function (datasourceTemplateConfig) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var resp;
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.LoadDatasourceTemplate(datasourceTemplateConfig)];
                                        case 1:
                                            resp = _a.sent();
                                            return [2 /*return*/, [resp.name, resp]];
                                    }
                                });
                            }); }))];
                    case 1:
                        res = new (_a.apply(Map, [void 0, _b.sent()]))();
                        return [2 /*return*/, res];
                    case 2: return [2 /*return*/, new Map()];
                }
            });
        });
    };
    Loader.LoadABI = function (abiName, datasourceConfig) {
        var abiText = "";
        var contracts = datasourceConfig.contracts;
        for (var _i = 0, contracts_1 = contracts; _i < contracts_1.length; _i++) {
            var contract = contracts_1[_i];
            if (contract.name == abiName) {
                var abiText_1 = fs.readFileSync(contract.file).toString();
                return abiText_1;
            }
        }
        return abiText;
    };
    Loader.LoadMappings = function (datasourceConfig) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var datasourceFile, mappings, eventMappings, _i, _a, _b, name_2, fn, eventName, filter, m;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        datasourceFile = "." + datasourceConfig.handlers.main;
                        return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1.__importStar(require(datasourceFile)); })];
                    case 1:
                        mappings = _c.sent();
                        eventMappings = new Map();
                        for (_i = 0, _a = Object.entries(mappings); _i < _a.length; _i++) {
                            _b = _a[_i], name_2 = _b[0], fn = _b[1];
                            eventName = name_2.replace(/handler/i, "");
                            //encode
                            //coercing type
                            try {
                                filter = { topics: [eventName] };
                                m = {
                                    name: eventName,
                                    filter: filter,
                                    mapFn: fn
                                };
                                eventMappings.set(eventName, m);
                            }
                            catch (err) {
                                console.log(err);
                            }
                        }
                        return [2 /*return*/, eventMappings];
                }
            });
        });
    };
    Loader.LoadDatasourceTemplate = function (datasourceTemplateConfig) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var name, abi, startBlock, provider, mappings, config;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = datasourceTemplateConfig.name;
                        abi = this.LoadABI(datasourceTemplateConfig.source.abi, datasourceTemplateConfig);
                        startBlock = 12181131;
                        return [4 /*yield*/, this.LoadProvider(datasourceTemplateConfig.client)];
                    case 1:
                        provider = _a.sent();
                        return [4 /*yield*/, this.LoadMappings(datasourceTemplateConfig)];
                    case 2:
                        mappings = _a.sent();
                        config = datasourceTemplateConfig;
                        return [2 /*return*/, new DatasourceTemplate(name, abi, mappings, provider, config)];
                }
            });
        });
    };
    //Check provider
    Loader.LoadProvider = function (clientConfig) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var startBlock, name, network, ip, RPC_HOST, provider;
            return tslib_1.__generator(this, function (_a) {
                startBlock = clientConfig.startBlock;
                name = clientConfig.name;
                network = clientConfig.network;
                ip = [
                    "http:68.203.22.34:30303",
                    "http://3.140.31.60:30303",
                    "http:18.141.229.119:30303",
                    "enode://b7523c0b8b5e34296b7fc51fddef2fc3931b3a4e9abe50dfe0a9d7549258a5de0607f7e323a4200ecfee1554a2920d413973777e899322f81930e459eaa65428@18.141.229.119:30303"
                ];
                RPC_HOST = ip[3];
                provider = ethers_1.ethers.getDefaultProvider("mainnet");
                //
                //check the connection for the provider, run error if there is an issue,
                return [2 /*return*/, provider];
            });
        });
    };
    return Loader;
}());
exports.Loader = Loader;
var DatasourceTemplate = /** @class */ (function () {
    //client
    //init vars
    function DatasourceTemplate(name, abi, mappings, provider, config) {
        if (config === void 0) { config = {}; }
        this.name = name;
        this.provider = provider;
        this.mappings = mappings;
        this.config = config;
        this.abi = abi;
        this.startBlock = config.startBlock || 11316134;
        this.datasources = new Map();
    }
    DatasourceTemplate.prototype.add = function (src) {
        if (typeof src == "string") {
            console.log(src);
            var datasource = this.newDatasource(src);
            this.datasources.set(src, datasource);
        }
        else {
            for (var _i = 0, src_1 = src; _i < src_1.length; _i++) {
                var addr = src_1[_i];
                var datasource = this.newDatasource(addr);
                this.datasources.set(addr, datasource);
            }
        }
    };
    DatasourceTemplate.prototype.newDatasource = function (address) {
        return new Datasource(this.name, ethers_1.ethers.utils.getAddress(address), this.abi, this.mappings, this.provider, this.config);
    };
    DatasourceTemplate.prototype.start = function (startBlock) {
        if (startBlock === void 0) { startBlock = this.startBlock; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _i, _a, _b, datasource, err_1;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        startBlock = 12181131;
                        _i = 0, _a = Array.from(this.datasources.entries());
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        _b = _a[_i], datasource = _b[1];
                        return [4 /*yield*/, datasource.start(startBlock)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        err_1 = _c.sent();
                        console.log(err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    DatasourceTemplate.prototype.stop = function () {
        for (var _i = 0, _a = Array.from(this.datasources.entries()); _i < _a.length; _i++) {
            var _b = _a[_i], datasource = _b[1];
            datasource.stop();
        }
    };
    return DatasourceTemplate;
}());
var Datasource = /** @class */ (function () {
    function Datasource(name, address, abi, mappings, provider, config) {
        if (config === void 0) { config = {}; }
        this.name = name;
        this.provider = provider;
        this.mappings = mappings;
        this.address = address;
        this.abi = abi;
        this.config = config;
        this.listeners = new Map();
        this.offset = 1000;
        this.startBlock = config.startBlock || 11316134; //offset
        this.currentBlockSynced = this.startBlock;
        this.latestBlock = 0;
        this._attachDest(config);
    }
    Datasource.prototype.start = function (startBlock) {
        if (startBlock === void 0) { startBlock = this.startBlock; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var resp, err_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        this._attachSource(this.address);
                        this._attachDest();
                        return [4 /*yield*/, this.updateCurrentBlock()];
                    case 1:
                        resp = _a.sent();
                        return [4 /*yield*/, this.sync()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Datasource.prototype.updateCurrentBlock = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.provider.getBlockNumber("latest")];
                    case 1:
                        _a.latestBlock = _b.sent();
                        return [2 /*return*/, this.latestBlock];
                }
            });
        });
    };
    Datasource.prototype._attachSource = function (src) {
        try {
            this.source = new ethers_1.ethers.Contract(ethers_1.ethers.utils.getAddress(this.address), this.abi, this.provider);
            //console.log(this.source.once);
        }
        catch (err) {
            console.log(err);
        }
    };
    Datasource.prototype._attachDest = function (destConfig) {
        try {
            //set context params
            this.dest = DataVertexClient_1.LoadVertexClient(this.config);
        }
        catch (err) {
            console.log(err);
        }
    };
    // // //get events, attachMappings
    // _attachMappings(mappings: Map<string, any>) {
    //   //filter, and then mapping
    //   //for each, set a
    //   //
    //   //create the filters for the mappings
    //   //src
    //   //dest
    //   //this.mappings =
    Datasource.prototype.subscribe = function (from) {
        if (from === void 0) { from = this.currentBlockSynced; }
        var _loop_1 = function (name_3, mapping) {
            if (name_3.includes("block")) {
                var blockListener = this_1.provider.on(mapping.name, mapping.mapFn);
                this_1.listeners.set(name_3, blockListener);
            }
            else {
                var eventListener = this_1.source.on(mapping.name, function (e) {
                    mapping.mapFn(e);
                });
                this_1.listeners.set(name_3, eventListener);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = Array.from(this.mappings.entries()); _i < _a.length; _i++) {
            var _b = _a[_i], name_3 = _b[0], mapping = _b[1];
            _loop_1(name_3, mapping);
        }
    };
    Datasource.prototype.sync = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.startBlock, this.currentBlockSynced, this.latestBlock);
                        _a.label = 1;
                    case 1:
                        if (!(this.currentBlockSynced < this.latestBlock - this.offset)) return [3 /*break*/, 6];
                        //console.log("sync");
                        return [4 /*yield*/, this.syncMappings(this.currentBlockSynced, this.currentBlockSynced + this.offset)];
                    case 2:
                        //console.log("sync");
                        _a.sent();
                        this.currentBlockSynced += this.offset;
                        if (!(this.currentBlockSynced % (this.offset * 100) == 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.updateCurrentBlock()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, delay(1000)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 6:
                        this.subscribe(this.currentBlockSynced);
                        return [2 /*return*/];
                }
            });
        });
    };
    Datasource.prototype.syncMappings = function (from, to) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var filter;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filter = {
                            address: ethers_1.ethers.utils.getAddress(this.address)
                            //topics:
                        };
                        //let eventLogs = await this.provider.source.getLogs("latest");
                        //console.log(eventLogs.toString());
                        this.source
                            .queryFilter(filter, from, to)
                            .then(function (events) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib_1.__generator(this, function (_a) {
                                //console.log(events.toString());
                                events.forEach(function (event) {
                                    //console.log(event);
                                    if (event != undefined &&
                                        event.event != undefined &&
                                        _this.mappings.get(event.event)) {
                                        //console.log(event.toString());
                                        //let fragment = this.source.interface.parseLog();
                                        //this.source.interface.decodeEventLog();
                                        var name_4 = event.event;
                                        console.log("Name: " + name_4);
                                        //console.log(event.event);
                                        var mapping = _this.mappings.get(name_4);
                                        //console.log(mapping);
                                        if (mapping) {
                                            var eventArgs = event.args;
                                            //console.log(eventArgs);
                                            mapping.mapFn(event);
                                        }
                                    }
                                });
                                this.currentBlockSynced = to;
                                console.log("Done: " + this.currentBlockSynced);
                                return [2 /*return*/];
                            });
                        }); })
                            .catch(function (err) {
                            console.log(err);
                            console.log("With value: ", event);
                        });
                        return [4 /*yield*/, delay(500)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Datasource.prototype.status = function () {
        return [this.startBlock, this.currentBlockSynced, this.latestBlock];
    };
    Datasource.prototype.stop = function () {
        this.source.removeAllListeners();
        this.listeners = new Map();
    };
    return Datasource;
}());
function delay(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
//# sourceMappingURL=dataaggregator.js.map