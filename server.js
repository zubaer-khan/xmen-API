const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8000;

app.use(cors())

const xmen = {
    "professor x": {
        "realName": "Professor Charles Francis Xavier",
        "powers": "World's most powerful [[telepath]], capable of [[astral projection]], [[mind control]], illusion casting, memory manipulation, psychic blasts, and sensing the presence of nearby [[mutants]]."
    },
    "cyclops": {
        "realName": "Scott Summers",
		"powers": "Projects a beam of ruby-colored concussive force from his eyes, which act as interdimensional [[aperture]]s between this universe and another."
	},
    "beast": {
        "realName": "Dr. Henry Philip 'Hank' McCoy",
        "powers": "Has superhuman strength, speed, stamina, agility, reflexes, and durability. His former feline-like form gave him night vision, minor pheromone control, enhanced senses and claws."
    },
    "jean grey": {
        "realName": "Jean Grey-Summers",
		"powers": "Possesses [[telekinesis]] and telepathy. As the template of the Phoenix Force, she is able to generate unlimited amounts of energy, travel through time-space, and manipulate matter on a subatomic level."
	},
    "wolverine": {
        "realName": "James 'Logan' Howlett",
		"powers": "Healing factor ([[Regeneration (biology)|regeneration of tissue]], immunity to virtually all toxins and pathogens, slowed aging process), enhanced senses, and retractable bone claws. Has the indestructible metal [[adamantium]] bonded to his skeleton, allowing enhanced physical attributes and sharp adamantium claws."
	},
    "storm": {
        "realName": "Ororo Monroe (formerly Iqadi T'Challa-Wakandas)",
		"powers": "[[Weather control|Weather manipulation]] (lightning bolts, wind, rain, etc.) and flight by 'riding' wind currents."
	},
    "rogue": {
        "realName": "Anna Marie",
		"powers": "Absorbs powers, memories, and personalities through skin-to-skin contact. Prolonged contact with others can cause her to permanently absorb their traits and potentially kill them."
	},
    "gambit":{
        "realName": "R-my LeBeau",
		"powers": "Charges inanimate objects with explosive kinetic energy; enhanced agility and [[Hypnosis|hypnotic]] charm."
	},
    "jubilee": {
        "realName": "Jubilation Lee",
		"powers": "Currently possesses the powers and abilities of an average vampire. Formerly could project and control explosive [[plasmoid]]s, and possessed superhuman strength and flight through advanced technology."
	},
    "unknown": {
        "realName": "unknown",
        "powers": "unknown"
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(xmen)
})

app.get('/api/:name', (req, res) => {
    const xperson = req.params.name.toLowerCase()
    if(xmen[xperson]){
        res.json(xmen[xperson])
    }else{
        res.json(xmen['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}. It\'s worrrrk-ing!`)
})