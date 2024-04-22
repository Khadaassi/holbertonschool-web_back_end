#!/usr/bin/env python3

"""
type-annotated function sum_mixed_list that takes a list mxd_lst of integers
and floats and returns their sum as a float.
"""


def sum_mixed_list(input_list):
    """ Return the sum of a list of integers and floats"""
    sum = 0
    for i in input_list:
        if isinstance(i, int):
            sum += i
    return sum
