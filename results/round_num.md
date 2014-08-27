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

Linux x64 - 3.13.0-34-generic
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.29</td><td>8.30 GB</td><td>Intel(R) Core(TM) i5-4200M CPU @ 2.50GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>Math#floor</b></td><td>15,508,773 ops/sec ±14.67% (29 runs sampled)</td></tr><tr><td><b>parseInt</b></td><td>8,621,232 ops/sec ±14.66% (29 runs sampled)</td></tr><tr><td><b>parseInt(a,10)</b></td><td>11,089,023 ops/sec ±14.64% (30 runs sampled)</td></tr><tr><td><b>~~a</b></td><td>25,700,220 ops/sec ±13.57% (41 runs sampled)</td></tr><tr><td><b>a | a</b></td><td>38,621,387 ops/sec ±11.20% (56 runs sampled)</td></tr><tr><td><b>a | 0</b></td><td>53,300,500 ops/sec ±3.78% (77 runs sampled)</td></tr><tr><td><b>a & a</b></td><td>50,480,976 ops/sec ±4.32% (62 runs sampled)</td></tr><tr><td><b>a << 0</b></td><td>70,954,623 ops/sec ±3.66% (85 runs sampled)</td></tr><tr><td><b>Int#toFixed</b></td><td>3,362,564 ops/sec ±3.99% (91 runs sampled)</td></tr><tr><td><b>modulo</b></td><td>66,543,424 ops/sec ±3.28% (86 runs sampled)</td></tr></table>

> Notes:
> - Fastest is a << 0

Darwin x64 - 13.2.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.11.13</td><td>4.29 GB</td><td>Intel(R) Core(TM) i7-3615QM CPU @ 2.30GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>Math#floor</b></td><td>29,052,926 ops/sec ±9.47% (46 runs sampled)</td></tr><tr><td><b>parseInt</b></td><td>15,034,286 ops/sec ±9.59% (41 runs sampled)</td></tr><tr><td><b>parseInt(a,10)</b></td><td>20,285,084 ops/sec ±7.36% (51 runs sampled)</td></tr><tr><td><b>~~a</b></td><td>41,219,894 ops/sec ±6.24% (56 runs sampled)</td></tr><tr><td><b>a | a</b></td><td>51,458,364 ops/sec ±4.37% (80 runs sampled)</td></tr><tr><td><b>a | 0</b></td><td>66,496,436 ops/sec ±1.81% (96 runs sampled)</td></tr><tr><td><b>a & a</b></td><td>64,723,610 ops/sec ±1.94% (88 runs sampled)</td></tr><tr><td><b>a << 0</b></td><td>66,837,878 ops/sec ±1.45% (85 runs sampled)</td></tr><tr><td><b>Int#toFixed</b></td><td>2,688,255 ops/sec ±2.63% (88 runs sampled)</td></tr><tr><td><b>modulo</b></td><td>74,352,206 ops/sec ±1.88% (92 runs sampled)</td></tr></table>

> Notes:
> - Fastest is modulo

Darwin x64 - 13.3.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.11.13</td><td>8.59 GB</td><td>Intel(R) Core(TM) i5-2500S CPU @ 2.70GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>Math#floor</b></td><td>19,906,036 ops/sec ±13.31% (25 runs sampled)</td></tr><tr><td><b>parseInt</b></td><td>10,336,963 ops/sec ±11.53% (30 runs sampled)</td></tr><tr><td><b>parseInt(a,10)</b></td><td>15,084,127 ops/sec ±9.82% (35 runs sampled)</td></tr><tr><td><b>~~a</b></td><td>29,434,786 ops/sec ±6.62% (38 runs sampled)</td></tr><tr><td><b>a | a</b></td><td>46,674,097 ops/sec ±6.45% (64 runs sampled)</td></tr><tr><td><b>a | 0</b></td><td>71,391,751 ops/sec ±1.38% (92 runs sampled)</td></tr><tr><td><b>a & a</b></td><td>73,858,981 ops/sec ±1.24% (85 runs sampled)</td></tr><tr><td><b>a << 0</b></td><td>73,989,504 ops/sec ±1.07% (93 runs sampled)</td></tr><tr><td><b>Int#toFixed</b></td><td>2,832,929 ops/sec ±1.85% (81 runs sampled)</td></tr><tr><td><b>modulo</b></td><td>80,524,700 ops/sec ±1.20% (92 runs sampled)</td></tr></table>

> Notes:
> - Fastest is modulo

Darwin x64 - 13.3.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.31</td><td>8.59 GB</td><td>Intel(R) Core(TM) i5-2500S CPU @ 2.70GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>Math#floor</b></td><td>16,794,446 ops/sec ±15.84% (26 runs sampled)</td></tr><tr><td><b>parseInt</b></td><td>9,163,773 ops/sec ±17.58% (32 runs sampled)</td></tr><tr><td><b>parseInt(a,10)</b></td><td>13,764,751 ops/sec ±15.93% (38 runs sampled)</td></tr><tr><td><b>~~a</b></td><td>28,020,671 ops/sec ±10.61% (38 runs sampled)</td></tr><tr><td><b>a | a</b></td><td>44,793,219 ops/sec ±5.41% (66 runs sampled)</td></tr><tr><td><b>a | 0</b></td><td>58,016,644 ops/sec ±1.11% (90 runs sampled)</td></tr><tr><td><b>a & a</b></td><td>63,689,292 ops/sec ±2.64% (72 runs sampled)</td></tr><tr><td><b>a << 0</b></td><td>63,726,133 ops/sec ±1.07% (85 runs sampled)</td></tr><tr><td><b>Int#toFixed</b></td><td>2,728,650 ops/sec ±0.92% (89 runs sampled)</td></tr><tr><td><b>modulo</b></td><td>68,651,541 ops/sec ±2.09% (77 runs sampled)</td></tr></table>

> Notes:
> - Fastest is modulo

