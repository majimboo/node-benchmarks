Darwin x64 - 13.3.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.29</td><td>8.59 GB</td><td>Intel(R) Core(TM) i5-2500S CPU @ 2.70GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>Math#floor</b></td><td>23,036,987 ops/sec ±13.74% (37 runs sampled)</td></tr><tr><td><b>parseInt</b></td><td>10,421,078 ops/sec ±14.37% (35 runs sampled)</td></tr><tr><td><b>parseInt(a,10)</b></td><td>16,000,701 ops/sec ±11.75% (45 runs sampled)</td></tr><tr><td><b>~~a</b></td><td>32,353,702 ops/sec ±8.56% (45 runs sampled)</td></tr><tr><td><b>a | a</b></td><td>43,132,322 ops/sec ±7.44% (59 runs sampled)</td></tr><tr><td><b>a | 0</b></td><td>61,629,139 ops/sec ±2.23% (72 runs sampled)</td></tr><tr><td><b>a & a</b></td><td>65,907,437 ops/sec ±1.80% (84 runs sampled)</td></tr><tr><td><b>a << 0</b></td><td>69,207,662 ops/sec ±1.07% (96 runs sampled)</td></tr><tr><td><b>Int#toFixed</b></td><td>2,670,063 ops/sec ±1.07% (85 runs sampled)</td></tr><tr><td><b>modulo</b></td><td>74,830,787 ops/sec ±2.60% (79 runs sampled)</td></tr></table>

> Notes:
> - Fastest is modulo

Linux x64 - 3.8.4-1-ARCH
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.30</td><td>519 MB</td><td>QEMU Virtual CPU version 1.0</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>Math#floor</b></td><td>1,887,789 ops/sec ±3.06% (37 runs sampled)</td></tr><tr><td><b>parseInt</b></td><td>831,539 ops/sec ±5.66% (15 runs sampled)</td></tr><tr><td><b>parseInt(a,10)</b></td><td>1,472,441 ops/sec ±5.18% (38 runs sampled)</td></tr><tr><td><b>~~a</b></td><td>3,385,190 ops/sec ±6.81% (18 runs sampled)</td></tr><tr><td><b>a | a</b></td><td>4,164,766 ops/sec ±8.83% (25 runs sampled)</td></tr><tr><td><b>a | 0</b></td><td>6,427,849 ops/sec ±3.92% (83 runs sampled)</td></tr><tr><td><b>a & a</b></td><td>7,919,568 ops/sec ±2.70% (35 runs sampled)</td></tr><tr><td><b>a << 0</b></td><td>7,967,408 ops/sec ±9.15% (34 runs sampled)</td></tr><tr><td><b>Int#toFixed</b></td><td>506,126 ops/sec ±2.36% (46 runs sampled)</td></tr><tr><td><b>modulo</b></td><td>14,330,851 ops/sec ±5.72% (62 runs sampled)</td></tr></table>

> Notes:
> - Fastest is modulo

