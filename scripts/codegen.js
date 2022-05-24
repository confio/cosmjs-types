#!/usr/bin/env node

const { join } = require('path');
const telescope = require('@osmonauts/telescope').default;

const protoRuns = [
    [

        'wasmd-0.18/proto',
        'wasmd-0.18/third_party/proto',
    ],
    [
        'wasmd-0.25/proto',
        'wasmd-0.25/third_party/proto',
    ],
    [
        'cosmos-sdk-0.45/proto',
        'cosmos-sdk-0.45/third_party/proto'
    ]
];
const outPath = join(__dirname, '/../src');

protoRuns.forEach(dirs=>{
    telescope({
        protoDirs: [
            'third_party',
            ...dirs
        ],
        outPath,
        options: {
            includeAminos: false,
            includeLCDClient: false
        }
    });    
})

