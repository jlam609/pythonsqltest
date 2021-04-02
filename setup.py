import mysql.connector
from database import cursor

DB_NAME = 'test'

def create_database():
    cursor.execute(f'CREATE DATABASE IF NOT EXISTS {DB_NAME}')
    print(f'Database {DB_NAME} created!')

create_database()