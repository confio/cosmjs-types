#!/usr/bin/env node

const { join } = require('path');
const telescope = require('@osmonauts/telescope').default;

telescope({
    protoDirs: [
        'wasmd-0.25/proto',
        'wasmd-0.25/third_party/proto',
        'cosmos-sdk-0.45/proto',
        'cosmos-sdk-0.45/third_party/proto'
    ],
    outPath: join(__dirname, '/../src'),
    options: {
        useSDKTypes: false,
        eslintDisable: {
            disableAll: true
        },
        bundle: {
            enabled: false
        },
        prototypes: {
            includePackageVar: true,
            excluded: {
                protos: [
                    'cosmos/authz/v1beta1/event.proto',
                    'cosmos/base/reflection/v2alpha1/reflection.proto',
                    'cosmos/crypto/secp256r1/keys.proto',
                    'ibc/core/port/v1/query.proto',
                    'ibc/lightclients/solomachine/v2/solomachine.proto',
                    'tendermint/libs/bits/types.proto',
                    'google/api/httpbody.proto'
                ]
            },
            methods: {
                fromJSON: true,
                toJSON: true
            },
            typingsFormat: { 
                useExact: true,
                useDeepPartial: true,
                timestamp: 'timestamp',
                duration: 'duration'
            }
        },
        lcdClients: {
            enabled: false
        },
        rpcClients: {
            enabled: true,
            inline: true,
            extensions: false,
            camelCase: false
        },
        aminoEncoding: {
            enabled: false
        }
    }
}).then(() => {
    console.log('✨ All Done!');
}, (e) => {
    console.error(e);
    process.exit(1);
});