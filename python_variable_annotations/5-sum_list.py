#!/usr/bin/env python3

"""
type-annotated function sum_list that takes a list input_list of floats as
argument and returns their sum as a float.
"""


def sum_list(input_list):
    """ Return the sum of a list of floats """
    sum = 0
    for i in input_list:
        sum += i
    return sum
