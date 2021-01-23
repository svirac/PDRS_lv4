const assert = require("chai").assert;

const CoffeMachine = require("./../zad1");

let coffeAmount = 0;
let waterAmount = 0;
let powerStatus = false;

let testApp = new CoffeMachine(coffeAmount, waterAmount, powerStatus);

describe("Coffe Machine Class unit test: ", function () {
  it("Konstruktor vraća grešku ako parametri nisu zadanog tipa", function () {
    let coffeAmount = true;
    let waterAmount = 0;
    let powerStatus = 10;
    assert.throws(() => {
      let innerTestApp = new CoffeMachine(
        coffeAmount,
        waterAmount,
        powerStatus
      );
    }, Error);
  });

  describe("turnMachineOn() method:", function () {
    it("turnMachineOn() metoda vraća status bool", function () {
      testApp.turnMachineOff();
      assert.isBoolean(testApp.turnMachineOn());
    });

    it("turnMachineOn() metoda vraća poruku da je stroj već upaljen", function () {
      testApp.turnMachineOn();
      assert.equal(testApp.turnMachineOn(), "Machine is already turned on !");
    });
  });

  describe("turnMachineOff() method:", function () {
    it("turnMachineOff() metoda vraća status bool", function () {
      testApp.turnMachineOn();
      assert.isBoolean(testApp.turnMachineOff());
    });

    it("turnMachineOn() metoda vraća poruku da je stroj već ugašen", function () {
      testApp.turnMachineOff();
      assert.equal(testApp.turnMachineOff(), "Machine is already turned off !");
    });
  });

  describe("refill() method:", function () {
    it("refill() metoda vraća status 200 ako je uspješno odrađeno", function () {
      assert.equal(testApp.refill(10, 10), 200);
    });
    it("refill() metoda vraća grešku ako parametri nisu zadanog tipa", function () {
      assert.throws(() => {
        testApp.refill(true, 10);
      }, Error);
    });
  });

  describe("makeCoffe() method:", function () {
    it("makeCoffe() metoda vraća status 200 ako je uspješno odrađeno", function () {
      let coffeAmount = 50;
      let waterAmount = 50;
      let powerStatus = true;
      let innerTestApp = new CoffeMachine(
        coffeAmount,
        waterAmount,
        powerStatus
      );
      assert.equal(innerTestApp.makeCoffe(), 200);
    });
    it("makeCoffe() metoda vraća poruku da nema više sastojaka", function () {
      let coffeAmount = 0;
      let waterAmount = 0;
      let powerStatus = true;
      let innerTestApp = new CoffeMachine(
        coffeAmount,
        waterAmount,
        powerStatus
      );
      assert.equal(innerTestApp.makeCoffe(), "Please refill the machine !");
    });
  });
});
