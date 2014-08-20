Darwin x64 - 13.3.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.29</td><td>8.59 GB</td><td>Intel(R) Core(TM) i5-2500S CPU @ 2.70GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>buf.read</b></td><td>1,618,186 ops/sec ±15.82% (34 runs sampled)</td></tr><tr><td><b>buf.myRead</b></td><td>2,277,892 ops/sec ±14.28% (38 runs sampled)</td></tr><tr><td><b>buf.read noAssert</b></td><td>2,250,775 ops/sec ±11.45% (42 runs sampled)</td></tr><tr><td><b>buf.myRead noAssert</b></td><td>5,889,936 ops/sec ±9.06% (48 runs sampled)</td></tr><tr><td><b>plainArray</b></td><td>5,964,880 ops/sec ±6.21% (60 runs sampled)</td></tr><tr><td><b>plainArray noAssert</b></td><td>14,008,949 ops/sec ±1.90% (86 runs sampled)</td></tr><tr><td><b>ArrayBuffer DataView</b></td><td>2,429,469 ops/sec ±1.41% (83 runs sampled)</td></tr></table>

> Notes:
> - Fastest is plainArray noAssert

Linux x64 - 3.8.4-1-ARCH
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.30</td><td>519 MB</td><td>QEMU Virtual CPU version 1.0</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>buf.read</b></td><td>40,806 ops/sec ±172.32% (8 runs sampled)</td></tr><tr><td><b>buf.myRead</b></td><td>55,432 ops/sec ±160.66% (9 runs sampled)</td></tr><tr><td><b>buf.read noAssert</b></td><td>222,099 ops/sec ±103.01% (12 runs sampled)</td></tr><tr><td><b>buf.myRead noAssert</b></td><td>90,740 ops/sec ±178.24% (12 runs sampled)</td></tr><tr><td><b>plainArray</b></td><td>688,947 ops/sec ±7.32% (19 runs sampled)</td></tr><tr><td><b>plainArray noAssert</b></td><td>1,258,398 ops/sec ±1.39% (59 runs sampled)</td></tr><tr><td><b>ArrayBuffer DataView</b></td><td>283,569 ops/sec ±7.99% (42 runs sampled)</td></tr></table>

> Notes:
> - Fastest is plainArray noAssert

