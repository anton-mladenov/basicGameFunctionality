"use strict";
// Variables
let hero = {
  name: "Droid",
  heroic: true, // this is a boolean value
  inventory: [],
  health: 100, // this variable is a number
  weapon: {type: "testWeapon", damage: 1}  // damage is an integer
};

// console.log("default hero - ", hero);

// Game logic
function rest(creature) {
  creature.health = 10;
  return creature;
};

// rest(hero);
// console.log("hero status after rest func- ", hero);

function pickUpItem(creature, itemName, itemDamage) {
  let item = {type: itemName, damage: itemDamage};
  creature["inventory"].push(item);
  return creature;
};

// pickUpItem(hero, "AK-47", 400);
// console.log("hero status after first weapon - ", hero);
// pickUpItem(hero, "Master Blaster", 250);
// console.log("hero status after second weapon - ", hero);

function dealDamage(attacker, defender) {
  defender.health -= attacker["weapon"]["damage"];
  return defender;
};

function equipWeapon(creature, index) {
    creature.weapon = {};
    creature.weapon = creature.inventory[index];
    creature["inventory"].pop(index);
    return creature;
};

// equipWeapon(hero, 0);
// console.log("hero status after equipWeapon func - ", hero);
//
function doBattle(heroicCreature, creature) {
  if (!heroicCreature.heroic) {
    return null;
  };
  while (heroicCreature.health > 0 && creature.health > 0) {
    dealDamage(heroicCreature, creature);
    if (creature.health > 0) {
      dealDamage(creature, heroicCreature);
    };
  };
  if (heroicCreature.health > 0) {
    return heroicCreature;
  } else {
    window.alert("You are dead, bro!");
  }
};

// UI

























//
