Darwin x64 - 13.3.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.29</td><td>8.59 GB</td><td>Intel(R) Core(TM) i5-2500S CPU @ 2.70GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>buf.write</b></td><td>4,477,506 ops/sec ±13.13% (35 runs sampled)</td></tr><tr><td><b>buf.myWrite</b></td><td>5,447,799 ops/sec ±11.51% (34 runs sampled)</td></tr><tr><td><b>buf.write noAssert</b></td><td>10,820,356 ops/sec ±8.83% (40 runs sampled)</td></tr><tr><td><b>buf.myWrite noAssert</b></td><td>13,963,960 ops/sec ±8.49% (45 runs sampled)</td></tr></table>

> Notes:
> - Fastest is buf.myWrite noAssert

Linux x64 - 3.8.4-1-ARCH
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.30</td><td>519 MB</td><td>QEMU Virtual CPU version 1.0</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>buf.write</b></td><td>404,689 ops/sec ±0.67% (8 runs sampled)</td></tr><tr><td><b>buf.myWrite</b></td><td>194,301 ops/sec ±133.23% (14 runs sampled)</td></tr><tr><td><b>buf.write noAssert</b></td><td>1,290,790 ops/sec ±6.03% (12 runs sampled)</td></tr><tr><td><b>buf.myWrite noAssert</b></td><td>1,459,208 ops/sec ±11.17% (12 runs sampled)</td></tr></table>

> Notes:
> - Fastest is buf.myWrite noAssert

