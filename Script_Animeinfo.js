let animeData = [];

function addAnime() {
    const titleInput = document.getElementById('title');
    const genreInput = document.getElementById('genre');
    const dateInput = document.getElementById('Date');

    const title = titleInput.value.trim();
    const genre = genreInput.value.trim();
    const date = dateInput.value.trim();

    if (title === "" || genre === "" || date === "") {
        alert("Please insert title, genre, and date.");
        return;
    }

    animeData.push({ id: Date.now(), title, genre, date });
    displayAnime();
    titleInput.value = "";
    genreInput.value = "";
    dateInput.value = "";
}

function displayAnime() {
    const tableBody = document.getElementById('animeTableBody');
    tableBody.innerHTML = "";

    for (const anime of animeData) {
        const row = tableBody.insertRow();
        row.insertCell(0).innerHTML = anime.title;
        row.insertCell(1).innerHTML = anime.genre;
        row.insertCell(2).innerHTML = anime.date;
        row.insertCell(3).innerHTML = `<button onclick="viewAnime(${anime.id})">Read</button> | <button onclick="editAnime(${anime.id})">Edit</button> | <button onclick="deleteAnime(${anime.id})">Delete</button>`;
    }
}

function viewAnime(id) {
    const anime = animeData.find(a => a.id === id);
    if (anime) {
        
        alert(`Title: ${anime.title}\nGenre: ${anime.genre}\nDate: ${anime.date}`);
    }
}

function editAnime(id) {
    const anime = animeData.find(a => a.id === id);
    if (anime) {
        const newTitle = prompt("Enter new title:", anime.title);
        const newGenre = prompt("Enter new genre:", anime.genre);
        const newDate = prompt("Enter new date:", anime.date);

        if (newTitle !== null && newGenre !== null && newDate !== null) {
            anime.title = newTitle.trim();
            anime.genre = newGenre.trim();
            anime.date = newDate.trim();
            displayAnime();
        }
    }
}

function deleteAnime(id) {
    animeData = animeData.filter(a => a.id !== id);
    displayAnime();
}

function submitForm() {
    event.preventDefault();
}

function clearForm() {
    document.getElementById("animeForm").reset();
    animeData = [];
    displayAnime();
}
