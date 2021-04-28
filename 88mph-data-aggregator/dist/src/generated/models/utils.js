"use strict";
//proxy
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBigInt = exports.parseString = exports.parseBigNumber = exports.parseBigDecimal = exports.parseProof = exports.parseInt = exports.parseNumber = exports.convert = void 0;
//proxify
//convert
//tosaveargs
//toloadargs
var ethers_1 = require("ethers");
function getProperty(obj, key) {
    return obj[key]; // Inferred type is T[K]
}
function setProperty(obj, key, value) {
    obj[key] = value;
}
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
function convert(from, toType) {
    //doesn't work
    var desiredType = typeof {};
    if (toType != undefined) {
        desiredType = toType;
    }
    console.log("Convert from ", from);
    console.log("Type to ", desiredType);
    if (from == null) {
        return null;
    }
    switch (desiredType) {
        case "string":
            return parseString(from);
        case "int":
            return parseNumber(from);
        case "bigint":
            return parseBigInt(from);
        case "BigNumber":
            return parseBigNumber(from);
        case "float":
            return parseBigNumber(from);
        case "number":
            return parseNumber(from);
        case "object":
            return parseBigNumber(from);
        default:
            return null;
    }
}
exports.convert = convert;
function parseNumber(val) {
    var result = parseBigNumber(val);
    if (result != null && result instanceof ethers_1.BigNumber) {
        return result.toNumber();
    }
    else {
        return null;
    }
}
exports.parseNumber = parseNumber;
function parseInt(val) {
    var result = parseNumber(val);
    if (result != null) {
        return Math.floor(result);
    }
    return null;
}
exports.parseInt = parseInt;
//map for each
function parseProof(val) {
    return parseString(val);
}
exports.parseProof = parseProof;
function parseBigDecimal(val) {
    return parseBigNumber(val);
}
exports.parseBigDecimal = parseBigDecimal;
function parseBigNumber(val) {
    if (val == null) {
        return null;
    }
    switch (typeof val) {
        case "string":
            return ethers_1.BigNumber.from(val) || null;
        case "bigint":
            return ethers_1.BigNumber.from(val) || null; //int
        case "number":
            return ethers_1.BigNumber.from(val) || null;
        case "boolean":
            return ethers_1.BigNumber.from(val) || null;
        case "object":
            return ethers_1.BigNumber.from(val) || null;
        default:
            return null;
    }
}
exports.parseBigNumber = parseBigNumber;
function parseString(val) {
    console.log("parsing string");
    //console.log(val);
    //console.log(typeof val);
    switch (typeof val) {
        case "string":
            return val;
        case "bigint":
            return val.toString(); //int
        case "number":
            return val.toString();
        case "object":
            return val.toString();
        default:
            return null;
    }
}
exports.parseString = parseString;
function parseBigInt(val) {
    switch (typeof val) {
        case "string":
            var c = BigInt(val);
            return c;
        case "bigint":
            return val; //int
        case "number":
            return BigInt(val) || null;
        case "object":
            if (val instanceof ethers_1.BigNumber) {
                return BigInt(val.toNumber());
            }
            else {
                return null;
            }
        default:
            return null;
    }
}
exports.parseBigInt = parseBigInt;
//
// const parseInteger = (s: string): CellParse<number> => {
//   const n = Number(s);
//   if (Number.isNaN(n)) {
//     return { parsed: false, reason: "does not contain a number" };
//   }
//   if (!Number.isInteger(n)) {
//     return { parsed: false, reason: "must be a whole number" };
//   }
//   return { parsed: true, value: n };
// };
//convert
///
// //parse to proxy,
// function toSaveArgs<T, U>(o: Proxify<T, U>): U {
//   let result = {} as U;
//   //filtered keys
//   for (const k in o) {
//     result[k] = o[k].getSaveArgs();
//   }
//   return result;
// }
//
// function toLoadArgs<T, U>(o: Proxify<T, U>): T {
//   let result = {} as T;
//   //filtered keys
//   for (const k in o) {
//     result[k] = o[k].getLoadArgs();
//   }
//   return result;
// }
//parse
// //const parse : (row: ProductStrings) => ProductParsing = (row) => {
//   return {
//     name: parseName(row.name),
//     price: parsePrice(row.price),
//     unitOfMeasure: parseUnitOfMeasure(row.unitOfMeasure),
//     quantityPerUnit: parseInteger(row.quantityPerUnit),
//     brandName: parseString(row.brandName),
//     productType: parseString(row.productType),
//     category: parseString(row.category),
//   };
// };
// function convertArray<T, U>(valueArr: Array<T>, newValue: Array<U>): Array<U> {
//   return (valueArr.map(prop => {
//     convert<T, U>(prop) as U;
//   }) as unknown) as Array<U>;
// }
// function convert<T, U>(value: T, newValue?: U): U {
//   // if (value instanceof Array) {
//   //   return convertArray(value, newValue)
//   // }
//   console.log("Values");
//   console.log(value);
//   //check if new value is a class
//   if (value) {
//     return newValue as U;
//   }
//
//   type K1 = keyof U;
//
//   //check if value has id
//   //if value has id
//
//   //convert to string
//   //if type is string
//   //toString
//
//   //check numbers
//   //
//
//   //check
//   return (null as unknown) as U;
// }
//
// function getNameInSaveArgs<T>(name: string, args: T): string {
//   //name
//   //determine the name and type that the value should be.
//   //convert to the type needed...
//   let plural = "";
//   if (name.lastIndexOf("s") == name.length - 1) {
//     plural = "s";
//     name = name.slice(name.length - 1);
//   }
//   //get new name and set plural
//   let fieldIdName = lowercaseFirstLetter(name + "ID" + plural);
//   let fieldIDName = lowercaseFirstLetter(name + "Id" + plural);
//   let fieldReplaceIdwithID = lowercaseFirstLetter(name.replace("Id", "ID"));
//   let names = [name, fieldIdName, fieldIDName, fieldReplaceIdwithID];
//   //add to the save args value
//   //right here
//   for (const n of names) {
//     if (n in args) {
//       return n;
//     }
//   }
//   return "";
// }
//# sourceMappingURL=utils.js.map