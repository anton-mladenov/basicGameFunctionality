"use strict";
// Variables
let hero = {
  name: "",
  heroic: true, // this is a boolean value
  inventory: [],
  health: 0, // this variable is a number
  weapon: {
    type: "",
    damage: 0
  } // damage is an integer
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
  let item = {
    type: itemName,
    damage: itemDamage
  };
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
  console.log(creature.weapon);
  console.log(creature.inventory);
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
    window.alert("You are the winner!");
    return heroicCreature;
  } else {
    window.alert("You are dead, bro!");
  };
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
  let heroName = prompt("What's the name of your hero? (give me a string, bro)");
  // heroNameString = String(heroName);
  hero.name = heroName;
  // console.log("Testing like a pro!")
  updateStats();
});

bow.addEventListener("click", function(event) {
  pickUpItem(hero, "Mighty Bow", 7);
  // console.log("Testing the BOW like a pro!")
  updateStats();
});

nunchaku.addEventListener("click", function(event) {
  pickUpItem(hero, "Ninja Nunchaku", 4);
  // console.log("Testing the NUNCHAKU like a pro!")
  updateStats();
});

sword.addEventListener("click", function(event) {
  pickUpItem(hero, "Barbarian Sword", 9);
  // console.log("Testing the SWORD like a pro!")
  updateStats();
});

enemy.addEventListener("click", function(event) {
  let health = {
    health: 8
  };
  let weapon = {
    type: "hammer",
    damage: 3
  }
  let enemy = {
    health,
    weapon
  };
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
  updateStats();
});

function displayStats() {
  while (heroStatsDiv.firstChild) {
    heroStatsDiv.removeChild(heroStatsDiv.firstChild);
  };

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

function displayInventory() {
  while (backpackContentDiv.firstChild) {
    backpackContentDiv.removeChild(backpackContentDiv.firstChild);
  };
  let backpackMessage = "";
  let backpackContent = [];
  for (var i = 0; i < hero.inventory.length; i++) {
    backpackContent.push(hero.inventory[i].type);
  };
  // console.log(backpackContent);
  backpackMessage = "Here's the content of your backpack:";
  let backpackContentPara = document.createElement("p");
  let backpackMessagePara = document.createElement("p");
  backpackContentDiv.appendChild(backpackMessagePara);
  backpackContentDiv.appendChild(backpackContentPara);
  backpackMessagePara.innerText = backpackMessage;
  backpackContentPara.innerText = backpackContent;
};

function updateStats() {
  displayStats();
  displayInventory();
};

displayStats();
displayInventory();
//
