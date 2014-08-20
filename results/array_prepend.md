Darwin x64 - 13.3.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.29</td><td>8.59 GB</td><td>Intel(R) Core(TM) i5-2500S CPU @ 2.70GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>unshift</b></td><td>2,698,743 ops/sec ±13.92% (33 runs sampled)</td></tr><tr><td><b>prepend fn</b></td><td>1,103,719 ops/sec ±13.48% (33 runs sampled)</td></tr><tr><td><b>unshift no mutate</b></td><td>2,404,988 ops/sec ±11.94% (44 runs sampled)</td></tr></table>

> Notes:
> - Fastest is unshift,unshift no mutate

Linux x64 - 3.8.4-1-ARCH
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.30</td><td>519 MB</td><td>QEMU Virtual CPU version 1.0</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>unshift</b></td><td>235,869 ops/sec ±1.32% (10 runs sampled)</td></tr><tr><td><b>prepend fn</b></td><td>100,669 ops/sec ±18.93% (10 runs sampled)</td></tr><tr><td><b>unshift no mutate</b></td><td>202,254 ops/sec ±7.51% (60 runs sampled)</td></tr></table>

> Notes:
> - Fastest is unshift,unshift no mutate

Linux x64 - 3.13.0-34-generic
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.29</td><td>8.30 GB</td><td>Intel(R) Core(TM) i5-4200M CPU @ 2.50GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>unshift</b></td><td>1,671,869 ops/sec ±17.60% (26 runs sampled)</td></tr><tr><td><b>prepend fn</b></td><td>679,464 ops/sec ±16.11% (28 runs sampled)</td></tr><tr><td><b>unshift no mutate</b></td><td>1,178,501 ops/sec ±13.46% (32 runs sampled)</td></tr></table>

> Notes:
> - Fastest is unshift

