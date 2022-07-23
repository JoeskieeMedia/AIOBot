(function(module, require) {
	const Control = require('../../modules/Control');
	const StarterFunc = {
		createCharacters: (charClass) => {

			switch (charClass) {
			case 'Amazon': return getControl().click(100, 280);
			case 'Assassin': return getControl().click(200, 280);
			case 'Barbarian': return getControl().click(400, 280);
			case 'Druid': return getControl().click(700, 280);
			case 'Necromancer': return getControl().click(300, 290);
			case 'Paladin': return getControl().click(521, 270);
			case 'Sorceress': return getControl().click(620, 270);
			}
		},

		generateName: (length) => {
			const letters = 'abcdefghijklmnopqrstuvwxyz';

			let name = [];
			for (let i = 0; i < length; i++) {
				const randomLetter = letters[Math.floor(Math.random() * letters.length)];
				name.push(randomLetter);
			}
		
			return name.join('');
		},

		setDifficulty: (difficulty) => {

			switch (difficulty) {
			case 'normal': return Control.Normal.click();
			case 'nightmare': return Control.Nightmare.click();
			case 'hell': return Control.Hell.click();
			}
		},

		createConfig: (config) => {
		// print('ÿc9 createConfig ÿc9')
			if (!config) {
				config = StarterFunc.defaultConfig();
			}
			const string = JSON.stringify(config);

			FileTools.writeText('config/' + me.profile + '.json', string);
		
			return config;
		
		},

		readConfig: (profile) => {
		// print('ÿc9 readConfig ÿc9')
		
			if (!StarterFunc.configExists()) {
				if (profile.Mode) {
					StarterFunc.createConfig(profile);
					return profile;
				}
				StarterFunc.createConfig(StarterFunc.defaultConfig());
				return StarterFunc.defaultConfig();
			}
		
			const files = FileTools.readText('config/' + me.profile + '.json');
			const config = JSON.parse(files);
			return config;
		
		

		},
		defaultConfig: () => {
			const defaultConfig = {
				Account: StarterFunc.generateName(8),
				Build: 'Meteorb',
				Character: StarterFunc.generateName(8),
				Class: 'Sorceress',
				Expansion: true,
				Hardcode: false,
				Ladder: true,
				Password: StarterFunc.generateName(8),
				Mode: 'BattleNet',
				Realm: 'Asia',

			};
			return defaultConfig;
		},
		updateConfig: (config) => {
		// print('ÿc9 updateConfig ÿc9')
		
			if (StarterFunc.configExists()) {
				if (config.Mode) {
					StarterFunc.createConfig(config);
				}
			}
			const string = JSON.stringify(config);
			FileTools.writeText('config/' + me.profile + '.json', string);
		},

		configExists: () => {
		// print('ÿc9 configExists ÿc9')
			const exists = FileTools.exists('config/' + me.profile + '.json');
			return exists;
		},

		renameCharacter: (profile) => {
			if (!profile) {
				profile = StarterFunc.defaultConfig();
				return profile;
			}
			
			StarterFunc.updateConfig(profile);
			return profile;
		},

	
	
		getCharacters: (profile) => {
			try {
				let lastCharacter;
				sendKey(0x24);
	
				for (let i = 0; i < 9; i++) {
					delay(50);
					let text = getControl(4).getText();
					// print("this is text:" + text)
				
					if (text.toString().toLowerCase() === profile.Character.toLowerCase()) {
						return true;
					
					}
					if (lastCharacter === text.toString().toLowerCase()) {
						break;
					}
					lastCharacter = text.toString().toLowerCase();
					sendKey(0x28);
				
				}
				sendKey(0x24);
				sendKey(0x27);
				for (let i = 0; i < 9; i++) {
				
					let text = getControl(4).getText();
				
					if (text.toString().toLowerCase() === profile.Character.toLowerCase()) {
					// print('here')
						return true;
					}
					if (lastCharacter === text.toString().toLowerCase()) {
						break;
					}
					lastCharacter = text.toString().toLowerCase();
					sendKey(0x28);
				}
				
		
			} catch (err) {
				print(err);
			}
		
	
	
		
		},
	};
	module.exports = StarterFunc;
})(module, require);
