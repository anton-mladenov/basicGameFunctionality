"use strict";
// Variables
let hero = {
  name: "Droid",
  heroic: true, // this is a boolean value
  inventory: [],
  health: 100, // this variable is a number
  weapon: { type: "testWeapon", damage: 3 }  // damage is an integer
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
let image = document.getElementById("imageDiv");
let bow = document.getElementById("imageBow");
let nunchaku = document.getElementById("imageNunchaku");
let sword = document.getElementById("imageSword");
let enemy = document.getElementById("imageEnemy");
let backpack = document.getElementById("imageBackpack");
let heroStatsDiv = document.getElementById("heroStatsDiv");
let backpackContentDiv = document.getElementById("backpackContentDiv");

image.addEventListener("click", function(event) {
  rest(hero);
  // console.log("Testing like a pro!")
});

bow.addEventListener("click", function(event) {
  pickUpItem(hero, "Mighty Bow", 7);
  // console.log("Testing the BOW like a pro!")
});

nunchaku.addEventListener("click", function(event) {
  pickUpItem(hero, "Ninja Nunchaku", 4);
  // console.log("Testing the NUNCHAKU like a pro!")
});

sword.addEventListener("click", function(event) {
  pickUpItem(hero, "Barbarian Sword", 9);
  // console.log("Testing the SWORD like a pro!")
});

enemy.addEventListener("click", function(event) {
  let health = { health: 8 };
  let weapon = { type: "hammer", damage: 3  }
  let enemy = { health, weapon };
  doBattle(hero, enemy);
  // console.log("Testing the doBattle Function like a pro!");
  // console.log("enemy has these stats: ", enemy);
  // console.log("calling the doBattle function here: ", doBattle(hero, enemy));
});

backpack.addEventListener("click", function(event) {
  let userWeapon = prompt("What weapon would you choose, warrior? (give me a number)");
  let userWeaponInt = parseInt(userWeapon);
  equipWeapon(hero, userWeaponInt);
  // console.log("calling the doBattle function here: ", doBattle(hero, enemy));
});

function displayStats() {
  let heroName = hero.name;
  let heroHealth = hero.health;
  let heroWeaponType = hero.weapon["type"];
  let heroWeaponDamage = hero.weapon["damage"];

  let heroNamePara = document.createElement("p");
  let heroHealthPara = document.createElement("p");
  let heroWeaponTypePara = document.createElement("p");
  let heroWeaponDamagePara = document.createElement("p");

  heroStatsDiv.appendChild(heroNamePara);
  heroStatsDiv.appendChild(heroHealthPara);
  heroStatsDiv.appendChild(heroWeaponTypePara);
  heroStatsDiv.appendChild(heroWeaponDamagePara);

  heroNamePara.innerText = "Hero name: " + heroName;
  heroHealthPara.innerText = "Hero health: " + heroHealth;
  heroWeaponTypePara.innerText = "Hero Weapon: " + heroWeaponType;
  heroWeaponDamagePara.innerText = "Hero Weapon Damage: " + heroWeaponDamage;
};

function backpackContent() {
  let backpackContent = hero.inventory;
  let backpackContentPara = document.createElement("p");
  backpackContentDiv.appendChild(backpackContentPara);
  backpackContentPara.innerText = backpackContent;
};

displayStats();
backpackContent();












//
