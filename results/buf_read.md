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

Linux x64 - 3.13.0-34-generic
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.29</td><td>8.30 GB</td><td>Intel(R) Core(TM) i5-4200M CPU @ 2.50GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>buf.read</b></td><td>866,876 ops/sec ±16.42% (27 runs sampled)</td></tr><tr><td><b>buf.myRead</b></td><td>1,148,220 ops/sec ±15.48% (25 runs sampled)</td></tr><tr><td><b>buf.read noAssert</b></td><td>1,695,149 ops/sec ±12.44% (28 runs sampled)</td></tr><tr><td><b>buf.myRead noAssert</b></td><td>3,645,886 ops/sec ±11.18% (31 runs sampled)</td></tr><tr><td><b>plainArray</b></td><td>4,041,972 ops/sec ±8.65% (43 runs sampled)</td></tr><tr><td><b>plainArray noAssert</b></td><td>10,485,913 ops/sec ±6.85% (68 runs sampled)</td></tr><tr><td><b>ArrayBuffer DataView</b></td><td>1,791,244 ops/sec ±5.09% (74 runs sampled)</td></tr></table>

> Notes:
> - Fastest is plainArray noAssert

Darwin x64 - 13.2.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.11.13</td><td>4.29 GB</td><td>Intel(R) Core(TM) i7-3615QM CPU @ 2.30GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>buf.read</b></td><td>7,409,856 ops/sec ±8.92% (38 runs sampled)</td></tr><tr><td><b>buf.myRead</b></td><td>4,312,023 ops/sec ±9.02% (36 runs sampled)</td></tr><tr><td><b>buf.read noAssert</b></td><td>29,601,615 ops/sec ±8.89% (46 runs sampled)</td></tr><tr><td><b>buf.myRead noAssert</b></td><td>15,583,335 ops/sec ±5.83% (61 runs sampled)</td></tr><tr><td><b>plainArray</b></td><td>10,735,807 ops/sec ±5.70% (66 runs sampled)</td></tr><tr><td><b>plainArray noAssert</b></td><td>69,824,083 ops/sec ±3.26% (79 runs sampled)</td></tr><tr><td><b>ArrayBuffer DataView</b></td><td>2,640,185 ops/sec ±1.69% (92 runs sampled)</td></tr></table>

> Notes:
> - Fastest is plainArray noAssert

