from selenium import webdriver
from bs4 import BeautifulSoup
import pandas as pd
from webdriver_manager.chrome import ChromeDriverManager
from selectorlib import Extractor
import requests
import json
from time import sleep

e = Extractor.from_yaml_file('selectors.yaml')
# driver = webdriver.Chrome(ChromeDriverManager().install())
def scrape(url):
    headers = {
        'authority':'www.amazon.com',
        'pragma':'no-cache',
        'cache-control':'no-cache',
        'dnt':'1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'none',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-dest': 'document',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
    }
    r = requests.get(url, headers=headers)
    if r.status_code > 500:
        print(r.status_code, 'page was blocked')
    else: 
        return e.extract(r.text)

with open('urls.txt', 'r') as urllist, open('output.jsonl', 'w') as outfile:
    for url in urllist.readlines():
        data = scrape(url)
        print(data)
        if data:
            json.dump(data,outfile)
            outfile.write("\n")