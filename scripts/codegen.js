#!/usr/bin/env node

const { join } = require('path');
const telescope = require('@osmonauts/telescope').default;

telescope({
    protoDirs: [
        'cosmos-sdk-0.45/proto',
        'cosmos-sdk-0.45/third_party/proto',
        'wasmd-0.28/proto',
        'wasmd-0.28/third_party/proto',
    ],
    outPath: join(__dirname, '/../src'),
    options: {
        logLevel: 0,
        useSDKTypes: false,
        tsDisable: {
            disableAll: false
        },
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
                    'google/api/httpbody.proto',
                    'tendermint/blockchain/types.proto',
                    'tendermint/consensus/types.proto',
                    'tendermint/consensus/wal.proto',
                    'tendermint/mempool/types.proto',
                    'tendermint/p2p/conn.proto',
                    'tendermint/p2p/pex.proto',
                    'tendermint/privval/types.proto',
                    'tendermint/rpc/grpc/types.proto',
                    'tendermint/state/types.proto',
                    'tendermint/statesync/types.proto',
                    'tendermint/store/types.proto',
                    'tendermint/types/canonical.proto',
                    'tendermint/types/events.proto',
                ]
            },
            methods: {
                fromJSON: true,
                toJSON: true
            },
            typingsFormat: { 
                useDeepPartial: false,
                useExact: false,
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
