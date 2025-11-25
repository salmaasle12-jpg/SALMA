// document.addEventListener




const form = document.getElementById('songForm');
const list = document.getElementById('songList');
const submitBtn = document.getElementById('submitBtn');
// if not exits in localstorage get empty array else 
// //get json text and convert it to object json
// Load songs from localStorage
let songs = JSON.parse(localStorage.getItem('playlist')) || [];

//User click the Add Button
form.addEventListener('submit', (e) => {
  // Dont submit the for to the server yey let me handle it here
    e.preventDefault();
// Read Forms Data
    const title = document.getElementById('title').value;
    const url = document.getElementById('url').value;
// create JSON Obj Based on URL title
    const song = {
        id: Date.now(),
        title: title,
        url: url,
        dateAdded: Date.now()
    };

    songs.push(song);

    saveAndRender(); 

    form.reset();
});

// save to Local storage and render UI Table
function saveAndRender() {
    localStorage.setItem('playlist', JSON.stringify(songs));
    renderSongs(songs);
}

// ========================
// RENDER SONGS
// ========================
function renderSongs(songArray) {
    list.innerHTML = '';

    songArray.forEach(song => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${song.title}</td>
            <td><a href="${song.url}" target="_blank" class="text-info">Watch</a></td>
            <td class="text-end">
                <button class="btn btn-sm btn-warning me-2" onclick="editSong(${song.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteSong(${song.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;

        list.appendChild(row);
    });
}

renderSongs(songs);



function deleteSong(id) {
    if(confirm('Are you sure?')) {
        // Filter out the song with the matching ID
        songs = songs.filter(song => song.id !== id);
        saveAndRender();
    }
}

