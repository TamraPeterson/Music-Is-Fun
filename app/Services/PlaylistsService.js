import { ProxyState } from "../AppState.js";
import Song from "../Models/Song.js";
import { sandBoxApi } from "./AxiosService.js";

class PlaylistService {
  selectPlaylist(id) {
    let playlist = ProxyState.playlist.find(p => p.id == id)
    ProxyState.activeSong = playlist
  }

  async deleteFromPlaylist() {
    let id = ProxyState.activeSong.id
    const res = await sandBoxApi.delete(id)
    console.log('deleting from playlist', res.data)
    ProxyState.activeSong = {}
    ProxyState.playlist = ProxyState.playlist.filter(s => s.id != id)
  }

  async getPlaylist() {
    const res = await sandBoxApi.get()
    console.log(res.data);
    ProxyState.playlist = res.data.map(s => new Song(s))
  }

  async addToPlaylist() {
    let song = ProxyState.activeSong
    const res = await sandBoxApi.post('', song)
    console.log('add to playlist', res.data);
    ProxyState.playlist = [...ProxyState.playlist, new Song(res.data)]
    console.log(ProxyState.playlist)
  }
}

export const playlistService = new PlaylistService()