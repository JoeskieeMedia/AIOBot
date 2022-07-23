(function (module, require) {
	const Skills = require('Skills');
	const Clear = {
		
		distance: (x, y, xx, yy) => {
			const distanceTo = Math.sqrt( Math.pow((x - xx), 2) + Math.pow((y - yy), 2) );
			return distanceTo;
		},
		// getUnits example
		// {"type":1,"classid":19,"mode":1,"name":"Fallen","act":1,"gid":14,"x":4501,"y":5490,"targetx":0,
		// "targety":0,"area":2,"hp":128,"hpmax":128,"mp":0,"mpmax":0,"stamina":0,"staminamax":0,"charlvl":1,
		// "owner":0,"ownertype":0,"spectype":0,"direction":49,"uniqueid":-1}
		exec: () => {
			getUnits(1).forEach((monster) => {
				
				
			});
		}

	};

	module.exports = Clear;

})(module, require);
