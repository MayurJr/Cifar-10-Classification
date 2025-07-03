const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("file-input");
const previewContainer = document.getElementById("preview-container");
const form = document.getElementById("upload-form");
const progressBar = document.getElementById("upload-progress");

dropZone.addEventListener("click", () => fileInput.click());

dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
});

dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
});

dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");
    fileInput.files = e.dataTransfer.files;
    previewImages();
});

fileInput.addEventListener("change", previewImages);

function previewImages() {
    previewContainer.innerHTML = "";
    const files = fileInput.files;
    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.classList.add("image-preview");
            previewContainer.appendChild(img);
        };
        reader.readAsDataURL(files[i]);
    }
}

form.addEventListener("submit", (e) => {
    const files = fileInput.files;
    if (files.length === 0) {
        e.preventDefault();
        alert("Please select at least one image.");
        return;
    }

    progressBar.style.width = "0%";
    progressBar.textContent = "0%";

    const interval = setInterval(() => {
        let width = parseInt(progressBar.style.width);
        if (width < 90) {
            width += 10;
            progressBar.style.width = width + "%";
            progressBar.textContent = width + "%";
        } else {
            clearInterval(interval);
        }
    }, 100);
});