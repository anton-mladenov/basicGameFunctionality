// Variables
let hero = {
  name: "Droid",
  heroic: true, // this is a boolean value
  inventory: [
    {
      // type: "magic wand",
      damage: 40
    }
  ],
  health: 100, // this variable is a number
  weapon: {} //{type: "Summon Bear Spell", damage: 33}  damage is a number data type
};

// Game logic
function rest(creature) {
  creature.health = 10;
  return creature;
};

function pickUpItem(creature, item) {
  creature["inventory"].push(item);
  return creature;
};

function dealDamage(attacker, defender) {
  defender.health -= attacker["weapon"]["damage"];
  return defender;
};

/* equipWeapon is a function that takes a changes the weapon of the creature to one that is in their inventory and removes that weapon from their inventory.

- equipWeapon should have two parameters. creature and index. You can assume that creature has the same structure as your hero object and that index is a number.
- modify the weapon of the creature by assigning it the value of the indexth element of the inventory
- modify the creature's inventory by removing the indexth element from it
- return the creature object from the function */

function equipWeapon(creature, index) {
  creature["weapon"] = creature["inventory"][index];
  creature["inventory"].pop(index);
  return creature;
};

equipWeapon(hero, 0); // keep testing the equipWeapon function...!!!

function doBattle(heroicCreature, creature) {
  if (!heroicCreature.heroic) {
    return null;
  };
  while (heroicCreature.health > 0 && creature.health > 0) {
    dealDamage(heroicCreature, creature);
  };
};

// UI

//
