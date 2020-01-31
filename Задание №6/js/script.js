let title = document.querySelector('#title'),
	column = document.querySelectorAll('.column'),
	adv = document.querySelector('.adv'),
	divPrompt = document.querySelector('#prompt'),
	menuItem = document.querySelectorAll('.menu-item'),
	menu = document.querySelector('.menu'),
	fiveItem = document.createElement('li');

document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';
title.textContent = 'Мы продаем только подлинную технику Apple';
column[1].removeChild(adv);

let ask = prompt('Как вы относитесь к технике Apple?', '');

divPrompt.textContent = ask;
menuItem[1].textContent = 'Второй пункт';
menuItem[2].textContent = 'Третий пункт';

fiveItem.classList.add('menu-item');
fiveItem.textContent = 'Пятый пункт';
menu.appendChild(fiveItem);


