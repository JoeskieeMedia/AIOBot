
(function(module, require) {
	
	const GameMode = require('../modules/GameMode');
	
	new GameMode({
		active: () => true,
		name: 'Auto Play',
		prio: 1,
		handler: () => {
			
			
			const questMap = new Map();
			const array = ['DenOfEvil'];
			const files = dopen('libs/aio/scripts/').getFiles();
			// script handler
			files.forEach(function (fullName) {
				const name = fullName.slice(0, fullName.lastIndexOf('.js'));
				let fileModule = require('../../libs/aio/scripts/' + name);
				questMap.set(name, fileModule);
				
		
			});
			// execute scripts
			for (let i = 0; i < array.length; i++) {
				if (questMap.get(array[i]).check()) {
					questMap.get(array[i]).exec();
					
				}
			}
		}
	});
	
})(module, require);
