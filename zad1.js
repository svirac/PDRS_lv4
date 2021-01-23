class CoffeMachine {
  constructor(coffeAmount, waterAmmount, powerStatus) {
    if (
      Number.isInteger(coffeAmount) &&
      Number.isInteger(waterAmmount) &&
      typeof powerStatus === "boolean"
    ) {
      this.coffeAmount = coffeAmount;
      this.waterAmmount = waterAmmount;
      this.powerStatus = powerStatus;
    } else {
      throw new Error("Illegal type");
    }
  }

  turnMachineOn() {
    if (this.powerStatus === false) {
      this.powerStatus = true;
      return this.powerStatus;
    }
    //console.log("Machine is already turned on !");
    return "Machine is already turned on !";
  }

  turnMachineOff() {
    if (this.powerStatus === true) {
      this.powerStatus = false;
      return this.powerStatus;
    }
    //console.log("Machine is already turned off !");
    return "Machine is already turned off !";
  }

  refill(coffe, water) {
    if (Number.isInteger(coffe) && Number.isInteger(water)) {
      this.coffeAmount = coffe;
      this.waterAmmount = water;
      //console.log("Machine refilled !");
      return 200;
    }
    throw new Error("Illegal type");
  }

  makeCoffe() {
    if (this.coffeAmount >= 5 && this.waterAmmount >= 15) {
      this.coffeAmount -= 5;
      this.waterAmmount -= 15;
      return 200;
    }
    return "Please refill the machine !";
  }
}

module.exports = CoffeMachine;
