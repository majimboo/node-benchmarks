Darwin x64 - 13.3.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.29</td><td>8.59 GB</td><td>Intel(R) Core(TM) i5-2500S CPU @ 2.70GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>i++</b></td><td>20,868,709 ops/sec ±14.02% (30 runs sampled)</td></tr><tr><td><b>++i</b></td><td>20,929,474 ops/sec ±12.83% (33 runs sampled)</td></tr><tr><td><b>i += 1</b></td><td>20,366,175 ops/sec ±11.44% (42 runs sampled)</td></tr><tr><td><b>inc fn</b></td><td>26,803,508 ops/sec ±8.38% (49 runs sampled)</td></tr></table>

> Notes:
> - Fastest is inc fn

Linux x64 - 3.8.4-1-ARCH
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.30</td><td>519 MB</td><td>QEMU Virtual CPU version 1.0</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>i++</b></td><td>1,904,888 ops/sec ±3.56% (26 runs sampled)</td></tr><tr><td><b>++i</b></td><td>1,629,367 ops/sec ±6.85% (12 runs sampled)</td></tr><tr><td><b>i += 1</b></td><td>2,827,249 ops/sec ±8.75% (16 runs sampled)</td></tr><tr><td><b>inc fn</b></td><td>2,697,299 ops/sec ±3.37% (67 runs sampled)</td></tr></table>

> Notes:
> - Fastest is inc fn,i += 1

