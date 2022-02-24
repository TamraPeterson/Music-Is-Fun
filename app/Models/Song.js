export default class Song {
  constructor(data) {
    this.user = data.user || null
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this.id = data.trackId?.toString() || data.id;
  }

  get Template() {
    return `
          <img src="${this.albumArt}" alt="album-art">
          <h5>${this.title}</h5>
          <h6>${this.artist}</h6>
          <div>
            ${this.Button}
          </div>
     `
  }

  get listTemplate() {
    return `
    <li class="selectable" onclick="app.songsController.selectSong('${this.id}')">${this.title} | ${this.artist} </li>
        `;
  }

  get playlistTemplate() {
    return `
    <div class="bg-white shadow p-2 m-2">
    <h6>${this.title} | ${this.artist}</h6>
    <button class="btn btn-info" onclick="app.playlistsController.selectPlaylist('${this.id}')">Select</button>
  </div>
        `;
  }

  get Button() {
    let button = ""
    if (this.user) {
      button = `<button class="btn btn-danger" onclick="app.playlistsController.deleteFromPlaylist()">Delete</button>`
    } else {
      button = `<button class="btn btn-primary" onclick="app.playlistsController.addToPlaylist()">Add Song</button>`
    }
    return button
  }
}
