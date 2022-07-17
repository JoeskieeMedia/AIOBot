(function (module, require, thread) {
	const Messaging = require('./Messaging');
	const Worker = require('./Worker');

	switch (thread) {
	case 'thread': {
		Worker.runInBackground.stackTrace = (new function () {
			if (me.ingame) return;
			
			let self = this;
			let stack;
			let myStack = '';

			// recv stack
			Messaging.on('OOGGuard', (data => typeof data === 'object' && data && data.hasOwnProperty('stack') && (myStack = data.stack)));

			/**
			* @constructor
			* @param {function():string} callback
			*/
			function UpdateableText(callback) {
				let element = new Text(callback(), self.x + 15, self.y + (7 * self.hooks.length), 0, 12, 0);
				self.hooks.push(element);
				this.update = () => {
					element.text = callback();
					element.visible = !me.ingame;
				};
			}

			this.hooks = [];
			this.x = 500;
			this.y = 600 - (400 + (self.hooks.length * 15));

			for (let i = 0; i < 20; i++) {
				(i => this.hooks.push(new UpdateableText(() => stack && stack.length > i && stack[i] || '')))(i);
			}

			this.update = () => {
				if (me.ingame) return true;
				stack = myStack.match(/[^\r\n]+/g);
				stack = stack && stack.slice(5/*skip path to here*/).map(el => {
					let line = el.substr(el.lastIndexOf(':') + 1);
					let functionName = el.substr(0, el.indexOf('@'));
					let filename = el.substr(el.lastIndexOf('\\') + 1);
					filename = filename.substr(0, filename.indexOf('.'));

					return filename + 'ÿc::ÿc0' + line + 'ÿc:@ÿc0' + functionName;
				}).reverse();
				this.hooks.filter(hook => hook.hasOwnProperty('update') && typeof hook.update === 'function' && hook.update());
				return true;
			};
		}).update;

		let quiting = false;
		addEventListener('scriptmsg', data => data === 'quit' && (quiting = true));

		while (!quiting) delay(1000);
		break;
	}
	case 'started': {
		let sendStack = getTickCount();
		Worker.push(function highPrio() {
			Worker.push(highPrio);
			if ((getTickCount() - sendStack) < 200 || (sendStack = getTickCount()) && false) return true;
			Messaging.send({OOGGuard: {stack: (new Error).stack}});
			return true;
		});

		break;
	}
	case 'loaded': {
		break;
	}
	}

}).call(null, typeof module === 'object' && module || {}, typeof require === 'undefined' && (include('require.js') && require) || require, getScript.startAsThread());
