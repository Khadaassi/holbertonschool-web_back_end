#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names."""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0"""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {i: dataset[i] for i in range(len(dataset))}
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """get_hyper_index

        Args:
            index (int, optional): _description_. Defaults to None.
            page_size (int, optional): _description_. Defaults to 10.

        Returns:
            Dict: return dictionnary
        """
        # Get the total number of items in the indexed dataset
        total_items = len(self.indexed_dataset())

        # Check if the specified index exists in the indexed dataset
        if index is not None and index not in self.indexed_dataset():
            # If the index doesn't exist, find the next available index
            next_index = index + 1
            while next_index < total_items and next_index not in self.indexed_dataset():
                next_index += 1

            # Update the start index to the next available index
            start_index = next_index

        else:
            # Use the provided index or start from the beginning if None
            start_index = index if index is not None else 0

        # Calculate the end index for the current page
        end_index = min(start_index + page_size, total_items)

        # Get the data for the current page
        data = [self.indexed_dataset()[i] for i in range(start_index, end_index)]

        # Calculate the next index to query with
        next_index = end_index if end_index < total_items else None

        # Construct and return the result dictionary
        result = {
            "index": start_index,
            "next_index": next_index,
            "page_size": page_size,
            "data": data,
        }

        return result
