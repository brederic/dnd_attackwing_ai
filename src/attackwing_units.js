// ****************************************************************************
// DnD Attack Wing AI - Units 
// Generated: 2017-03-05 12:38:29

var VERSION = "0.5.1";


// ****************************************************************************
// Adult Red Dragon Copy for Wyvern

var ard = {};
ard.name = "Adult Red Dragon";
ard.image = "img/ard.png";
ard.faction = "evil";
ard.simple = [ F(1), F(2), BL(1), BR(1) ];
ard.normal = [ BL(2), BR(2), TL(3), BL(3), F(3), BR(3), TR(3), F(4) ];
ard.difficult = [ K(3), TL(2), TR(2) ];
ard.actions = (TARGET_LOCK  + BOOST + EVADE);

ard.closing = [];
ard.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(3), K(3) ];
ard.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
ard.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3) ];
ard.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(3), K(3) ];
ard.closing[4] = [ TL(3), F(4), TR(3), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
ard.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(3), K(3) ];
ard.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3) ];
ard.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

ard.away = [];
ard.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
ard.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ard.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
ard.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3), K(3) ];
ard.away[4] = [ TL(3), TR(3), TR(3), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
ard.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3), K(3) ];
ard.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
ard.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

ard.far = [];
ard.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
ard.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ard.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ard.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ard.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(3), K(3) ];
ard.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ard.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ard.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

ard.stressed = [];
ard.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
ard.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
ard.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ard.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ard.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
ard.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ard.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ard.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];


// ****************************************************************************
//  Wyvern

var wyvern = {};
wyvern.name = "Wyvern";
wyvern.image = "img/wyvern.png";
wyvern.faction = "neutral";
wyvern.simple = [ F(1), F(2), BL(1), BR(1) ];
wyvern.normal = [ BL(2), BR(2), TL(3), BL(3), F(3), BR(3), TR(3), F(4) ];
wyvern.difficult = [ K(3), TL(2), TR(2) ];
wyvern.actions = (TARGET_LOCK  + BOOST + EVADE);

wyvern.closing = [];
wyvern.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(3), K(3) ];
wyvern.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
wyvern.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3) ];
wyvern.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(3), K(3) ];
wyvern.closing[4] = [ TL(3), F(4), TR(3), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
wyvern.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(3), K(3) ];
wyvern.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3) ];
wyvern.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

wyvern.away = [];
wyvern.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
wyvern.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
wyvern.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
wyvern.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3), K(3) ];
wyvern.away[4] = [ TL(3), TR(3), TR(3), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
wyvern.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3), K(3) ];
wyvern.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
wyvern.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

wyvern.far = [];
wyvern.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
wyvern.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
wyvern.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
wyvern.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
wyvern.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(3), K(3) ];
wyvern.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
wyvern.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
wyvern.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

wyvern.stressed = [];
wyvern.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
wyvern.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
wyvern.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
wyvern.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
wyvern.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
wyvern.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
wyvern.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
wyvern.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// Adult Blue Dragon

var abd = {};
abd.name = "Adult Blue Dragon";
abd.image = "img/abd.png";
abd.faction = "evil";
abd.simple = [ F(1), F(2), BL(1), BR(1) ];
abd.normal = [ BL(2), BR(2), TL(3), BL(3), F(3), BR(3), TR(3), F(4) ];
abd.difficult = [ K(4), TL(2), TR(2) ];
abd.actions = (TARGET_LOCK  + FOCUS + EVADE);

abd.closing = [];
abd.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), K(4) ];
abd.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
abd.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4) ];
abd.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(4), K(4) ];
abd.closing[4] = [ TL(3), F(4), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
abd.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(4), K(4) ];
abd.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4) ];
abd.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

abd.away = [];
abd.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
abd.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
abd.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
abd.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4), K(4) ];
abd.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
abd.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4), K(4) ];
abd.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
abd.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

abd.far = [];
abd.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
abd.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
abd.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
abd.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
abd.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
abd.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
abd.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
abd.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

abd.stressed = [];
abd.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
abd.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
abd.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
abd.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
abd.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
abd.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
abd.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
abd.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];
// ****************************************************************************
// Harpy  Copy for Young Blue Dragon

var harpy = {};
harpy.name = "Harpy";
harpy.image = "img/harpy.png";
harpy.faction = "neutral";
harpy.simple = [ F(1), F(2), BL(1), BR(1) ];
harpy.normal = [ BL(2), BR(2), TL(3), BL(3), F(3), BR(3), TR(3), F(4) ];
harpy.difficult = [ K(3), TL(2), TR(2) ];
harpy.actions = (TARGET_LOCK  + BOOST + EVADE);

harpy.closing = [];
harpy.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(3), K(3) ];
harpy.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
harpy.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3) ];
harpy.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(3), K(3) ];
harpy.closing[4] = [ TL(3), F(4), TR(3), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
harpy.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(3), K(3) ];
harpy.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3) ];
harpy.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

harpy.away = [];
harpy.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
harpy.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
harpy.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
harpy.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3), K(3) ];
harpy.away[4] = [ TL(3), TR(3), TR(3), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
harpy.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3), K(3) ];
harpy.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
harpy.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

harpy.far = [];
harpy.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
harpy.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
harpy.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
harpy.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
harpy.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(3), K(3) ];
harpy.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
harpy.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
harpy.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

harpy.stressed = [];
harpy.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
harpy.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
harpy.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
harpy.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
harpy.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
harpy.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
harpy.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
harpy.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
//  Young Blue Dragon

var ybd = {};
ybd.name = "Young Blue Dragon";
ybd.image = "img/ybd.png";
ybd.faction = "evil";
ybd.simple = [ F(1), F(2), BL(1), BR(1) ];
ybd.normal = [ BL(2), BR(2), TL(2), TR(2), TL(3), BL(3), F(3), BR(3), TR(3) ];
ybd.difficult = [ K(3), F(4) ];
ybd.actions = (TARGET_LOCK  + FOCUS + EVADE);

ybd.closing = [];
ybd.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(3), K(3) ];
ybd.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
ybd.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3) ];
ybd.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(3), K(3) ];
ybd.closing[4] = [ TL(3), F(4), TR(3), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
ybd.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(3), K(3) ];
ybd.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3) ];
ybd.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

ybd.away = [];
ybd.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
ybd.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ybd.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
ybd.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3), K(3) ];
ybd.away[4] = [ TL(3), TR(3), TR(3), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
ybd.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3), K(3) ];
ybd.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
ybd.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

ybd.far = [];
ybd.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
ybd.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ybd.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ybd.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ybd.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(3), K(3) ];
ybd.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ybd.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ybd.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

ybd.stressed = [];
ybd.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
ybd.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
ybd.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ybd.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ybd.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
ybd.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ybd.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ybd.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

//****************************************************************************
//  Griffon

var griffon = {};
griffon.name = "Griffon";
griffon.image = "img/griffon.png";
griffon.faction = "neutral";
griffon.simple = [ F(1), F(2), BL(1), BR(1) ];
griffon.normal = [ BL(2), BR(2), TL(2), TR(2), TL(3), BL(3), F(3), F(4) , BR(3), TR(3) ];
griffon.difficult = [ K(3)];
griffon.actions = (TARGET_LOCK  + BARREL_ROLL + BOOST + EVADE);

griffon.closing = [];
griffon.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(3), K(3) ];
griffon.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
griffon.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3) ];
griffon.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(3), K(3) ];
griffon.closing[4] = [ TL(3), F(4), TR(3), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
griffon.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(3), K(3) ];
griffon.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3) ];
griffon.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];
  
griffon.away = [];
griffon.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
griffon.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
griffon.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
griffon.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3), K(3) ];
griffon.away[4] = [ TL(3), TR(3), TR(3), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
griffon.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3), K(3) ];
griffon.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
griffon.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

griffon.far = [];
griffon.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
griffon.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
griffon.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
griffon.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
griffon.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(3), K(3) ];
griffon.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
griffon.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
griffon.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

griffon.stressed = [];
griffon.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
griffon.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
griffon.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
griffon.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
griffon.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
griffon.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
griffon.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
griffon.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// Adult Copper Dragon 

var acd = {};
acd.name = "Adult Copper Dragon";
acd.image = "img/acd.png";
acd.faction = "good"; 
acd.simple = [ BL(1), BR(1), F(2), F(3) ];
acd.normal = [ TL(2), TL(3), BL(2), BL(3), F(4), BR(2), BR(3), TR(2), TR(3) ];
acd.difficult = [ K(4), F(5) ];
acd.actions = (TARGET_LOCK + BARREL_ROLL + FOCUS + EVADE);

acd.closing = [];
acd.closing[0] = [ BL(1), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(4), K(4) ];
acd.closing[1] = [ F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(3) ];
acd.closing[2] = [ BR(2), BR(2), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), K(4), K(4) ];
acd.closing[3] = [ BR(1), BR(2), BR(2), TR(3), TR(3), TR(3), TR(3), TR(3), K(4), K(4) ];
acd.closing[4] = [ TL(3), F(5), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
acd.closing[5] = [ BL(1), BL(2), BL(2), TL(3), TL(3), TL(3), TL(3), TL(3), K(4), K(4) ];
acd.closing[6] = [ BL(2), BL(2), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), K(4), K(4) ];
acd.closing[7] = [ F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(3) ];

acd.away = [];
acd.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
acd.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(3), TR(3) ];
acd.away[2] = [ BR(2), BR(3), BR(3), BR(2), BR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
acd.away[3] = [ BR(2), BR(2), TR(3), TR(3), TR(3), TR(3), TR(3), K(4), K(4), K(4) ];
acd.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
acd.away[5] = [ BL(2), BL(2), TL(3), TL(3), TL(3), TL(3), TL(3), K(4), K(4), K(4) ];
acd.away[6] = [ BL(2), BL(3), BL(3), BL(2), BL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
acd.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(3), TL(3) ];

acd.far = [];
acd.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
acd.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3), TR(3) ];
acd.far[2] = [ BR(2), BR(2), BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
acd.far[3] = [ BR(2), BR(2), BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
acd.far[4] = [ BL(2), TL(3), TL(3), TL(3), BR(2), TR(3), TR(3), TR(3), K(4), K(4) ];
acd.far[5] = [ BL(2), BL(2), BL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
acd.far[6] = [ BL(2), BL(2), BL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
acd.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(3), TL(3) ];

acd.stressed = [];
acd.stressed[0] = [ BL(1), BL(3), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5) ];
acd.stressed[1] = [ F(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
acd.stressed[2] = [ BR(2), BR(2), BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
acd.stressed[3] = [ BR(2), BR(2), BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
acd.stressed[4] = [ BL(2), BL(3), TL(3), TL(3), TL(3), TL(3), BR(2), TR(3), TR(3), TR(3) ];
acd.stressed[5] = [ BL(2), BL(2), BL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
acd.stressed[6] = [ BL(2), BL(2), BL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
acd.stressed[7] = [ F(2), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), BL(3), TL(3) ];

// ****************************************************************************
// Sarpiel

var sarpiel = {};
sarpiel.name = "Movanic Deva Angel";
sarpiel.image = "img/sarpiel.png";
sarpiel.faction = "good";
sarpiel.simple = [ F(1), F(2), BL(1), BR(1) ];
sarpiel.normal = [ TL(3), BL(2), BL(3), F(3), F(4), BR(2), BR(3), TR(3) ];
sarpiel.difficult = [ R(1), K(3), K(4) ];
sarpiel.actions = (TARGET_LOCK + FOCUS + EVADE + BOOST);

sarpiel.closing = [];
sarpiel.closing[0] = [ BL(1), R(1), R(1), R(1), R(1), F(1), F(1), F(1), F(1), BR(1) ];
sarpiel.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), TR(3) ];
sarpiel.closing[2] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), K(4), K(4), K(3), K(3) ];
sarpiel.closing[3] = [ BR(1), TR(3), TR(3), TR(3), K(4), K(4), K(4), K(3), K(3), K(3) ];
sarpiel.closing[4] = [ TL(3), F(4), TR(3), K(3), K(3), K(3), K(4), K(4), K(4), K(4) ];
sarpiel.closing[5] = [ BL(1), TL(3), TL(3), TL(3), K(4), K(4), K(4), K(3), K(3), K(3) ];
sarpiel.closing[6] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), K(4), K(4), K(3), K(3) ];
sarpiel.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(3) ];

sarpiel.away = [];
sarpiel.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
sarpiel.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(2), TR(3) ];
sarpiel.away[2] = [ BR(2), BR(3), BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
sarpiel.away[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), K(4), K(3), K(3), K(4), K(4) ];
sarpiel.away[4] = [ TL(3), TR(3), TR(3), K(3), K(3), K(3), K(4), K(4), K(4), K(4) ];
sarpiel.away[5] = [ TL(3), TL(3), TL(3), TL(3), TL(3), K(4), K(3), K(3), K(4), K(4) ];
sarpiel.away[6] = [ BL(2), BL(3), BL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
sarpiel.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(2), TL(3) ];

sarpiel.far = [];
sarpiel.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
sarpiel.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(3), TR(3) ];
sarpiel.far[2] = [ BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
sarpiel.far[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), K(3), K(4) ];
sarpiel.far[4] = [ TL(3), TL(3), TL(3), TR(3), TR(3), TR(3), K(3), K(3), K(4), K(4) ];
sarpiel.far[5] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), K(3), K(4) ];
sarpiel.far[6] = [ BL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
sarpiel.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(3), TL(3) ];

sarpiel.stressed = [];
sarpiel.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
sarpiel.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
sarpiel.stressed[2] = [ BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
sarpiel.stressed[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
sarpiel.stressed[4] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TL(3), TL(3), TL(3), TR(3), TR(3) ];
sarpiel.stressed[5] = [ TL(3), TL(3), TL(3), TR(3), TL(3), TL(3), TL(3), TR(3), TL(3), TL(3) ];
sarpiel.stressed[6] = [ BL(3), TL(3), TL(3), TR(3), TL(3), TL(3), TL(3), TR(3), TL(3), TL(3) ];
sarpiel.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(3), TL(3) ];


// ****************************************************************************
// Black Shadow Dragon

var shadow = {};
shadow.name = "Black Shadow Dragon";
shadow.image = "img/shadow.png";
shadow.faction = "evil";
shadow.simple = [ F(1), F(2), BL(1), BR(1) ];
shadow.normal = [ TL(3), BL(2), BL(3), F(3), F(4), BR(2), BR(3), TR(3) ];
shadow.difficult = [ R(1), K(2), K(3) ];
shadow.actions = (TARGET_LOCK + FOCUS + EVADE + BARREL_ROLL);

shadow.closing = [];
shadow.closing[0] = [ BL(1), R(1), R(1), R(1), R(1), F(1), F(1), F(1), F(1), BR(1) ];
shadow.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), TR(3) ];
shadow.closing[2] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), K(3), K(3), K(2), K(2) ];
shadow.closing[3] = [ BR(1), TR(3), TR(3), TR(3), K(3), K(3), K(3), K(2), K(2), K(2) ];
shadow.closing[4] = [ TL(3), F(4), TR(3), K(2), K(2), K(2), K(3), K(3), K(3), K(3) ];
shadow.closing[5] = [ BL(1), TL(3), TL(3), TL(3), K(3), K(3), K(3), K(2), K(2), K(2) ];
shadow.closing[6] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), K(3), K(3), K(2), K(2) ];
shadow.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(3) ];
// Edit moves below
shadow.away = [];
shadow.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
shadow.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(2), TR(3) ];
shadow.away[2] = [ BR(2), BR(3), BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
shadow.away[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), K(3), K(2), K(2), K(3), K(3) ];
shadow.away[4] = [ TL(3), TR(3), TR(3), K(2), K(2), K(2), K(3), K(3), K(3), K(3) ];
shadow.away[5] = [ TL(3), TL(3), TL(3), TL(3), TL(3), K(3), K(2), K(2), K(3), K(3) ];
shadow.away[6] = [ BL(2), BL(3), BL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
shadow.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(2), TL(3) ];

shadow.far = [];
shadow.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
shadow.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(3), TR(3) ];
shadow.far[2] = [ BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
shadow.far[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), K(2), K(3) ];
shadow.far[4] = [ TL(3), TL(3), TL(3), TR(3), TR(3), TR(3), K(2), K(2), K(3), K(3) ];
shadow.far[5] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), K(2), K(3) ];
shadow.far[6] = [ BL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
shadow.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(3), TL(3) ];

shadow.stressed = [];
shadow.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
shadow.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
shadow.stressed[2] = [ BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
shadow.stressed[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
shadow.stressed[4] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TL(3), TL(3), TL(3), TR(3), TR(3) ];
shadow.stressed[5] = [ TL(3), TL(3), TL(3), TR(3), TL(3), TL(3), TL(3), TR(3), TL(3), TL(3) ];
shadow.stressed[6] = [ BL(3), TL(3), TL(3), TR(3), TL(3), TL(3), TL(3), TR(3), TL(3), TL(3) ];
shadow.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(3), TL(3) ];



// ****************************************************************************
// Young Green Dragon

var ygd = {};
ygd.name = "Young Green Dragon";
ygd.image = "img/ygd.png";
ygd.faction = "evil";
ygd.simple = [ F(1), F(2), BL(1), BR(1) ];
ygd.normal = [ TL(3), BL(2), BL(3), F(3), R(1), K(2), BR(2), BR(3), TR(3) ];
ygd.difficult = [ F(4),  K(3) ];
ygd.actions = (TARGET_LOCK + BOOST + EVADE );

ygd.closing = [];
ygd.closing[0] = [ BL(1), R(1), R(1), R(1), R(1), F(1), F(1), F(1), F(1), BR(1) ];
ygd.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), TR(3) ];
ygd.closing[2] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), K(3), K(3), K(2), K(2) ];
ygd.closing[3] = [ BR(1), TR(3), TR(3), TR(3), K(3), K(3), K(3), K(2), K(2), K(2) ];
ygd.closing[4] = [ TL(3), F(4), TR(3), K(2), K(2), K(2), K(3), K(3), K(3), K(3) ];
ygd.closing[5] = [ BL(1), TL(3), TL(3), TL(3), K(3), K(3), K(3), K(2), K(2), K(2) ];
ygd.closing[6] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), K(3), K(3), K(2), K(2) ];
ygd.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(3) ];
// Edit moves below
ygd.away = [];
ygd.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
ygd.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(2), TR(3) ];
ygd.away[2] = [ BR(2), BR(3), BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ygd.away[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), K(3), K(2), K(2), K(3), K(3) ];
ygd.away[4] = [ TL(3), TR(3), TR(3), K(2), K(2), K(2), K(3), K(3), K(3), K(3) ];
ygd.away[5] = [ TL(3), TL(3), TL(3), TL(3), TL(3), K(3), K(2), K(2), K(3), K(3) ];
ygd.away[6] = [ BL(2), BL(3), BL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ygd.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(2), TL(3) ];

ygd.far = [];
ygd.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
ygd.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(3), TR(3) ];
ygd.far[2] = [ BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ygd.far[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), K(2), K(3) ];
ygd.far[4] = [ TL(3), TL(3), TL(3), TR(3), TR(3), TR(3), K(2), K(2), K(3), K(3) ];
ygd.far[5] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), K(2), K(3) ];
ygd.far[6] = [ BL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ygd.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(3), TL(3) ];

ygd.stressed = [];
ygd.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
ygd.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
ygd.stressed[2] = [ BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ygd.stressed[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ygd.stressed[4] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TL(3), TL(3), TL(3), TR(3), TR(3) ];
ygd.stressed[5] = [ TL(3), TL(3), TL(3), TR(3), TL(3), TL(3), TL(3), TR(3), TL(3), TL(3) ];
ygd.stressed[6] = [ BL(3), TL(3), TL(3), TR(3), TL(3), TL(3), TL(3), TR(3), TL(3), TL(3) ];
ygd.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(3), TL(3) ];


// ****************************************************************************
// Units

var ships = [ abd, acd,  ard, griffon, harpy, sarpiel, shadow, wyvern, ybd, ygd]; 