const regionNode = document.querySelector('.js-region');

for (var i = 1; i <= 31; i++) {
	const opt = document.createElement("option");
	opt.value = String(i)
	opt.innerText = `+${String(i)}`
	regionNode.add(opt)
};