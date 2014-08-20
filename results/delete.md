Darwin x64 - 13.3.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.29</td><td>8.59 GB</td><td>Intel(R) Core(TM) i5-2500S CPU @ 2.70GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>splice</b></td><td>3,559,261 ops/sec ±16.17% (33 runs sampled)</td></tr><tr><td><b>object delete</b></td><td>3,190,961 ops/sec ±14.44% (35 runs sampled)</td></tr><tr><td><b>array delete</b></td><td>3,622,790 ops/sec ±10.42% (40 runs sampled)</td></tr><tr><td><b>object subscript delete</b></td><td>5,279,652 ops/sec ±8.29% (53 runs sampled)</td></tr></table>

> Notes:
> - Fastest is object subscript delete

Linux x64 - 3.8.4-1-ARCH
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.30</td><td>519 MB</td><td>QEMU Virtual CPU version 1.0</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>splice</b></td><td>250,154 ops/sec ±4.91% (13 runs sampled)</td></tr><tr><td><b>object delete</b></td><td>292,275 ops/sec ±6.94% (55 runs sampled)</td></tr><tr><td><b>array delete</b></td><td>462,431 ops/sec ±6.56% (11 runs sampled)</td></tr><tr><td><b>object subscript delete</b></td><td>557,292 ops/sec ±3.74% (74 runs sampled)</td></tr></table>

> Notes:
> - Fastest is object subscript delete

