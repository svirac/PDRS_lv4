const assert = require("chai").assert;

// Import Jukebox class
const Jukebox = require("./../zad2");

let powerStatus = false;
let songList = ["Take on me", "Never gonna give you up", "Bojna čavoglave"];

let testJukebox = new Jukebox(powerStatus, songList);

describe("Jukebox Class unit test: ", function () {
  describe("turnJukeboxOn() metoda:", function () {
    it("turnJukeboxOn() vraća status bool", function () {
      testJukebox.turnJukeboxOff();
      assert.isBoolean(testJukebox.turnJukeboxOn());
    });

    it("turnJukeboxOn() vraća poruku da je jukebox već upaljen", function () {
      testJukebox.turnJukeboxOn();
      assert.equal(
        testJukebox.turnJukeboxOn(),
        "Jukebox is already turned on !"
      );
    });
  });

  describe("turnJukeboxOff() metoda:", function () {
    it("turnJukeboxOff() vraća status bool", function () {
      testJukebox.turnJukeboxOn();
      assert.isBoolean(testJukebox.turnJukeboxOff());
    });
    it("turnJukeboxOff() vraća poruku da je jukebox već ugašen", function () {
      testJukebox.turnJukeboxOff();
      assert.equal(
        testJukebox.turnJukeboxOff(),
        "Jukebox is already turned off !"
      );
    });
  });

  describe("addSong() metoda: ", function () {
    it("addSong() vraća status 200 ako je pjesma uspješno spremljena", function () {
      assert.equal(testJukebox.addSong("Svi pjevaju ja ne čujem"), 200);
    });
    it("addSong() vraća grešku ako pjesma nije tipa String", function () {
      assert.throws(() => testJukebox.addSong(2), Error);
    });
  });

  describe("removeSong() metoda: ", function () {
    it("removeSong() vraća poruku da je pjesma uspješno izbrisana", function () {
      assert.equal(
        testJukebox.removeSong("Take on me"),
        "Pjesma uspješno izbrisana !"
      );
    });
    it("removeSong() vraća poruku da takva pjesma ne postoji na popisu", function () {
      assert.equal(
        testJukebox.removeSong("Miljacka"),
        "Pjesma ne postoji na popisu !"
      );
    });
    it("removeSong() vraća grešku ako pjesma nije tipa String", function () {
      assert.throws(() => testJukebox.removeSong(2), Error);
    });
  });

  describe("showSongs() metoda: ", function () {
    it("showSongs() vraća poruku ako trenutno nema pjesama na popisu", function () {
      let innerTestJukebox = new Jukebox(0, []);
      assert.equal(
        innerTestJukebox.showSongs(),
        "Trenutno nema niti jedna pjesma na popisu !"
      );
    });
    it("showSongs() vraća status 200 ako je uspješno ispisala pjesme s popisa", function () {
      assert.equal(testJukebox.showSongs(), 200);
    });
  });

  describe("playSong() metoda:", function () {
    it("playSong() vraća true ako je pjesma uspješno puštena", function () {
      assert.equal(testJukebox.playSong("Bojna čavoglave", 5), true);
    });
    it("playSong() vraća grešku ako unešeno ime pjesme nije tipa String", function () {
      assert.throws(() => testJukebox.playSong(2, 5), Error);
    });
    it("playSong() vraća poruku da unešena pjesma nije na popisu", function () {
      assert.equal(
        testJukebox.playSong("Podigla me iz pepela", 5),
        "Pjesma ne postoji na popisu !"
      );
    });
    it("playSong() vraća poruku koliko još kuna treba ubaciti za puštanje pjesme", function () {
      assert.equal(
        testJukebox.playSong("Bojna čavoglave", 2),
        "Potrebno je ubaciti još " + 3 + "kn !"
      );
    });
  });

  describe("playRandomSong() metoda:", function () {
    it("playRandomSong() vraća true ako je pjesma uspješno puštena", function () {
      assert.equal(testJukebox.playRandomSong(5), true);
    });
    it("playRandomSong() vraća poruku da trenutno nema pjesama na popisu", function () {
      let innerTestJukebox = new Jukebox(0, []);
      assert.equal(
        innerTestJukebox.playRandomSong(5),
        "Trenutno nema niti jedna pjesma na popisu !"
      );
    });
    it("playRandomSong() vraća poruku koliko još kuna treba ubaciti za puštanje pjesme", function () {
      assert.equal(
        testJukebox.playRandomSong(2),
        "Potrebno je ubaciti još " + 3 + "kn !"
      );
    });
  });
});
