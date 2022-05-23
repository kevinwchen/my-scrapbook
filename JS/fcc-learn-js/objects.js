// objects.js
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "fur colour": ["gold"]
};

// Dot notation
var dogLegs = ourDog.legs;
console.log(dogLegs)

// Bracket notation
var dogFriends = ourDog["friends"];
console.log(dogFriends)

// Modify property
ourDog.name = "Dot";
console.log(ourDog.name)

// Add property
ourDog["bark"] = "woof!";
console.log(ourDog)

// Delete property
delete ourDog.tails;
console.log(ourDog)

// Check if property exists
function checkObj(myObj, checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}

console.log(checkObj(ourDog,"fur colour"))
console.log(checkObj(ourDog,"breed"))

// Multiple objects in the same array
var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "Youtube video"
        ]
    }
  ];

console.log(myMusic);

// Nested objects
var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

// Accessing nested arrays
var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
var secondTree = myPlants[1].list[1];
console.log(secondTree)
