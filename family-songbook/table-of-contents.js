templateContent = document.querySelector('template').content;
article = document.querySelector('article').cloneNode(true);
article.attachShadow({  mode: 'closed' }).appendChild(templateContent.cloneNode(true));
document.querySelector('#toc').appendChild(article);
