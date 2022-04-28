from fileinput import filename
import json
from pyquery import PyQuery as pq

d = pq(filename = 'family-songbook/index.html')
json_ = []

for h2 in [d("h2").eq(i) for i in range(len(d("h2")))]:
     dump = {}
     dump["id"] = h2.attr.id
     dump["title"] = h2.html()
     n = h2.next("p")
     text = ""
     while len(n) != 0:
         text += "\n" +  n.html()
         n = n.next("p")
     dump["body"] = text
     json_.append(dump)


with open("songs.json", "w") as file:
     json.dump(json_, fp=file)