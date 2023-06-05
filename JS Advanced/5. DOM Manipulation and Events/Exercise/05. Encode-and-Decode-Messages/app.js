function encodeAndDecodeMessages() {
    const [encodeTextarea, decodeTeaxaea] = Array.from(document.querySelectorAll("#main div textarea"));
    const [encodeBtn, decodeBtn] = Array.from(document.querySelectorAll("#main div button"));

    encodeBtn.addEventListener("click", () => {
        const message = encodeTextarea.value;
        let encodedMessage = "";
        for (const letter of message) {
            const charcode = letter.charCodeAt();
            encodedMessage += String.fromCharCode(charcode + 1);
        }
        decodeTeaxaea.value = encodedMessage;
        encodeTextarea.value = "";
    });

    decodeBtn.addEventListener("click", () => {
        const message = decodeTeaxaea.value;
        let decodedMessage = "";
        for (const letter of message) {
            const charcode = letter.charCodeAt();
            decodedMessage += String.fromCharCode(charcode - 1);
        }
        decodeTeaxaea.value = decodedMessage;
    });
}