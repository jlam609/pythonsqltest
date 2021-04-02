import os
import mysql.connector
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

user = os.environ.get("user")
password = os.environ.get("password")
host = os.environ.get("host")
authplugin = os.environ.get("authplugin")

config = {
    "user": user,
    'password': password,
    'host': host,
    'auth_plugin': authplugin
}
db = mysql.connector.connect(**config)
cursor = db.cursor()
