import mysql.connector
from mysql.connector import errorcode
from database import cursor, db
import pandas as pd

DB_NAME = 'test'

TABLES = {}

def insert_csv():
    df = pd.read_csv('medical_examination.csv')
    cursor.execute(f'''CREATE TABLE IF NOT EXISTS medical_examination (
            id  FLOAT NOT NULL,
            age INT NOT NULL,
            gender INT NOT NULL,
            height INT NOT NULL,
            weight FLOAT NOT NULL,
            ap_hi INT NOT NULL,
            ap_lo INT NOT NULL,
            cholesterol INT NOT NULL,
            gluc INT NOT NULL,
            smoke INT NOT NULL,
            alco INT NOT NULL,
            active INT NOT NULL,
            cardio INT NOT NULL
        )''')
    for row in df.itertuples():
        cursor.execute(f"""
        INSERT INTO medical_examination
        VALUES({row.id}, {row.age}, {row.gender}, {row.height}, {row.weight}, {row.ap_hi}, {row.ap_lo}, {row.cholesterol}, {row.gluc}, {row.smoke}, {row.alco}, {row.active}, {row.cardio})
        """)
        db.commit()

# insert_csv()

TABLES['People'] = (
    """CREATE TABLE IF NOT EXISTS people (
        id int(11) NOT NULL AUTO_INCREMENT, 
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        PRIMARY KEY (id))
    """
)
def create_database():
    cursor.execute(f'CREATE DATABASE IF NOT EXISTS {DB_NAME}')
    print(f'Database {DB_NAME} created!')

def create_tables():
    cursor.execute(f"USE {DB_NAME}")
    for table_name in TABLES:
        table_description = TABLES[table_name]
        try:
            print(f"Creating Table {table_name}")
            cursor.execute(table_description)
        except mysql.connector.Error as err:
                print(err.msg)

# create_database()
# create_tables()