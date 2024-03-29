// ****************************************************************************
// DnD Attack Wing AI - Units 
// Generated: 2017-03-05 12:38:29

var VERSION = "0.5.5";


// ****************************************************************************
// Adult Red Dragon Copy for Wyvern

var ard = {};
ard.name = "Adult Red Dragon";
ard.image = "img/ard.png";
ard.faction = "evil";
ard.simple = [ F(1), F(2), BL(1), BR(1) ];
ard.normal = [ BL(2), BR(2), TL(3), BL(3), F(3), BR(3), TR(3), F(4) ];
ard.difficult = [ W(3), TL(2), TR(2) ];
ard.actions = (TARGET  + CHARGE + DODGE);

ard.closing = [];
ard.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), W(3), W(3) ];
ard.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
ard.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), W(3), W(3) ];
ard.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), W(3), W(3) ];
ard.closing[4] = [ TL(3), F(4), TR(3), W(3), W(3), W(3), W(3), W(3), W(3), W(3) ];
ard.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), W(3), W(3) ];
ard.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), W(3), W(3) ];
ard.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

ard.away = [];
ard.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
ard.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ard.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
ard.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), W(3), W(3), W(3) ];
ard.away[4] = [ TL(3), TR(3), TR(3), W(3), W(3), W(3), W(3), W(3), W(3), W(3) ];
ard.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), W(3), W(3), W(3) ];
ard.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
ard.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

ard.far = [];
ard.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
ard.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ard.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ard.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ard.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), W(3), W(3) ];
ard.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ard.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ard.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

ard.stressed = [];
ard.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
ard.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
ard.stressed[2] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ard.stressed[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ard.stressed[4] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TR(3), TR(3), TR(3), TR(3) ];
ard.stressed[5] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ard.stressed[6] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ard.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(3), TL(3) ];


// ****************************************************************************
//  Wyvern

var wyvern = {};
wyvern.name = "Wyvern";
wyvern.image = "img/wyvern.png";
wyvern.faction = "neutral";
wyvern.simple = [ F(1), F(2), BL(1), BR(1) ];
wyvern.normal = [ BL(2), BR(2), TL(3), BL(3), F(3), BR(3), TR(3), F(4) ];
wyvern.difficult = [ W(3), TL(2), TR(2) ];
wyvern.actions = (TARGET  + CHARGE + DODGE);

wyvern.closing = [];
wyvern.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), W(3), W(3) ];
wyvern.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
wyvern.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), W(3), W(3) ];
wyvern.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), W(3), W(3) ];
wyvern.closing[4] = [ TL(3), F(4), TR(3), W(3), W(3), W(3), W(3), W(3), W(3), W(3) ];
wyvern.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), W(3), W(3) ];
wyvern.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), W(3), W(3) ];
wyvern.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

wyvern.away = [];
wyvern.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
wyvern.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
wyvern.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
wyvern.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), W(3), W(3), W(3) ];
wyvern.away[4] = [ TL(3), TR(3), TR(3), W(3), W(3), W(3), W(3), W(3), W(3), W(3) ];
wyvern.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), W(3), W(3), W(3) ];
wyvern.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
wyvern.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

wyvern.far = [];
wyvern.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
wyvern.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
wyvern.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
wyvern.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
wyvern.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), W(3), W(3) ];
wyvern.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
wyvern.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
wyvern.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

wyvern.stressed = [];
wyvern.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
wyvern.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
wyvern.stressed[2] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
wyvern.stressed[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
wyvern.stressed[4] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TR(3), TR(3), TR(3), TR(3) ];
wyvern.stressed[5] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
wyvern.stressed[6] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
wyvern.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(3), TL(3) ];

// ****************************************************************************
//  Red Dracolich

var red_dracolich = {};
red_dracolich.name = "Red Dracolich";
red_dracolich.image = "img/red_dracolich.png";
red_dracolich.faction = "evil";
red_dracolich.simple = [ F(1), F(2), BL(1), BR(1) ];
red_dracolich.normal = [ BL(2), BR(2),  BL(3), F(3), BR(3),  F(4) ];
red_dracolich.difficult = [ W(3), TL(2), TR(2), TL(3), TR(3)];
red_dracolich.actions = (TARGET  + CONCENTRATE + DODGE);

red_dracolich.closing = [];
red_dracolich.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), W(3), W(3) ];
red_dracolich.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
red_dracolich.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), W(3), W(3) ];
red_dracolich.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), W(3), W(3) ];
red_dracolich.closing[4] = [ TL(3), F(4), TR(3), W(3), W(3), W(3), W(3), W(3), W(3), W(3) ];
red_dracolich.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), W(3), W(3) ];
red_dracolich.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), W(3), W(3) ];
red_dracolich.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

red_dracolich.away = [];
red_dracolich.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
red_dracolich.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
red_dracolich.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
red_dracolich.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), W(3), W(3), W(3) ];
red_dracolich.away[4] = [ TL(3), TR(3), TR(3), W(3), W(3), W(3), W(3), W(3), W(3), W(3) ];
red_dracolich.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), W(3), W(3), W(3) ];
red_dracolich.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
red_dracolich.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

red_dracolich.far = [];
red_dracolich.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
red_dracolich.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
red_dracolich.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
red_dracolich.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
red_dracolich.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), W(3), W(3) ];
red_dracolich.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
red_dracolich.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
red_dracolich.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

red_dracolich.stressed = [];
red_dracolich.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
red_dracolich.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), BR(2), BR(3) ];
red_dracolich.stressed[2] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
red_dracolich.stressed[3] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
red_dracolich.stressed[4] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BR(2), BR(2), BR(3), BR(3) ];
red_dracolich.stressed[5] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];
red_dracolich.stressed[6] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];
red_dracolich.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), BL(2), BL(3) ];

// ****************************************************************************
// Adult Blue Dragon

var adult_blue_dragon = {};
adult_blue_dragon.name = "Adult Blue Dragon";
adult_blue_dragon.image = "img/abd.png";
adult_blue_dragon.faction = "evil";
adult_blue_dragon.simple = [ F(1), F(2), BL(1), BR(1) ];
adult_blue_dragon.normal = [ BL(2), BR(2), TL(3), BL(3), F(3), BR(3), TR(3), F(4) ];
adult_blue_dragon.difficult = [ W(4), TL(2), TR(2) ];
adult_blue_dragon.actions = (TARGET  + CONCENTRATE + DODGE);

adult_blue_dragon.closing = [];
adult_blue_dragon.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), W(4), W(4) ];
adult_blue_dragon.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
adult_blue_dragon.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), W(4), W(4) ];
adult_blue_dragon.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), W(4), W(4) ];
adult_blue_dragon.closing[4] = [ TL(3), F(4), TR(3), W(4), W(4), W(4), W(4), W(4), W(4), W(4) ];
adult_blue_dragon.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), W(4), W(4) ];
adult_blue_dragon.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), W(4), W(4) ];
adult_blue_dragon.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

adult_blue_dragon.away = [];
adult_blue_dragon.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
adult_blue_dragon.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
adult_blue_dragon.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
adult_blue_dragon.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), W(4), W(4), W(4) ];
adult_blue_dragon.away[4] = [ TL(3), TR(3), TR(3), W(4), W(4), W(4), W(4), W(4), W(4), W(4) ];
adult_blue_dragon.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), W(4), W(4), W(4) ];
adult_blue_dragon.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
adult_blue_dragon.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

adult_blue_dragon.far = [];
adult_blue_dragon.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
adult_blue_dragon.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
adult_blue_dragon.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
adult_blue_dragon.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
adult_blue_dragon.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), W(4), W(4) ];
adult_blue_dragon.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
adult_blue_dragon.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
adult_blue_dragon.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

adult_blue_dragon.stressed = [];
adult_blue_dragon.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
adult_blue_dragon.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
adult_blue_dragon.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
adult_blue_dragon.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
adult_blue_dragon.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
adult_blue_dragon.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
adult_blue_dragon.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
adult_blue_dragon.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];
// ****************************************************************************
// Harpy  Copy for Young Blue Dragon

var harpy = {};
harpy.name = "Harpy";
harpy.image = "img/harpy.png";
harpy.faction = "neutral";
harpy.simple = [ F(1), F(2), BL(1), BR(1) ];
harpy.normal = [ BL(2), BR(2), TL(3), BL(3), F(3), BR(3), TR(3), F(4) ];
harpy.difficult = [ W(3), TL(2), TR(2) ];
harpy.actions = (TARGET  + CHARGE + DODGE);

harpy.closing = [];
harpy.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), W(3), W(3) ];
harpy.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
harpy.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), W(3), W(3) ];
harpy.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), W(3), W(3) ];
harpy.closing[4] = [ TL(3), F(4), TR(3), W(3), W(3), W(3), W(3), W(3), W(3), W(3) ];
harpy.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), W(3), W(3) ];
harpy.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), W(3), W(3) ];
harpy.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

harpy.away = [];
harpy.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
harpy.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
harpy.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
harpy.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), W(3), W(3), W(3) ];
harpy.away[4] = [ TL(3), TR(3), TR(3), W(3), W(3), W(3), W(3), W(3), W(3), W(3) ];
harpy.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), W(3), W(3), W(3) ];
harpy.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
harpy.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

harpy.far = [];
harpy.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
harpy.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
harpy.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
harpy.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
harpy.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), W(3), W(3) ];
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

var young_blue_dragon = {};
young_blue_dragon.name = "Young Blue Dragon";
young_blue_dragon.image = "img/ybd.png";
young_blue_dragon.faction = "evil";
young_blue_dragon.simple = [ F(1), F(2), BL(1), BR(1) ];
young_blue_dragon.normal = [ BL(2), BR(2), TL(2), TR(2), TL(3), BL(3), F(3), BR(3), TR(3) ];
young_blue_dragon.difficult = [ W(3), F(4) ];
young_blue_dragon.actions = (TARGET  + CONCENTRATE + DODGE);

young_blue_dragon.closing = [];
young_blue_dragon.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), W(3), W(3) ];
young_blue_dragon.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
young_blue_dragon.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), W(3), W(3) ];
young_blue_dragon.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), W(3), W(3) ];
young_blue_dragon.closing[4] = [ TL(3), F(4), TR(3), W(3), W(3), W(3), W(3), W(3), W(3), W(3) ];
young_blue_dragon.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), W(3), W(3) ];
young_blue_dragon.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), W(3), W(3) ];
young_blue_dragon.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

young_blue_dragon.away = [];
young_blue_dragon.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
young_blue_dragon.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
young_blue_dragon.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
young_blue_dragon.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), W(3), W(3), W(3) ];
young_blue_dragon.away[4] = [ TL(3), TR(3), TR(3), W(3), W(3), W(3), W(3), W(3), W(3), W(3) ];
young_blue_dragon.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), W(3), W(3), W(3) ];
young_blue_dragon.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
young_blue_dragon.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

young_blue_dragon.far = [];
young_blue_dragon.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
young_blue_dragon.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
young_blue_dragon.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
young_blue_dragon.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
young_blue_dragon.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), W(3), W(3) ];
young_blue_dragon.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
young_blue_dragon.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
young_blue_dragon.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

young_blue_dragon.stressed = [];
young_blue_dragon.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
young_blue_dragon.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
young_blue_dragon.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
young_blue_dragon.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
young_blue_dragon.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
young_blue_dragon.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
young_blue_dragon.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
young_blue_dragon.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
//  Young Black Dragon

var young_black_dragon = {};
young_black_dragon.name = "Young Black Dragon";
young_black_dragon.image = "img/ykd.png";
young_black_dragon.faction = "evil";
young_black_dragon.simple = [ F(1), F(2), BL(1), BR(1) ];
young_black_dragon.normal = [ W(1), R(1), BL(2), BR(2), TL(2), TR(2),  BL(3), F(3), BR(3) ];
young_black_dragon.difficult = [ W(3), F(4) ];
young_black_dragon.actions = (TARGET  + FEINT + DODGE);

young_black_dragon.closing = [];
young_black_dragon.closing[0] = [ R(1), R(1), F(1), F(1), F(1), F(2), F(2), F(2), W(1), W(3) ];
young_black_dragon.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
young_black_dragon.closing[2] = [ TR(2), TR(2), TR(2), TR(2), BR(3), BR(3), R(1), TR(2), W(3), W(3) ];
young_black_dragon.closing[3] = [ W(1), TR(2), TR(2), TR(2), TR(2), R(1), TR(2), TR(2), W(3), W(3) ];
young_black_dragon.closing[4] = [ TL(2), F(4), TR(2), W(1), W(1), W(1), W(3), W(3), W(3), W(3) ];
young_black_dragon.closing[5] = [ W(1), TL(2), TL(2), TL(2), TL(2), R(1), TL(2), TL(2), W(3), W(3) ];
young_black_dragon.closing[6] = [  TL(2), TL(2), TL(2), TL(2), BL(3), BL(3), R(1), TL(2), W(3), W(3) ];
young_black_dragon.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

young_black_dragon.away = [];
young_black_dragon.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
young_black_dragon.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), BR(3) ];
young_black_dragon.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
young_black_dragon.away[3] = [ TR(2), TR(2), TR(2), W(1), W(1), W(1), TR(2), W(3), W(3), W(3) ];
young_black_dragon.away[4] = [ TL(2), TR(2), W(1), W(1), W(1), W(1), W(3), W(3), W(3), W(3) ];
young_black_dragon.away[5] = [ TL(2), TL(2), TL(2), W(1), W(1), W(1), TL(2), W(3), W(3), W(3) ];
young_black_dragon.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
young_black_dragon.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), BL(3)  ];

young_black_dragon.far = [];
young_black_dragon.far[0] = [ BL(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4), BR(3) ];
young_black_dragon.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), F(4) ];
young_black_dragon.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), BR(3), BR(3) ];
young_black_dragon.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), W(1), W(1), W(3), W(3) ];
young_black_dragon.far[4] = [ TL(2), TL(2), W(1), W(3), TR(2), TR(2), W(3), W(1), W(3), W(3) ];
young_black_dragon.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), W(1), W(1), W(3), W(3)];
young_black_dragon.far[6] = [TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), BL(3), BL(3) ];
young_black_dragon.far[7] = [BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), F(4)  ];

young_black_dragon.stressed = [];
young_black_dragon.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(3), R(1) ];
young_black_dragon.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), BR(3) ];
young_black_dragon.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), BR(3), TR(2) ];
young_black_dragon.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), W(1), W(1), W(1), W(1), W(1) ];
young_black_dragon.stressed[4] = [ TL(2), TL(2), TL(2), R(1), W(1), W(1), TR(2), TR(2), W(1), W(1) ];
young_black_dragon.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), W(1), W(1), W(1), W(1), W(1) ];
young_black_dragon.stressed[6] = [  TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), BL(3), TL(2) ];
young_black_dragon.stressed[7] = [  F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), BL(3) ];

//****************************************************************************
//  Griffon

var griffon = {};
griffon.name = "Griffon";
griffon.image = "img/griffon.png";
griffon.faction = "neutral";
griffon.simple = [ F(1), F(2), BL(1), BR(1) ];
griffon.normal = [ BL(2), BR(2), TL(2), TR(2), TL(3), BL(3), F(3), F(4) , BR(3), TR(3) ];
griffon.difficult = [ W(3)];
griffon.actions = (TARGET  + FEINT + CHARGE + DODGE);

griffon.closing = [];
griffon.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), W(3), W(3) ];
griffon.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
griffon.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), W(3), W(3) ];
griffon.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), W(3), W(3) ];
griffon.closing[4] = [ TL(3), F(4), TR(3), W(3), W(3), W(3), W(3), W(3), W(3), W(3) ];
griffon.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), W(3), W(3) ];
griffon.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), W(3), W(3) ];
griffon.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];
  
griffon.away = [];
griffon.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
griffon.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
griffon.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
griffon.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), W(3), W(3), W(3) ];
griffon.away[4] = [ TL(3), TR(3), TR(3), W(3), W(3), W(3), W(3), W(3), W(3), W(3) ];
griffon.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), W(3), W(3), W(3) ];
griffon.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
griffon.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

griffon.far = [];
griffon.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
griffon.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
griffon.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
griffon.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
griffon.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), W(3), W(3) ];
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

//****************************************************************************
//  Vrock Demon

var vrock_demon = {};
vrock_demon.name = "Vrock Demon";
vrock_demon.image = "img/vrock_demon.png";
vrock_demon.faction = "evil";
vrock_demon.simple = [ F(1), F(2), BL(1), BR(1) ];
vrock_demon.normal = [ BL(2), BR(2), TL(2), TR(2),  BL(3), F(3), F(4) , BR(3) ];
vrock_demon.difficult = [ W(3), TL(3), TR(3)];
vrock_demon.actions = (TARGET   + CHARGE + DODGE);

vrock_demon.closing = [];
vrock_demon.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), W(3), W(3) ];
vrock_demon.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
vrock_demon.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), W(3), W(3) ];
vrock_demon.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), W(3), W(3) ];
vrock_demon.closing[4] = [ TL(3), F(4), TR(3), W(3), W(3), W(3), W(3), W(3), W(3), W(3) ];
vrock_demon.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), W(3), W(3) ];
vrock_demon.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), W(3), W(3) ];
vrock_demon.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];
  
vrock_demon.away = [];
vrock_demon.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
vrock_demon.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
vrock_demon.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
vrock_demon.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), W(3), W(3), W(3) ];
vrock_demon.away[4] = [ TL(3), TR(3), TR(3), W(3), W(3), W(3), W(3), W(3), W(3), W(3) ];
vrock_demon.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), W(3), W(3), W(3) ];
vrock_demon.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
vrock_demon.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

vrock_demon.far = [];
vrock_demon.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
vrock_demon.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
vrock_demon.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
vrock_demon.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
vrock_demon.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), W(3), W(3) ];
vrock_demon.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
vrock_demon.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
vrock_demon.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

vrock_demon.stressed = [];
vrock_demon.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
vrock_demon.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
vrock_demon.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
vrock_demon.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
vrock_demon.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2) ];
vrock_demon.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
vrock_demon.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
vrock_demon.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];
//****************************************************************************
//  Gargoyle

var gargoyle = {};
gargoyle.name = "Gargoyle";
gargoyle.image = "img/gargoyle.png";
gargoyle.faction = "evil";
gargoyle.simple = [ F(1), F(2), BL(1), BR(1) ];
gargoyle.normal = [ BL(2), BR(2), TL(2), TR(2),  BL(3), F(3), F(4) , BR(3) ];
gargoyle.difficult = [ W(3), TL(3), TR(3)];
gargoyle.actions = (CHARGE + CONCENTRATE + DODGE);

gargoyle.closing = [];
gargoyle.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), W(3), W(3) ];
gargoyle.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
gargoyle.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), W(3), W(3) ];
gargoyle.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), W(3), W(3) ];
gargoyle.closing[4] = [ TL(3), F(4), TR(3), W(3), W(3), W(3), W(3), W(3), W(3), W(3) ];
gargoyle.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), W(3), W(3) ];
gargoyle.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), W(3), W(3) ];
gargoyle.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];
  
gargoyle.away = [];
gargoyle.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
gargoyle.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
gargoyle.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
gargoyle.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), W(3), W(3), W(3) ];
gargoyle.away[4] = [ TL(3), TR(3), TR(3), W(3), W(3), W(3), W(3), W(3), W(3), W(3) ];
gargoyle.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), W(3), W(3), W(3) ];
gargoyle.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
gargoyle.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

gargoyle.far = [];
gargoyle.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
gargoyle.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
gargoyle.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
gargoyle.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
gargoyle.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), W(3), W(3) ];
gargoyle.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
gargoyle.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
gargoyle.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

gargoyle.stressed = [];
gargoyle.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
gargoyle.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
gargoyle.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
gargoyle.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
gargoyle.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2) ];
gargoyle.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
gargoyle.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
gargoyle.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// Adult Copper Dragon (Modify to make Ancient White Dragon)

var adult_copper_dragon = {};
adult_copper_dragon.name = "Adult Copper Dragon";
adult_copper_dragon.image = "img/acd.png";
adult_copper_dragon.faction = "good"; 
adult_copper_dragon.simple = [ BL(1), BR(1), F(2), F(3) ];
adult_copper_dragon.normal = [ TL(2), TL(3), BL(2), BL(3), F(4), BR(2), BR(3), TR(2), TR(3) ];
adult_copper_dragon.difficult = [ W(4), F(5) ];
adult_copper_dragon.actions = (TARGET + FEINT + CONCENTRATE + DODGE);

adult_copper_dragon.closing = [];
adult_copper_dragon.closing[0] = [ BL(1), F(2), F(2), F(2), F(2), F(3), F(3), F(3), W(4), W(4) ];
adult_copper_dragon.closing[1] = [ F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(3) ];
adult_copper_dragon.closing[2] = [ BR(2), BR(2), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), W(4), W(4) ];
adult_copper_dragon.closing[3] = [ BR(1), BR(2), BR(2), TR(3), TR(3), TR(3), TR(3), TR(3), W(4), W(4) ];
adult_copper_dragon.closing[4] = [ TL(3), F(5), TR(3), W(4), W(4), W(4), W(4), W(4), W(4), W(4) ];
adult_copper_dragon.closing[5] = [ BL(1), BL(2), BL(2), TL(3), TL(3), TL(3), TL(3), TL(3), W(4), W(4) ];
adult_copper_dragon.closing[6] = [ BL(2), BL(2), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), W(4), W(4) ];
adult_copper_dragon.closing[7] = [ F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(3) ];

adult_copper_dragon.away = [];
adult_copper_dragon.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
adult_copper_dragon.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(3), TR(3) ];
adult_copper_dragon.away[2] = [ BR(2), BR(3), BR(3), BR(2), BR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
adult_copper_dragon.away[3] = [ BR(2), BR(2), TR(3), TR(3), TR(3), TR(3), TR(3), W(4), W(4), W(4) ];
adult_copper_dragon.away[4] = [ TL(3), TR(3), TR(3), W(4), W(4), W(4), W(4), W(4), W(4), W(4) ];
adult_copper_dragon.away[5] = [ BL(2), BL(2), TL(3), TL(3), TL(3), TL(3), TL(3), W(4), W(4), W(4) ];
adult_copper_dragon.away[6] = [ BL(2), BL(3), BL(3), BL(2), BL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
adult_copper_dragon.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(3), TL(3) ];

adult_copper_dragon.far = [];
adult_copper_dragon.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
adult_copper_dragon.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3), TR(3) ];
adult_copper_dragon.far[2] = [ BR(2), BR(2), BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
adult_copper_dragon.far[3] = [ BR(2), BR(2), BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
adult_copper_dragon.far[4] = [ BL(2), TL(3), TL(3), TL(3), BR(2), TR(3), TR(3), TR(3), W(4), W(4) ];
adult_copper_dragon.far[5] = [ BL(2), BL(2), BL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
adult_copper_dragon.far[6] = [ BL(2), BL(2), BL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
adult_copper_dragon.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(3), TL(3) ];

adult_copper_dragon.stressed = [];
adult_copper_dragon.stressed[0] = [ BL(1), BL(3), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5) ];
adult_copper_dragon.stressed[1] = [ F(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
adult_copper_dragon.stressed[2] = [ BR(2), BR(2), BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
adult_copper_dragon.stressed[3] = [ BR(2), BR(2), BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
adult_copper_dragon.stressed[4] = [ BL(2), BL(3), TL(3), TL(3), TL(3), TL(3), BR(2), TR(3), TR(3), TR(3) ];
adult_copper_dragon.stressed[5] = [ BL(2), BL(2), BL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
adult_copper_dragon.stressed[6] = [ BL(2), BL(2), BL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
adult_copper_dragon.stressed[7] = [ F(2), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), BL(3), TL(3) ];

// ****************************************************************************
// Ancient White Dragon

var ancient_white_dragon = {};
ancient_white_dragon.name = "Ancient White Dragon";
ancient_white_dragon.image = "img/ancient_white_dragon.png";
ancient_white_dragon.faction = "evil"; 
ancient_white_dragon.simple = [ BL(1), BR(1), F(1), F(2)  ];
ancient_white_dragon.normal = [  F(3), BL(2), BL(3), F(4), BR(2), BR(3), F(5)  ];
ancient_white_dragon.difficult = [  BL(4), BR(4), TL(3), TR(3) ];
ancient_white_dragon.actions = (TARGET + CHARGE + DODGE);

ancient_white_dragon.closing = [];
ancient_white_dragon.closing[0] = [ F(1), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(1), F(2) ];
ancient_white_dragon.closing[1] = [ F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(3) ];
ancient_white_dragon.closing[2] = [ BR(2), BR(2), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), BR(1), TR(3) ];
ancient_white_dragon.closing[3] = [ BR(1), BR(2), BR(2), TR(3), TR(3), TR(3), TR(3), TR(3), BR(3), TR(3) ];
ancient_white_dragon.closing[4] = [ TL(3), F(5), TR(3), TL(3),  TR(3), BL(3), BR(3), TR(3), TL(3),  TR(3), ];
ancient_white_dragon.closing[5] = [ BL(1), BL(2), BL(2), TL(3), TL(3), TL(3), TL(3), TL(3), BL(3), TL(3) ];
ancient_white_dragon.closing[6] = [ BL(2), BL(2), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), BL(1), TL(3) ];
ancient_white_dragon.closing[7] = [  F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(3) ];

ancient_white_dragon.away = [];
ancient_white_dragon.away[0] = [ F(4), F(4), F(4), F(4), F(2), F(3), F(3), F(3), F(5), F(5) ];
ancient_white_dragon.away[1] = [ BR(2), BR(2), BR(2), BR(4), BR(3), BR(3), BR(3), BR(4), TR(3), TR(3) ];
ancient_white_dragon.away[2] = [ BR(2), BR(3), BR(3), BR(4), BR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ancient_white_dragon.away[3] = [ BR(2), BR(2), TR(3), TR(3), TR(3), TR(3), TR(3), BR(3), TR(3), TR(3) ];
ancient_white_dragon.away[4] = [ TL(3), TR(3), TL(3), TR(3),TL(3), TR(3),TL(3), TR(3),TL(3), TR(3) ];
ancient_white_dragon.away[5] = [ BL(2), BL(2), TL(3), TL(3), TL(3), TL(3), TL(3), BL(3), TL(3), TL(3)  ];
ancient_white_dragon.away[6] = [ BL(2), BL(3), BL(3), BL(4), BL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ancient_white_dragon.away[7] = [ BL(2), BL(2), BL(2), BL(4), BL(3), BL(3), BL(3), BL(4), TL(3), TL(3)  ];

ancient_white_dragon.far = [];
ancient_white_dragon.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
ancient_white_dragon.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3), TR(3) ];
ancient_white_dragon.far[2] = [ BR(2), BR(2), BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ancient_white_dragon.far[3] = [ BR(2), BR(2), BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ancient_white_dragon.far[4] = [ BL(2), TL(3), TL(3), TL(3), BR(2), TR(3), TR(3), TR(3), TL(3), TR(3) ];
ancient_white_dragon.far[5] = [ BL(2), BL(2), BL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ancient_white_dragon.far[6] = [ BL(2), BL(2), BL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ancient_white_dragon.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(3), TL(3) ];

ancient_white_dragon.stressed = [];
ancient_white_dragon.stressed[0] = [ BL(1), BL(3), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5) ];
ancient_white_dragon.stressed[1] = [ F(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3) ];
ancient_white_dragon.stressed[2] = [ BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3), BR(3), BR(3), BR(3) ];
ancient_white_dragon.stressed[3] = [ BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3), BR(3), BR(3), BR(3) ];
ancient_white_dragon.stressed[4] = [ BL(2), BL(3), BL(3), BL(3), BL(3), BL(3), BR(2), BR(3), BR(3), BR(3) ];
ancient_white_dragon.stressed[5] = [ BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3), BL(3), BL(3), BL(3) ];
ancient_white_dragon.stressed[6] = [ BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3), BL(3), BL(3), BL(3) ];
ancient_white_dragon.stressed[7] = [ F(2), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3) ];

// ****************************************************************************
// Sarpiel

var sarpiel = {};
sarpiel.name = "Movanic Deva Angel";
sarpiel.image = "img/sarpiel.png";
sarpiel.faction = "good";
sarpiel.simple = [ F(1), F(2), BL(1), BR(1) ];
sarpiel.normal = [ PRV(0), PL(0), PR(0), PH(0), TL(2), BL(2), BL(3), F(3), F(4), BR(2), BR(3), TR(2) ];
sarpiel.difficult = [ R(1), W(3) ];
sarpiel.actions = (TARGET + CONCENTRATE + DODGE + CHARGE);

sarpiel.closing = [];
sarpiel.closing[0] = [ PH(0), R(1), R(1), R(1), PH(0), PH(0), F(1), F(1), F(1), PH(0) ];
sarpiel.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), TR(2) ];
sarpiel.closing[2] = [ TR(2), TR(2), TR(2), TR(2), PR(0), PR(0), PR(0), PR(0), W(3), W(3) ];
sarpiel.closing[3] = [ PR(0), TR(2), TR(2), TR(2), PRV(0), PRV(0), PRV(0), W(3), W(3), W(3) ];
sarpiel.closing[4] = [ TL(2), F(4), TR(2), W(3), W(3), W(3), PRV(0), PRV(0), PRV(0), PRV(0) ];
sarpiel.closing[5] = [ PL(0), TL(2), TL(2), TL(2), PRV(0), PRV(0), PRV(0), W(3), W(3), W(3) ];
sarpiel.closing[6] = [ TL(2), TL(2), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0), W(3), W(3) ];
sarpiel.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(2) ];

sarpiel.away = [];
sarpiel.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
sarpiel.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(2), TR(2) ];
sarpiel.away[2] = [ PR(0), BR(3), BR(3), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
sarpiel.away[3] = [ TR(2), TR(2), PR(0), PR(0), PR(0), PRV(0), W(3), W(3), PRV(0), PRV(0) ];
sarpiel.away[4] = [ TL(2), TR(2), TR(2), W(3), W(3), W(3), PRV(0), PRV(0), PRV(0), PRV(0) ];
sarpiel.away[5] = [ TL(2), TL(2), PL(0), PL(0), PL(0), PRV(0), W(3), W(3), PRV(0), PRV(0) ];
sarpiel.away[6] = [ PL(0), BL(3), BL(3), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2)  ];
sarpiel.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(2), TL(2) ];

sarpiel.far = [];
sarpiel.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
sarpiel.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2) ];
sarpiel.far[2] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
sarpiel.far[3] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), W(3), PRV(0) ];
sarpiel.far[4] = [ TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), W(3), W(3), PRV(0), PRV(0) ];
sarpiel.far[5] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), W(3), PRV(0)];
sarpiel.far[6] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
sarpiel.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2) ];

sarpiel.stressed = [];
sarpiel.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
sarpiel.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
sarpiel.stressed[2] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(2), PR(0), PR(0), PR(0), PR(0) ];
sarpiel.stressed[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
sarpiel.stressed[4] = [ F(2), PRV(0), PRV(0), PRV(0), PRV(0), TL(2), TL(2), PRV(0), TR(2), TR(2) ];
sarpiel.stressed[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(2), PRV(0), PRV(0), PRV(0), PRV(0)  ];
sarpiel.stressed[6] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0) ];
sarpiel.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2)  ];

// ****************************************************************************
// Ogre Mage

var ogre_mage = {};
ogre_mage.name = "Ogre Mage";
ogre_mage.image = "img/ogre_mage.png";
ogre_mage.faction = "evil";
ogre_mage.simple = [ F(1), F(2), BL(1), BR(1) ];
ogre_mage.normal = [ PRV(0), PL(0), PR(0), PH(0), TL(2), BL(2), BL(3), F(3), F(4), BR(2), BR(3), TR(2) ];
ogre_mage.difficult = [ R(1), W(3) ];
ogre_mage.actions = (TARGET + CONCENTRATE + CHARGE);

ogre_mage.closing = [];
ogre_mage.closing[0] = [ PH(0), R(1), R(1), R(1), PH(0), PH(0), F(1), F(1), F(1), PH(0) ];
ogre_mage.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), TR(2) ];
ogre_mage.closing[2] = [ TR(2), TR(2), TR(2), TR(2), PR(0), PR(0), PR(0), PR(0), W(3), W(3) ];
ogre_mage.closing[3] = [ PR(0), TR(2), TR(2), TR(2), PRV(0), PRV(0), PRV(0), W(3), W(3), W(3) ];
ogre_mage.closing[4] = [ TL(2), F(4), TR(2), W(3), W(3), W(3), PRV(0), PRV(0), PRV(0), PRV(0) ];
ogre_mage.closing[5] = [ PL(0), TL(2), TL(2), TL(2), PRV(0), PRV(0), PRV(0), W(3), W(3), W(3) ];
ogre_mage.closing[6] = [ TL(2), TL(2), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0), W(3), W(3) ];
ogre_mage.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(2) ];

ogre_mage.away = [];
ogre_mage.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
ogre_mage.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(2), TR(2) ];
ogre_mage.away[2] = [ PR(0), BR(3), BR(3), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ogre_mage.away[3] = [ TR(2), TR(2), PR(0), PR(0), PR(0), PRV(0), W(3), W(3), PRV(0), PRV(0) ];
ogre_mage.away[4] = [ TL(2), TR(2), TR(2), W(3), W(3), W(3), PRV(0), PRV(0), PRV(0), PRV(0) ];
ogre_mage.away[5] = [ TL(2), TL(2), PL(0), PL(0), PL(0), PRV(0), W(3), W(3), PRV(0), PRV(0) ];
ogre_mage.away[6] = [ PL(0), BL(3), BL(3), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2)  ];
ogre_mage.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(2), TL(2) ];

ogre_mage.far = [];
ogre_mage.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
ogre_mage.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2) ];
ogre_mage.far[2] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ogre_mage.far[3] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), W(3), PRV(0) ];
ogre_mage.far[4] = [ TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), W(3), W(3), PRV(0), PRV(0) ];
ogre_mage.far[5] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), W(3), PRV(0)];
ogre_mage.far[6] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
ogre_mage.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2) ];

ogre_mage.stressed = [];
ogre_mage.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
ogre_mage.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
ogre_mage.stressed[2] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(2), PR(0), PR(0), PR(0), PR(0) ];
ogre_mage.stressed[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
ogre_mage.stressed[4] = [ F(2), PRV(0), PRV(0), PRV(0), PRV(0), TL(2), TL(2), PRV(0), TR(2), TR(2) ];
ogre_mage.stressed[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(2), PRV(0), PRV(0), PRV(0), PRV(0)  ];
ogre_mage.stressed[6] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0) ];
ogre_mage.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2)  ];

// ****************************************************************************
// Wraith

var wraith = {};
wraith.name = "Wraith";
wraith.image = "img/wraith.png";
wraith.faction = "evil";
wraith.simple = [ F(1), F(2), BL(1), BR(1) ];
wraith.normal = [ PRV(0), PL(0), PR(0), PH(0), W(1), TL(2), BL(2), BL(3), F(3), BR(2), BR(3), TR(2) ];
wraith.difficult = [ R(1), W(3) ];
wraith.actions = (TARGET + CONCENTRATE + FEINT + DODGE);

wraith.closing = [];
wraith.closing[0] = [ PH(0), R(1), R(1), R(1), PH(0), PH(0), F(1), F(1), F(1), PH(0) ];
wraith.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), TR(2) ];
wraith.closing[2] = [ TR(2), TR(2), TR(2), TR(2), PR(0), PR(0), PR(0), PR(0), W(1), W(1) ];
wraith.closing[3] = [ PR(0), TR(2), TR(2), TR(2), W(1), PRV(0), PRV(0), W(1), W(1), W(3) ];
wraith.closing[4] = [ TL(2), F(3), TR(2), W(1), W(1), W(3), W(1), W(1), PRV(0), PRV(0) ];
wraith.closing[5] = [ PL(0), TL(2), TL(2), TL(2), W(1), PRV(0), PRV(0), W(1), W(1), W(3) ];
wraith.closing[6] = [ TL(2), TL(2), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0), W(1), W(1) ];
wraith.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(2) ];

wraith.away = [];
wraith.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3) ];
wraith.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(2), TR(2) ];
wraith.away[2] = [ PR(0), BR(3), BR(3), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
wraith.away[3] = [ TR(2), TR(2), PR(0), PR(0), PR(0), W(1), W(1), W(1), PRV(0), PRV(0) ];
wraith.away[4] = [ TL(2), TR(2), TR(2), W(1), W(1), W(3), W(1), W(1), PRV(0), PRV(0) ];
wraith.away[5] = [ TL(2), TL(2), PL(0), PL(0), PL(0), W(1), W(1), W(1), PRV(0), PRV(0) ];
wraith.away[6] = [ PL(0), BL(3), BL(3), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2)  ];
wraith.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(2), TL(2) ];

wraith.far = [];
wraith.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), BR(3) ];
wraith.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2) ];
wraith.far[2] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
wraith.far[3] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), W(1), PRV(0) ];
wraith.far[4] = [ TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), W(1), W(1), W(1), PRV(0) ];
wraith.far[5] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), W(1), PRV(0)];
wraith.far[6] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
wraith.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2) ];

wraith.stressed = [];
wraith.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(3), F(3) ];
wraith.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
wraith.stressed[2] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(2), PR(0), PR(0), PR(0), PR(0) ];
wraith.stressed[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(2), W(1), W(1), PRV(0), PRV(0) ];
wraith.stressed[4] = [ F(2), W(1), W(1), W(1), PRV(0), TL(2), TL(2), PRV(0), TR(2), TR(2) ];
wraith.stressed[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(2), W(1), W(1), PRV(0), PRV(0)  ];
wraith.stressed[6] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0) ];
wraith.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2)  ];
// ****************************************************************************
// Nightmare

var nightmare = {};
nightmare.name = "Nightmare";
nightmare.image = "img/nightmare.png";
nightmare.faction = "evil";
nightmare.simple = [ F(1), F(2), BL(1), BR(1) ];
nightmare.normal = [ PRV(0), PL(0), PR(0), PH(0), TL(2), BL(2), BL(3), F(3), F(4), BR(2), BR(3), TR(2) ];
nightmare.difficult = [ R(1), W(3) ];
nightmare.actions = (FEINT  + DODGE + CHARGE);

nightmare.closing = [];
nightmare.closing[0] = [ PH(0), R(1), R(1), R(1), PH(0), PH(0), F(1), F(1), F(1), PH(0) ];
nightmare.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), TR(2) ];
nightmare.closing[2] = [ TR(2), TR(2), TR(2), TR(2), PR(0), PR(0), PR(0), PR(0), W(3), W(3) ];
nightmare.closing[3] = [ PR(0), TR(2), TR(2), TR(2), PRV(0), PRV(0), PRV(0), W(3), W(3), W(3) ];
nightmare.closing[4] = [ TL(2), F(4), TR(2), W(3), W(3), W(3), PRV(0), PRV(0), PRV(0), PRV(0) ];
nightmare.closing[5] = [ PL(0), TL(2), TL(2), TL(2), PRV(0), PRV(0), PRV(0), W(3), W(3), W(3) ];
nightmare.closing[6] = [ TL(2), TL(2), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0), W(3), W(3) ];
nightmare.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(2) ];

nightmare.away = [];
nightmare.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
nightmare.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(2), TR(2) ];
nightmare.away[2] = [ PR(0), BR(3), BR(3), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
nightmare.away[3] = [ TR(2), TR(2), PR(0), PR(0), PR(0), PRV(0), W(3), W(3), PRV(0), PRV(0) ];
nightmare.away[4] = [ TL(2), TR(2), TR(2), W(3), W(3), W(3), PRV(0), PRV(0), PRV(0), PRV(0) ];
nightmare.away[5] = [ TL(2), TL(2), PL(0), PL(0), PL(0), PRV(0), W(3), W(3), PRV(0), PRV(0) ];
nightmare.away[6] = [ PL(0), BL(3), BL(3), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2)  ];
nightmare.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(2), TL(2) ];

nightmare.far = [];
nightmare.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
nightmare.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2) ];
nightmare.far[2] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
nightmare.far[3] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), W(3), PRV(0) ];
nightmare.far[4] = [ TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), W(3), W(3), PRV(0), PRV(0) ];
nightmare.far[5] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), W(3), PRV(0)];
nightmare.far[6] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
nightmare.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2) ];

nightmare.stressed = [];
nightmare.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
nightmare.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
nightmare.stressed[2] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(2), PR(0), PR(0), PR(0), PR(0) ];
nightmare.stressed[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
nightmare.stressed[4] = [ F(2), PRV(0), PRV(0), PRV(0), PRV(0), TL(2), TL(2), PRV(0), TR(2), TR(2) ];
nightmare.stressed[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(2), PRV(0), PRV(0), PRV(0), PRV(0)  ];
nightmare.stressed[6] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0) ];
nightmare.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2)  ];
// ****************************************************************************
// Frost Giant

var frost_giant = {};
frost_giant.name = "Frost Giant";
frost_giant.image = "img/frost_giant.png";
frost_giant.faction = "evil";
frost_giant.simple = [ F(1), F(2), BL(1), BR(1) ];
frost_giant.normal = [ PRV(0), PL(0), PR(0), PH(0), TL(2), BL(2), BL(3), F(3),  BR(2), BR(3), TR(2) ];
frost_giant.difficult = [ R(1), F(4), W(3) ];
frost_giant.actions = (CHARGE  + TARGET + CONCENTRATE);

frost_giant.closing = [];
frost_giant.closing[0] = [ PH(0), R(1), R(1), R(1), PH(0), PH(0), F(1), F(1), F(1), PH(0) ];
frost_giant.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), TR(2) ];
frost_giant.closing[2] = [ TR(2), TR(2), TR(2), TR(2), PR(0), PR(0), PR(0), PR(0), W(3), W(3) ];
frost_giant.closing[3] = [ PR(0), TR(2), TR(2), TR(2), PRV(0), PRV(0), PRV(0), W(3), W(3), W(3) ];
frost_giant.closing[4] = [ TL(2), F(4), TR(2), W(3), W(3), W(3), PRV(0), PRV(0), PRV(0), PRV(0) ];
frost_giant.closing[5] = [ PL(0), TL(2), TL(2), TL(2), PRV(0), PRV(0), PRV(0), W(3), W(3), W(3) ];
frost_giant.closing[6] = [ TL(2), TL(2), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0), W(3), W(3) ];
frost_giant.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(2) ];

frost_giant.away = [];
frost_giant.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
frost_giant.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(2), TR(2) ];
frost_giant.away[2] = [ PR(0), BR(3), BR(3), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
frost_giant.away[3] = [ TR(2), TR(2), PR(0), PR(0), PR(0), PRV(0), W(3), W(3), PRV(0), PRV(0) ];
frost_giant.away[4] = [ TL(2), TR(2), TR(2), W(3), W(3), W(3), PRV(0), PRV(0), PRV(0), PRV(0) ];
frost_giant.away[5] = [ TL(2), TL(2), PL(0), PL(0), PL(0), PRV(0), W(3), W(3), PRV(0), PRV(0) ];
frost_giant.away[6] = [ PL(0), BL(3), BL(3), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2)  ];
frost_giant.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(2), TL(2) ];

frost_giant.far = [];
frost_giant.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
frost_giant.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2) ];
frost_giant.far[2] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
frost_giant.far[3] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), W(3), PRV(0) ];
frost_giant.far[4] = [ TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), W(3), W(3), PRV(0), PRV(0) ];
frost_giant.far[5] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), W(3), PRV(0)];
frost_giant.far[6] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
frost_giant.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2) ];

frost_giant.stressed = [];
frost_giant.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(3), F(3) ];
frost_giant.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
frost_giant.stressed[2] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(2), PR(0), PR(0), PR(0), PR(0) ];
frost_giant.stressed[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
frost_giant.stressed[4] = [ F(2), PRV(0), PRV(0), PRV(0), PRV(0), TL(2), TL(2), PRV(0), TR(2), TR(2) ];
frost_giant.stressed[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(2), PRV(0), PRV(0), PRV(0), PRV(0)  ];
frost_giant.stressed[6] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0) ];
frost_giant.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2)  ];

// ****************************************************************************
// Mind Flayer

var mind_flayer = {};
mind_flayer.name = "Mind Flayer";
mind_flayer.image = "img/mind_flayer.png";
mind_flayer.faction = "evil";
mind_flayer.simple = [ F(1), F(2), BL(1), BR(1) ];
mind_flayer.normal = [ PRV(0), PL(0), PR(0), PH(0), TL(1), TR(1), TL(2), BL(2),  BR(2),  TR(2) ];
mind_flayer.difficult = [ R(1), F(3), W(2) ];
mind_flayer.actions = (DODGE  + TARGET + CONCENTRATE);

mind_flayer.closing = [];
mind_flayer.closing[0] = [ PH(0), R(1), R(1), R(1), PH(0), PH(0), F(1), F(1), F(1), PH(0) ];
mind_flayer.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), TR(1) ];
mind_flayer.closing[2] = [ TR(1), TR(1), TR(1), TR(1), PR(0), PR(0), PR(0), PR(0), W(2), W(2) ];
mind_flayer.closing[3] = [ PR(0), TR(1), TR(1), TR(1), PRV(0), PRV(0), PRV(0), W(2), W(2), W(2) ];
mind_flayer.closing[4] = [ TL(1), F(3), TR(1), W(2), W(2), W(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
mind_flayer.closing[5] = [ PL(0), TL(1), TL(1), TL(1), PRV(0), PRV(0), PRV(0), W(2), W(2), W(2) ];
mind_flayer.closing[6] = [ TL(1), TL(1), TL(1), TL(1), PL(0), PL(0), PL(0), PL(0), W(2), W(2) ];
mind_flayer.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(1) ];

mind_flayer.away = [];
mind_flayer.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(2) ];
mind_flayer.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(2) ];
mind_flayer.away[2] = [ PR(0), BR(2), BR(2), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
mind_flayer.away[3] = [ TR(2), TR(2), PR(0), PR(0), PR(0), PRV(0), W(2), W(2), PRV(0), PRV(0) ];
mind_flayer.away[4] = [ TL(2), TR(2), TR(2), W(2), W(2), W(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
mind_flayer.away[5] = [ TL(2), TL(2), PL(0), PL(0), PL(0), PRV(0), W(2), W(2), PRV(0), PRV(0) ];
mind_flayer.away[6] = [ PL(0), BL(2), BL(2), PL(0), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2)  ];
mind_flayer.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2) ];

mind_flayer.far = [];
mind_flayer.far[0] = [ BL(2), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), BR(2) ];
mind_flayer.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2) ];
mind_flayer.far[2] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
mind_flayer.far[3] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), W(2), PRV(0) ];
mind_flayer.far[4] = [ TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), W(2), W(2), PRV(0), PRV(0) ];
mind_flayer.far[5] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), W(2), PRV(0)];
mind_flayer.far[6] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
mind_flayer.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2) ];

mind_flayer.stressed = [];
mind_flayer.stressed[0] = [ BL(1), BL(2), F(1), F(1), F(2), F(2), F(3), F(3), F(3), F(3) ];
mind_flayer.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(2), TR(1) ];
mind_flayer.stressed[2] = [ BR(1), TR(1), TR(1), TR(2), TR(2), TR(2), PR(0), PR(0), PR(0), PR(0) ];
mind_flayer.stressed[3] = [ BR(1), TR(2), TR(2), TR(1), TR(1), TR(1), PRV(0), PRV(0), PRV(0), PRV(0) ];
mind_flayer.stressed[4] = [ F(2), PRV(0), PRV(0), PRV(0), PRV(0), TL(2), TL(1), PRV(0), TR(1), TR(2) ];
mind_flayer.stressed[5] = [ BL(1), TL(1), TL(1), TL(2), TL(2), TL(2), PRV(0), PRV(0), PRV(0), PRV(0)  ];
mind_flayer.stressed[6] = [ BL(1), TL(2), TL(2), TL(1), TL(1), TL(1), PL(0), PL(0), PL(0), PL(0) ];
mind_flayer.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(1), TL(2)  ];


// ****************************************************************************
// Earth Cult Warrior 

var earth_cult_warrior = {};
earth_cult_warrior.name = "Earth Cult Warrior";
earth_cult_warrior.image = "img/earth_cult_warrior.png";
earth_cult_warrior.faction = "evil";
earth_cult_warrior.simple = [ F(1), F(2), BL(1), BR(1) ];
earth_cult_warrior.normal = [ PRV(0), PL(0), PR(0), PH(0), TL(1),BL(2), F(3),  BR(2),  TR(1) ];
earth_cult_warrior.difficult = [ R(1), W(2), TL(2), TR(2) ];
earth_cult_warrior.actions = (TARGET +  DODGE + CHARGE);

earth_cult_warrior.closing = [];
earth_cult_warrior.closing[0] = [ PH(0), R(1), R(1), R(1), PH(0), PH(0), F(1), F(1), F(1), PH(0) ];
earth_cult_warrior.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), PH(0) ];
earth_cult_warrior.closing[2] = [ TR(1), TR(1), TR(1), TR(1), PR(0), PR(0), PR(0), PR(0), W(2), W(2) ];
earth_cult_warrior.closing[3] = [ PR(0), TR(1), TR(1), TR(1), PRV(0), PRV(0), PRV(0), W(2), W(2), W(2) ];
earth_cult_warrior.closing[4] = [ TL(1), F(3), TR(1), W(2), W(2), W(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
earth_cult_warrior.closing[5] = [ PL(0), TL(1), TL(1), TL(2), PRV(0), PRV(0), PRV(0), W(2), W(2), W(2) ];
earth_cult_warrior.closing[6] = [ TL(1), TL(1), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0), W(2), W(2) ];
earth_cult_warrior.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(1) ];

earth_cult_warrior.away = [];
earth_cult_warrior.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(2), F(2) ];
earth_cult_warrior.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), PR(0), TR(2) ];
earth_cult_warrior.away[2] = [ PR(0), BR(2), BR(2), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
earth_cult_warrior.away[3] = [ TR(2), TR(2), PR(0), PR(0), PR(0), PRV(0), W(2), W(2), PRV(0), PRV(0) ];
earth_cult_warrior.away[4] = [ TL(2), TR(2), TR(2), W(2), W(2), W(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
earth_cult_warrior.away[5] = [ TL(2), TL(2), PL(0), PL(0), PL(0), PRV(0), W(2), W(2), PRV(0), PRV(0) ];
earth_cult_warrior.away[6] = [ PL(0), BL(2), BL(2), PL(0), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2)  ];
earth_cult_warrior.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2) ];

earth_cult_warrior.far = [];
earth_cult_warrior.far[0] = [ BL(2), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), BR(2) ];
earth_cult_warrior.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2) ];
earth_cult_warrior.far[2] = [ PR(0), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
earth_cult_warrior.far[3] = [ PR(0), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2), W(2), PRV(0) ];
earth_cult_warrior.far[4] = [ TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), W(2), W(2), PRV(0), PRV(0) ];
earth_cult_warrior.far[5] = [ PL(0), PL(0), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2), W(2), PRV(0)];
earth_cult_warrior.far[6] = [ PL(0), PL(0), TL(2), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
earth_cult_warrior.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2) ];


earth_cult_warrior.stressed = [];
earth_cult_warrior.stressed[0] = [ BL(1), BL(2), F(1), F(1), F(2), F(2), F(3), F(2), F(2), F(2) ];
earth_cult_warrior.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(1), TR(1) ];
earth_cult_warrior.stressed[2] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(1), PR(0), PR(0), PR(0), PR(0) ];
earth_cult_warrior.stressed[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(1), PRV(0), PRV(0), PRV(0), PRV(0) ];
earth_cult_warrior.stressed[4] = [ F(2), PRV(0), PRV(0), PRV(0), PRV(0), TL(1), TL(1), PRV(0), TR(1), TR(1) ];
earth_cult_warrior.stressed[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(1), PRV(0), PRV(0), PRV(0), PRV(0)  ];
earth_cult_warrior.stressed[6] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(1), PL(0), PL(0), PL(0), PL(0) ];
earth_cult_warrior.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(1), TL(1)  ];

// ****************************************************************************
// Earth Genasi  

var earth_genasi = {};
earth_genasi.name = "Earth Genasi";
earth_genasi.image = "img/earth_genasi.png";
earth_genasi.faction = "neutral";
earth_genasi.simple = [ F(1), F(2), BL(1), BR(1) ];
earth_genasi.normal = [ PRV(0), PL(0), PR(0), PH(0), TL(1),BL(2), F(3),  BR(2),  TR(1) ];
earth_genasi.difficult = [ R(1), W(2), TL(2), TR(2) ];
earth_genasi.actions = (TARGET +  DODGE + CHARGE);

earth_genasi.closing = [];
earth_genasi.closing[0] = [ PH(0), R(1), R(1), R(1), PH(0), PH(0), F(1), F(1), F(1), PH(0) ];
earth_genasi.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), PH(0) ];
earth_genasi.closing[2] = [ TR(1), TR(1), TR(1), TR(1), PR(0), PR(0), PR(0), PR(0), W(2), W(2) ];
earth_genasi.closing[3] = [ PR(0), TR(1), TR(1), TR(1), PRV(0), PRV(0), PRV(0), W(2), W(2), W(2) ];
earth_genasi.closing[4] = [ TL(1), F(3), TR(1), W(2), W(2), W(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
earth_genasi.closing[5] = [ PL(0), TL(1), TL(1), TL(2), PRV(0), PRV(0), PRV(0), W(2), W(2), W(2) ];
earth_genasi.closing[6] = [ TL(1), TL(1), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0), W(2), W(2) ];
earth_genasi.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(1) ];

earth_genasi.away = [];
earth_genasi.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(2), F(2) ];
earth_genasi.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), PR(0), TR(2) ];
earth_genasi.away[2] = [ PR(0), BR(2), BR(2), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
earth_genasi.away[3] = [ TR(2), TR(2), PR(0), PR(0), PR(0), PRV(0), W(2), W(2), PRV(0), PRV(0) ];
earth_genasi.away[4] = [ TL(2), TR(2), TR(2), W(2), W(2), W(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
earth_genasi.away[5] = [ TL(2), TL(2), PL(0), PL(0), PL(0), PRV(0), W(2), W(2), PRV(0), PRV(0) ];
earth_genasi.away[6] = [ PL(0), BL(2), BL(2), PL(0), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2)  ];
earth_genasi.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2) ];

earth_genasi.far = [];
earth_genasi.far[0] = [ BL(2), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), BR(2) ];
earth_genasi.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2) ];
earth_genasi.far[2] = [ PR(0), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
earth_genasi.far[3] = [ PR(0), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2), W(2), PRV(0) ];
earth_genasi.far[4] = [ TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), W(2), W(2), PRV(0), PRV(0) ];
earth_genasi.far[5] = [ PL(0), PL(0), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2), W(2), PRV(0)];
earth_genasi.far[6] = [ PL(0), PL(0), TL(2), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
earth_genasi.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2) ];


earth_genasi.stressed = [];
earth_genasi.stressed[0] = [ BL(1), BL(2), F(1), F(1), F(2), F(2), F(3), F(2), F(2), F(2) ];
earth_genasi.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(1), TR(1) ];
earth_genasi.stressed[2] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(1), PR(0), PR(0), PR(0), PR(0) ];
earth_genasi.stressed[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(1), PRV(0), PRV(0), PRV(0), PRV(0) ];
earth_genasi.stressed[4] = [ F(2), PRV(0), PRV(0), PRV(0), PRV(0), TL(1), TL(1), PRV(0), TR(1), TR(1) ];
earth_genasi.stressed[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(1), PRV(0), PRV(0), PRV(0), PRV(0)  ];
earth_genasi.stressed[6] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(1), PL(0), PL(0), PL(0), PL(0) ];
earth_genasi.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(1), TL(1)  ];


// ****************************************************************************
// Dwarven Ballista

var half_dragon_fighter = {};
half_dragon_fighter.name = "Half-Black Dragon Fighter";
half_dragon_fighter.image = "img/half_dragon_fighter.png";
half_dragon_fighter.faction = "evil";
half_dragon_fighter.simple = [ F(1), F(2), ];
half_dragon_fighter.normal = [ PRV(0), PL(0), PR(0), PH(0), TL(1),BL(2), F(3),  BR(2), BL(1), BR(1),  TR(1) ];
half_dragon_fighter.difficult = [ R(1), W(2), TL(2), TR(2) ];
half_dragon_fighter.actions = (TARGET +  DODGE + CHARGE);

half_dragon_fighter.closing = [];
half_dragon_fighter.closing[0] = [ PH(0), R(1), R(1), R(1), PH(0), PH(0), F(1), F(1), F(1), PH(0) ];
half_dragon_fighter.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), PH(0) ];
half_dragon_fighter.closing[2] = [ TR(1), TR(1), TR(1), TR(1), PR(0), PR(0), PR(0), PR(0), W(2), W(2) ];
half_dragon_fighter.closing[3] = [ PR(0), TR(1), TR(1), TR(1), PRV(0), PRV(0), PRV(0), W(2), W(2), W(2) ];
half_dragon_fighter.closing[4] = [ TL(1), F(3), TR(1), W(2), W(2), W(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
half_dragon_fighter.closing[5] = [ PL(0), TL(1), TL(1), TL(2), PRV(0), PRV(0), PRV(0), W(2), W(2), W(2) ];
half_dragon_fighter.closing[6] = [ TL(1), TL(1), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0), W(2), W(2) ];
half_dragon_fighter.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(1) ];

half_dragon_fighter.away = [];
half_dragon_fighter.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(2), F(2) ];
half_dragon_fighter.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), PR(0), TR(2) ];
half_dragon_fighter.away[2] = [ PR(0), BR(2), BR(2), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
half_dragon_fighter.away[3] = [ TR(2), TR(2), PR(0), PR(0), PR(0), PRV(0), W(2), W(2), PRV(0), PRV(0) ];
half_dragon_fighter.away[4] = [ TL(2), TR(2), TR(2), W(2), W(2), W(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
half_dragon_fighter.away[5] = [ TL(2), TL(2), PL(0), PL(0), PL(0), PRV(0), W(2), W(2), PRV(0), PRV(0) ];
half_dragon_fighter.away[6] = [ PL(0), BL(2), BL(2), PL(0), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2)  ];
half_dragon_fighter.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2) ];

half_dragon_fighter.far = [];
half_dragon_fighter.far[0] = [ BL(2), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), BR(2) ];
half_dragon_fighter.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2) ];
half_dragon_fighter.far[2] = [ PR(0), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
half_dragon_fighter.far[3] = [ PR(0), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2), W(2), PRV(0) ];
half_dragon_fighter.far[4] = [ TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), W(2), W(2), PRV(0), PRV(0) ];
half_dragon_fighter.far[5] = [ PL(0), PL(0), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2), W(2), PRV(0)];
half_dragon_fighter.far[6] = [ PL(0), PL(0), TL(2), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
half_dragon_fighter.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2) ];


half_dragon_fighter.stressed = [];
half_dragon_fighter.stressed[0] = [ BL(1), BL(2), F(1), F(1), F(2), F(2), F(3), F(2), F(2), F(2) ];
half_dragon_fighter.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(1), TR(1) ];
half_dragon_fighter.stressed[2] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(1), PR(0), PR(0), PR(0), PR(0) ];
half_dragon_fighter.stressed[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(1), PRV(0), PRV(0), PRV(0), PRV(0) ];
half_dragon_fighter.stressed[4] = [ F(2), PRV(0), PRV(0), PRV(0), PRV(0), TL(1), TL(1), PRV(0), TR(1), TR(1) ];
half_dragon_fighter.stressed[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(1), PRV(0), PRV(0), PRV(0), PRV(0)  ];
half_dragon_fighter.stressed[6] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(1), PL(0), PL(0), PL(0), PL(0) ];
half_dragon_fighter.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(1), TL(1)  ];



// ****************************************************************************
// Half-Dragon Fighter

var dwarven_ballista = {};
dwarven_ballista.name = "Dwarven Ballista";
dwarven_ballista.image = "img/dwarven_ballista.png";
dwarven_ballista.faction = "neutral";
dwarven_ballista.simple = [ F(1),  ];
dwarven_ballista.normal = [ PRV(0), PL(0), PR(0), PH(0), TL(1),BL(1), BR(1),  TR(1) ];
dwarven_ballista.difficult = [ R(1), W(1), TL(2), TR(2), F(2), BL(2),   BR(2), ];
dwarven_ballista.actions = (TARGET +  CONCENTRATE);

dwarven_ballista.closing = [];
dwarven_ballista.closing[0] = [ PH(0), R(1), R(1), R(1), PH(0), PH(0), F(1), F(1), F(1), PH(0) ];
dwarven_ballista.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), PH(0) ];
dwarven_ballista.closing[2] = [ TR(1), TR(1), TR(1), TR(1), PR(0), PR(0), PR(0), PR(0), W(1), W(1) ];
dwarven_ballista.closing[3] = [ PR(0), TR(1), TR(1), TR(1), PRV(0), PRV(0), PRV(0), W(1), W(1), W(1) ];
dwarven_ballista.closing[4] = [ TL(1), F(2), TR(1), W(1), W(1), W(1), PRV(0), PRV(0), PRV(0), PRV(0) ];
dwarven_ballista.closing[5] = [ PL(0), TL(1), TL(1), TL(2), PRV(0), PRV(0), PRV(0), W(1), W(1), W(1) ];
dwarven_ballista.closing[6] = [ TL(1), TL(1), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0), W(1), W(1) ];
dwarven_ballista.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(1) ];

dwarven_ballista.away = [];
dwarven_ballista.away[0] = [ F(2), F(2), F(2), F(2), F(2), F(2), F(2), F(2), F(2), F(2) ];
dwarven_ballista.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), PR(0), TR(2) ];
dwarven_ballista.away[2] = [ PR(0), BR(2), BR(2), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
dwarven_ballista.away[3] = [ TR(2), TR(2), PR(0), PR(0), PR(0), PRV(0), W(1), W(1), PRV(0), PRV(0) ];
dwarven_ballista.away[4] = [ TL(2), TR(2), TR(2), W(1), W(1), W(1), PRV(0), PRV(0), PRV(0), PRV(0) ];
dwarven_ballista.away[5] = [ TL(2), TL(2), PL(0), PL(0), PL(0), PRV(0), W(1), W(1), PRV(0), PRV(0) ];
dwarven_ballista.away[6] = [ PL(0), BL(2), BL(2), PL(0), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2)  ];
dwarven_ballista.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2) ];

dwarven_ballista.far = [];
dwarven_ballista.far[0] = [ BL(2), F(2), F(2), F(2), F(2), F(2), F(2), F(2), F(2), BR(2) ];
dwarven_ballista.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2) ];
dwarven_ballista.far[2] = [ PR(0), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
dwarven_ballista.far[3] = [ PR(0), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2), W(1), PRV(0) ];
dwarven_ballista.far[4] = [ TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), W(1), W(1), PRV(0), PRV(0) ];
dwarven_ballista.far[5] = [ PL(0), PL(0), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2), W(1), PRV(0)];
dwarven_ballista.far[6] = [ PL(0), PL(0), TL(2), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
dwarven_ballista.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2) ];


dwarven_ballista.stressed = [];
dwarven_ballista.stressed[0] = [ BL(1), BL(1), F(1), F(1), F(1), F(1), F(1), F(1), F(1), F(1) ];
dwarven_ballista.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(1), BR(1), BR(1), TR(1), TR(1) ];
dwarven_ballista.stressed[2] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(1), PR(0), PR(0), PR(0), PR(0) ];
dwarven_ballista.stressed[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(1), PRV(0), PRV(0), PRV(0), PRV(0) ];
dwarven_ballista.stressed[4] = [ F(1), PRV(0), PRV(0), PRV(0), PRV(0), TL(1), TL(1), PRV(0), TR(1), TR(1) ];
dwarven_ballista.stressed[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(1), PRV(0), PRV(0), PRV(0), PRV(0)  ];
dwarven_ballista.stressed[6] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(1), PL(0), PL(0), PL(0), PL(0) ];
dwarven_ballista.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(1), BL(1), BL(1), TL(1), TL(1)  ];


// ****************************************************************************
// Human Barbarian (Fire Cult)

var human_barbarian = {};
human_barbarian.name = "Human Barbarian";
human_barbarian.image = "img/human_barbarian.png";
human_barbarian.faction = "evil";
human_barbarian.simple = [ F(1), F(2), BL(1), BR(1) ];
human_barbarian.normal = [ PRV(0), PL(0), PR(0), PH(0), TL(1),BL(2),   BR(2),  TR(1) ];
human_barbarian.difficult = [ R(1), F(3), TL(2), TR(2) ];
human_barbarian.actions = (TARGET +  DODGE + CHARGE);

human_barbarian.closing = [];
human_barbarian.closing[0] = [ PH(0), R(1), R(1), R(1), PH(0), PH(0), F(1), F(1), F(1), PH(0) ];
human_barbarian.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), PH(0) ];
human_barbarian.closing[2] = [ TR(1), TR(1), TR(1), TR(1), PR(0), PR(0), PR(0), PR(0), PRV(0), PRV(0) ];
human_barbarian.closing[3] = [ PR(0), TR(1), TR(1), TR(1), PRV(0), PRV(0), PRV(0), PRV(0), PRV(0), PRV(0) ];
human_barbarian.closing[4] = [ TL(1), F(3), TR(1), PRV(0), PRV(0), PRV(0), PRV(0), PRV(0), PRV(0), PRV(0) ];
human_barbarian.closing[5] = [ PL(0), TL(1), TL(1), TL(2), PRV(0), PRV(0), PRV(0), PRV(0), PRV(0), PRV(0) ];
human_barbarian.closing[6] = [ TL(1), TL(1), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0), PRV(0), PRV(0) ];
human_barbarian.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(1) ];

human_barbarian.away = [];
human_barbarian.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(2), F(2) ];
human_barbarian.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), PR(0), TR(2) ];
human_barbarian.away[2] = [ PR(0), BR(2), BR(2), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
human_barbarian.away[3] = [ TR(2), TR(2), PR(0), PR(0), PR(0), PRV(0), PRV(0), PRV(0), PRV(0), PRV(0) ];
human_barbarian.away[4] = [ TL(2), TR(2), TR(2), PRV(0), PRV(0), PRV(0), PRV(0), PRV(0), PRV(0), PRV(0) ];
human_barbarian.away[5] = [ TL(2), TL(2), PL(0), PL(0), PL(0), PRV(0), PRV(0), PRV(0), PRV(0), PRV(0) ];
human_barbarian.away[6] = [ PL(0), BL(2), BL(2), PL(0), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2)  ];
human_barbarian.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2) ];

human_barbarian.far = [];
human_barbarian.far[0] = [ BL(2), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), BR(2) ];
human_barbarian.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2) ];
human_barbarian.far[2] = [ PR(0), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
human_barbarian.far[3] = [ PR(0), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2), PRV(0), PRV(0) ];
human_barbarian.far[4] = [ TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
human_barbarian.far[5] = [ PL(0), PL(0), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2), PRV(0), PRV(0)];
human_barbarian.far[6] = [ PL(0), PL(0), TL(2), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
human_barbarian.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2) ];


human_barbarian.stressed = [];
human_barbarian.stressed[0] = [ BL(1), BL(2), F(1), F(1), F(2), F(2), F(2), F(2), F(2), F(2) ];
human_barbarian.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(1), TR(1) ];
human_barbarian.stressed[2] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(1), PR(0), PR(0), PR(0), PR(0) ];
human_barbarian.stressed[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(1), PRV(0), PRV(0), PRV(0), PRV(0) ];
human_barbarian.stressed[4] = [ F(2), PRV(0), PRV(0), PRV(0), PRV(0), TL(1), TL(1), PRV(0), TR(1), TR(1) ];
human_barbarian.stressed[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(1), PRV(0), PRV(0), PRV(0), PRV(0)  ];
human_barbarian.stressed[6] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(1), PL(0), PL(0), PL(0), PL(0) ];
human_barbarian.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(1), TL(1)  ];


// ****************************************************************************
// Drider 

var drider = {};
drider.name = "Drider";
drider.image = "img/drider.png";
drider.faction = "evil";
drider.simple = [ F(1), F(2), BL(1), BR(1) ];
drider.normal = [ PRV(0), PL(0), PR(0), PH(0), TL(2),BL(2), F(3),  BR(2),  TR(2), R(1) ];
drider.difficult = [  W(2), ];
drider.actions = (TARGET +  DODGE + FEINT + CONCENTRATE);

drider.closing = [];
drider.closing[0] = [ PH(0), R(1), R(1), R(1), PH(0), PH(0), F(1), F(1), F(1), PH(0) ];
drider.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), PH(0) ];
drider.closing[2] = [ TR(2), TR(2), TR(2), TR(2), PR(0), PR(0), PR(0), PR(0), W(2), W(2) ];
drider.closing[3] = [ PR(0), TR(2), TR(2), TR(2), PRV(0), PRV(0), PRV(0), W(2), W(2), W(2) ];
drider.closing[4] = [ TL(2), F(3), TR(2), W(2), W(2), W(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
drider.closing[5] = [ PL(0), TL(2), TL(2), TL(2), PRV(0), PRV(0), PRV(0), W(2), W(2), W(2) ];
drider.closing[6] = [ TL(2), TL(2), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0), W(2), W(2) ];
drider.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(2) ];

drider.away = [];
drider.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(2), F(2) ];
drider.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), PR(0), TR(2) ];
drider.away[2] = [ PR(0), BR(2), BR(2), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
drider.away[3] = [ TR(2), TR(2), PR(0), PR(0), PR(0), PRV(0), W(2), W(2), PRV(0), PRV(0) ];
drider.away[4] = [ TL(2), TR(2), TR(2), W(2), W(2), W(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
drider.away[5] = [ TL(2), TL(2), PL(0), PL(0), PL(0), PRV(0), W(2), W(2), PRV(0), PRV(0) ];
drider.away[6] = [ PL(0), BL(2), BL(2), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2)  ];
drider.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2) ];

drider.far = [];
drider.far[0] = [ BL(2), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), BR(2) ];
drider.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2) ];
drider.far[2] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
drider.far[3] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), W(2), PRV(0) ];
drider.far[4] = [ TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), W(2), W(2), PRV(0), PRV(0) ];
drider.far[5] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), W(2), PRV(0)];
drider.far[6] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
drider.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2) ];


drider.stressed = [];
drider.stressed[0] = [ BL(1), BR(1), F(1), F(1), F(2), F(2), F(3), F(2), PH(0), R(1) ];
drider.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2) ];
drider.stressed[2] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(2), PR(0), PR(0), PR(0), PR(0) ];
drider.stressed[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
drider.stressed[4] = [ F(2), PRV(0), PRV(0), PRV(0), PRV(0), TL(2), TL(2), PRV(0), TR(2), TR(2) ];
drider.stressed[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(2), PRV(0), PRV(0), PRV(0), PRV(0)  ];
drider.stressed[6] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0) ];
drider.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2)  ];


// ****************************************************************************
// Water Cult Warrior 

var water_cult_warrior = {};
water_cult_warrior.name = "Water Cult Warrior";
water_cult_warrior.image = "img/water_cult_warrior.png";
water_cult_warrior.faction = "evil";
water_cult_warrior.simple = [ F(1), F(2), BL(1), BR(1) ];
water_cult_warrior.normal = [ PRV(0), PL(0), PR(0), PH(0), TL(2),BL(2), F(3),  BR(2),  TR(2), TL(1), TR(1) ];
water_cult_warrior.difficult = [  W(3), R(1)];
water_cult_warrior.actions = (TARGET +  DODGE + FEINT + CONCENTRATE);

water_cult_warrior.closing = [];
water_cult_warrior.closing[0] = [ PH(0), R(1), R(1), R(1), PH(0), PH(0), F(1), F(1), F(1), PH(0) ];
water_cult_warrior.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), PH(0) ];
water_cult_warrior.closing[2] = [ TR(1), TR(1), TR(1), TR(2), PR(0), PR(0), PR(0), PR(0), W(3), W(3) ];
water_cult_warrior.closing[3] = [ PR(0), TR(1), TR(1), TR(1), PRV(0), PRV(0), PRV(0), W(3), W(3), W(3) ];
water_cult_warrior.closing[4] = [ TL(1), F(3), TR(1), W(3), W(3), W(3), PRV(0), PRV(0), PRV(0), PRV(0) ];
water_cult_warrior.closing[5] = [ PL(0), TL(1), TL(1), TL(1), PRV(0), PRV(0), PRV(0), W(3), W(3), W(3) ];
water_cult_warrior.closing[6] = [ TL(1), TL(1), TL(1), TL(2), PL(0), PL(0), PL(0), PL(0), W(3), W(3) ];
water_cult_warrior.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(1) ];

water_cult_warrior.away = [];
water_cult_warrior.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(2), F(2) ];
water_cult_warrior.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), PR(0), TR(2) ];
water_cult_warrior.away[2] = [ PR(0), BR(2), BR(2), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
water_cult_warrior.away[3] = [ TR(2), TR(2), PR(0), PR(0), PR(0), PRV(0), W(3), W(3), PRV(0), PRV(0) ];
water_cult_warrior.away[4] = [ TL(2), TR(2), TR(2), W(3), W(3), W(3), PRV(0), PRV(0), PRV(0), PRV(0) ];
water_cult_warrior.away[5] = [ TL(2), TL(2), PL(0), PL(0), PL(0), PRV(0), W(3), W(3), PRV(0), PRV(0) ];
water_cult_warrior.away[6] = [ PL(0), BL(2), BL(2), PL(0), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2)  ];
water_cult_warrior.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2) ];

water_cult_warrior.far = [];
water_cult_warrior.far[0] = [ BL(2), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), BR(2) ];
water_cult_warrior.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2) ];
water_cult_warrior.far[2] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
water_cult_warrior.far[3] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), W(3), PRV(0) ];
water_cult_warrior.far[4] = [ TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), W(3), W(3), PRV(0), PRV(0) ];
water_cult_warrior.far[5] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), W(3), PRV(0)];
water_cult_warrior.far[6] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
water_cult_warrior.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2) ];


water_cult_warrior.stressed = [];
water_cult_warrior.stressed[0] = [ BL(1), BR(1), F(1), F(1), F(2), F(2), F(3), F(2), PH(0), PH(0) ];
water_cult_warrior.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(1), TR(2) ];
water_cult_warrior.stressed[2] = [ BR(1), TR(1), TR(1), TR(1), TR(2), TR(2), PR(0), PR(0), PR(0), PR(0) ];
water_cult_warrior.stressed[3] = [ BR(1), TR(2), TR(2), TR(2), TR(1), TR(1), PRV(0), PRV(0), PRV(0), PRV(0) ];
water_cult_warrior.stressed[4] = [ F(2), PRV(0), PRV(0), PRV(0), PRV(0), TL(1), TL(2), PRV(0), TR(1), TR(1) ];
water_cult_warrior.stressed[5] = [ BL(1), TL(1), TL(1), TL(2), TL(2), TL(2), PRV(0), PRV(0), PRV(0), PRV(0)  ];
water_cult_warrior.stressed[6] = [ BL(1), TL(2), TL(2), TL(1), TL(1), TL(1), PL(0), PL(0), PL(0), PL(0) ];
water_cult_warrior.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(1), TL(2)  ];

// ****************************************************************************
// Hobgoblin Troop 

var hobgoblin_troop = {};
hobgoblin_troop.name = "Hobgoblin Troop";
hobgoblin_troop.image = "img/hobgoblin_troop.png";
hobgoblin_troop.faction = "evil";
hobgoblin_troop.simple = [ F(1), BL(1), BR(1) ];
hobgoblin_troop.normal = [ PRV(0), PL(0), PR(0), PH(0), TL(2),BL(2), F(3),  F(2), BR(2),  TR(2), TL(1), TR(1) ];
hobgoblin_troop.difficult = [  W(3), BR(3), BL(3) ];
hobgoblin_troop.actions = ( DODGE + CHARGE + CONCENTRATE);

hobgoblin_troop.closing = [];
hobgoblin_troop.closing[0] = [ PH(0),PH(0),PH(0), F(1), PH(0), PH(0), F(1), F(1), F(1), PH(0) ];
hobgoblin_troop.closing[1] = [PH(0), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), PH(0) ];
hobgoblin_troop.closing[2] = [ TR(1), TR(1), TR(1), TR(2), PR(0), PR(0), PR(0), PR(0), W(3), W(3) ];
hobgoblin_troop.closing[3] = [ PR(0), TR(1), TR(1), TR(1), PRV(0), PRV(0), PRV(0), W(3), W(3), W(3) ];
hobgoblin_troop.closing[4] = [ TL(1), F(3), TR(1), W(3), W(3), W(3), PRV(0), PRV(0), PRV(0), PRV(0) ];
hobgoblin_troop.closing[5] = [ PL(0), TL(1), TL(1), TL(1), PRV(0), PRV(0), PRV(0), W(3), W(3), W(3) ];
hobgoblin_troop.closing[6] = [ TL(1), TL(1), TL(1), TL(2), PL(0), PL(0), PL(0), PL(0), W(3), W(3) ];
hobgoblin_troop.closing[7] = [PH(0), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(1) ];

hobgoblin_troop.away = [];
hobgoblin_troop.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(2), F(2) ];
hobgoblin_troop.away[1] = [ BR(3), BR(3), BR(3), BR(3), BR(2), BR(2), BR(2), BR(2), PR(0), TR(2) ];
hobgoblin_troop.away[2] = [ PR(0), BR(3), BR(2), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
hobgoblin_troop.away[3] = [ TR(2), TR(2), PR(0), PR(0), PR(0), PRV(0), W(3), W(3), PRV(0), PRV(0) ];
hobgoblin_troop.away[4] = [ TL(2), TR(2), TR(2), W(3), W(3), W(3), PRV(0), PRV(0), PRV(0), PRV(0) ];
hobgoblin_troop.away[5] = [ TL(2), TL(2), PL(0), PL(0), PL(0), PRV(0), W(3), W(3), PRV(0), PRV(0) ];
hobgoblin_troop.away[6] = [ PL(0), BL(3), BL(2), PL(0), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2)  ];
hobgoblin_troop.away[7] = [ BL(3), BL(3), BL(3), BL(3), BL(2), BL(2), BL(2), BL(2), BL(3), TL(2) ];

hobgoblin_troop.far = [];
hobgoblin_troop.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), BR(3) ];
hobgoblin_troop.far[1] = [ BR(3), BR(3), BR(3), BR(3), BR(3), BR(3), BR(3), BR(2), TR(2), TR(2) ];
hobgoblin_troop.far[2] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
hobgoblin_troop.far[3] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), W(3), PRV(0) ];
hobgoblin_troop.far[4] = [ TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), W(3), W(3), PRV(0), PRV(0) ];
hobgoblin_troop.far[5] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), W(3), PRV(0)];
hobgoblin_troop.far[6] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
hobgoblin_troop.far[7] = [ BL(3), BL(3), BL(3), BL(3), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2) ];


hobgoblin_troop.stressed = [];
hobgoblin_troop.stressed[0] = [ BL(1), BR(1), F(1), F(1), F(2), F(2), F(3), F(2), PH(0), PH(0) ];
hobgoblin_troop.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(1), TR(2) ];
hobgoblin_troop.stressed[2] = [ BR(1), TR(1), TR(1), TR(1), TR(2), TR(2), PR(0), PR(0), PR(0), PR(0) ];
hobgoblin_troop.stressed[3] = [ BR(1), TR(2), TR(2), TR(2), TR(1), TR(1), PRV(0), PRV(0), PRV(0), PRV(0) ];
hobgoblin_troop.stressed[4] = [ F(2), PRV(0), PRV(0), PRV(0), PRV(0), TL(1), TL(2), PRV(0), TR(1), TR(1) ];
hobgoblin_troop.stressed[5] = [ BL(1), TL(1), TL(1), TL(2), TL(2), TL(2), PRV(0), PRV(0), PRV(0), PRV(0)  ];
hobgoblin_troop.stressed[6] = [ BL(1), TL(2), TL(2), TL(1), TL(1), TL(1), PL(0), PL(0), PL(0), PL(0) ];
hobgoblin_troop.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(1), TL(2)  ];


// ****************************************************************************
// Wood Elf Druid

var wood_elf_druid = {};
wood_elf_druid.name = "Wood Elf Druid";
wood_elf_druid.image = "img/wood_elf_druid.png";
wood_elf_druid.faction = "neutral";
wood_elf_druid.simple = [ F(1), F(2), BL(1), BR(1) ];
wood_elf_druid.normal = [ PRV(0), PL(0), PR(0), PH(0), TL(1),BL(2),  BR(2),  TR(1), R(1), W(2), TL(2), TR(2)];
wood_elf_druid.difficult = [ F(3) ];
wood_elf_druid.actions = (TARGET +  DODGE + CONCENTRATE);

wood_elf_druid.closing = [];
wood_elf_druid.closing[0] = [ PH(0), R(1), R(1), R(1), PH(0), PH(0), F(1), F(1), F(1), PH(0) ];
wood_elf_druid.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), PH(0) ];
wood_elf_druid.closing[2] = [ TR(1), TR(1), TR(1), TR(1), PR(0), PR(0), PR(0), PR(0), W(2), W(2) ];
wood_elf_druid.closing[3] = [ PR(0), TR(1), TR(1), TR(1), PRV(0), PRV(0), PRV(0), W(2), W(2), W(2) ];
wood_elf_druid.closing[4] = [ TL(1), F(3), TR(1), W(2), W(2), W(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
wood_elf_druid.closing[5] = [ PL(0), TL(1), TL(1), TL(2), PRV(0), PRV(0), PRV(0), W(2), W(2), W(2) ];
wood_elf_druid.closing[6] = [ TL(1), TL(1), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0), W(2), W(2) ];
wood_elf_druid.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(1) ];

wood_elf_druid.away = [];
wood_elf_druid.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(2), F(2) ];
wood_elf_druid.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), PR(0), TR(2) ];
wood_elf_druid.away[2] = [ PR(0), BR(2), BR(2), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
wood_elf_druid.away[3] = [ TR(2), TR(2), PR(0), PR(0), PR(0), PRV(0), W(2), W(2), PRV(0), PRV(0) ];
wood_elf_druid.away[4] = [ TL(2), TR(2), TR(2), W(2), W(2), W(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
wood_elf_druid.away[5] = [ TL(2), TL(2), PL(0), PL(0), PL(0), PRV(0), W(2), W(2), PRV(0), PRV(0) ];
wood_elf_druid.away[6] = [ PL(0), BL(2), BL(2), PL(0), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2)  ];
wood_elf_druid.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2) ];

wood_elf_druid.far = [];
wood_elf_druid.far[0] = [ BL(2), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), BR(2) ];
wood_elf_druid.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2) ];
wood_elf_druid.far[2] = [ PR(0), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
wood_elf_druid.far[3] = [ PR(0), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2), W(2), PRV(0) ];
wood_elf_druid.far[4] = [ TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), W(2), W(2), PRV(0), PRV(0) ];
wood_elf_druid.far[5] = [ PL(0), PL(0), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2), W(2), PRV(0)];
wood_elf_druid.far[6] = [ PL(0), PL(0), TL(2), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
wood_elf_druid.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2) ];




wood_elf_druid.stressed = [];
wood_elf_druid.stressed[0] = [ PH(0), F(1), F(1), F(2), F(2), F(2), F(2), F(2), F(2), R(1) ];
wood_elf_druid.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(1), TR(1) ];
wood_elf_druid.stressed[2] = [ BR(1), TR(1), TR(2), TR(2), TR(1), TR(1), TR(2), PR(0), PR(0), PR(0) ];
wood_elf_druid.stressed[3] = [ BR(1), TR(1), TR(1), TR(2), TR(2), W(2), W(2), W(2), PRV(0), PRV(0) ];
wood_elf_druid.stressed[4] = [ F(2), PRV(0), PRV(0), PRV(0), PRV(0), TL(1), TL(1), PRV(0), TR(1), TR(1) ];
wood_elf_druid.stressed[5] = [ BL(1), TL(1), TL(1), TL(2), TL(2), W(2), W(2), W(2), PRV(0), PRV(0)   ];
wood_elf_druid.stressed[6] = [  BL(1), TL(1), TL(2), TL(2), TL(1), TL(1), TL(2), PL(0), PL(0), PL(0) ];
wood_elf_druid.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(1), TL(1)  ];
// ****************************************************************************
// air_elemental

var air_elemental = {};
air_elemental.name = "Air Elemental";
air_elemental.image = "img/air_elemental.png";
air_elemental.faction = "neutral";
air_elemental.simple = [ F(1), F(2), BL(1), BR(1) ];
air_elemental.normal = [ R(1), W(3), PRV(0), PL(0), PR(0), PH(0), TL(2), BL(2), BL(3), F(3), F(4), BR(2), BR(3), TR(2) ];
air_elemental.difficult = [ ];
air_elemental.actions = (TARGET + DODGE + CHARGE);

air_elemental.closing = [];
air_elemental.closing[0] = [ PH(0), R(1), R(1), R(1), PH(0), PH(0), F(1), F(1), F(1), PH(0) ];
air_elemental.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), TR(2) ];
air_elemental.closing[2] = [ TR(2), TR(2), TR(2), TR(2), PR(0), PR(0), PR(0), PR(0), W(3), W(3) ];
air_elemental.closing[3] = [ PR(0), TR(2), TR(2), TR(2), PRV(0), PRV(0), PRV(0), W(3), W(3), W(3) ];
air_elemental.closing[4] = [ TL(2), F(4), TR(2), W(3), W(3), W(3), PRV(0), PRV(0), PRV(0), PRV(0) ];
air_elemental.closing[5] = [ PL(0), TL(2), TL(2), TL(2), PRV(0), PRV(0), PRV(0), W(3), W(3), W(3) ];
air_elemental.closing[6] = [ TL(2), TL(2), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0), W(3), W(3) ];
air_elemental.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(2) ];

air_elemental.away = [];
air_elemental.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
air_elemental.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(2), TR(2) ];
air_elemental.away[2] = [ PR(0), BR(3), BR(3), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
air_elemental.away[3] = [ TR(2), TR(2), PR(0), PR(0), PR(0), PRV(0), W(3), W(3), PRV(0), PRV(0) ];
air_elemental.away[4] = [ TL(2), TR(2), TR(2), W(3), W(3), W(3), PRV(0), PRV(0), PRV(0), PRV(0) ];
air_elemental.away[5] = [ TL(2), TL(2), PL(0), PL(0), PL(0), PRV(0), W(3), W(3), PRV(0), PRV(0) ];
air_elemental.away[6] = [ PL(0), BL(3), BL(3), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2)  ];
air_elemental.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(2), TL(2) ];

air_elemental.far = [];
air_elemental.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
air_elemental.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2) ];
air_elemental.far[2] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
air_elemental.far[3] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), W(3), PRV(0) ];
air_elemental.far[4] = [ TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), W(3), W(3), PRV(0), PRV(0) ];
air_elemental.far[5] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), W(3), PRV(0)];
air_elemental.far[6] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
air_elemental.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2) ];

air_elemental.stressed = [];
air_elemental.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
air_elemental.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
air_elemental.stressed[2] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(2), PR(0), PR(0), PR(0), PR(0) ];
air_elemental.stressed[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(2), PRV(0), PRV(0), W(3), W(3), W(3) ];
air_elemental.stressed[4] = [ F(2), PRV(0), PRV(0), PRV(0), W(3), W(3), TL(2), W(3), W(3), TR(2) ];
air_elemental.stressed[5] = [ BL(1), TL(2), TL(2), TL(2), W(3), TL(2), W(3), W(3), PRV(0), PRV(0)  ];
air_elemental.stressed[6] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0) ];
air_elemental.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2)  ];

// ****************************************************************************
// air_cult_warrior

var air_cult_warrior = {};
air_cult_warrior.name = "Air Cult Warrior";
air_cult_warrior.image = "img/air_cult_warrior.png"; // add TR and TR 1 to moves
air_cult_warrior.faction = "evil";
air_cult_warrior.simple = [ F(1), F(2), BL(1), BR(1) ];
air_cult_warrior.normal = [ R(1), PRV(0), PL(0), PR(0), PH(0), TL(1), TR(1), TL(2), BL(2), F(3),  BR(2), TR(2) ];
air_cult_warrior.difficult = [ W(2)];
air_cult_warrior.actions = (TARGET + DODGE + FEINT);

air_cult_warrior.closing = [];
air_cult_warrior.closing[0] = [ PH(0), R(1), R(1), R(1), PH(0), PH(0), F(1), F(1), F(1), PH(0) ];
air_cult_warrior.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), TR(1) ];
air_cult_warrior.closing[2] = [ TR(1), TR(1), TR(1), TR(1), PR(0), PR(0), PR(0), PR(0), W(2), W(2) ];
air_cult_warrior.closing[3] = [ PR(0), TR(1), TR(1), TR(1), PRV(0), PRV(0), PRV(0), W(2), W(2), W(2) ];
air_cult_warrior.closing[4] = [ TL(1), F(3), TR(1), W(2), W(2), W(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
air_cult_warrior.closing[5] = [ PL(0), TL(1), TL(1), TL(1), PRV(0), PRV(0), PRV(0), W(2), W(2), W(2) ];
air_cult_warrior.closing[6] = [ TL(1), TL(1), TL(1), TL(1), PL(0), PL(0), PL(0), PL(0), W(2), W(2) ];
air_cult_warrior.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(1) ];

air_cult_warrior.away = [];
air_cult_warrior.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3) ];
air_cult_warrior.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(2) ];
air_cult_warrior.away[2] = [ PR(0), BR(2), BR(2), PR(0), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
air_cult_warrior.away[3] = [ TR(2), TR(2), PR(0), PR(0), PR(0), PRV(0), W(2), W(2), PRV(0), PRV(0) ];
air_cult_warrior.away[4] = [ TL(2), TR(2), TR(2), W(2), W(2), W(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
air_cult_warrior.away[5] = [ TL(2), TL(2), PL(0), PL(0), PL(0), PRV(0), W(2), W(2), PRV(0), PRV(0) ];
air_cult_warrior.away[6] = [ PL(0), BL(2), BL(2), PL(0), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2)  ];
air_cult_warrior.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2) ];

air_cult_warrior.far = [];
air_cult_warrior.far[0] = [ BL(2), F(3), F(3), F(3), F(3), F(3), F(3), F(3), F(3), BR(2) ];
air_cult_warrior.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2) ];
air_cult_warrior.far[2] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
air_cult_warrior.far[3] = [ PR(0), PR(0), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), W(2), PRV(0) ];
air_cult_warrior.far[4] = [ TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), W(2), W(2), PRV(0), PRV(0) ];
air_cult_warrior.far[5] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), W(2), PRV(0)];
air_cult_warrior.far[6] = [ PL(0), PL(0), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
air_cult_warrior.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2) ];

air_cult_warrior.stressed = [];
air_cult_warrior.stressed[0] = [ BL(1), BL(2), F(1), F(1), F(2), F(2), F(3), F(3), F(3), F(3) ];
air_cult_warrior.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(1), TR(2) ];
air_cult_warrior.stressed[2] = [ BR(1), TR(1), TR(1), TR(2), TR(2), TR(2), PR(0), PR(0), PR(0), PR(0) ];
air_cult_warrior.stressed[3] = [ BR(1), TR(1), TR(1), TR(1), TR(2), TR(2), PRV(0), PRV(0), PRV(0), PRV(0) ];
air_cult_warrior.stressed[4] = [ F(2), PRV(0), PRV(0), PRV(0), PRV(0), TL(1), TL(2), PRV(0), TR(1), TR(2) ];
air_cult_warrior.stressed[5] = [ BL(1), TL(1), TL(1), TL(1), TL(2), TL(2), PRV(0), PRV(0), PRV(0), PRV(0)  ];
air_cult_warrior.stressed[6] = [ BL(1), TL(1), TL(1), TL(2), TL(2), TL(2), PL(0), PL(0), PL(0), PL(0) ];
air_cult_warrior.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(1), TL(2)  ];

// ****************************************************************************
// Black Shadow Dragon

var shadow = {};
shadow.name = "Black Shadow Dragon";
shadow.image = "img/shadow.png";
shadow.faction = "evil";
shadow.simple = [ F(1), F(2), BL(1), BR(1) ];
shadow.normal = [ TL(3), BL(2), BL(3), F(3), F(4), BR(2), BR(3), TR(3) ];
shadow.difficult = [ R(1), W(2), W(3) ];
shadow.actions = (TARGET + CONCENTRATE + DODGE + FEINT);

shadow.closing = [];
shadow.closing[0] = [ BL(1), R(1), R(1), R(1), R(1), F(1), F(1), F(1), F(1), BR(1) ];
shadow.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), TR(3) ];
shadow.closing[2] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), W(3), W(3), W(2), W(2) ];
shadow.closing[3] = [ BR(1), TR(3), TR(3), TR(3), W(3), W(3), W(3), W(2), W(2), W(2) ];
shadow.closing[4] = [ TL(3), F(4), TR(3), W(2), W(2), W(2), W(3), W(3), W(3), W(3) ];
shadow.closing[5] = [ BL(1), TL(3), TL(3), TL(3), W(3), W(3), W(3), W(2), W(2), W(2) ];
shadow.closing[6] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), W(3), W(3), W(2), W(2) ];
shadow.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(3) ];
// Edit moves below
shadow.away = [];
shadow.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
shadow.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(2), TR(3) ];
shadow.away[2] = [ BR(2), BR(3), BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
shadow.away[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), W(3), W(2), W(2), W(3), W(3) ];
shadow.away[4] = [ TL(3), TR(3), TR(3), W(2), W(2), W(2), W(3), W(3), W(3), W(3) ];
shadow.away[5] = [ TL(3), TL(3), TL(3), TL(3), TL(3), W(3), W(2), W(2), W(3), W(3) ];
shadow.away[6] = [ BL(2), BL(3), BL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
shadow.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(2), TL(3) ];

shadow.far = [];
shadow.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
shadow.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(3), TR(3) ];
shadow.far[2] = [ BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
shadow.far[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), W(2), W(3) ];
shadow.far[4] = [ TL(3), TL(3), TL(3), TR(3), TR(3), TR(3), W(2), W(2), W(3), W(3) ];
shadow.far[5] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), W(2), W(3) ];
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
// Adult Green Dragon

var adult_green_dragon = {};
adult_green_dragon.name = "Adult Green Dragon";
adult_green_dragon.image = "img/adult_green_dragon.png";
adult_green_dragon.faction = "evil";
adult_green_dragon.simple = [ F(1), F(2), BL(1), BR(1) ];
adult_green_dragon.normal = [ TL(3), BL(2), BL(3), F(3), F(4), BR(2), BR(3), TR(3) ];
adult_green_dragon.difficult = [ R(1), W(3), W(4) ];
adult_green_dragon.actions = (TARGET + CHARGE + DODGE + FEINT);

adult_green_dragon.closing = [];
adult_green_dragon.closing[0] = [ BL(1), R(1), R(1), R(1), R(1), F(1), F(1), F(1), F(1), BR(1) ];
adult_green_dragon.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), TR(3) ];
adult_green_dragon.closing[2] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), W(4), W(4), W(3), W(3) ];
adult_green_dragon.closing[3] = [ BR(1), TR(3), TR(3), TR(3), W(4), W(4), W(4), W(3), W(3), W(3) ];
adult_green_dragon.closing[4] = [ TL(3), F(4), TR(3), W(3), W(3), W(3), W(4), W(4), W(4), W(4) ];
adult_green_dragon.closing[5] = [ BL(1), TL(3), TL(3), TL(3), W(4), W(4), W(4), W(3), W(3), W(3) ];
adult_green_dragon.closing[6] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), W(4), W(4), W(3), W(3) ];
adult_green_dragon.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(3) ];
// Edit moves below
adult_green_dragon.away = [];
adult_green_dragon.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
adult_green_dragon.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(2), TR(3) ];
adult_green_dragon.away[2] = [ BR(2), BR(3), BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
adult_green_dragon.away[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), W(4), W(3), W(3), W(4), W(4) ];
adult_green_dragon.away[4] = [ TL(3), TR(3), TR(3), W(3), W(3), W(3), W(4), W(4), W(4), W(4) ];
adult_green_dragon.away[5] = [ TL(3), TL(3), TL(3), TL(3), TL(3), W(4), W(3), W(3), W(4), W(4) ];
adult_green_dragon.away[6] = [ BL(2), BL(3), BL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
adult_green_dragon.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(2), TL(3) ];

adult_green_dragon.far = [];
adult_green_dragon.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
adult_green_dragon.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(3), TR(3) ];
adult_green_dragon.far[2] = [ BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
adult_green_dragon.far[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), W(3), W(4) ];
adult_green_dragon.far[4] = [ TL(3), TL(3), TL(3), TR(3), TR(3), TR(3), W(3), W(3), W(4), W(4) ];
adult_green_dragon.far[5] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), W(3), W(4) ];
adult_green_dragon.far[6] = [ BL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
adult_green_dragon.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(3), TL(3) ];

adult_green_dragon.stressed = [];
adult_green_dragon.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
adult_green_dragon.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
adult_green_dragon.stressed[2] = [ BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
adult_green_dragon.stressed[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
adult_green_dragon.stressed[4] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TL(3), TL(3), TL(3), TR(3), TR(3) ];
adult_green_dragon.stressed[5] = [ TL(3), TL(3), TL(3), TR(3), TL(3), TL(3), TL(3), TR(3), TL(3), TL(3) ];
adult_green_dragon.stressed[6] = [ BL(3), TL(3), TL(3), TR(3), TL(3), TL(3), TL(3), TR(3), TL(3), TL(3) ];
adult_green_dragon.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(3), TL(3) ];



// ****************************************************************************
// Young Green Dragon

var ygd = {};
ygd.name = "Young Green Dragon";
ygd.image = "img/ygd.png";
ygd.faction = "evil";
ygd.simple = [ F(1), F(2), BL(1), BR(1) ];
ygd.normal = [ TL(3), BL(2), BL(3), F(3), R(1), W(2), BR(2), BR(3), TR(3) ];
ygd.difficult = [ F(4),  W(3) ];
ygd.actions = (TARGET + CHARGE + DODGE );

ygd.closing = [];
ygd.closing[0] = [ BL(1), R(1), R(1), R(1), R(1), F(1), F(1), F(1), F(1), BR(1) ];
ygd.closing[1] = [ R(1), F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(1), TR(3) ];
ygd.closing[2] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), W(3), W(3), W(2), W(2) ];
ygd.closing[3] = [ BR(1), TR(3), TR(3), TR(3), W(3), W(3), W(3), W(2), W(2), W(2) ];
ygd.closing[4] = [ TL(3), F(4), TR(3), W(2), W(2), W(2), W(3), W(3), W(3), W(3) ];
ygd.closing[5] = [ BL(1), TL(3), TL(3), TL(3), W(3), W(3), W(3), W(2), W(2), W(2) ];
ygd.closing[6] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), W(3), W(3), W(2), W(2) ];
ygd.closing[7] = [ R(1), F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(1), TL(3) ];
// Edit moves below
ygd.away = [];
ygd.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
ygd.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(2), TR(3) ];
ygd.away[2] = [ BR(2), BR(3), BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ygd.away[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), W(3), W(2), W(2), W(3), W(3) ];
ygd.away[4] = [ TL(3), TR(3), TR(3), W(2), W(2), W(2), W(3), W(3), W(3), W(3) ];
ygd.away[5] = [ TL(3), TL(3), TL(3), TL(3), TL(3), W(3), W(2), W(2), W(3), W(3) ];
ygd.away[6] = [ BL(2), BL(3), BL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ygd.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(2), TL(3) ];

ygd.far = [];
ygd.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
ygd.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(3), TR(3) ];
ygd.far[2] = [ BR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ygd.far[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), W(2), W(3) ];
ygd.far[4] = [ TL(3), TL(3), TL(3), TR(3), TR(3), TR(3), W(2), W(2), W(3), W(3) ];
ygd.far[5] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), W(2), W(3) ];
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

var creatures = [ adult_blue_dragon, adult_copper_dragon,  ancient_white_dragon, ard, adult_green_dragon,
    
    griffon, wood_elf_druid, drider, nightmare, gargoyle, human_barbarian, half_dragon_fighter, ogre_mage,
    water_cult_warrior, dwarven_ballista, frost_giant, hobgoblin_troop, mind_flayer, air_cult_warrior,
    red_dracolich, wraith,
    harpy, sarpiel, shadow, wyvern, young_blue_dragon, ygd, young_black_dragon, earth_genasi, earth_cult_warrior, air_elemental, vrock_demon]; 