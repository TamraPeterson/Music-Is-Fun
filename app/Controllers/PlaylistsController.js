import { ProxyState } from "../AppState.js";
import { sandBoxApi } from "../Services/AxiosService.js";
import { playlistService } from "../Services/PlaylistsService.js";


function _drawPlaylist() {
  let template = ''
  ProxyState.playlist.forEach(p => template += p.playlistTemplate)
  document.getElementById('playlist').innerHTML = template
}

async function _getPlaylist() {
  try {
    await playlistService.getPlaylist()
  } catch (error) {
    console.error(error)
  }
}



export class PlaylistsController {
  constructor() {
    _getPlaylist()
    ProxyState.on('playlist', _drawPlaylist)
  }

  async addToPlaylist() {
    try {

      await playlistService.addToPlaylist()
    } catch (error) {
      console.error(error)
    }

  }

  async selectPlaylist(id) {
    try {
      playlistService.selectPlaylist(id)
    } catch (error) {
      console.error(error)
    }
  }

  async deleteFromPlaylist() {

    try {
      await playlistService.deleteFromPlaylist()
    } catch (error) {
      console.error(error)
    }
  }
}