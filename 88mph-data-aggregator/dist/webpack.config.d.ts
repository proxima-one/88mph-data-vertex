export const entry: string;
export namespace output {
    const filename: string;
    const path: string;
}
export const externals: {
    "react-native": boolean;
};
export namespace module {
    const rules: {
        test: RegExp;
        exclude: RegExp;
        use: string[];
    }[];
}
//# sourceMappingURL=webpack.config.d.ts.map