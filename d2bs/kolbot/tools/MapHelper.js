include('require.js');
include("OOG.js");
include("AutoMule.js");
include("Gambling.js");
include("TorchSystem.js");
include("MuleLogger.js");

include("common/Cubing.js");
include("common/Config.js");
include("common/Misc.js");
include("common/Pickit.js");
include("common/Pather.js");

include("common/Prototypes.js");
include("common/Runewords.js");
include("common/Town.js");


function main() {

	var obj, action,
		mapThread = getScript("tools/mapthread.js");

	const Config = require('Config')();
	Pickit.init();
	addEventListener("scriptmsg", function (msg) {
		action = msg;
	});

	while (true) {
		if (getUIFlag(0x09)) {
			delay(100);

			if (mapThread.running) {
				print("pause mapthread");
				mapThread.pause();
			}
		} else {
			if (!mapThread.running) {
				print("resume mapthread");
				mapThread.resume();
			}
		}

		if (action) {
			try {
				obj = JSON.parse(action);

				if (obj) {
					switch (obj.type) {
					case "area":
						Pather.moveToExit(obj.dest, true);

						break;
					case "unit":
						Pather.moveToUnit(obj.dest, true);

						break;
					case "wp":
						Pather.getWP(me.area);

						break;
					}
				}
			} catch (e) {

			}

			action = false;
		}

		delay(20);
	}
}