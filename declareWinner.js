function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  var result,
      winner;

  if (fighter1.name == firstAttacker) {
    firstAttacker = fighter1;
    battlev1();
  } else if (fighter2.name == firstAttacker) {
    firstAttacker = fighter2;
    battlev2();
  } else {
    console.log(`${firstAttacker} isn't fighting right now!`)
  }

  function battlev1() {
    while (firstAttacker.health > 0 && fighter2.health > 0) {
      fightv1();
    }
  }

  function battlev2() {
    while (fighter1.health > 0 && firstAttacker.health > 0) {
      fightv2();
    }
  }

  function fightv1() {
    fighter2.health -= firstAttacker.damagePerAttack;
    result = `${firstAttacker.name} attacks ${fighter2.name}; ${fighter2.name} now has ${fighter2.health} health.`;
    console.log(result);
      if(fighter2.health <= 0) {
        result = `${firstAttacker.name} attacks ${fighter2.name}; ${fighter2.name} now has ${fighter2.health} health and is dead. ${firstAttacker.name} wins`;
        winner = firstAttacker.name;
        console.log(result);
        return winner;
      } else if (firstAttacker.health <= 0) {
        result = `${fighter2.name} attacks ${firstAttacker.name}; ${firstAttacker.name} now has ${firstAttacker.health} health and is dead. ${fighter2.name} wins`;
        winner = fighter2.name;
        console.log(result);
        return winner;
      }
    firstAttacker.health -= fighter2.damagePerAttack;
    result = `${fighter2.name} attacks ${firstAttacker.name}; ${firstAttacker.name} now has ${firstAttacker.health} health.`;
    console.log(result);
      if(firstAttacker.health <= 0) {
        result = `${fighter2.name} attacks ${firstAttacker.name}; ${firstAttacker.name} now has ${firstAttacker.health} health and is dead. ${fighter2.name} wins`;
        winner = fighter2.name;
        console.log(result);
        return winner;
      } else if (fighter2.health <= 0) {
        result = `${firstAttacker.name} attacks ${fighter2.name}; ${fighter2.name} now has ${fighter2.health} health and is dead. ${firstAttacker.name} wins`;
        winner = firstAttacker.name;
        console.log(result);
        return winner;
      }
  }

  function fightv2() {
    fighter1.health -= firstAttacker.damagePerAttack;
    result = `${firstAttacker.name} attacks ${fighter1.name}; ${fighter1.name} now has ${fighter1.health} health.`;
    console.log(result);
      if(fighter1.health <= 0) {
        result = `${firstAttacker.name} attacks ${fighter1.name}; ${fighter1.name} now has ${fighter1.health} health and is dead. ${firstAttacker.name} wins`;
        winner = firstAttacker.name;
        console.log(result);
        return winner;
      } else if (firstAttacker.health <= 0) {
        result = `${fighter1.name} attacks ${firstAttacker.name}; ${firstAttacker.name} now has ${firstAttacker.health} health and is dead. ${fighter1.name} wins`;
        winner = fighter1.name;
        console.log(result);
        return winner;
      }
    firstAttacker.health -= fighter1.damagePerAttack;
    result = `${fighter1.name} attacks ${firstAttacker.name}; ${firstAttacker.name} now has ${firstAttacker.health} health.`;
    console.log(result);
      if(fighter1.health <= 0) {
        result = `${firstAttacker.name} attacks ${fighter1.name}; ${fighter1.name} now has ${fighter1.health} health and is dead. ${firstAttacker.name} wins`;
        winner = firstAttacker.name;
        console.log(result);
        return winner;
      } else if (firstAttacker.health <= 0) {
        result = `${fighter1.name} attacks ${firstAttacker.name}; ${firstAttacker.name} now has ${firstAttacker.health} health and is dead. ${fighter1.name} wins`;
        winner = fighter1.name;
        console.log(result);
        return winner;
      }
    }
    return winner
}

declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry");
