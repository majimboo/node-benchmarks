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

- [array_concat](results/array_concat.md)
- [array_filter](results/array_filter.md)
- [array_loop](results/array_loop.md)
- [array_map](results/array_map.md)
- [array_prepend](results/array_prepend.md)
- [bluebird_vs_q](results/bluebird_vs_q.md)
- [buf_read](results/buf_read.md)
- [buf_write](results/buf_write.md)
- [conditional](results/conditional.md)
- [delete](results/delete.md)
- [delete_last_item](results/delete_last_item.md)
- [duplicate](results/duplicate.md)
- [function_call](results/function_call.md)
- [inc_int](results/inc_int.md)
- [manip_recv_buf](results/manip_recv_buf.md)
- [object_loop](results/object_loop.md)
- [proto_vs_literal](results/proto_vs_literal.md)
- [round_num](results/round_num.md)
- [send_buf](results/send_buf.md)
- [str_to_int](results/str_to_int.md)
- [string_search](results/string_search.md)
- [type_check](results/type_check.md)


Contribute
----------

    // first fork this repo
    $ git clone git@github.com:YOURUSERNAME/node-benchmarks.git
    $ cd node-benchmarks
    $ npm install
    $ bin/node-benchmarks
    $ git add .
    $ git commit -m 'added new results'
    $ git push origin master
    // last send pull request

History
-------

Can be seen [here](HISTORY.md).
