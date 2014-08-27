Darwin x64 - 13.3.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.31</td><td>8.59 GB</td><td>Intel(R) Core(TM) i5-2500S CPU @ 2.70GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>Array.prototype.slice</b></td><td>246,957 ops/sec ±18.05% (26 runs sampled)</td></tr><tr><td><b>[].slice</b></td><td>231,607 ops/sec ±15.89% (28 runs sampled)</td></tr><tr><td><b>cached Array.prototype.slice</b></td><td>299,600 ops/sec ±14.65% (34 runs sampled)</td></tr><tr><td><b>cached [].slice</b></td><td>437,383 ops/sec ±12.90% (44 runs sampled)</td></tr><tr><td><b>slicer</b></td><td>8,527,617 ops/sec ±8.46% (65 runs sampled)</td></tr></table>

> Notes:
> - Fastest is slicer

