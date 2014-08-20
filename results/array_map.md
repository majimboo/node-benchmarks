Darwin x64 - 13.3.0
-----

<table><tr><td><b>node</b></td><td><b>memory</b></td><td><b>cpu</b></td></tr><tr><td>v0.10.29</td><td>8.59 GB</td><td>Intel(R) Core(TM) i5-2500S CPU @ 2.70GHz</td></tr></table>

#### Benchmark Results ####

<table><tr><td><b>CoffeeScript comprehension</b></td><td>35,419 ops/sec ±16.91% (35 runs sampled)</td></tr><tr><td><b>for loop (with function call)</b></td><td>38,041 ops/sec ±11.40% (37 runs sampled)</td></tr><tr><td><b>Array#map</b></td><td>7,590 ops/sec ±10.86% (40 runs sampled)</td></tr><tr><td><b>underscore#map</b></td><td>9,937 ops/sec ±7.38% (47 runs sampled)</td></tr><tr><td><b>lodash#map</b></td><td>37,105 ops/sec ±5.73% (59 runs sampled)</td></tr></table>

> Notes:
> - Fastest is lodash#map,for loop (with function call),CoffeeScript comprehension

