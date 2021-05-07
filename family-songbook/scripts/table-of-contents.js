let chaps = document.querySelectorAll("h1, h2");
let toc = document.getElementById('toc');


let cont = "";
for (const i of chaps) {
    if (i.tagName === "H1") {
        console.log(`<a class="chapterref" id="${i.id}ref" href="#${i.id}"> ${i.textContent} </a>`);
        cont += `<a class="chapterref" id="${i.id}ref" href="#${i.id}"> ${i.textContent} </a> <br/>`
    } else {
        console.log(`<a class="songref" id="${i.id}ref" href="#${i.id}"> ${i.textContent} </a> <br/>`);
        cont += `<a class="songref" id="${i.id}ref" href="#${i.id}"> ${i.textContent} </a> <br/>`
    }
}
toc.innerHTML = cont;