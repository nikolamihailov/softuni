function attachEvents() {
    const messages = document.getElementById("messages");
    const [author, message] = Array.from(document.querySelectorAll("#controls input[type=text]"));
    const [sendBtn, refreshBtn] = Array.from(document.querySelectorAll("#controls input[type=button]"));

    const POST_URL = "http://localhost:3030/jsonstore/messenger";

    sendBtn.addEventListener("click", postMessage);
    refreshBtn.addEventListener("click", showMessages);

    function postMessage() {
        const messageData = {
            author: author.value,
            content: message.value
        };
        fetch(POST_URL, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(messageData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    function showMessages() {
        messages.innerHTML = "";
        fetch(POST_URL)
            .then(res => res.json())
            .then(data => {
                messages.value = Object.values(data).map(mes => `${mes.author}: ${mes.content}`).join("\n");
            })
            .catch(err => console.log(err));
    }
}
attachEvents();

