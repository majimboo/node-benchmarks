Node.JS Benchmarks
==================

[![NPM](https://nodei.co/npm/benchmarks.png?downloads=true)](https://nodei.co/npm/benchmarks/)

Javascript is a non-opinionated language and allows you to do an operation in many ways.
This repository tries to find which approach is faster in a range of different systems.

Installation
------------

    $ git clone https://github.com/majimboo/node_benchmarks
    $ cd node_benchmarks
    $ npm install

Usage
-----

    $ node benchmark.js
    [1/21]  type_check
    [2/21]  duplicate
    [3/21]  manip_recv_buf
    [4/21]  send_buf
    [5/21]  bluebird_vs_q
    [6/21]  conditional
    [7/21]  array_filter
    [8/21]  object_loop
    [9/21]  array_prepend
    [10/21] inc_int
    [11/21] delete
    [12/21] buf_write
    [13/21] function_call
    [14/21] proto_vs_literal
    [15/21] delete_last_item
    [16/21] array_map
    [17/21] string_search
    [18/21] buf_read
    [19/21] round_num
    [20/21] str_to_int
    [21/21] array_loop

Your benchmark results will be appended to the result set.

Results
-------

You can find the result sets [here](https://github.com/majimboo/node_benchmarks/tree/master/results). I recommend you send a pull requests to add your results to this list.
