# -*- coding: utf-8 -*-
"""
Created on Mon Nov  9 12:56:30 2020

@author: janih
"""

import re

f = open('family-songbook/songbook.html')
contents_dict = {}
label_dict = {'1':'chapterref','2':'songref','3':''}

for line in f:
    a = re.match('\s*<\s*h([1|2])\s*id="(.*?)">',line)
    if a != None:
        b = re.findall('>\s*([^<]+?)\s*<', line)
        print('<a class = "{0}" href = #{1}>{2}</a><br>'.format(
            label_dict[a.group(1)],
            a.group(2),
            b[0]))