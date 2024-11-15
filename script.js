function displayImage(event) {
    const imageDisplay = document.getElementById("imageDisplay");
    imageDisplay.innerHTML = ''; // Очистка перед отображением нового изображения

    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.style.width = "100%";
            img.style.height = "100%";
            imageDisplay.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}

function recognizeAnimal() {
    const resultDisplay = document.getElementById("result");
    resultDisplay.innerText = "Определяем вид животного...";
    setTimeout(() => {
        resultDisplay.innerText = "";
    }, 2000);
}