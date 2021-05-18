# -*- coding: utf-8 -*-
"""
Created on Sat May  8 20:09:41 2021

@author: Emmett
"""

from pyquery import PyQuery as pq

d = pq(filename="../index.html")
# toc = ""
n = pq("<html></html>")
def link(p):
    return pq(f'<a href="#{p.attr("id")}">{p.text()}</a>')

for i in d("h1, h2").items():
    if i.is_("h1"):
        current = f"{i.attr('id')}cont"
        n.append(pq(f"<button type=\"button\">{i.text()}</button").addClass("collapsible"))
        n.append(pq(f"<div id={current}></div>").addClass("content"))
        n(f"#{current}").append(link(i).addClass("chapterref"))
    else:
        n(f"#{current}").append(link(i).addClass("songref"))
print(n)