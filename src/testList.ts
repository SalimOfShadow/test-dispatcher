export interface HTTPTest {
  name: string;
  description?: string;
  endpoint: string;
  method: Method;
  headers?: HeadersInit;
  body?: object;
  responseFormat: ResponseFormat;
  status: number;
  jsonResponse?: object;
  textResponse?: string;
}

type ResponseFormat = "JSON" | "text";
type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export const testList: HTTPTest[] = [
  {
    name: "Placeholder GET Request with JSON Response",
    description: "Return Placehodler GET Response with JSON Response",
    endpoint: "https://jsonplaceholder.typicode.com/todos/1",
    method: "GET",
    responseFormat: "JSON",
    status: 200,
    jsonResponse: {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
  },
  {
    name: "Placeholder POST Requset with JSON Response",
    description: "Return Placeholder POST JSON Response  ",
    endpoint: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    body: {
      title: "foo",
      body: "bar",
      userId: 1,
    },
    responseFormat: "JSON",
    status: 201,
    jsonResponse: {
      id: 101,
    },
  },
  {
    name: "Placeholder GET Request with Text Response",
    description: "Return Placeholder GET Text Response",
    endpoint: "https://httpstat.us/200",
    method: "GET",
    responseFormat: "text",
    status: 200,
    textResponse: "200 OK",
  },
  {
    name: "MTGO GOLDFISH",
    description: "Return Placeholder POST JSON Response  ",
    endpoint: "http://salimkof.pro:3000/",
    method: "POST",
    body: { url: "https://www.mtggoldfish.com/deck/6787076#paper" },
    headers: { "Content-Type": "application/json" },
    responseFormat: "JSON",
    status: 200,
    jsonResponse: {
      importNameLines:
        "2 Anoint with Affliction\n4 Archfiend of the Dross\n3 Caustic Bronco\n1 Cut Down\n4 Festering Gulch\n7 Forest\n4 Glissa Sunslayer\n2 Go for the Throat\n2 Hero's Downfall\n3 Infernal Vessel\n2 Llanowar Wastes\n2 Mosswood Dreadknight\n2 Sheoldred's Edict\n3 Sheoldred, the Apocalypse\n9 Swamp\n1 Temple of Malady\n4 The Gitrog, Ravenous Ride\n1 Underground Mortuary\n4 Unholy Annex // Ritual Chamber\n",
    },
  },
  {
    name: "MTGO Deckstats",
    description: "Return Placeholder POST JSON Response  ",
    endpoint: "http://salimkof.pro:3000/",
    method: "POST",
    headers: { "Content-Type": "application/json" },

    body: {
      url: "https://www.deckstats.net/decks/133678/3758864-sneaking-a-nuke-onto-a-plane/en",
    },
    responseFormat: "JSON",
    status: 200,
    jsonResponse: {
      importNameLines:
        "1 Satoru Umezawa\n1 Ancient Brass Dragon\n1 Ancient Silver Dragon\n1 Arcane Signet\n1 Archfiend of Despair\n1 Archon of Cruelty\n1 Artisan of Kozilek\n1 Baleful Strix\n1 Blightsteel Colossus\n1 Changeling Outcast\n1 Choked Estuary\n1 Command Tower\n1 Contaminated Aquifer\n1 Counterspell\n1 Creeping Tar Pit\n1 Cyclonic Rift\n1 Darkwater Catacombs\n1 Dauthi Voidwalker\n1 Deadly Rollick\n1 Demonic Tutor\n1 Diluvian Primordial\n1 Dimir Aqueduct\n1 Dimir Infiltrator\n1 Dimir Signet\n1 Drowned Catacomb\n1 Feed the Swarm\n1 Fierce Guardianship\n1 Gingerbrute\n1 Gudul Lurker\n1 Hullbreaker Horror\n1 Inkwell Leviathan\n1 Invisible Stalker\n8 Island\n1 It That Betrays\n1 Jin-Gitaxias, Core Augur\n1 Kaito, Bane of Nightmares\n1 Kozilek, Butcher of Truth\n1 Kozilek, the Great Distortion\n1 Lightning Greaves\n1 Lord of Change\n1 Lord of the Void\n1 Mana Drain\n1 Mindleech Mass\n1 Mist-Cloaked Herald\n1 Mystic Remora\n1 Negate\n1 Nezahal, Primal Tide\n1 Ornithopter\n1 Pathrazer of Ulamog\n1 Polluted Delta\n1 Pongify\n1 Reconnaissance Mission\n1 Reliquary Tower\n1 Rhystic Study\n1 Rogue's Passage\n1 Rune-Scarred Demon\n1 Sepulchral Primordial\n1 Sheoldred, Whispering One\n1 Shipwreck Marsh\n1 Silent-Blade Oni\n1 Silver-Fur Master\n1 Siren Stormtamer\n1 Slither Blade\n1 Sol Ring\n1 Sphinx of the Second Sun\n1 Sunken Hollow\n1 Sunken Ruins\n8 Swamp\n1 Swiftfoot Boots\n1 Talisman of Dominance\n1 Temple of Deceit\n1 Thought Vessel\n1 Thousand-Faced Shadow\n1 Torgaar, Famine Incarnate\n1 Tormented Soul\n1 Toxic Deluge\n1 Toxrill, the Corrosive\n1 Triton Shorestalker\n1 Ulamog's Dreadsire\n1 Ulamog, the Infinite Gyre\n1 Urborg, Tomb of Yawgmoth\n1 Valgavoth, Terror Eater\n1 Vilis, Broker of Blood\n1 Void Winnower\n1 Watery Grave\n1 Wrexial, the Risen Deep\n",
    },
  },
  {
    name: "MTGO SCRYFALL",
    description: "Return Placeholder POST JSON Response  ",
    endpoint: "http://salimkof.pro:3000/",
    method: "POST",
    headers: { "Content-Type": "application/json" },

    body: {
      url: "https://www.scryfall.com/@Dudard/decks/1b617c41-6f2a-4b74-b55d-544783fa2e54",
    },
    responseFormat: "JSON",
    status: 200,
    jsonResponse: {
      importNameLines:
        "1 Tuskguard Captain\n1 Shield of the Oversoul\n1 Sylvan Reclamation\n1 Inspiring Call\n1 Harmonize\n1 Diligent Farmhand\n1 Ridgescale Tusker\n1 Selfless Savior\n1 Abiding Grace\n1 Jaddi Offshoot\n1 Mother of Runes\n1 Shattered Angel\n1 Swords to Plowshares\n1 Angelic Accord\n1 Caustic Caterpillar\n1 Retreat to Kazandu\n1 Curse of Predation\n1 Alseid of Life's Bounty\n1 Ajani's Pridemate\n1 Knighted Myr\n1 Mindless Automaton\n1 Constable of the Realm\n1 Celestial Unicorn\n1 Invigorating Surge\n1 Cleric Class\n1 Prosperous Innkeeper\n1 Abzan Falconer\n1 Angel of Vitality\n1 Mowu, Loyal Companion\n1 Daxos, Blessed by the Sun\n1 Loyal Guardian\n1 Conclave Mentor\n1 Hydra's Growth\n1 Essence Warden\n1 Armorcraft Judge\n1 Llanowar Visionary\n1 Hunter's Insight\n1 Soul Warden\n1 Attended Healer\n1 Garruk's Uprising\n1 Solidarity of Heroes\n1 Honor Troll\n1 Ajani's Welcome\n1 Ordeal of Nylea\n1 Suture Priest\n1 Wildwood Scourge\n1 Priest of Ancient Lore\n1 Abzan Battle Priest\n1 Jiang Yanggu, Wildcrafter\n1 Lunarch Veteran\n1 Deepwood Denizen\n1 Gideon's Company\n1 Relic Vial\n1 Iridescent Hornbeetle\n1 Snakeskin Veil\n1 Choose Your Weapon\n1 Soul's Attendant\n1 Twinblade Paladin\n1 Druid Class\n1 Colossal Majesty\n1 Elite Scaleguard\n1 Titanic Brawl\n1 Arctic Treeline\n1 Command Tower\n1 Krosan Verge\n1 Selesnya Sanctuary\n14 Forest\n1 Blossoming Sands\n1 Rogue's Passage\n1 Graypelt Refuge\n15 Plains\n1 Bretagard Stronghold\n1 Trelasarra, Moon Dancer\n",
    },
  },
  {
    name: "MTGO moxfield",
    description: "Return Placeholder POST JSON Response  ",
    endpoint: "http://salimkof.pro:3000/",
    method: "POST",
    headers: { "Content-Type": "application/json" },

    body: { url: "https://www.moxfield.com/decks/cNUCdnVx6UGI75ykcOK8hw" },
    responseFormat: "JSON",
    status: 200,
    jsonResponse: {
      importNameLines:
        "1 Agatha's Soul Cauldron\n4 Ancient Tomb\n1 Arena of Glory\n1 Chaos Defiler\n2 City of Traitors\n1 Ensnaring Bridge\n4 Fable of the Mirror-Breaker\n4 Goblin Engineer\n4 Goblin Welder\n1 Great Furnace\n2 Grindstone\n3 Karn, the Great Creator\n2 Lightning Bolt\n1 Lotus Petal\n9 Mountain\n4 Painter's Servant\n4 Pyroblast\n2 Red Elemental Blast\n3 Simian Spirit Guide\n1 Soul-Guide Lantern\n4 Urza's Saga\n2 Vexing Bauble\n\nSIDEBOARD:\n1 Blood Moon\n1 Faerie Macabre\n2 Fury\n1 Liquimetal Coating\n3 Magus of the Moon\n2 Mindbreak Trap\n1 Pithing Needle\n2 Thorn of Amethyst\n1 Tormod's Crypt\n1 Unlicensed Hearse\n",
    },
  },
  {
    name: "MTGO tappedout",
    description: "Return Placeholder POST JSON Response  ",
    endpoint: "http://salimkof.pro:3000/",
    method: "POST",
    headers: { "Content-Type": "application/json" },

    body: {
      url: "https://www.tappedout.net/mtg-decks/legend-of-the-twisted-and-writhing/",
    },
    responseFormat: "JSON",
    status: 200,
    jsonResponse: {
      importNameLines:
        "1 An Offer You Can't Refuse\n1 Arcane Signet\n1 Bond of Revival\n1 Brainstorm\n1 Cackling Counterpart\n1 Cauldron's Gift\n1 Choked Estuary\n1 Clearwater Pathway\n1 Clever Impersonator\n1 Clone Legion\n1 Coldsteel Heart\n1 Command Tower\n1 Commander's Sphere\n1 Corrupted Conviction\n1 Counterspell\n1 Dark Ritual\n1 Darkslick Shores\n1 Darkwater Catacombs\n1 Delay\n1 Demonic Consultation\n1 Dig Through Time\n1 Dimir Aqueduct\n1 Dimir Signet\n1 Dispel\n1 Doomsday\n1 Enter the Infinite\n1 Fated Infatuation\n1 Fated Return\n1 Feed the Swarm\n1 Fellwar Stone\n1 Flare of Denial\n1 Flesh Duplicate\n1 Foil\n1 Glasspool Mimic\n1 Gloomlake Verge\n1 Graveyard Shift\n1 Hidetsugu and Kairi\n1 In Garruk's Wake\n8 Island\n1 Lim-Dul's Vault\n1 Lofty Denial\n1 Mind Stone\n1 Mirage Mockery\n1 Mirror Image\n1 Miscast\n1 Mnemonic Deluge\n1 Morphic Pool\n1 Mox Diamond\n1 Necromantic Selection\n1 Negate\n1 Okiba Salvage\n1 Peer into the Abyss\n1 Phantasmal Image\n1 Ponder\n1 Prismatic Lens\n1 Quasiduplicate\n1 Relic of Legends\n1 Reliquary Tower\n1 Return Upon the Tide\n1 Rise Again\n1 Rise from the Grave\n1 Rise of the Dark Realms\n1 Rite of Replication\n1 River of Tears\n1 Sacrifice\n1 Saheeli's Artistry\n1 See Double\n1 Self-Reflection\n1 Shipwreck Marsh\n1 Sky Diamond\n1 Sol Ring\n1 Spell Pierce\n1 Sublime Epiphany\n1 Sunken Hollow\n7 Swamp\n1 Tainted Isle\n1 Talisman of Dominance\n1 Temple of Deceit\n1 Thassa's Oracle\n1 Thought Vessel\n1 Thwart the Grave\n1 Unbreakable Bond\n1 Underground River\n1 Vat Emergence\n1 Village Rites\n1 Viscera Seer\n1 Worn Powerstone\n",
    },
  },
];
