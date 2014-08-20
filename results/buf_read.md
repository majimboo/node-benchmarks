Darwin x64 - 13.3.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.29</td><td>8.59 GB</td><td>Intel(R) Core(TM) i5-2500S CPU @ 2.70GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>buf.read</b></td><td>1,618,186 ops/sec ±15.82% (34 runs sampled)</td></tr><tr><td><b>buf.myRead</b></td><td>2,277,892 ops/sec ±14.28% (38 runs sampled)</td></tr><tr><td><b>buf.read noAssert</b></td><td>2,250,775 ops/sec ±11.45% (42 runs sampled)</td></tr><tr><td><b>buf.myRead noAssert</b></td><td>5,889,936 ops/sec ±9.06% (48 runs sampled)</td></tr><tr><td><b>plainArray</b></td><td>5,964,880 ops/sec ±6.21% (60 runs sampled)</td></tr><tr><td><b>plainArray noAssert</b></td><td>14,008,949 ops/sec ±1.90% (86 runs sampled)</td></tr><tr><td><b>ArrayBuffer DataView</b></td><td>2,429,469 ops/sec ±1.41% (83 runs sampled)</td></tr></table>

> Notes:
> - Fastest is plainArray noAssert

