Darwin x64 - 13.3.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.29</td><td>8.59 GB</td><td>Intel(R) Core(TM) i5-2500S CPU @ 2.70GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>parseInt</b></td><td>9,184,589 ops/sec ±13.77% (31 runs sampled)</td></tr><tr><td><b>parseInt(a,10)</b></td><td>11,674,691 ops/sec ±14.14% (32 runs sampled)</td></tr><tr><td><b>Math#floor</b></td><td>7,764,731 ops/sec ±8.72% (37 runs sampled)</td></tr><tr><td><b>+a</b></td><td>9,562,769 ops/sec ±9.50% (46 runs sampled)</td></tr><tr><td><b>~~a</b></td><td>12,326,211 ops/sec ±5.75% (59 runs sampled)</td></tr><tr><td><b>a | 0</b></td><td>18,688,268 ops/sec ±2.94% (85 runs sampled)</td></tr><tr><td><b>a * 1</b></td><td>19,446,036 ops/sec ±1.38% (87 runs sampled)</td></tr><tr><td><b>a / 1</b></td><td>19,590,574 ops/sec ±0.76% (85 runs sampled)</td></tr><tr><td><b>a % Infinity</b></td><td>12,761,617 ops/sec ±0.98% (88 runs sampled)</td></tr><tr><td><b>a >> 0</b></td><td>19,984,794 ops/sec ±1.49% (89 runs sampled)</td></tr><tr><td><b>eval(a)</b></td><td>4,989,277 ops/sec ±1.23% (87 runs sampled)</td></tr><tr><td><b>a ^ 0</b></td><td>22,343,161 ops/sec ±1.52% (86 runs sampled)</td></tr></table>

> Notes:
> - Fastest is a ^ 0

Linux x64 - 3.8.4-1-ARCH
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.30</td><td>519 MB</td><td>QEMU Virtual CPU version 1.0</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>parseInt</b></td><td>870,026 ops/sec ±3.34% (18 runs sampled)</td></tr><tr><td><b>parseInt(a,10)</b></td><td>933,740 ops/sec ±8.65% (16 runs sampled)</td></tr><tr><td><b>Math#floor</b></td><td>983,956 ops/sec ±8.62% (11 runs sampled)</td></tr><tr><td><b>+a</b></td><td>941,656 ops/sec ±4.09% (70 runs sampled)</td></tr><tr><td><b>~~a</b></td><td>1,510,401 ops/sec ±3.85% (70 runs sampled)</td></tr><tr><td><b>a | 0</b></td><td>2,418,026 ops/sec ±5.34% (27 runs sampled)</td></tr><tr><td><b>a * 1</b></td><td>2,433,107 ops/sec ±1.34% (33 runs sampled)</td></tr><tr><td><b>a / 1</b></td><td>2,823,054 ops/sec ±9.40% (52 runs sampled)</td></tr><tr><td><b>a % Infinity</b></td><td>1,931,787 ops/sec ±1.21% (37 runs sampled)</td></tr><tr><td><b>a >> 0</b></td><td>5,929,692 ops/sec ±6.81% (66 runs sampled)</td></tr><tr><td><b>eval(a)</b></td><td>1,664,703 ops/sec ±2.07% (57 runs sampled)</td></tr><tr><td><b>a ^ 0</b></td><td>8,585,034 ops/sec ±2.24% (83 runs sampled)</td></tr></table>

> Notes:
> - Fastest is a ^ 0

