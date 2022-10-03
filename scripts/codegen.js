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
        includePackageVar: true,
        bundle: {
            enabled: false
        },
        prototypes: {
            excluded: {
                protos: [
                    'cosmos/authz/v1beta1/event.proto',
                    'cosmos/base/reflection/v2alpha1/reflection.proto',
                    'cosmos/crypto/secp256r1/keys.proto'
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