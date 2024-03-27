import type {CodegenConfig} from '@graphql-codegen/cli'
import {supabaseKey, supabaseUrl} from "./src/api/supabase.js";

const schemaUrl = `${supabaseUrl}/graphql/v1`;

const config: CodegenConfig = {
    schema: [{
        [schemaUrl]: {
            headers: {
                apikey: supabaseKey,
            }
        },
    }],
    config: {},
    documents: ['src/**/*.graphql'],
    overwrite: true,
    ignoreNoDocuments: true,
    generates: {
        'src/types.ts': {plugins: ['typescript']},
        'src/': {
            preset: 'near-operation-file',
            plugins: ['typescript-operations', 'typescript-react-apollo'],
            presetConfig: {
                extension: '.generated.tsx',
                baseTypesPath: 'types.ts'
            },
            config: {
                scalars: {
                    UUID: 'string',
                    Date: 'string',
                    Time: 'string',
                    Datetime: 'string',
                    JSON: 'string',
                    BigInt: 'string',
                    BigFloat: 'string',
                    Opaque: 'any',
                },
            },
        },
    },
    hooks: {
        afterAllFileWrite: [],
    },
}

export default config
