let chaps = document.querySelectorAll("h1, h2");
let toc = document.getElementById('table-of-contents');
let h1 = document.querySelectorAll("h1");
let h2 = document.querySelectorAll("h2");

// Create an unordered list of links with the chapter titles as text
/* for (let i = 0; i < chaps.length; i++) {
    let link = document.createElement('a');
    link.href = "#" + chaps[i].id;
    link.textContent = chaps[i].textContent;
    let listItem = document.createElement('li');
    listItem.appendChild(link);
    toc.appendChild(listItem);
}
 */

// Create nested lists of links for each level of headings add the lists to the table of contents
let h1List = document.createElement('ul');
for (let i = 0; i < h1.length; i++) {
    let h1Link = document.createElement('a');
    h1Link.href = "#" + h1[i].id;
    h1Link.textContent = h1[i].textContent;
    let h1ListItem = document.createElement('li');
    h1ListItem.appendChild(h1Link);
    let h2List = document.createElement('ul');
    h1ListItem.appendChild(h2List);
    h1List.appendChild(h1ListItem);
    for (let j = 0; j < h2.length; j++) {
        if (chaps[i + j + 1] === h2[j]){
            let h2Link = document.createElement('a');
            h2Link.href = "#" + h2[j].id;
            h2Link.textContent = h2[j].textContent;
            let h2ListItem = document.createElement('li');
            h2ListItem.appendChild(h2Link);
            h2List.appendChild(h2ListItem);

        }
    }
}
toc.appendChild(h1List);




/* let h1 = document.querySelectorAll("h1");
let h2 = document.querySelectorAll("h2");
let h1List = document.createElement('ul');
h1List.className = "h1-list";
for (let i = 0; i < h1.length; i++) {
    h1[i].appendChild(h1List);
    for (let j = 0; j < h2.length; j++) {
        if (h2[j].parentElement.id == h1[i].id) {
            let h2List = document.createElement('ul');
            h2List.className = "h2-list";
            h2[j].appendChild(h2List);
        }
    }
}   */

/* for (let i = 0; i < chaps.length; i++) {
    let link = document.createElement('a');
    link.href = "#" + chaps[i].id;
    link.textContent = chaps[i].textContent;
    toc.appendChild(link);
}
 */

/* let cont = "";
for (const i of chaps) {
    if (i.tagName === "H1") {
        console.log(`<a class="chapterref" id="${i.id}ref" href="#${i.id}"> ${i.textContent} </a>`);
        cont += `<a class="chapterref" id="${i.id}ref" href="#${i.id}"> ${i.textContent} </a> <br/>`
    } else {
        console.log(`<a class="songref" id="${i.id}ref" href="#${i.id}"> ${i.textContent} </a> <br/>`);
        cont += `<a class="songref" id="${i.id}ref" href="#${i.id}"> ${i.textContent} </a> <br/>`
    }
}
toc.innerHTML = cont; */