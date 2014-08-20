Node.JS Benchmarks
==================

[![NPM](https://nodei.co/npm/benchmarks.png?downloads=true)](https://nodei.co/npm/benchmarks/)

Javascript is a non-opinionated language and allows you to do an operation in many ways.
This repository tries to find which approach is faster in a range of different systems.

Installation
------------

    $ npm install -g benchmarks

Usage
-----

    $ node-benchmarks --help
    Usage: node-benchmarks [options]
    Options:
        -h, --help         output usage information
        -V, --version      output the version number
        -p, --path [path]  Path to output the results to

    $ node-benchmarks -p myresults/
    [1/21]  type_check
    [2/21]  send_buf
    [3/21]  manip_recv_buf
    [4/21]  duplicate
    [5/21]  object_loop
    [6/21]  bluebird_vs_q
    [7/21]  array_filter
    [8/21]  conditional
    [9/21]  array_prepend
    [10/21] buf_write
    [11/21] delete
    [12/21] inc_int
    [13/21] function_call
    [14/21] proto_vs_literal
    [15/21] delete_last_item
    [16/21] array_map
    [17/21] string_search
    [18/21] buf_read
    [19/21] round_num
    [20/21] array_loop
    [21/21] str_to_int

Your benchmark results will be appended to the result set.

Results
-------

You can find the result sets [here](https://github.com/majimboo/node_benchmarks/tree/master/results). I recommend you fork and send a pull requests to add your results to this list.

- [array_filter](https:/github.com/majimboo/node-benchmarks/tree/master/results/array_filter.md)
- [array_loop](https:/github.com/majimboo/node-benchmarks/tree/master/results/array_loop.md)
- [array_map](https:/github.com/majimboo/node-benchmarks/tree/master/results/array_map.md)
- [array_prepend](https:/github.com/majimboo/node-benchmarks/tree/master/results/array_prepend.md)
- [bluebird_vs_q](https:/github.com/majimboo/node-benchmarks/tree/master/results/bluebird_vs_q.md)
- [buf_read](https:/github.com/majimboo/node-benchmarks/tree/master/results/buf_read.md)
- [buf_write](https:/github.com/majimboo/node-benchmarks/tree/master/results/buf_write.md)
- [conditional](https:/github.com/majimboo/node-benchmarks/tree/master/results/conditional.md)
- [delete](https:/github.com/majimboo/node-benchmarks/tree/master/results/delete.md)
- [delete_last_item](https:/github.com/majimboo/node-benchmarks/tree/master/results/delete_last_item.md)
- [duplicate](https:/github.com/majimboo/node-benchmarks/tree/master/results/duplicate.md)
- [function_call](https:/github.com/majimboo/node-benchmarks/tree/master/results/function_call.md)
- [inc_int](https:/github.com/majimboo/node-benchmarks/tree/master/results/inc_int.md)
- [manip_recv_buf](https:/github.com/majimboo/node-benchmarks/tree/master/results/manip_recv_buf.md)
- [object_loop](https:/github.com/majimboo/node-benchmarks/tree/master/results/object_loop.md)
- [proto_vs_literal](https:/github.com/majimboo/node-benchmarks/tree/master/results/proto_vs_literal.md)
- [round_num](https:/github.com/majimboo/node-benchmarks/tree/master/results/round_num.md)
- [send_buf](https:/github.com/majimboo/node-benchmarks/tree/master/results/send_buf.md)
- [str_to_int](https:/github.com/majimboo/node-benchmarks/tree/master/results/str_to_int.md)
- [string_search](https:/github.com/majimboo/node-benchmarks/tree/master/results/string_search.md)
- [type_check](https:/github.com/majimboo/node-benchmarks/tree/master/results/type_check.md)
