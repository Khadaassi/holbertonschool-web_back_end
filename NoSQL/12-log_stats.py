#!/usr/bin/env python3
""" Log stats """


from pymongo import MongoClient


def log_stats(mongo_collection):
    """Provides some stats about Nginx logs stored in MongoDB"""

    print(f"{mongo_collection.count_documents({})} logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    for method in methods:
        count = mongo_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    stats_get_status = mongo_collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{stats_get_status} status check")


if __name__ == "__main__":

    client = MongoClient("mongodb://localhost:27017")
    collection = client.logs.nginx

    log_stats(collection)

    client.close()
