Node.JS
=======

> master branch (bleeding)

Rounding Numbers
----------------
**winner**: [`Math#floor`](https://github.com/majimboo/benchmarks/blob/master/javascript/round_num.js#L10)

    Math#floor     x 105,176,018 ops/sec ±0.18% (97 runs sampled)
    parseInt       x  43,690,441 ops/sec ±0.29% (96 runs sampled)
    parseInt(a,10) x  53,948,953 ops/sec ±0.15% (80 runs sampled)
    ~~a            x  83,913,860 ops/sec ±0.16% (103 runs sampled)
    a | a          x  84,299,116 ops/sec ±0.19% (97 runs sampled)
    a | 0          x  83,865,210 ops/sec ±0.23% (99 runs sampled)
    a & a          x  84,009,680 ops/sec ±0.17% (99 runs sampled)
    a << 0         x  84,801,447 ops/sec ±0.34% (93 runs sampled)
    Int#toFixed    x   2,920,858 ops/sec ±0.52% (99 runs sampled)
    modulo         x  88,860,498 ops/sec ±0.15% (99 runs sampled)

Array Each
----------
**winner**: [`pop`](https://github.com/majimboo/benchmarks/blob/master/javascript/array_loop.js#L100)

    For loop, basic    x    894,656 ops/sec ±0.13% (97 runs sampled)
    While loop, basic  x    889,721 ops/sec ±0.34% (95 runs sampled)
    For loop, cached   x    894,489 ops/sec ±0.14% (93 runs sampled)
    For loop, i--      x    210,896 ops/sec ±0.14% (93 runs sampled)
    Do-while loop, i-- x    717,990 ops/sec ±0.13% (95 runs sampled)
    Do-while loop, --i x    198,975 ops/sec ±0.27% (97 runs sampled)
    For..in loop       x      9,622 ops/sec ±0.30% (94 runs sampled)
    Array#forEach      x     21,799 ops/sec ±0.13% (101 runs sampled)
    underscore#each    x     21,769 ops/sec ±0.21% (102 runs sampled)
    lodash#each        x     88,751 ops/sec ±0.64% (102 runs sampled)
    order              x 30,583,479 ops/sec ±0.32% (88 runs sampled)
    order validation   x 30,770,769 ops/sec ±0.23% (95 runs sampled)
    pop                x 81,030,123 ops/sec ±0.57% (96 runs sampled)

Buffer Read
-----------
**winner**: [`buf.myRead noAssert`](https://github.com/majimboo/benchmarks/blob/master/javascript/buf_read.js#L165)

    buf.read            x 25,522,856 ops/sec ±0.24% (97 runs sampled)
    buf.myRead          x 14,248,629 ops/sec ±0.40% (92 runs sampled)
    buf.read noAssert   x 59,399,012 ops/sec ±0.92% (92 runs sampled)
    buf.myRead noAssert x 73,622,213 ops/sec ±1.18% (94 runs sampled)
