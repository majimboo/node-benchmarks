Darwin x64 - 13.3.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.29</td><td>8.59 GB</td><td>Intel(R) Core(TM) i5-2500S CPU @ 2.70GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>For loop, basic</b></td><td>170,941 ops/sec ±14.43% (33 runs sampled)
</td></tr><tr><td><b>While loop, basic</b></td><td>176,616 ops/sec ±13.67% (35 runs sampled)
</td></tr><tr><td><b>For loop, cached</b></td><td>221,230 ops/sec ±11.91% (41 runs sampled)
</td></tr><tr><td><b>For loop, i--</b></td><td>39,664 ops/sec ±8.90% (44 runs sampled)
</td></tr><tr><td><b>Do-while loop, i--</b></td><td>114,275 ops/sec ±5.92% (58 runs sampled)
</td></tr><tr><td><b>Do-while loop, --i</b></td><td>90,377 ops/sec ±1.58% (89 runs sampled)
</td></tr><tr><td><b>For..in loop</b></td><td>10,658 ops/sec ±1.27% (90 runs sampled)
</td></tr><tr><td><b>Array#forEach</b></td><td>25,159 ops/sec ±0.87% (95 runs sampled)
</td></tr><tr><td><b>underscore#each</b></td><td>25,034 ops/sec ±0.94% (86 runs sampled)
</td></tr><tr><td><b>lodash#each</b></td><td>70,342 ops/sec ±1.22% (89 runs sampled)
</td></tr><tr><td><b>shift valid</b></td><td>25,478 ops/sec ±0.85% (87 runs sampled)
</td></tr><tr><td><b>pop valid</b></td><td>116,881 ops/sec ±0.65% (92 runs sampled)
</td></tr></table>

> Notes:
> - Fastest is For loop, cached


