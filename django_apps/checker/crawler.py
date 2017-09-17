import urllib.request
from bs4 import BeautifulSoup
import datetime
import random
import re

buzzwords = [['better','world'], ['natural', 'language'],['algorithim']
,['revolutionary'],['inovative'],['technologies'],['empowering'],['inspiration'],['analytics']
,['digital' ,'solutions'],['technological', 'innovation'],['progress'], ['hacker'], ['value'], ['myths'],['problem'],['solved']
,['best'],[]]


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
        word = word.text.lower()
        text += word.split(" ")
        text = list(filter(lambda c: c.isalpha(), text))

    return text

def countWords(text):
    totalWords = len(text)
    counter = 0
    for word in text:
        for word2 in buzzwords:
            if word in word2:
                counter += 1
            else:
                continue
    percentage = (counter/totalWords) * 2500
    return percentage

def tuples(lst, n):
    for i in range(0, len(lst), n):
        val = lst[i:i+n]
        if len(val) == n:
            yield tuple(val)


def getTitle(url):
    req = urllib.request.Request(url, headers = {'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read()
    bsObj = BeautifulSoup(html, 'lxml')
    title = bsObj.find('title').text()
    return title
