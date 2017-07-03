
/** tpl_monsters indexes **/
db.getCollection("tpl_monsters").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** tpl_monsters records **/
db.getCollection("tpl_monsters").insert({
  "Accuracy": NumberInt(100),
  "Attack": NumberInt(500),
  "CriticalChance": NumberInt(100),
  "CriticalDamage": NumberInt(100),
  "Defense": NumberInt(10),
  "Evasion": NumberInt(100),
  "Hp": NumberInt(300),
  "IsEnemy": false,
  "Level": NumberInt(5),
  "MagicAttack": NumberInt(500),
  "MagicDefense": NumberInt(10),
  "Name": "Dog",
  "Skills": [
    {
      "Accuracy": NumberInt(100),
      "BaseAttribute": "Special",
      "BaseDamage": NumberInt(300),
      "Type": "Canon"
    }
  ],
  "Speed": NumberInt(80),
  "SpriteName": "0254",
  "Type": "Light",
  "__v": NumberInt(0),
  "_id": ObjectId("5907b846f30be55291f9209f")
});
db.getCollection("tpl_monsters").insert({
  "Accuracy": NumberInt(100),
  "Attack": NumberInt(76),
  "CriticalChance": NumberInt(25),
  "CriticalDamage": NumberInt(200),
  "Defense": NumberInt(63),
  "Evasion": NumberInt(15),
  "Hp": NumberInt(57),
  "IsEnemy": false,
  "Level": NumberInt(5),
  "MagicAttack": NumberInt(88),
  "MagicDefense": NumberInt(73),
  "Name": "Fire Kitty (5)",
  "Skills": [
    {
      "Accuracy": NumberInt(100),
      "BaseAttribute": "attack",
      "BaseDamage": NumberInt(50),
      "Type": "base"
    },
    {
      "Accuracy": NumberInt(80),
      "BaseAttribute": "magicAttack",
      "BaseDamage": NumberInt(80),
      "Type": "special"
    }
  ],
  "Speed": NumberInt(95),
  "SpriteName": "0305",
  "Type": "Fire",
  "__v": NumberLong(0),
  "_id": ObjectId("58d74faade8ee79c11000000")
});
db.getCollection("tpl_monsters").insert({
  "Accuracy": NumberInt(100),
  "Attack": NumberInt(72),
  "CriticalChance": NumberInt(20),
  "CriticalDamage": NumberInt(200),
  "Defense": NumberInt(72),
  "Evasion": NumberInt(20),
  "Hp": NumberInt(66),
  "IsEnemy": false,
  "Level": NumberInt(5),
  "MagicAttack": NumberInt(95),
  "MagicDefense": NumberInt(95),
  "Name": "Grass Kitty (5)",
  "Skills": [
    {
      "Accuracy": NumberInt(100),
      "BaseAttribute": "attack",
      "BaseDamage": NumberInt(50),
      "Type": "base"
    },
    {
      "Accuracy": NumberInt(100),
      "BaseAttribute": "magicAttack",
      "BaseDamage": NumberInt(50),
      "Type": "special"
    }
  ],
  "Speed": NumberInt(66),
  "SpriteName": "0308",
  "Type": "Grass",
  "__v": NumberLong(0),
  "_id": ObjectId("58d74ff7de8ee79d20000000")
});
db.getCollection("tpl_monsters").insert({
  "Accuracy": NumberInt(100),
  "Attack": NumberInt(49),
  "CriticalChance": NumberInt(15),
  "CriticalDamage": NumberInt(200),
  "Defense": NumberInt(49),
  "Evasion": NumberInt(20),
  "Hp": NumberInt(45),
  "IsEnemy": true,
  "Level": NumberInt(1),
  "MagicAttack": NumberInt(65),
  "MagicDefense": NumberInt(65),
  "Name": "Grass Kitty (1)",
  "Skills": [
    {
      "Accuracy": NumberInt(100),
      "BaseAttribute": "attack",
      "BaseDamage": NumberInt(40),
      "Type": "base"
    },
    {
      "Accuracy": NumberInt(100),
      "BaseAttribute": "magicAttack",
      "BaseDamage": NumberInt(50),
      "Type": "special"
    }
  ],
  "Speed": NumberInt(45),
  "SpriteName": "0308",
  "Type": "grass",
  "__v": NumberLong(0),
  "_id": ObjectId("58d75025de8ee79c11000001")
});
db.getCollection("tpl_monsters").insert({
  "Accuracy": NumberInt(100),
  "Attack": NumberInt(52),
  "CriticalChance": NumberInt(10),
  "CriticalDamage": NumberInt(200),
  "Defense": NumberInt(43),
  "Evasion": NumberInt(10),
  "Hp": NumberInt(39),
  "IsEnemy": true,
  "Level": NumberInt(1),
  "MagicAttack": NumberInt(60),
  "MagicDefense": NumberInt(50),
  "Name": "Fire Kitty (1)",
  "Skills": [
    {
      "Type": "special",
      "BaseDamage": NumberInt(40),
      "BaseAttribute": "magicAttack",
      "Accuracy": NumberInt(100)
    },
    {
      "Type": "special",
      "BaseDamage": NumberInt(60),
      "BaseAttribute": "magicAttack",
      "Accuracy": NumberInt(100)
    }
  ],
  "Speed": NumberInt(65),
  "SpriteName": "0305",
  "Type": "Fire",
  "__v": NumberLong(0),
  "_id": ObjectId("58d7505cde8ee79d20000001")
});
db.getCollection("tpl_monsters").insert({
  "Accuracy": NumberInt(100),
  "Attack": NumberInt(70),
  "CriticalChance": NumberInt(20),
  "CriticalDamage": NumberInt(200),
  "Defense": NumberInt(95),
  "Evasion": NumberInt(15),
  "Hp": NumberInt(64),
  "IsEnemy": false,
  "Level": NumberInt(5),
  "MagicAttack": NumberInt(73),
  "MagicDefense": NumberInt(94),
  "Name": "Aqua Kitty (5)",
  "Skills": [
    {
      "Accuracy": NumberInt(100),
      "BaseAttribute": "attack",
      "BaseDamage": NumberInt(40),
      "Type": "base"
    },
    {
      "Type": "special",
      "BaseDamage": NumberInt(70),
      "BaseAttribute": "magicAttack",
      "Accuracy": NumberInt(90)
    }
  ],
  "Speed": NumberInt(63),
  "SpriteName": "0302",
  "Type": "water",
  "__v": NumberLong(0),
  "_id": ObjectId("58d75092de8ee79c11000002")
});
db.getCollection("tpl_monsters").insert({
  "Accuracy": NumberInt(100),
  "Attack": NumberInt(48),
  "CriticalChance": NumberInt(15),
  "CriticalDamage": NumberInt(200),
  "Defense": NumberInt(65),
  "Evasion": NumberInt(5),
  "Hp": NumberInt(44),
  "IsEnemy": true,
  "Level": NumberInt(1),
  "MagicAttack": NumberInt(50),
  "MagicDefense": NumberInt(64),
  "Name": "Aqua Kitty (1)",
  "Skills": [
    {
      "Type": "base",
      "BaseDamage": NumberInt(40),
      "BaseAttribute": "attack",
      "Accuracy": NumberInt(100)
    },
    {
      "Type": "special",
      "BaseDamage": NumberInt(60),
      "BaseAttribute": "magickAttack",
      "Accuracy": NumberInt(90)
    }
  ],
  "Speed": NumberInt(43),
  "SpriteName": "0302",
  "Type": "water",
  "__v": NumberLong(0),
  "_id": ObjectId("58d750c1de8ee79d20000002")
});
db.getCollection("tpl_monsters").insert({
  "SpriteName": "0256",
  "Name": "Devil Kitty (5)",
  "Level": NumberInt(5),
  "Hp": NumberInt(100),
  "Attack": NumberInt(60),
  "Defense": NumberInt(60),
  "MagicAttack": NumberInt(60),
  "MagicDefense": NumberInt(60),
  "Speed": NumberInt(60),
  "Type": "Dark",
  "CriticalChance": NumberInt(100),
  "CriticalDamage": NumberInt(100),
  "Evasion": NumberInt(100),
  "Accuracy": NumberInt(100),
  "IsEnemy": true,
  "_id": ObjectId("5907b4c6f30be55291f92090"),
  "Skills": [
    {
      "Accuracy": NumberInt(100),
      "BaseAttribute": "Special",
      "BaseDamage": NumberInt(50),
      "Type": "Darkness"
    }
  ],
  "__v": NumberInt(0)
});
db.getCollection("tpl_monsters").insert({
  "SpriteName": "0311",
  "Name": "Light Kitty (5)",
  "Level": NumberInt(5),
  "Hp": NumberInt(200),
  "Attack": NumberInt(90),
  "Defense": NumberInt(40),
  "MagicAttack": NumberInt(90),
  "MagicDefense": NumberInt(40),
  "Speed": NumberInt(100),
  "Type": "Light",
  "CriticalChance": NumberInt(100),
  "CriticalDamage": NumberInt(100),
  "Evasion": NumberInt(100),
  "Accuracy": NumberInt(100),
  "_id": ObjectId("5907b56ff30be55291f92091"),
  "Skills": [
    {
      "Accuracy": NumberInt(100),
      "BaseAttribute": "Special",
      "BaseDamage": NumberInt(80),
      "Type": "Light"
    }
  ],
  "__v": NumberInt(0)
});
db.getCollection("tpl_monsters").insert({
  "Accuracy": NumberInt(100),
  "Attack": NumberInt(120),
  "CriticalChance": NumberInt(100),
  "CriticalDamage": NumberInt(100),
  "Defense": NumberInt(80),
  "Evasion": NumberInt(100),
  "Hp": NumberInt(300),
  "IsEnemy": false,
  "Level": NumberInt(5),
  "MagicAttack": NumberInt(120),
  "MagicDefense": NumberInt(80),
  "Name": "Light Kitty III (5)",
  "Skills": [
    {
      "Accuracy": NumberInt(100),
      "BaseAttribute": "Special",
      "BaseDamage": NumberInt(120),
      "Type": "Beam"
    }
  ],
  "Speed": NumberInt(110),
  "SpriteName": "0313",
  "Type": "Light",
  "__v": NumberInt(0),
  "_id": ObjectId("5907b737f30be55291f9209a")
});
