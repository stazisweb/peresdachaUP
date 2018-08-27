// 1.1
{
	const squareRoots = (a, b, c) => {
		const D = b ** 2 - 4 * a * c;
		const x1 = (-b + Math.sqrt(D)) / (2 * a);
		const x2 = (-b - Math.sqrt(D)) / (2 * a);
		return { x1, x2 };
	}
	console.log(squareRoots(1, 4, 4));
}

// 1.2
{
	const ferma = n => {
		for (let i = 0; i < 100; i++) {
            const a = Math.floor(Math.random() * (n - 2) + 2);
            if ((a ** n) % n !== a % n) {
				return false;
			} 
        }
		return true;
	}
	console.log(ferma(13));
}

//1.3
{
	const rowSumm = n => n > 0 && (1 / n) + rowSumm(n - 1);
	console.log(rowSumm(10));
}

// 1.4
{
	const reverse = num => Number([...num.toString()].reverse().join(''));
	console.log(reverse(123));
}

// 2.1
{
	const A = [-3, -2, -1, 0, 1, 2, 3];
	const B = A.filter(e => e > 0);
	const C = A.filter(e => e < 0);

	console.log(B);
	console.log(C);
}

// 2.2
{
	const countRepetition = arr => {
		const counter = {};
		arr.forEach(e => counter[e] = e in counter ? counter[e] + 1 : 1);
		return counter;
	}

	const check = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 123098];
	console.log(countRepetition(check));
}

// 2.3
{
	const isAnagram = (a, b) => {
		if (a.length !== b.length) {
			return false;
		}		

		const aChars = [...a];
		const bChars = [...b];

		aChars.forEach((element, index) => {
			const coincidenceIndex = bChars.indexOf(element);
			if (coincidenceIndex === -1) {
				return false;		
			}
			bChars.splice(coincidenceIndex, 1);
		})
		return bChars.length === 0;
	}
	
	const a = '12345';
	const b = '34512';

	console.log(isAnagram(a, b));
}

// 3
{
	function Machine(power) {
		this._power = power;
		this._enabled = false;
		var self = this;
		this.enable = function() { self._enabled = true; };
		this.disable = function() { self._enabled = false; };
	}
	
	function Fridge() {
			Machine.apply(this, arguments);
			let food = [];
			this.addFood = (...item) => { 
					if (!this._enabled) { 
							console.log('Error. The fridge isn\'t enabled.');
							return;                 
					}
					if (this._power / 100 < food.length + item.length) {
							console.log('Error. The fridge cannot take so much food.');
							return;
					}
							food = [...food, ...item];
			};
			this.getFood = function() { return food; };
	}
	
	const fridge = new Fridge(300);
	
	fridge.addFood('fish', 'meat', 'chips');
	console.log(fridge.getFood());
	fridge.enable();
	fridge.addFood('fish', 'meat', 'chips');
	console.log(fridge.getFood());
	fridge.addFood('fish', 'meat', 'chips');
	console.log(fridge.getFood());
}
