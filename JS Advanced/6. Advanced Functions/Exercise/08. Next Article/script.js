function getArticleGenerator(articles) {
    const content = document.getElementById("content");
    function next() {
        if (articles.length > 0) {
            const article = document.createElement("article");
            article.textContent = articles.shift();
            content.appendChild(article);
        }
    }
    return next;
}
