const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
    output.textContent = `"${event.key}"が押されました！`;
});