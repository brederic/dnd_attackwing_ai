// ***************************************************************************
// DnD Attack Wing AI - Javascript

// ****************************************************************************
//Credits https://www.myfreetextures.com/worn-parchment-paper-5/
// https://dd-attack-wing.fandom.com/wiki/D%26D_Attack_Wing_Wiki
// Constants

// ENEMY SHIP DIRECTIONS
var DIR_000 = 0;
var DIR_045 = 1;
var DIR_090 = 2;
var DIR_135 = 3;
var DIR_180 = 4;
var DIR_225 = 5;
var DIR_270 = 6;
var DIR_315 = 7;

var DIRECTION = [ "12", "1-2", "3", "4-5", "6", "7-8", "9", "10-11" ];

// HEADING
var AWAY = "Retreating";            // Heading away
var CLOSING = "Closing";            // Closing
var FAR = "Out of Range";           // Far
var STRESSED = "Stressed";          // Stressed

// ACTIONS
var TARGET = 0x1;
var FEINT = 0x2;
var CHARGE       = 0x4;
var CONCENTRATE       = 0x8;
var DODGE       = 0x10;
var CLOAKING    = 0x20;
var SLAM        = 0x40;
var ROTATE_ARC  = 0x80;

var COORDINATE   = 0x1000;
var JAM         = 0x2000;
var RECOVER     = 0x4000;
var REINFORCE   = 0x8000;

// ACTIONS TEXT
var TARGET_LOCK_TEXT =  'Obtain <img src="img/action_target_tp.png" alt="Target-Lock" height="30px" width="30px"> on targeted creature as a free action.<br>';
TARGET_LOCK_TEXT += "Clear Target at end of turn.";

var CRITICAL_TEXT = 'Use an action on a critical damage card to turn it face down. If more than one, use the first one received'
var UPGRADE_TEXT = "Use an action on an upgrade to its advantage. If more than one, use the first one assigned, if it makes sense."

var DISABLED_TEXT = "Remove a disabled token."



var BARREL_ROLL_TEXT1 = 'If this will put target into AI creature\'s firing arc choose <img src="img/action_feint.png" alt="Barrel Roll"  height="30px" width="30px">';
var BARREL_ROLL_TEXT2 = 'If this will put the AI creature out of firing enemy creature firing arc choose <img src="img/action_feint.png"  height="30px" width="30px" alt="Barrel Roll">';

var BOOST_TEXT1 = 'If this will target into AI creature\'s firing arc choose <img src="img/action_charge.png"  height="30px" width="30px" alt="Boost">';
var BOOST_TEXT2 = 'If this will put the AI creature out of firing enemy creature firing arc choose <img src="img/action_charge.png"  height="30px" width="30px" alt="Boost">';

var FOCUS_TEXT1 = 'If target is in a firing arc choose <img src="img/action_concentrate.png"  height="30px" width="30px"  alt="Focus">';
var FOCUS_TEXT2 = 'Always use <img src="img/action_concentrate.png"   height="30px" width="30px" alt="Focus">';

var EVADE_TEXT = 'Else Choose <img src="img/action_dodge.png"  height="30px" width="30px" alt="Evade">';

var CLOAKING_TEXT = 'Cloak/Decloak <img src="img/action_cloak.png" alt="Cloak">';          // TODO

var SLAM_TEXT = "Slam";					// TODO

var ROTATE_ARC_TEXT = "Rotate Arc"; 	// TODO


// ACTION TEXT - Huge Ships
var COORDINATE_TEXT = "COORDINATE";      // TODO

var JAM_TEXT = "JAM";                    // TODO

var RECOVER_TEXT = "RECOVER";            // TODO

var REINFORCE_TEXT = "REINFORCE";        // TODO

// SHIPS array and currently selected SHIP (re-defined in separate js file)
var creatures = [];
var SHIP = {};


// ****************************************************************************
// Moves

class Maneuver {
    constructor(name, distance) {
        this.name = name;
        this.num = distance;
    }
}

function F( distance ) {
    return new Maneuver("forward", distance);
}

function BL( distance ) {
    return new Maneuver("bank-left", distance);
}

function BR( distance ) {
    return new Maneuver("bank-right", distance);
}

function TL( distance ) {
    return new Maneuver("turn-left", distance);
}

function TR( distance ) {
    return new Maneuver("turn-right", distance);
}

function W( distance ) {
    return new Maneuver("wingover", distance);
}

function PH( distance ) {
    return new Maneuver("pivot-hold", distance);
}
function PR( distance ) {
    return new Maneuver("pivot-right", distance);
}
function PL( distance ) {
    return new Maneuver("pivot-left", distance);
}
function PRV( distance ) {
    return new Maneuver("pivot-reverse", distance);
}

function SLL( distance ) {
    return new Maneuver("segnor-loop-left", distance);
}

function SLR( distance ) {
    return new Maneuver("segnor-loop-right", distance);
}

function TRL( distance ) {
    return new Maneuver("tallon-roll-left", distance);
}

function TRR( distance ) {
    return new Maneuver("tallon-roll-right", distance);
}

function RBL( distance ) {
    return new Maneuver("reverse-bank-left", distance);
}

function RBR( distance ) {
    return new Maneuver("reverse-bank-right", distance);
}

function R( distance ) {
    return new Maneuver("reverse", distance);
}

function invalid() {
	return new Maneuver("invalid", 0);
}

// ****************************************************************************
// Helper Functions

function display_ship_choice( faction, funct )
{
    var data = "";
    var idx=0;
    var shown=0;

    data += '<form action="demo_form.asp" name="ship_buttons">';

    data += '<b>Alignment:</b><br>';

    data += '<label>\n';
    data += '    <div title="Evil">'
    data += '       <input type="radio" onclick="display_ship_choice(\'evil\', \'' + funct + '\')" hidden >'
    data += '       <img class="faction_button" src="img/color-evil.png" />'
    data += '    </div>'
    data += '</label>\n';

    data += '<label>\n';
    data += '    <div title="Good">'
    data += '       <input type="radio" onclick="display_ship_choice(\'good\', \'' + funct + '\')" hidden >'
    data += '        <img class="faction_button" src="img/color-good.png" />'
    data += '    </div>'
    data += '</label>\n';

    data += '<br>\n';

    data += '<label>\n';
    data += '    <div title="Neutral">'
    data += '       <input type="radio" onclick="display_ship_choice(\'neutral\', \'' + funct + '\')" hidden >'
    data += '        <img class="faction_button" src="img/color-neutral.png" />'
    data += '    </div>'
    data += '</label>\n';

    data += '<b>AI Unit:</b><br>';

    for( idx=0; idx < creatures.length; idx++ )
    {
        // only add buttons for creatures for the selected faction
        if( creatures[idx].faction == faction )
        {
            // run the selected function on the first faction creature found
            if( shown == 0 )
            {
                var fn = window[funct];
                fn(idx);
            }

            shown++;
            funct_args = funct + "(" + idx + ")";

            data += '<label>\n';
            data += '    <div title="' + creatures[idx].name + '">'
            data += '       <input type="radio" onclick="' + funct_args + '" hidden />'
            data += '       <img class="ship_button" src="' + creatures[idx].image + '" />'
            data += '    </div>'
            data += '</label>\n';

            if( shown % 2 == 0 )
            {
                data += '<br>\n'
            }
        }
    }

    data += '<br>\n';
    data += '</form>\n';
    document.getElementById( "ships" ).innerHTML = data;

}

function gen_maneuver_table( name, table )
{
    var data;
    data = '<div class="label">' + name + "</div>";
    data += '<table class="ship_table">';
    for( var dir=0; dir < table.length; dir++ )
    {
        data += "<tr><td class=\"ship_cell\">" + DIRECTION[dir];
        for( var item=0; item < table[dir].length; item++ )
        {
            maneuver = format_maneuver( SHIP, table[dir][item] );
            data += "<td class=\"ship_cell\">";
            data += '<div class="table_num">' + maneuver.num + '</div>';
            data += '<div class="table_num">' + maneuver.img + '</div>';
            data += "</td>";
        }
        data += "</tr>";
    }
    data += "</table><br>";
    return data;
}

function display_ship( ship_id )
{
    // Set the global to the selected creature
    SHIP = creatures[ ship_id ];
    if (SHIP === undefined ) {
    	var error = "<div><p>Unable to get creature(" + ship_id + ")</div>";
    	document.getElementById( "table" ).innerHTML( error );
    	return;
    }

    // image
    ship = '<img src="' + SHIP.image + '" alt="' + SHIP.name + '"><br>' + SHIP.name;

    actions =  format_actions( SHIP );

    // Tables (closing, away, etc.)
    var tables = "";
    tables += gen_maneuver_table( CLOSING, SHIP.closing )
    tables += gen_maneuver_table( AWAY, SHIP.away )
    tables += gen_maneuver_table( FAR, SHIP.far )
    tables += gen_maneuver_table( STRESSED, SHIP.stressed )

    document.getElementById( "version" ).innerHTML = VERSION;
    document.getElementById( "ship").innerHTML = ship;
    document.getElementById( "actions" ).innerHTML = actions;
    document.getElementById( "table" ).innerHTML = tables;
}


function set_version()
{
    document.getElementById('version').innerHTML = VERSION;
}


function set_ship( ship_id )
{
    // Set the global to the selected ship
    SHIP = creatures[ ship_id ];
    if (SHIP === undefined ) {
    	document.getElementById('ship_name').innerHTML = "<br>Unknown Ship: " + ship_id;
    	return;
    }

    set_version();

    // Update index html elements for the selected creature
   	document.getElementById('ship_image').src = SHIP.image;
   	document.getElementById('ship_name').innerHTML = "<br>" + SHIP.name;

    // Set faction specific target images
    for( var idx=0; idx < 8; idx++ ) {
        var target = "target" + idx
        var image  = "img/" + SHIP.faction + idx + ".png"
        document.getElementById(target).src = image;
    }

    // Clear any previous maneuvers shown
    document.getElementById('closing_num').innerHTML = "<p></p>";
    document.getElementById('closing_img').innerHTML = "<p></p>";
    document.getElementById('away_num').innerHTML = "<p></p>";
    document.getElementById('away_img').innerHTML = "<p></p>";
    document.getElementById('far_num').innerHTML = "<p></p>";
    document.getElementById('far_img').innerHTML = "<p></p>";
    document.getElementById('stressed_num').innerHTML = "<p></p>";
    document.getElementById('stressed_img').innerHTML = "<p></p>";

    document.getElementById('selection').innerHTML = "<p>Press a direction</p>";
    document.getElementById('actions-text').innerHTML = format_actions( SHIP );
}


function pick( options )
{
	if (options === undefined)
	{
		return invalid();
	}

	var size=options.length;
	if ( size == 0 )
	{
		return invalid();
	}
    var choice=Math.floor(Math.random()*size);
    return options[choice];
}


function maneuverInList( maneuver, list )
{
    var found = false;
    for( var i=0; i < list.length; i++ )
    {
        if( ( list[i].num == maneuver.num ) && ( list[i].name == maneuver.name ) )
        {
            found = true;
            break;
        }
    }

    return found;
}


function format_maneuver( ship, maneuver )
{
    var num;
    var img;

    if ( maneuverInList( maneuver, ship.simple ) )
    {
        num = "<span style=color:green>" + maneuver.num + "</span>";
        img = '<img src="img/' + maneuver.name + '-green.png">';
    }
    else if ( maneuverInList( maneuver, ship.difficult ) )
    {
        num = "<span style=color:red>" + maneuver.num + "</span>";
        img = '<img src="img/' + maneuver.name + '-red.png">';
    }
    else if ( maneuverInList( maneuver, ship.normal ) )
    {
        num = "<span>" + maneuver.num + "</span>";
        img = '<img src="img/' + maneuver.name + '-white.png">';
    }
    else {
        num = "<span style=color:purple>NA</span>";
        img = "";
    }

    return {'num': num, 'img': img };
}


function format_actions( ship )
{
    var actions = "<ol>";

    if( ship.actions & TARGET )
    {
        actions += "<li>" + TARGET_LOCK_TEXT + "</li>";
    }
    actions += "<li>" + CRITICAL_TEXT + "</li>";
    actions += "<li>" + UPGRADE_TEXT + "</li>";
    actions += "<li>" + DISABLED_TEXT + "</li>";
    if( ship.actions & FEINT )
    {
        actions += "<li>" + BARREL_ROLL_TEXT1 + "</li>";
        actions += "<li>" + BARREL_ROLL_TEXT2 + "</li>";
    }

    if( ship.actions & CHARGE )
    {
        actions += "<li>" + BOOST_TEXT1 + "</li>";
        actions += "<li>" + BOOST_TEXT2 + "</li>";
    }

    if( ship.actions & CONCENTRATE )
    {
        if( ship.actions & DODGE )
        {
            actions += "<li>" + FOCUS_TEXT1 + "</li>";
        }
        else
        {
            actions += "<li>" + FOCUS_TEXT2 + "</li>";
        }
    }

    if( ship.actions & DODGE )
    {
        actions += "<li>" + EVADE_TEXT + "</li>";
    }

    if( ship.actions & CLOAKING )
    {
        actions += "<li>" + CLOAKING_TEXT + "</li>";
    }

    if( ship.actions & SLAM )
    {
        actions += "<li>" + SLAM_TEXT + "</li>";
    }

    if( ship.actions & ROTATE_ARC )
    {
        actions += "<li>" + ROTATE_ARC_TEXT + "</li>";
    }

    if( ship.actions & COORDINATE )
    {
        actions += "<li>" + COORDINATE_TEXT + "</li>";
    }

    if( ship.actions & JAM )
    {
        actions += "<li>" + JAM_TEXT + "</li>";
    }

    if( ship.actions & RECOVER )
    {
        actions += "<li>" + RECOVER_TEXT + "</li>";
    }

    if( ship.actions & REINFORCE )
    {
        actions += "<li>" + REINFORCE_TEXT + "</li>";
    }

    actions += "</ol>";

    return actions;
}


// ****************************************************************************
// Main

function load_index()
{
    set_ship(0);
    display_ship_choice( "evil", "set_ship" );
}


function load_ships()
{
    display_ship(0);
    display_ship_choice( "evil", "display_ship" );
}


function movement( direction )
{
    // direction: n=0, ne=1, e=2, se=3, s=4, sw=5, w=6,nw=7
    // heading: away, closing
    var maneuver;
    var selection = "<p>";
    selection += "at " + DIRECTION[direction] + " o'clock</p>";
    document.getElementById('selection').innerHTML = selection;

    // Select the maneuver randonly from appropriate creature table
    maneuver = pick( SHIP.closing[direction] );
    formatted = format_maneuver( SHIP, maneuver );
    document.getElementById( "closing_num" ).innerHTML = formatted.num;
    document.getElementById( "closing_img" ).innerHTML = formatted.img;

    maneuver = pick( SHIP.away[direction] );
    formatted = format_maneuver( SHIP, maneuver );
    document.getElementById( "away_num" ).innerHTML = formatted.num;
    document.getElementById( "away_img" ).innerHTML = formatted.img;

    maneuver = pick( SHIP.far[direction] );
    formatted = format_maneuver( SHIP, maneuver );
    document.getElementById( "far_num" ).innerHTML = formatted.num;
    document.getElementById( "far_img" ).innerHTML = formatted.img;

    maneuver = pick( SHIP.stressed[direction] );
    formatted = format_maneuver( SHIP, maneuver );
    document.getElementById( "stressed_num" ).innerHTML = formatted.num;
    document.getElementById( "stressed_img" ).innerHTML = formatted.img;
}
