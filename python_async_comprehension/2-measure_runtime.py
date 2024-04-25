#!/usr/bin/env python3

"""Measure the runtime of async_comprehension"""

from typing import List
import asyncio
import time


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Measure the runtime of async_comprehension"""
    import time
    start = time.time()
    await async_comprehension()
    end = time.time()
    return end - start
