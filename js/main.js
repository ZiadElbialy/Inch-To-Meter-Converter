const input = document.querySelector("#inches");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result span");

btn.onclick = function () {
    if (input.value != "") {
        const fResult = parseInt(input.value) / 39.37;
        result.textContent = `${input.value} Inches = ${fResult} Meters`;
    }
};
