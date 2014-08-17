buf.read x 8,012,651 ops/sec ±10.61% (45 runs sampled)
buf.myRead x 4,463,964 ops/sec ±10.21% (41 runs sampled)
buf.read noAssert x 31,163,062 ops/sec ±6.93% (52 runs sampled)
buf.myRead noAssert x 14,170,307 ops/sec ±6.25% (59 runs sampled)
plainArray x 11,092,095 ops/sec ±5.28% (72 runs sampled)
plainArray noAssert x 71,016,518 ops/sec ±2.31% (87 runs sampled)
ArrayBuffer DataView x 2,551,465 ops/sec ±1.82% (93 runs sampled)
Fastest is plainArray noAssert
