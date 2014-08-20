Darwin x64 - 13.3.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.29</td><td>8.59 GB</td><td>Intel(R) Core(TM) i5-2500S CPU @ 2.70GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>splice</b></td><td>318,059 ops/sec ±15.97% (31 runs sampled)</td></tr><tr><td><b>splice -</b></td><td>212,327 ops/sec ±13.39% (34 runs sampled)</td></tr><tr><td><b>splice cached</b></td><td>288,202 ops/sec ±8.96% (36 runs sampled)</td></tr><tr><td><b>array delete</b></td><td>308,453 ops/sec ±8.34% (45 runs sampled)</td></tr><tr><td><b>array pop</b></td><td>521,401 ops/sec ±7.90% (59 runs sampled)</td></tr></table>

> Notes:
> - Fastest is array pop

Linux x64 - 3.8.4-1-ARCH
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.30</td><td>519 MB</td><td>QEMU Virtual CPU version 1.0</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>splice</b></td><td>17,346 ops/sec ±5.45% (58 runs sampled)</td></tr><tr><td><b>splice -</b></td><td>17,687 ops/sec ±6.99% (20 runs sampled)</td></tr><tr><td><b>splice cached</b></td><td>24,167 ops/sec ±3.49% (66 runs sampled)</td></tr><tr><td><b>array delete</b></td><td>26,477 ops/sec ±3.00% (26 runs sampled)</td></tr><tr><td><b>array pop</b></td><td>47,442 ops/sec ±4.31% (79 runs sampled)</td></tr></table>

> Notes:
> - Fastest is array pop

