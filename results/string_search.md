Darwin x64 - 13.3.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.29</td><td>8.59 GB</td><td>Intel(R) Core(TM) i5-2500S CPU @ 2.70GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>regex#test</b></td><td>4,253,349 ops/sec ±16.95% (34 runs sampled)</td></tr><tr><td><b>string#search</b></td><td>4,118,922 ops/sec ±14.23% (40 runs sampled)</td></tr><tr><td><b>string#match</b></td><td>2,880,505 ops/sec ±13.24% (41 runs sampled)</td></tr><tr><td><b>string#indexOf</b></td><td>1,040,075 ops/sec ±8.25% (47 runs sampled)</td></tr><tr><td><b>regex#test precompiled</b></td><td>11,217,872 ops/sec ±5.56% (61 runs sampled)</td></tr></table>

> Notes:
> - Fastest is regex#test precompiled

Linux x64 - 3.8.4-1-ARCH
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.30</td><td>519 MB</td><td>QEMU Virtual CPU version 1.0</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>regex#test</b></td><td>397,739 ops/sec ±3.15% (10 runs sampled)</td></tr><tr><td><b>string#search</b></td><td>337,743 ops/sec ±18.52% (11 runs sampled)</td></tr><tr><td><b>string#match</b></td><td>286,005 ops/sec ±6.63% (33 runs sampled)</td></tr><tr><td><b>string#indexOf</b></td><td>121,182 ops/sec ±7.67% (71 runs sampled)</td></tr><tr><td><b>regex#test precompiled</b></td><td>1,401,544 ops/sec ±4.99% (25 runs sampled)</td></tr></table>

> Notes:
> - Fastest is regex#test precompiled

