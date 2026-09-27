const name = document.querySelector(".name span");

const text = name.textContent;
name.textContent = "";

let i = 0;

function typeName() {
    if (i < text.length) {
        name.textContent += text.charAt(i);
        i++;
        setTimeout(typeName, 180);
    }
}

setTimeout(typeName, 1000);