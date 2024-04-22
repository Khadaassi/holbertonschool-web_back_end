#!/usr/bin/env python3

"""
type-annotated function make_multiplier that takes a float multiplier as
argument and returns a function that multiplies a float by multiplier.
"""


def make_multiplier(multiplier: float) -> callable:
    def multiply(n: float) -> float:
        return n * multiplier

    return multiply
