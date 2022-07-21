(function(module, require) {
	const NPC = require('../../modules/NPC');
	const Pather = require('../../modules/Pather');
	let sellTimer = getTickCount(); // shop speedup test
	

	const tasks = [
		{
			Heal: NPC.Akara,
			Shop: NPC.Akara,
			Gamble: NPC.Gheed,
			Repair: NPC.Charsi,
			Merc: NPC.Kashya,
			Key: NPC.Akara,
			CainID: NPC.Cain
		},
		{
			Heal: NPC.Fara,
			Shop: NPC.Drognan,
			Gamble: NPC.Elzix,
			Repair: NPC.Fara,
			Merc: NPC.Greiz,
			Key: NPC.Lysander,
			CainID: NPC.Cain
		},
		{
			Heal: NPC.Ormus,
			Shop: NPC.Ormus,
			Gamble: NPC.Alkor,
			Repair: NPC.Hratli,
			Merc: NPC.Asheara,
			Key: NPC.Hratli,
			CainID: NPC.Cain
		},
		{
			Heal: NPC.Jamella,
			Shop: NPC.Jamella,
			Gamble: NPC.Jamella,
			Repair: NPC.Halbu,
			Merc: NPC.Tyrael,
			Key: NPC.Jamella,
			CainID: NPC.Cain
		},
		{
			Heal: NPC.Malah,
			Shop: NPC.Malah,
			Gamble: NPC.Anya,
			Repair: NPC.Larzuk,
			Merc: NPC.Qual_Kehk,
			Key: NPC.Malah,
			CainID: NPC.Cain
		}
	];

	
	const TownFunc = {
		ActData: [{}, {}, {}, {}, {}],
		initialize: () => {
			//print("Initialize town " + me.act);
			let fire;
			let wp = getPresetUnit(1, 2, 119);
			let	fireUnit = getPresetUnit(1, 2, 39);
			switch (me.act) {
			case 1:
				if (!fireUnit) {
					return false;
				}
	
				fire = [fireUnit.roomx * 5 + fireUnit.x, fireUnit.roomy * 5 + fireUnit.y];
	
				TownFunc.ActData[0].spot = {};
				TownFunc.ActData[0].spot.stash = [fire[0] - 7, fire[1] - 12];
				TownFunc.ActData[0].spot[NPC.Warriv] = [fire[0] - 5, fire[1] - 2];
				TownFunc.ActData[0].spot[NPC.Cain] = [fire[0] + 6, fire[1] - 5];
				TownFunc.ActData[0].spot[NPC.Kashya] = [fire[0] + 14, fire[1] - 4];
				TownFunc.ActData[0].spot[NPC.Akara] = [fire[0] + 56, fire[1] - 30];
				TownFunc.ActData[0].spot[NPC.Charsi] = [fire[0] - 39, fire[1] - 25];
				TownFunc.ActData[0].spot[NPC.Gheed] = [fire[0] - 34, fire[1] + 36];
				TownFunc.ActData[0].spot.portalspot = [fire[0] + 10, fire[1] + 18];
				TownFunc.ActData[0].spot.waypoint = [wp.roomx * 5 + wp.x, wp.roomy * 5 + wp.y];
				TownFunc.ActData[0].initialized = true;
	
				break;
			case 2:
				TownFunc.ActData[1].spot = {};
				TownFunc.ActData[1].spot[NPC.Fara] = [5124, 5082];
				TownFunc.ActData[1].spot[NPC.Cain] = [5124, 5082];
				TownFunc.ActData[1].spot[NPC.Lysander] = [5118, 5104];
				TownFunc.ActData[1].spot[NPC.Greiz] = [5033, 5053];
				TownFunc.ActData[1].spot[NPC.Elzix] = [5032, 5102];
				TownFunc.ActData[1].spot.palace = [5088, 5153];
				TownFunc.ActData[1].spot.sewers = [5221, 5181];
				TownFunc.ActData[1].spot[NPC.Meshif] = [5205, 5058];
				TownFunc.ActData[1].spot[NPC.Drognan] = [5097, 5035];
				TownFunc.ActData[1].spot[NPC.Atma] = [5137, 5060];
				TownFunc.ActData[1].spot[NPC.Warriv] = [5152, 5201];
				TownFunc.ActData[1].spot.portalspot = [5168, 5060];
				TownFunc.ActData[1].spot.stash = [5124, 5076];
				TownFunc.ActData[1].spot.waypoint = [5070, 5083];
				TownFunc.ActData[1].initialized = true;
	
				break;
			case 3:
				TownFunc.ActData[2].spot = {};
				TownFunc.ActData[2].spot[NPC.Meshif] = [5118, 5168];
				TownFunc.ActData[2].spot[NPC.Hratli] = [5223, 5048, 5127, 5172];
				TownFunc.ActData[2].spot[NPC.Ormus] = [5129, 5093];
				TownFunc.ActData[2].spot[NPC.Asheara] = [5043, 5093];
				TownFunc.ActData[2].spot[NPC.Alkor] = [5083, 5016];
				TownFunc.ActData[2].spot[NPC.Cain] = [5148, 5066];
				TownFunc.ActData[2].spot.stash = [5144, 5059];
				TownFunc.ActData[2].spot.portalspot = [5150, 5063];
				TownFunc.ActData[2].spot.waypoint = [5158, 5050];
				TownFunc.ActData[2].initialized = true;
	
				break;
			case 4:
				TownFunc.ActData[3].spot = {};
				TownFunc.ActData[3].spot[NPC.Cain] = [5027, 5027];
				TownFunc.ActData[3].spot[NPC.Halbu] = [5089, 5031];
				TownFunc.ActData[3].spot[NPC.Tyrael] = [5027, 5027];
				TownFunc.ActData[3].spot[NPC.Jamella] = [5088, 5054];
				TownFunc.ActData[3].spot.stash = [5022, 5040];
				TownFunc.ActData[3].spot.portalspot = [5045, 5042];
				TownFunc.ActData[3].spot.waypoint = [5043, 5018];
				TownFunc.ActData[3].initialized = true;
	
				break;
			case 5:
				TownFunc.ActData[4].spot = {};
				TownFunc.ActData[4].spot.portalspot = [5098, 5019];
				TownFunc.ActData[4].spot.stash = [5129, 5061];
				TownFunc.ActData[4].spot[NPC.Larzuk] = [5141, 5045];
				TownFunc.ActData[4].spot[NPC.Malah] = [5078, 5029];
				TownFunc.ActData[4].spot[NPC.Cain] = [5119, 5061];
				TownFunc.ActData[4].spot[NPC.Qual_Kehk] = [5066, 5083];
				TownFunc.ActData[4].spot[NPC.Anya] = [5112, 5120];
				TownFunc.ActData[4].spot.portal = [5118, 5120];
				TownFunc.ActData[4].spot.waypoint = [5113, 5068];
				TownFunc.ActData[4].spot[NPC.Nihlathak] = [5071, 5111];
				TownFunc.ActData[4].initialized = true;
	
				break;
			}
	
			return true;
		},
		goToTown: (act, wpmenu) => {
			let towns = [1, 40, 75, 103, 109];

			if (!me.inTown) {
				if (!Pather.makePortal()) {
					throw new Error('TownFunc.goToTown: Failed to make TP');
				}

				if (!Pather.usePortal(null, me.name)) {
					throw new Error('TownFunc.goToTown: Failed to take TP');
				}
			}

			if (act === undefined) {
				return;
			}

			if (act < 1 || act > 5) {
				throw new Error('TownFunc.goToTown: Invalid act');
			}

			if (act !== me.act) {
				try {
					Pather.useWaypoint(towns[act - 1], wpmenu);
				} catch (WPError) {
					throw new Error('TownFunc.goToTown: Failed use WP');
				}
			}

			return;
		},
		move: (spot) => {
			if (!me.inTown) {
				TownFunc.goToTown();
			}
	
			let i, path;
	
			if (!TownFunc.ActData[me.act - 1].initialized) {
				TownFunc.initialize();
			}
	
			// Act 5 wp->portalspot override - ActMap.cpp crash
			if (me.act === 5 && spot === 'portalspot' && getDistance(me.x, me.y, 5113, 5068) <= 8) {
				path = [5113, 5068, 5108, 5051, 5106, 5046, 5104, 5041, 5102, 5027, 5098, 5018];
	
				for (i = 0; i < path.length; i += 2) {
					Pather.walkTo(path[i], path[i + 1]);
				}
	
				return true;
			}
	
			for (i = 0; i < 3; i += 1) {
				if (TownFunc.moveToSpot(spot)) {
					return true;
				}
			}
	
			return false;
		},

		moveToSpot: (spot) => {
			let i, path, townSpot,
				longRange = (spot === 'waypoint');
	
			if (!TownFunc.ActData[me.act - 1].hasOwnProperty('spot') || !TownFunc.ActData[me.act - 1].spot.hasOwnProperty(spot)) {
				return false;
			}
	
			if (typeof (TownFunc.ActData[me.act - 1].spot[spot]) === 'object') {
				townSpot = TownFunc.ActData[me.act - 1].spot[spot];
			} else {
				return false;
			}
	
			if (longRange) {
				path = getPath(me.area, townSpot[0], townSpot[1], me.x, me.y, 1, 8);
	
				if (path && path[1]) {
					townSpot = [path[1].x, path[1].y];
				}
			}
	
			for (i = 0; i < townSpot.length; i += 2) {
				//print("moveToSpot: " + spot + " from " + me.x + ", " + me.y);
	
				if (getDistance(me, townSpot[i], townSpot[i + 1]) > 2) {
					Pather.moveTo(townSpot[i], townSpot[i + 1], 3, false, true);
				}
	
				switch (spot) {
				case 'stash':
					if (getUnit(2, 267)) {
						return true;
					}
	
					break;
				case 'palace':
					if (getUnit(1, NPC.Jerhyn)) {
						return true;
					}
	
					break;
				case 'portalspot':
				case 'sewers':
					if (getDistance(me, townSpot[i], townSpot[i + 1]) < 10) {
						return true;
					}
	
					break;
				case 'waypoint':
					if (getUnit(2, 'waypoint')) {
						return true;
					}
	
					break;
				default:
					if (getUnit(1, spot)) {
						return true;
					}
	
					break;
				}
			}
	
			return false;
		},

	};
	module.exports = TownFunc;
})(module, require);
