

(function (module, require) {
	// Should be an module
	include('oog.js');
	const Control = require('../../modules/Control');
	const StarterFunc = require('./StarterFunc');
	let lastLocation = 0;
	let profile = {};
	const Starter = {
		/**
         * @param {Object} profile Profile for the current window
         * 
         * Profile information from config/<profile name>.json
         * @param {String} Account Name of the account to connect wtih
         * @param {String} Build Build of the character
         * @param {String} Character Password of the account to connect wtih
         * @param {String} Class Class of the character
         * @param {Boolean} Expansion Classic or Expansion character
         * @param {Boolean} Hardcore Hardcore or softcore 
         * @param {Boolean} Ladder Ladder Character
         * @param {String} Password Password of the account to connect wtih
         * @param {String} Mode BattleNet singlePlayer or TCP
         * @param {String} Realm Which realm you want to play
         */
        

		0: (loc) => {
			if (loc === 50) {
				Control.SplashScreen.click();
			}
			// print('ÿc2 Nothing to do ÿc2')
            
			lastLocation = 0;
			return lastLocation;
			
		},

		1: () => {
			// print('ÿc2 Lobby ÿc2')
            
            
			Control.CreateGameWindow.click();
			lastLocation = 1;
			return lastLocation;
		},
		2: () => {
			// print('ÿc2 Waiting in line ÿc2')
			lastLocation = 2;
			return lastLocation;
		},
		3: () => {
			// print('ÿc2 Lobby Chat ÿc2')
			lastLocation = 3;
			return lastLocation;
		},

		4: () => {
			// print('ÿc2 Create Game ÿc2')
			const gameName = StarterFunc.generateName(8);
			const password = StarterFunc.generateName(8);
			Control.CreateGameName.setText(gameName);
			delay(500);
			Control.CreateGamePass.setText(password);
			delay(500);
			StarterFunc.setDifficulty(profile.Difficulty);
			delay(2000);
			Control.CreateGame.click();
			lastLocation = 4;
			return lastLocation;
		},

		5: () => {
			// print('ÿc2 Join Game ÿc2')

			lastLocation = 5;
			return lastLocation;
		},

		6: () => {
			// print('ÿc2 Ladder ÿc2')

			lastLocation = 6;
			return lastLocation;
		},

		7: () => {
			// print('ÿc2 Channel ÿc2')

			lastLocation = 7;
			return lastLocation;
		},

		8: () => {
			if (!profile.Mode) {
				profile = StarterFunc.readConfig();

			}
			// print('ÿc2 Main Menu ÿc2')    
                 
			Control.BattleNet.click();
			lastLocation = 8;
			return lastLocation;
			
		},
            

		9: () => {
			if (lastLocation === 10) {
				Control.CreateNewAccount.click();
				delay(1000);
			}
			// print('ÿc2 Battle.net Login ÿc2')
			
			Control.LoginUsername.setText( profile.Account );
			delay(500);
			Control.LoginPassword.setText( profile.Password );
            
			if (Control.Login.control) {
				Control.Login.click();

			}
			lastLocation = 9;
			return lastLocation;
			
		},

		10: () => {

			// print('ÿc2 Login Error ÿc2')
			Control.LoginErrorOk.click();
			
			lastLocation = 10;
			return lastLocation;
		},

		11: () => {

			// print('ÿc2 Unable to connect ÿc2')
			lastLocation = 11;
			return lastLocation;
		},
		12: () => {
			// print('ÿc2 Character Select ÿc2')
           
			if (StarterFunc.getCharacters(profile)) {
				Control.CreateNewCharacterOk.click();
			}
            
            
        
			if (Control.CharSelectCreate.control) {
				Control.CharSelectCreate.click();
			}
	
			// print('here')
			lastLocation = 12;
			return lastLocation;
		},
		13: () => {

			// print('ÿc2 Realm Down ÿc2')
			lastLocation = 13;
			return lastLocation;
		},
		14: () => {

			// print('ÿc2 Main Menu ÿc2')
			lastLocation = 14;
			return lastLocation;
		},
		15: () => {
			print('ÿc2 New Character Screen ÿc2');
			if (lastLocation === 30) {
				StarterFunc.renameCharacter(profile);
				// print(profile.Character)
			}
			if (lastLocation === 29) {
				delay(3000);
			}
			print('here');
			if (!profile.Character) {
				profile.Character = StarterFunc.generateName(8);
				StarterFunc.updateConfig(profile);
			}
            
			// print('here')
			delay(50);
			Control.CharCreateCharName.setText(profile.Character);
			if (!profile.Ladder) {
				Control.CharCreateLadder.click();
			}
			if (profile.Hardcore) {
				Control.CharCreateHardcore.click();
                
				Control.CharCreateHCWarningOk.click();
                
			}
			if (!profile.Expansion) {
				Control.CharCreateExpansion.click();
			}
			Control.CreateNewCharacterOk.click();
			lastLocation = 15;
			return lastLocation;
		},
		16: () => {
            
			//// print('ÿc2 Character Select Waiting... ÿc2')
			delay(1500);
			lastLocation = 16;
			return lastLocation;
		},
		17: () => {

			// print('ÿc2 Lost Connection ÿc2')
			lastLocation = 17;
			return lastLocation;
		},
		18: () => {
			// print('ÿc2 Splash ÿc2')
			lastLocation = 18;
			return lastLocation;
		},
		19: () => {
			// print('ÿc2 Cd Key is in Use ÿc2')
			lastLocation = 19;
			return lastLocation;
		},
		20: () => {
			// print('ÿc2 Difficulty ÿc2')
			lastLocation = 20;
			return lastLocation;
		},
		21: () => {
			// print('ÿc2 Main Menu Connecting... ÿc2')
			lastLocation = 21;
			return lastLocation;
		},
		22: () => {
			// print('ÿc2 Invalid Cdkey ÿc2')
			lastLocation = 22;
			return lastLocation;
		},
		23: () => {
			// print('ÿc2 Connecting... ÿc2')
			lastLocation = 23;
			return lastLocation;
		},
		24: () => {

			// print('ÿc2 Server Down ÿc2')
			lastLocation = 24;
			return lastLocation;
		},
		25: () => {

			// print('ÿc2 Please Wait.. ÿc2')
            
			lastLocation = 25;
			return lastLocation;
		},
		26: () => {

			// print('ÿc2 Game Exists Already ÿc2')
			lastLocation = 26;
			return lastLocation;
		},
		27: () => {
			// print('ÿc2 GateWay ÿc2')
			lastLocation = 27;
			return lastLocation;
		},
		28: () => {
			// print('ÿc2 Game Does not Exist ÿc2')
			lastLocation = 28;
			return lastLocation;
		},
		29: () => {
			print('ÿc2 Character Creation ÿc2');
			if (lastLocation === 30) {
				profile.Character = StarterFunc.generateName(8);
			}
			delay(50);
			StarterFunc.createCharacters(profile.Class);
			delay(2000);
			lastLocation = 29;
			return lastLocation;
		},
		30: () => {
			// print('ÿc2 Character Already Exists ÿc2')
            
			sendKey(0x1B);
            
			lastLocation = 30;
			return lastLocation;
		},
		31: () => {

			// print('ÿc2 Terms Of Use Agreement ÿc2')
			Control.TermsOfUseAgree.click();
			lastLocation = 31;
			return lastLocation;
		},
		32: () => {
			
			Control.CreateNewAccountName.setText(profile.Account);
			Control.CreateNewAccountPassword.setText(profile.Password);
			Control.CreateNewAccountConfirmPassword.setText(profile.Password);
			Control.CreateNewAccountOk.click();
			// print('ÿc2 Created New account ÿc2')
			lastLocation = 32;
			return lastLocation;
		},
		33: () => {
			// print('ÿc2 Please Read ÿc2')
			Control.PleaseReadOk.click();
			lastLocation = 33;
			return lastLocation;
		},
		34: () => {
			// print('ÿc2 Register Email ÿc2')
			Control.EmailDontRegister.click();
            
			Control.EmailDontRegisterContinue.click();
			lastLocation = 34;
			return lastLocation;
		},
		35: () => {
			// print('ÿc2 Credits ÿc2')
			lastLocation = 35;
			return lastLocation;
		},
		36: () => {
			// print('ÿc2 Cinematics ÿc2')
			lastLocation = 36;
			return lastLocation;
		},
		37: () => {
			// print('ÿc2 Character Change Realm ÿc2')
			lastLocation = 37;
			return lastLocation;
		},
		38: () => {
			// print('ÿc2 Game is Full ÿc2')
			lastLocation = 38;
			return lastLocation;
		},
		39: () => {
			// print('ÿc2 Other Multiplayer ÿc2')
			lastLocation = 39;
			return lastLocation;
		},
		40: () => {
			// print('ÿc2 TCP IP ÿc2')
			lastLocation = 40;
			return lastLocation;
		},
		41: () => {
			// print('ÿc2 EnterIP ÿc2')
			lastLocation = 41;
			return lastLocation;
		},
		42: () => {
			// print('ÿc2 Character Select No Characters ÿc2')
			delay(500);
			if (getLocation() === 42) {
				Control.CharSelectCreate.click();
			}
            
			lastLocation = 42;
			return lastLocation;
		},
		43: () => {
			// print('ÿc2 Character Select Change Realm ÿc2')
			lastLocation = 43;
			return lastLocation;
		},
		44: () => {
			// print('ÿc2 Can not Connect TCP ÿc2')
			lastLocation = 44;
			return lastLocation;
		},
        
	};

	module.exports = Starter;
})(module, require);
