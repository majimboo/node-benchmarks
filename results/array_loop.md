Darwin x64 - 13.3.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.29</td><td>8.59 GB</td><td>Intel(R) Core(TM) i5-2500S CPU @ 2.70GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>For loop basic</b></td><td>172,551 ops/sec ±13.28% (35 runs sampled)</td></tr><tr><td><b>While loop basic</b></td><td>170,021 ops/sec ±12.00% (33 runs sampled)</td></tr><tr><td><b>For loop cached</b></td><td>202,323 ops/sec ±8.14% (36 runs sampled)</td></tr><tr><td><b>For loop i--</b></td><td>42,893 ops/sec ±7.30% (44 runs sampled)</td></tr><tr><td><b>Do-while loop i--</b></td><td>119,168 ops/sec ±6.02% (65 runs sampled)</td></tr><tr><td><b>Do-while loop --i</b></td><td>87,389 ops/sec ±1.41% (83 runs sampled)</td></tr><tr><td><b>For..in loop</b></td><td>9,865 ops/sec ±1.50% (87 runs sampled)</td></tr><tr><td><b>Array#forEach</b></td><td>24,579 ops/sec ±0.70% (80 runs sampled)</td></tr><tr><td><b>underscore#each</b></td><td>24,530 ops/sec ±1.18% (90 runs sampled)</td></tr><tr><td><b>lodash#each</b></td><td>68,883 ops/sec ±1.36% (87 runs sampled)</td></tr><tr><td><b>shift valid</b></td><td>26,169 ops/sec ±1.06% (88 runs sampled)</td></tr><tr><td><b>pop valid</b></td><td>114,357 ops/sec ±1.20% (86 runs sampled)</td></tr></table>

> Notes:
> - Fastest is For loop cached,For loop basic

Linux x64 - 3.8.4-1-ARCH
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.30</td><td>519 MB</td><td>QEMU Virtual CPU version 1.0</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>For loop basic</b></td><td>14,909 ops/sec ±4.53% (49 runs sampled)</td></tr><tr><td><b>While loop basic</b></td><td>15,016 ops/sec ±5.94% (57 runs sampled)</td></tr><tr><td><b>For loop cached</b></td><td>24,511 ops/sec ±3.31% (67 runs sampled)</td></tr><tr><td><b>For loop i--</b></td><td>3,958 ops/sec ±4.99% (23 runs sampled)</td></tr><tr><td><b>Do-while loop i--</b></td><td>12,904 ops/sec ±3.35% (51 runs sampled)</td></tr><tr><td><b>Do-while loop --i</b></td><td>8,910 ops/sec ±7.39% (40 runs sampled)</td></tr><tr><td><b>For..in loop</b></td><td>1,234 ops/sec ±1.09% (23 runs sampled)</td></tr><tr><td><b>Array#forEach</b></td><td>3,185 ops/sec ±9.58% (45 runs sampled)</td></tr><tr><td><b>underscore#each</b></td><td>3,696 ops/sec ±0.95% (35 runs sampled)</td></tr><tr><td><b>lodash#each</b></td><td>16,138 ops/sec ±5.58% (85 runs sampled)</td></tr><tr><td><b>shift valid</b></td><td>8,857 ops/sec ±2.15% (89 runs sampled)</td></tr><tr><td><b>pop valid</b></td><td>39,073 ops/sec ±1.22% (86 runs sampled)</td></tr></table>

> Notes:
> - Fastest is pop valid

