import urllib.request
from bs4 import BeautifulSoup
import datetime
import random
import re

def getText(url):
    """
        This function will extract all the text from the link given by the user
    Args:
        url: a string that contains the url we are about to scrape
    Return:
        text: an array that contains strings for each word on the page.
    """

    req = urllib.request.Request(url, headers = {'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read()
    bsObj = BeautifulSoup(html, 'lxml')
    text = []
    words = bsObj.findAll("h1")
    words += bsObj.findAll("h2")
    words += bsObj.findAll("h3")
    words += bsObj.findAll("h4")
    words += bsObj.findAll("h5")
    words += bsObj.findAll("h6")
    words += bsObj.findAll("p")

    for word in words:
        text += word.text.split(" ")
        text = list(filter(lambda c: c.isalpha(), text))


    return text

def getTitle(url):
    req = urllib.request.Request(url, headers = {'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read()
    bsObj = BeautifulSoup(html, 'lxml')
    title = bsObj.find('title').text()
    return title
