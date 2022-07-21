(function(module, require) {
	const sdk = require('../../modules/sdk');
	const QuestEvent = require('../../modules/QuestEvents');
	const Promise = require('../../modules/Promise');
	const Pather = require('../../modules/Pather');

	const DenOfEvil = {
		act: () => 1, // probably don't need this but it's here incase we do
		areas: [sdk.areas.BloodMoor, sdk.areas.DenofEvil],
			
		
		check: () => !me.getQuest(sdk.quest.id.DenofEvil, DenOfEvil.state.Completed),
		message: () => {
			
		},
		immunes: () => {
			const normal = [];
			const nightmare = [];
			const hell = [
				sdk.monsters.Fallen,
				sdk.monsters.FallenShaman,
				sdk.monsters.GargantuanBeast,
				sdk.monsters.Zombie
			];
			switch (['normal', 'nightmare', 'hell'][me.diff]) {
			case 'normal': return normal;
			case 'nightmare': return nightmare;
			case 'hell': return hell;
			}
			

		},
		previosAreas: [],
		state: {
			Completed: 0,
			KilledLast: 1,
			LookForDen: 2,
			LeftTown: 3,
			EnteredDen: 4,
			Greyed: 12,
			PartyMemberKilledLast: 13, // works the same as 1 but wanted something to label it as 

		},
		
		town: sdk.areas.RogueEncampment,

		questArea: [sdk.areas.DenofEvil],

		questItems: () => false,

		exec: () => {
			
			print('Den Of Evil Immunes: ' + DenOfEvil.immunes());
			QuestEvent.on(sdk.quest.id.DenofEvil, (sub, state) => {

				if (sub === DenOfEvil.state.EnteredDen && state) {
					print('Entered Den of evil');

					new Promise(resolve => me.area === DenOfEvil.questArea() && resolve())
						.then(function() { // Assuming here we are in act 1.
							
							//Town.move('warriv');
							const npc = getUnit(1, 'warriv');
							npc.openMenu() && npc.useMenu(sdk.menu.GoEast);
						});
				}
			});
			QuestEvent.on(sdk.quest.id.DenofEvil, function(sub, state) {
				
				
				if (sub === DenOfEvil.state.KilledLast && state) {
					print('Just Killed last enemy in Den of Evil');

					new Promise(resolve => me.area === sdk.areas.DenofEvil && resolve())
						.then(function() { // Assuming here we are in act 1.
							
							//Town.move('warriv');
							const npc = getUnit(1, 'warriv');
							npc.openMenu() && npc.useMenu(sdk.menu.GoEast);
						});
				}

			});
			
			for (let i = 0; i < DenOfEvil.areas.length; i++) {
				
				
				if (me.area === sdk.areas.BloodMoor) {
					
				}
				//Pather.moveToExit(DenOfEvil.areas[i], true);
				

			}
		}

	};
	module.exports = DenOfEvil;
})(module, require);
