function MovesService($http) {

var service = {}
  service.moves = moves
  return service
}

const moves = {
  "1": {
    "name": "Thunder Shock",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "2": {
    "name": "Quick Attack",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "3": {
    "name": "Scratch",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "4": {
    "name": "Ember",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "5": {
    "name": "Vine Whip",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "6": {
    "name": "Tackle",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "7": {
    "name": "Razor Leaf",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "8": {
    "name": "Take Down",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "9": {
    "name": "Water Gun",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "10": {
    "name": "Bite",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "11": {
    "name": "Pound",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "12": {
    "name": "Double Slap",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "13": {
    "name": "Wrap",
    "type": "Normal",
    "damage": 60,
    "duration": 2900,
    "energy": 33,
    "dps": 20.69
  },
  "14": {
    "name": "Hyper Beam",
    "type": "Normal",
    "damage": 150,
    "duration": 3800,
    "energy": 100,
    "dps": 39.47
  },
  "15": {
    "name": "Lick",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "16": {
    "name": "Dark Pulse",
    "type": "Dark",
    "damage": 80,
    "duration": 3000,
    "energy": 50,
    "dps": 26.67
  },
  "17": {
    "name": "Smog",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "18": {
    "name": "Sludge",
    "type": "Poison",
    "damage": 50,
    "duration": 2100,
    "energy": 33,
    "dps": 23.81
  },
  "19": {
    "name": "Metal Claw",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "20": {
    "name": "Vice Grip",
    "type": "Normal",
    "damage": 35,
    "duration": 1900,
    "energy": 33,
    "dps": 18.42
  },
  "21": {
    "name": "Flame Wheel",
    "type": "Fire",
    "damage": 60,
    "duration": 2700,
    "energy": 50,
    "dps": 22.22
  },
  "22": {
    "name": "Megahorn",
    "type": "Bug",
    "damage": 90,
    "duration": 2200,
    "energy": 100,
    "dps": 40.91
  },
  "23": {
    "name": "Wing Attack",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "24": {
    "name": "Flamethrower",
    "type": "Fire",
    "damage": 70,
    "duration": 2200,
    "energy": 50,
    "dps": 31.82
  },
  "25": {
    "name": "Sucker Punch",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "26": {
    "name": "Dig",
    "type": "Ground",
    "damage": 100,
    "duration": 4700,
    "energy": 50,
    "dps": 21.28
  },
  "27": {
    "name": "Low Kick",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "28": {
    "name": "Cross Chop",
    "type": "Fighting",
    "damage": 50,
    "duration": 1500,
    "energy": 50,
    "dps": 33.33
  },
  "29": {
    "name": "Psycho Cut",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "30": {
    "name": "Psybeam",
    "type": "Psychic",
    "damage": 70,
    "duration": 3200,
    "energy": 50,
    "dps": 21.88
  },
  "31": {
    "name": "Earthquake",
    "type": "Ground",
    "damage": 120,
    "duration": 3600,
    "energy": 100,
    "dps": 33.33
  },
  "32": {
    "name": "Stone Edge",
    "type": "Rock",
    "damage": 100,
    "duration": 2300,
    "energy": 100,
    "dps": 43.48
  },
  "33": {
    "name": "Ice Punch",
    "type": "Ice",
    "damage": 50,
    "duration": 1900,
    "energy": 33,
    "dps": 26.32
  },
  "34": {
    "name": "Heart Stamp",
    "type": "Psychic",
    "damage": 40,
    "duration": 1900,
    "energy": 33,
    "dps": 21.05
  },
  "35": {
    "name": "Discharge",
    "type": "Electric",
    "damage": 65,
    "duration": 2500,
    "energy": 33,
    "dps": 26
  },
  "36": {
    "name": "Flash Cannon",
    "type": "Steel",
    "damage": 100,
    "duration": 2700,
    "energy": 100,
    "dps": 37.04
  },
  "37": {
    "name": "Peck",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "38": {
    "name": "Drill Peck",
    "type": "Flying",
    "damage": 60,
    "duration": 2300,
    "energy": 33,
    "dps": 26.09
  },
  "39": {
    "name": "Ice Beam",
    "type": "Ice",
    "damage": 90,
    "duration": 3300,
    "energy": 50,
    "dps": 27.27
  },
  "40": {
    "name": "Blizzard",
    "type": "Ice",
    "damage": 130,
    "duration": 3100,
    "energy": 100,
    "dps": 41.94
  },
  "41": {
    "name": "Air Slash",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "42": {
    "name": "Heat Wave",
    "type": "Fire",
    "damage": 95,
    "duration": 3000,
    "energy": 100,
    "dps": 31.67
  },
  "43": {
    "name": "Twineedle",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "44": {
    "name": "Poison Jab",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "45": {
    "name": "Aerial Ace",
    "type": "Flying",
    "damage": 55,
    "duration": 2400,
    "energy": 33,
    "dps": 22.92
  },
  "46": {
    "name": "Drill Run",
    "type": "Ground",
    "damage": 80,
    "duration": 2800,
    "energy": 50,
    "dps": 28.57
  },
  "47": {
    "name": "Petal Blizzard",
    "type": "Grass",
    "damage": 110,
    "duration": 2600,
    "energy": 100,
    "dps": 42.31
  },
  "48": {
    "name": "Mega Drain",
    "type": "Grass",
    "damage": 25,
    "duration": 2600,
    "energy": 50,
    "dps": 9.62
  },
  "49": {
    "name": "Bug Buzz",
    "type": "Bug",
    "damage": 90,
    "duration": 3700,
    "energy": 50,
    "dps": 24.32
  },
  "50": {
    "name": "Poison Fang",
    "type": "Poison",
    "damage": 35,
    "duration": 1700,
    "energy": 33,
    "dps": 20.59
  },
  "51": {
    "name": "Night Slash",
    "type": "Dark",
    "damage": 50,
    "duration": 2200,
    "energy": 33,
    "dps": 22.73
  },
  "52": {
    "name": "Slash",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "53": {
    "name": "Bubble Beam",
    "type": "Water",
    "damage": 45,
    "duration": 1900,
    "energy": 33,
    "dps": 23.68
  },
  "54": {
    "name": "Submission",
    "type": "Fighting",
    "damage": 60,
    "duration": 2200,
    "energy": 50,
    "dps": 27.27
  },
  "55": {
    "name": "Karate Chop",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "56": {
    "name": "Low Sweep",
    "type": "Fighting",
    "damage": 40,
    "duration": 1900,
    "energy": 33,
    "dps": 21.05
  },
  "57": {
    "name": "Aqua Jet",
    "type": "Water",
    "damage": 45,
    "duration": 2600,
    "energy": 33,
    "dps": 17.31
  },
  "58": {
    "name": "Aqua Tail",
    "type": "Water",
    "damage": 50,
    "duration": 1900,
    "energy": 33,
    "dps": 26.32
  },
  "59": {
    "name": "Seed Bomb",
    "type": "Grass",
    "damage": 55,
    "duration": 2100,
    "energy": 33,
    "dps": 26.19
  },
  "60": {
    "name": "Psyshock",
    "type": "Psychic",
    "damage": 65,
    "duration": 2700,
    "energy": 33,
    "dps": 24.07
  },
  "61": {
    "name": "Rock Throw",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "62": {
    "name": "Ancient Power",
    "type": "Rock",
    "damage": 70,
    "duration": 3500,
    "energy": 33,
    "dps": 20
  },
  "63": {
    "name": "Rock Tomb",
    "type": "Rock",
    "damage": 70,
    "duration": 3200,
    "energy": 50,
    "dps": 21.88
  },
  "64": {
    "name": "Rock Slide",
    "type": "Rock",
    "damage": 80,
    "duration": 2700,
    "energy": 50,
    "dps": 29.63
  },
  "65": {
    "name": "Power Gem",
    "type": "Rock",
    "damage": 80,
    "duration": 2900,
    "energy": 50,
    "dps": 27.59
  },
  "66": {
    "name": "Shadow Sneak",
    "type": "Ghost",
    "damage": 50,
    "duration": 2900,
    "energy": 33,
    "dps": 17.24
  },
  "67": {
    "name": "Shadow Punch",
    "type": "Ghost",
    "damage": 40,
    "duration": 1700,
    "energy": 33,
    "dps": 23.53
  },
  "68": {
    "name": "Shadow Claw",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "69": {
    "name": "Ominous Wind",
    "type": "Ghost",
    "damage": 50,
    "duration": 2300,
    "energy": 33,
    "dps": 21.74
  },
  "70": {
    "name": "Shadow Ball",
    "type": "Ghost",
    "damage": 100,
    "duration": 3000,
    "energy": 50,
    "dps": 33.33
  },
  "71": {
    "name": "Bullet Punch",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "72": {
    "name": "Magnet Bomb",
    "type": "Steel",
    "damage": 70,
    "duration": 2800,
    "energy": 33,
    "dps": 25
  },
  "73": {
    "name": "Steel Wing",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "74": {
    "name": "Iron Head",
    "type": "Steel",
    "damage": 60,
    "duration": 1900,
    "energy": 50,
    "dps": 31.58
  },
  "75": {
    "name": "Parabolic Charge",
    "type": "Electric",
    "damage": 25,
    "duration": 2800,
    "energy": 50,
    "dps": 8.93
  },
  "76": {
    "name": "Spark",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "77": {
    "name": "Thunder Punch",
    "type": "Electric",
    "damage": 45,
    "duration": 1800,
    "energy": 33,
    "dps": 25
  },
  "78": {
    "name": "Thunder",
    "type": "Electric",
    "damage": 100,
    "duration": 2400,
    "energy": 100,
    "dps": 41.67
  },
  "79": {
    "name": "Thunderbolt",
    "type": "Electric",
    "damage": 80,
    "duration": 2500,
    "energy": 50,
    "dps": 32
  },
  "80": {
    "name": "Twister",
    "type": "Dragon",
    "damage": 45,
    "duration": 2800,
    "energy": 33,
    "dps": 16.07
  },
  "81": {
    "name": "Dragon Breath",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "82": {
    "name": "Dragon Pulse",
    "type": "Dragon",
    "damage": 90,
    "duration": 3600,
    "energy": 50,
    "dps": 25
  },
  "83": {
    "name": "Dragon Claw",
    "type": "Dragon",
    "damage": 50,
    "duration": 1700,
    "energy": 33,
    "dps": 29.41
  },
  "84": {
    "name": "Disarming Voice",
    "type": "Fairy",
    "damage": 70,
    "duration": 3900,
    "energy": 33,
    "dps": 17.95
  },
  "85": {
    "name": "Draining Kiss",
    "type": "Fairy",
    "damage": 60,
    "duration": 2600,
    "energy": 50,
    "dps": 23.08
  },
  "86": {
    "name": "Dazzling Gleam",
    "type": "Fairy",
    "damage": 100,
    "duration": 3500,
    "energy": 50,
    "dps": 28.57
  },
  "87": {
    "name": "Moonblast",
    "type": "Fairy",
    "damage": 130,
    "duration": 3900,
    "energy": 100,
    "dps": 33.33
  },
  "88": {
    "name": "Play Rough",
    "type": "Fairy",
    "damage": 90,
    "duration": 2900,
    "energy": 50,
    "dps": 31.03
  },
  "89": {
    "name": "Cross Poison",
    "type": "Poison",
    "damage": 40,
    "duration": 1500,
    "energy": 33,
    "dps": 26.67
  },
  "90": {
    "name": "Sludge Bomb",
    "type": "Poison",
    "damage": 80,
    "duration": 2300,
    "energy": 50,
    "dps": 34.78
  },
  "91": {
    "name": "Sludge Wave",
    "type": "Poison",
    "damage": 110,
    "duration": 3200,
    "energy": 100,
    "dps": 34.38
  },
  "92": {
    "name": "Gunk Shot",
    "type": "Poison",
    "damage": 130,
    "duration": 3100,
    "energy": 100,
    "dps": 41.94
  },
  "93": {
    "name": "Mud Shot",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "94": {
    "name": "Bone Club",
    "type": "Ground",
    "damage": 40,
    "duration": 1600,
    "energy": 33,
    "dps": 25
  },
  "95": {
    "name": "Bulldoze",
    "type": "Ground",
    "damage": 80,
    "duration": 3500,
    "energy": 50,
    "dps": 22.86
  },
  "96": {
    "name": "Mud Bomb",
    "type": "Ground",
    "damage": 55,
    "duration": 2300,
    "energy": 33,
    "dps": 23.91
  },
  "97": {
    "name": "Fury Cutter",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "98": {
    "name": "Bug Bite",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "99": {
    "name": "Signal Beam",
    "type": "Bug",
    "damage": 75,
    "duration": 2900,
    "energy": 50,
    "dps": 25.86
  },
  "100": {
    "name": "X Scissor",
    "type": "Bug",
    "damage": 45,
    "duration": 1600,
    "energy": 33,
    "dps": 28.13
  },
  "101": {
    "name": "Flame Charge",
    "type": "Fire",
    "damage": 70,
    "duration": 3800,
    "energy": 33,
    "dps": 18.42
  },
  "102": {
    "name": "Flame Burst",
    "type": "Fire",
    "damage": 70,
    "duration": 2600,
    "energy": 50,
    "dps": 26.92
  },
  "103": {
    "name": "Fire Blast",
    "type": "Fire",
    "damage": 140,
    "duration": 4200,
    "energy": 100,
    "dps": 33.33
  },
  "104": {
    "name": "Brine",
    "type": "Water",
    "damage": 60,
    "duration": 2300,
    "energy": 50,
    "dps": 26.09
  },
  "105": {
    "name": "Water Pulse",
    "type": "Water",
    "damage": 70,
    "duration": 3200,
    "energy": 50,
    "dps": 21.88
  },
  "106": {
    "name": "Scald",
    "type": "Water",
    "damage": 82,
    "duration": 3700,
    "energy": 50,
    "dps": 21.62
  },
  "107": {
    "name": "Hydro Pump",
    "type": "Water",
    "damage": 130,
    "duration": 3300,
    "energy": 100,
    "dps": 39.39
  },
  "108": {
    "name": "Psychic",
    "type": "Psychic",
    "damage": 100,
    "duration": 2800,
    "energy": 100,
    "dps": 35.71
  },
  "109": {
    "name": "Psystrike",
    "type": "Psychic",
    "damage": 100,
    "duration": 4400,
    "energy": 50,
    "dps": 22.73
  },
  "110": {
    "name": "Ice Shard",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "111": {
    "name": "Icy Wind",
    "type": "Ice",
    "damage": 60,
    "duration": 3300,
    "energy": 33,
    "dps": 18.18
  },
  "112": {
    "name": "Frost Breath",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "113": {
    "name": "Absorb",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "114": {
    "name": "Giga Drain",
    "type": "Grass",
    "damage": 50,
    "duration": 3900,
    "energy": 100,
    "dps": 12.82
  },
  "115": {
    "name": "Fire Punch",
    "type": "Fire",
    "damage": 55,
    "duration": 2200,
    "energy": 33,
    "dps": 25
  },
  "116": {
    "name": "Solar Beam",
    "type": "Grass",
    "damage": 180,
    "duration": 4900,
    "energy": 100,
    "dps": 36.73
  },
  "117": {
    "name": "Leaf Blade",
    "type": "Grass",
    "damage": 70,
    "duration": 2400,
    "energy": 33,
    "dps": 29.17
  },
  "118": {
    "name": "Power Whip",
    "type": "Grass",
    "damage": 90,
    "duration": 2600,
    "energy": 50,
    "dps": 34.62
  },
  "119": {
    "name": "Splash",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "120": {
    "name": "Acid",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "121": {
    "name": "Air Cutter",
    "type": "Flying",
    "damage": 60,
    "duration": 2700,
    "energy": 50,
    "dps": 22.22
  },
  "122": {
    "name": "Hurricane",
    "type": "Flying",
    "damage": 110,
    "duration": 2700,
    "energy": 100,
    "dps": 40.74
  },
  "123": {
    "name": "Brick Break",
    "type": "Fighting",
    "damage": 40,
    "duration": 1600,
    "energy": 33,
    "dps": 25
  },
  "124": {
    "name": "Cut",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "125": {
    "name": "Swift",
    "type": "Normal",
    "damage": 60,
    "duration": 2800,
    "energy": 50,
    "dps": 21.43
  },
  "126": {
    "name": "Horn Attack",
    "type": "Normal",
    "damage": 40,
    "duration": 1850,
    "energy": 33,
    "dps": 21.62
  },
  "127": {
    "name": "Stomp",
    "type": "Normal",
    "damage": 55,
    "duration": 1700,
    "energy": 50,
    "dps": 32.35
  },
  "128": {
    "name": "Headbutt",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "129": {
    "name": "Hyper Fang",
    "type": "Normal",
    "damage": 80,
    "duration": 2500,
    "energy": 50,
    "dps": 32
  },
  "130": {
    "name": "Slam",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "131": {
    "name": "Body Slam",
    "type": "Normal",
    "damage": 50,
    "duration": 1900,
    "energy": 33,
    "dps": 26.32
  },
  "132": {
    "name": "Rest",
    "type": "Normal",
    "damage": 50,
    "duration": 1900,
    "energy": 33,
    "dps": 26.32
  },
  "133": {
    "name": "Struggle",
    "type": "Normal",
    "damage": 35,
    "duration": 2200,
    "energy": 0,
    "dps": 15.91
  },
  "134": {
    "name": "Scald (Blastoise)",
    "type": "Water",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "135": {
    "name": "Hydro Pump (Blastoise)",
    "type": "Water",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "136": {
    "name": "Wrap Green",
    "type": "Normal",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "137": {
    "name": "Wrap Pink",
    "type": "Normal",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "200": {
    "name": "Fury Cutter",
    "type": "Bug",
    "damage": 3,
    "duration": 400,
    "energy": 6,
    "dps": 7.5
  },
  "201": {
    "name": "Bug Bite",
    "type": "Bug",
    "damage": 5,
    "duration": 500,
    "energy": 6,
    "dps": 10
  },
  "202": {
    "name": "Bite",
    "type": "Dark",
    "damage": 6,
    "duration": 500,
    "energy": 4,
    "dps": 12
  },
  "203": {
    "name": "Sucker Punch",
    "type": "Dark",
    "damage": 7,
    "duration": 700,
    "energy": 8,
    "dps": 10
  },
  "204": {
    "name": "Dragon Breath",
    "type": "Dragon",
    "damage": 6,
    "duration": 500,
    "energy": 4,
    "dps": 12
  },
  "205": {
    "name": "Thunder Shock",
    "type": "Electric",
    "damage": 5,
    "duration": 600,
    "energy": 8,
    "dps": 8.33
  },
  "206": {
    "name": "Spark",
    "type": "Electric",
    "damage": 6,
    "duration": 700,
    "energy": 9,
    "dps": 8.57
  },
  "207": {
    "name": "Low Kick",
    "type": "Fighting",
    "damage": 6,
    "duration": 600,
    "energy": 6,
    "dps": 10
  },
  "208": {
    "name": "Karate Chop",
    "type": "Fighting",
    "damage": 8,
    "duration": 800,
    "energy": 10,
    "dps": 10
  },
  "209": {
    "name": "Ember",
    "type": "Fire",
    "damage": 10,
    "duration": 1000,
    "energy": 10,
    "dps": 10
  },
  "210": {
    "name": "Wing Attack",
    "type": "Flying",
    "damage": 8,
    "duration": 800,
    "energy": 9,
    "dps": 10
  },
  "211": {
    "name": "Peck",
    "type": "Flying",
    "damage": 10,
    "duration": 1000,
    "energy": 10,
    "dps": 10
  },
  "212": {
    "name": "Lick",
    "type": "Ghost",
    "damage": 5,
    "duration": 500,
    "energy": 6,
    "dps": 10
  },
  "213": {
    "name": "Shadow Claw",
    "type": "Ghost",
    "damage": 9,
    "duration": 700,
    "energy": 6,
    "dps": 12.86
  },
  "214": {
    "name": "Vine Whip",
    "type": "Grass",
    "damage": 7,
    "duration": 600,
    "energy": 6,
    "dps": 11.67
  },
  "215": {
    "name": "Razor Leaf",
    "type": "Grass",
    "damage": 13,
    "duration": 1000,
    "energy": 7,
    "dps": 13
  },
  "216": {
    "name": "Mud Shot",
    "type": "Ground",
    "damage": 5,
    "duration": 600,
    "energy": 7,
    "dps": 8.33
  },
  "217": {
    "name": "Ice Shard",
    "type": "Ice",
    "damage": 12,
    "duration": 1200,
    "energy": 12,
    "dps": 10
  },
  "218": {
    "name": "Frost Breath",
    "type": "Ice",
    "damage": 10,
    "duration": 900,
    "energy": 8,
    "dps": 11.11
  },
  "219": {
    "name": "Quick Attack",
    "type": "Normal",
    "damage": 8,
    "duration": 800,
    "energy": 10,
    "dps": 10
  },
  "220": {
    "name": "Scratch",
    "type": "Normal",
    "damage": 6,
    "duration": 500,
    "energy": 4,
    "dps": 12
  },
  "221": {
    "name": "Tackle",
    "type": "Normal",
    "damage": 5,
    "duration": 500,
    "energy": 5,
    "dps": 10
  },
  "222": {
    "name": "Pound",
    "type": "Normal",
    "damage": 7,
    "duration": 600,
    "energy": 6,
    "dps": 11.67
  },
  "223": {
    "name": "Cut",
    "type": "Normal",
    "damage": 5,
    "duration": 500,
    "energy": 5,
    "dps": 10
  },
  "224": {
    "name": "Poison Jab",
    "type": "Poison",
    "damage": 10,
    "duration": 800,
    "energy": 7,
    "dps": 12.5
  },
  "225": {
    "name": "Acid",
    "type": "Poison",
    "damage": 9,
    "duration": 800,
    "energy": 8,
    "dps": 11.25
  },
  "226": {
    "name": "Psycho Cut",
    "type": "Psychic",
    "damage": 5,
    "duration": 600,
    "energy": 8,
    "dps": 8.33
  },
  "227": {
    "name": "Rock Throw",
    "type": "Rock",
    "damage": 12,
    "duration": 900,
    "energy": 7,
    "dps": 13.33
  },
  "228": {
    "name": "Metal Claw",
    "type": "Steel",
    "damage": 8,
    "duration": 700,
    "energy": 7,
    "dps": 11.43
  },
  "229": {
    "name": "Bullet Punch",
    "type": "Steel",
    "damage": 9,
    "duration": 900,
    "energy": 10,
    "dps": 10
  },
  "230": {
    "name": "Water Gun",
    "type": "Water",
    "damage": 5,
    "duration": 500,
    "energy": 5,
    "dps": 10
  },
  "231": {
    "name": "Splash",
    "type": "Water",
    "damage": 0,
    "duration": 1730,
    "energy": 20,
    "dps": 0
  },
  "232": {
    "name": "Water Gun (Blastoise)",
    "type": "",
    "damage": 0,
    "duration": 0,
    "energy": 0,
    "dps": 0
  },
  "233": {
    "name": "Mud Slap",
    "type": "Ground",
    "damage": 15,
    "duration": 1400,
    "energy": 12,
    "dps": 10.71
  },
  "234": {
    "name": "Zen Headbutt",
    "type": "Psychic",
    "damage": 12,
    "duration": 1100,
    "energy": 10,
    "dps": 10.91
  },
  "235": {
    "name": "Confusion",
    "type": "Psychic",
    "damage": 20,
    "duration": 1600,
    "energy": 15,
    "dps": 12.5
  },
  "236": {
    "name": "Poison Sting",
    "type": "Poison",
    "damage": 5,
    "duration": 600,
    "energy": 7,
    "dps": 8.33
  },
  "237": {
    "name": "Bubble",
    "type": "Water",
    "damage": 12,
    "duration": 1200,
    "energy": 14,
    "dps": 10
  },
  "238": {
    "name": "Feint Attack",
    "type": "Dark",
    "damage": 10,
    "duration": 900,
    "energy": 9,
    "dps": 11.11
  },
  "239": {
    "name": "Steel Wing",
    "type": "Steel",
    "damage": 11,
    "duration": 800,
    "energy": 6,
    "dps": 13.75
  },
  "240": {
    "name": "Fire Fang",
    "type": "Fire",
    "damage": 11,
    "duration": 900,
    "energy": 8,
    "dps": 12.22
  },
  "241": {
    "name": "Rock Smash",
    "type": "Fighting",
    "damage": 15,
    "duration": 1300,
    "energy": 10,
    "dps": 11.54
  },
  "242": {
    "name": "Transform",
    "type": "Normal",
    "damage": 0,
    "duration": 2230,
    "energy": 0,
    "dps": 0
  },
  "243": {
    "name": "Counter",
    "type": "Fighting",
    "damage": 8,
    "duration": 900,
    "energy": 12,
    "dps": 13.33
  },
  "244": {
    "name": "Powder Snow",
    "type": "Ice",
    "damage": 6,
    "duration": 1000,
    "energy": 15,
    "dps": 6
  },
  "245": {
    "name": "Close Combat",
    "type": "Fighting",
    "damage": 100,
    "duration": 2300,
    "energy": 100,
    "dps": 43.48
  },
  "246": {
    "name": "Dynamic Punch",
    "type": "Fighting",
    "damage": 90,
    "duration": 2700,
    "energy": 50,
    "dps": 33.33
  },
  "247": {
    "name": "Focus Blast",
    "type": "Fighting",
    "damage": 140,
    "duration": 3500,
    "energy": 140,
    "dps": 40
  },
  "248": {
    "name": "Aurora Beam",
    "type": "Ice",
    "damage": 80,
    "duration": 3550,
    "energy": 50,
    "dps": 22.54
  },
  "249": {
    "name": "Charge Beam",
    "type": "Electric",
    "damage": 8,
    "duration": 1100,
    "energy": 15,
    "dps": 7.27
  },
  "250": {
    "name": "Volt Switch",
    "type": "Electric",
    "damage": 20,
    "duration": 2300,
    "energy": 25,
    "dps": 8.7
  },
  "251": {
    "name": "Wild Charge",
    "type": "Electric",
    "damage": 90,
    "duration": 2600,
    "energy": 50,
    "dps": 34.62
  },
  "252": {
    "name": "Zap Cannon",
    "type": "Electric",
    "damage": 140,
    "duration": 3700,
    "energy": 100,
    "dps": 37.84
  },
  "253": {
    "name": "Dragon Tail",
    "type": "Dragon",
    "damage": 15,
    "duration": 1100,
    "energy": 9,
    "dps": 13.64
  },
  "254": {
    "name": "Avalanche",
    "type": "Ice",
    "damage": 90,
    "duration": 2700,
    "energy": 50,
    "dps": 33.33
  },
  "255": {
    "name": "Air Slash",
    "type": "Flying",
    "damage": 14,
    "duration": 1200,
    "energy": 10,
    "dps": 11.67
  },
  "256": {
    "name": "Brave Bird",
    "type": "Flying",
    "damage": 90,
    "duration": 2000,
    "energy": 100,
    "dps": 45
  },
  "257": {
    "name": "Sky Attack",
    "type": "Flying",
    "damage": 70,
    "duration": 2000,
    "energy": 50,
    "dps": 35
  },
  "258": {
    "name": "Sand Tomb",
    "type": "Ground",
    "damage": 80,
    "duration": 4000,
    "energy": 50,
    "dps": 20
  },
  "259": {
    "name": "Rock Blast",
    "type": "Rock",
    "damage": 50,
    "duration": 2100,
    "energy": 33,
    "dps": 23.81
  },
  "260": {
    "name": "Infestation",
    "type": "Bug",
    "damage": 10,
    "duration": 1100,
    "energy": 14,
    "dps": 9.09
  },
  "261": {
    "name": "Struggle Bug",
    "type": "Bug",
    "damage": 15,
    "duration": 1500,
    "energy": 15,
    "dps": 10
  },
  "262": {
    "name": "Silver Wind",
    "type": "Bug",
    "damage": 70,
    "duration": 3700,
    "energy": 33,
    "dps": 18.92
  },
  "263": {
    "name": "Astonish",
    "type": "Ghost",
    "damage": 8,
    "duration": 1100,
    "energy": 14,
    "dps": 7.27
  },
  "264": {
    "name": "Hex",
    "type": "Ghost",
    "damage": 10,
    "duration": 1200,
    "energy": 15,
    "dps": 8.33
  },
  "265": {
    "name": "Night Shade",
    "type": "Ghost",
    "damage": 60,
    "duration": 2600,
    "energy": 50,
    "dps": 23.08
  },
  "266": {
    "name": "Iron Tail",
    "type": "Steel",
    "damage": 15,
    "duration": 1100,
    "energy": 7,
    "dps": 13.64
  },
  "267": {
    "name": "Gyro Ball",
    "type": "Steel",
    "damage": 80,
    "duration": 3300,
    "energy": 50,
    "dps": 24.24
  },
  "268": {
    "name": "Heavy Slam",
    "type": "Steel",
    "damage": 70,
    "duration": 2100,
    "energy": 50,
    "dps": 33.33
  },
  "269": {
    "name": "Fire Spin",
    "type": "Fire",
    "damage": 14,
    "duration": 1100,
    "energy": 10,
    "dps": 12.73
  },
  "270": {
    "name": "Overheat",
    "type": "Fire",
    "damage": 160,
    "duration": 4000,
    "energy": 100,
    "dps": 40
  },
  "271": {
    "name": "Bullet Seed",
    "type": "Grass",
    "damage": 8,
    "duration": 1100,
    "energy": 14,
    "dps": 7.27
  },
  "272": {
    "name": "Grass Knot",
    "type": "Grass",
    "damage": 90,
    "duration": 2600,
    "energy": 50,
    "dps": 34.62
  },
  "273": {
    "name": "Energy Ball",
    "type": "Grass",
    "damage": 90,
    "duration": 3900,
    "energy": 50,
    "dps": 23.08
  },
  "274": {
    "name": "Extrasensory",
    "type": "Psychic",
    "damage": 12,
    "duration": 1100,
    "energy": 12,
    "dps": 10.91
  },
  "275": {
    "name": "Futuresight",
    "type": "Psychic",
    "damage": 120,
    "duration": 2700,
    "energy": 100,
    "dps": 44.44
  },
  "276": {
    "name": "Mirror Coat",
    "type": "Psychic",
    "damage": 60,
    "duration": 2600,
    "energy": 50,
    "dps": 23.08
  },
  "277": {
    "name": "Outrage",
    "type": "Dragon",
    "damage": 110,
    "duration": 3900,
    "energy": 50,
    "dps": 28.21
  },
  "278": {
    "name": "Snarl",
    "type": "Dark",
    "damage": 12,
    "duration": 1100,
    "energy": 12,
    "dps": 10.91
  },
  "279": {
    "name": "Crunch",
    "type": "Dark",
    "damage": 70,
    "duration": 3200,
    "energy": 33,
    "dps": 21.88
  },
  "280": {
    "name": "Foul Play",
    "type": "Dark",
    "damage": 70,
    "duration": 2000,
    "energy": 50,
    "dps": 35
  },
  "281": {
    "name": "Hidden Power",
    "type": "Normal",
    "damage": 15,
    "duration": 1500,
    "energy": 15,
    "dps": 10
  }
}

angular
  .module('gymTrackr.services')
  .constant('Moves', moves);
