import { PlaylistsController } from "./Controllers/PlaylistsController.js";
import SongsController from "./Controllers/SongsController.js";

class App {
  songsController = new SongsController();
  playlistsController = new PlaylistsController()
}

window["app"] = new App();
