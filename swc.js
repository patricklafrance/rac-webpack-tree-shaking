// Can play with most of the important configuration option with the online playground: https://swc.rs/playground

export const swcConfig = {
    jsc: {
        parser: {
            syntax: "ecmascript",
            jsx: true,
        },
        // The output environment that the code will be compiled for.
        target: "es2022",
        transform: {
            react: {
                // Use "react/jsx-runtime".
                // TODO: Is it the default value? https://swc.rs/docs/configuration/compilation#jsctransformreactruntime
                runtime: "automatic",
                // Use the native "Object.assign()" instead of "_extends".
                // TODO: Is it the default value? https://swc.rs/docs/configuration/compilation#jsctransformreactusebuiltins
                useBuiltins: true,
            },
        },
        // Import shims from an external module rather than inlining them in bundle files to greatly reduce the bundles size.
        // Requires to add "@swc/helpers" as a project dependency
        externalHelpers: true,
        // Informs the compiler where to find modules.
        baseUrl: ".",
    },
    module: {
        // The output module resolution system that the code will be compiled for.
        type: "es6",
        // Prevent SWC from exporting the `__esModule` property.
        strict: true,
    },
};
