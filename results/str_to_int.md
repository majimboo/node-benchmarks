Darwin x64 - 13.3.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.29</td><td>8.59 GB</td><td>Intel(R) Core(TM) i5-2500S CPU @ 2.70GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>parseInt</b></td><td>9,184,589 ops/sec ±13.77% (31 runs sampled)</td></tr><tr><td><b>parseInt(a,10)</b></td><td>11,674,691 ops/sec ±14.14% (32 runs sampled)</td></tr><tr><td><b>Math#floor</b></td><td>7,764,731 ops/sec ±8.72% (37 runs sampled)</td></tr><tr><td><b>+a</b></td><td>9,562,769 ops/sec ±9.50% (46 runs sampled)</td></tr><tr><td><b>~~a</b></td><td>12,326,211 ops/sec ±5.75% (59 runs sampled)</td></tr><tr><td><b>a | 0</b></td><td>18,688,268 ops/sec ±2.94% (85 runs sampled)</td></tr><tr><td><b>a * 1</b></td><td>19,446,036 ops/sec ±1.38% (87 runs sampled)</td></tr><tr><td><b>a / 1</b></td><td>19,590,574 ops/sec ±0.76% (85 runs sampled)</td></tr><tr><td><b>a % Infinity</b></td><td>12,761,617 ops/sec ±0.98% (88 runs sampled)</td></tr><tr><td><b>a >> 0</b></td><td>19,984,794 ops/sec ±1.49% (89 runs sampled)</td></tr><tr><td><b>eval(a)</b></td><td>4,989,277 ops/sec ±1.23% (87 runs sampled)</td></tr><tr><td><b>a ^ 0</b></td><td>22,343,161 ops/sec ±1.52% (86 runs sampled)</td></tr></table>

> Notes:
> - Fastest is a ^ 0

