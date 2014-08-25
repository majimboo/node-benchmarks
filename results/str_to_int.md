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

Linux x64 - 3.13.0-34-generic
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.29</td><td>8.30 GB</td><td>Intel(R) Core(TM) i5-4200M CPU @ 2.50GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>parseInt</b></td><td>6,866,085 ops/sec ±13.70% (26 runs sampled)</td></tr><tr><td><b>parseInt(a,10)</b></td><td>8,743,924 ops/sec ±13.95% (32 runs sampled)</td></tr><tr><td><b>Math#floor</b></td><td>6,618,107 ops/sec ±14.00% (30 runs sampled)</td></tr><tr><td><b>+a</b></td><td>6,462,128 ops/sec ±12.14% (36 runs sampled)</td></tr><tr><td><b>~~a</b></td><td>11,422,895 ops/sec ±7.74% (52 runs sampled)</td></tr><tr><td><b>a | 0</b></td><td>16,014,535 ops/sec ±5.73% (65 runs sampled)</td></tr><tr><td><b>a * 1</b></td><td>16,255,316 ops/sec ±4.92% (69 runs sampled)</td></tr><tr><td><b>a / 1</b></td><td>22,254,029 ops/sec ±3.53% (79 runs sampled)</td></tr><tr><td><b>a % Infinity</b></td><td>12,138,840 ops/sec ±2.24% (83 runs sampled)</td></tr><tr><td><b>a >> 0</b></td><td>19,542,820 ops/sec ±4.67% (80 runs sampled)</td></tr><tr><td><b>eval(a)</b></td><td>4,255,968 ops/sec ±5.78% (81 runs sampled)</td></tr><tr><td><b>a ^ 0</b></td><td>22,728,892 ops/sec ±3.54% (92 runs sampled)</td></tr></table>

> Notes:
> - Fastest is a ^ 0

Darwin x64 - 13.2.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.11.13</td><td>4.29 GB</td><td>Intel(R) Core(TM) i7-3615QM CPU @ 2.30GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>parseInt</b></td><td>13,364,106 ops/sec ±9.89% (40 runs sampled)</td></tr><tr><td><b>parseInt(a,10)</b></td><td>15,778,920 ops/sec ±9.74% (41 runs sampled)</td></tr><tr><td><b>Math#floor</b></td><td>34,115,459 ops/sec ±7.78% (53 runs sampled)</td></tr><tr><td><b>+a</b></td><td>10,257,211 ops/sec ±5.46% (54 runs sampled)</td></tr><tr><td><b>~~a</b></td><td>15,367,718 ops/sec ±4.34% (77 runs sampled)</td></tr><tr><td><b>a | 0</b></td><td>18,399,973 ops/sec ±2.73% (86 runs sampled)</td></tr><tr><td><b>a * 1</b></td><td>18,300,395 ops/sec ±1.74% (90 runs sampled)</td></tr><tr><td><b>a / 1</b></td><td>18,492,224 ops/sec ±1.45% (84 runs sampled)</td></tr><tr><td><b>a % Infinity</b></td><td>11,598,186 ops/sec ±1.61% (86 runs sampled)</td></tr><tr><td><b>a >> 0</b></td><td>19,363,211 ops/sec ±2.81% (87 runs sampled)</td></tr><tr><td><b>eval(a)</b></td><td>4,523,361 ops/sec ±1.30% (97 runs sampled)</td></tr><tr><td><b>a ^ 0</b></td><td>18,466,651 ops/sec ±1.05% (90 runs sampled)</td></tr></table>

> Notes:
> - Fastest is Math#floor

Darwin x64 - 13.3.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.11.13</td><td>8.59 GB</td><td>Intel(R) Core(TM) i5-2500S CPU @ 2.70GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>parseInt</b></td><td>8,838,559 ops/sec ±9.68% (25 runs sampled)</td></tr><tr><td><b>parseInt(a,10)</b></td><td>11,572,331 ops/sec ±14.90% (28 runs sampled)</td></tr><tr><td><b>Math#floor</b></td><td>28,261,144 ops/sec ±9.00% (36 runs sampled)</td></tr><tr><td><b>+a</b></td><td>7,341,922 ops/sec ±5.99% (38 runs sampled)</td></tr><tr><td><b>~~a</b></td><td>12,434,735 ops/sec ±5.91% (58 runs sampled)</td></tr><tr><td><b>a | 0</b></td><td>19,657,720 ops/sec ±1.26% (89 runs sampled)</td></tr><tr><td><b>a * 1</b></td><td>19,044,796 ops/sec ±1.33% (91 runs sampled)</td></tr><tr><td><b>a / 1</b></td><td>19,195,258 ops/sec ±1.52% (87 runs sampled)</td></tr><tr><td><b>a % Infinity</b></td><td>12,327,515 ops/sec ±1.32% (89 runs sampled)</td></tr><tr><td><b>a >> 0</b></td><td>21,777,601 ops/sec ±0.81% (95 runs sampled)</td></tr><tr><td><b>eval(a)</b></td><td>4,834,266 ops/sec ±1.56% (90 runs sampled)</td></tr><tr><td><b>a ^ 0</b></td><td>22,231,844 ops/sec ±0.49% (99 runs sampled)</td></tr></table>

> Notes:
> - Fastest is Math#floor

