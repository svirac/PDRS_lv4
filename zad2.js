/* JUKEBOX

Napraviti simulaciju rada jukeboxa i njegovih funkcionalnosti.
Jukebox ima sljedeće varijable: 
- status je li upaljen ili ugašen (boolean) 
- popis pjesama (lista stringova).
Jukebox ima sljedeće metode:
- paljenje i gašenje jukeboxa
- ubacivanje novih pjesama i brisanje postojećih
- puštanje zadane ili nasumične pjesme
Puštanje pjesmama dodatno provjerava iznos ubačenog novca, pri čemu
puštanje pjesama košta 5 kuna. Ako je ubačeno manje od 5 kuna, metode za
puštanje pjesama vraćaju poruku koliko je još kuna potrebno ubaciti u jukebox.
Ako je ubačeno 5 kuna, metode ispisuju pjesmu koju puštaju u konzolu te
vraćaju True.
*/

class Jukebox {
  constructor(powerState, songList) {
    this.powerState = powerState;
    this.songList = songList;
  }

  turnJukeboxOn() {
    if (this.powerState === false) {
      this.powerState = true;
      return this.powerState;
    }
    return "Jukebox is already turned on !";
  }

  turnJukeboxOff() {
    if (this.powerState === true) {
      this.powerState = false;
      return this.powerState;
    }
    return "Jukebox is already turned off !";
  }

  addSong(song) {
    let songList = this.songList;
    if (typeof song === "string" || song instanceof String) {
      songList.push(song);
      return 200;
    } else {
      throw new Error("Wrong type - argument is not a string");
    }
  }

  removeSong(song) {
    let songList = this.songList;
    if (typeof song === "string" || song instanceof String) {
      if (songList.includes(song)) {
        songList = songList.filter((e) => e !== song);
        return "Pjesma uspješno izbrisana !";
      } else return "Pjesma ne postoji na popisu !";
    } else throw new Error("Wrong type - argument is not a string");
  }

  showSongs() {
    let songList = this.songList;
    if (songList === undefined || songList.length === 0) {
      return "Trenutno nema niti jedna pjesma na popisu !";
    } else {
      console.log(songList);
      return 200;
    }
  }

  playSong(song, cash) {
    let songList = this.songList;
    let cashDiff = this.cashCheck(cash);

    if (typeof song === "string" || song instanceof String) {
      if (songList.includes(song)) {
        if (cashDiff === 0) {
          console.log(" Playing: * " + song + " *  ►  ♪ ♫ ♪ ♫ ♫ ♪  ... ");
          return true;
        } else return "Potrebno je ubaciti još " + cashDiff + "kn !";
      } else return "Pjesma ne postoji na popisu !";
    } else throw new Error("Wrong type - argument is not a string");
  }

  playRandomSong(cash) {
    let songList = this.songList;
    let cashDiff = this.cashCheck(cash);

    if (songList === undefined || songList.length === 0) {
      return "Trenutno nema niti jedna pjesma na popisu !";
    } else {
      let randInt = Math.floor(Math.random() * songList.length);
      let song = songList[randInt];

      if (cashDiff === 0) {
        console.log("Playing: * " + song + " *  ►  ♪ ♫ ♪ ♫ ♫ ♪  ... ");
        return true;
      } else return "Potrebno je ubaciti još " + cashDiff + "kn !";
    }
  }

  cashCheck(cash) {
    return 5 - cash;
  }
}

module.exports = Jukebox;
