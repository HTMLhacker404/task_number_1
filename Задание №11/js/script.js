window.addEventListener('DOMContentLoaded', function() {

	'use strict';

	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show'); // В css прописан класс с display: flex;
			tabContent[i].classList.add('hide'); // В css прописан класс с display: none;
		}
	}

	hideTabContent(1); // 1 - чтобы первый элемент не скрывался со страницы, иначе изначально на странице не будет .info-tabcontent;

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {	
		let target = event.target;
		// console.log(target);
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	})

	// Timer

	let deadline = '2020-02-13';

	// while (Date.parse(deadline) < Date.parse(new Date())) {
	// 	deadline = prompt('Дата указана неверно, укажите её заново', 'Year-Month-Day');
	// }

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t/1000) % 60),
			minutes = Math.floor((t/1000/60) % 60),
			hours = Math.floor((t/(1000*60*60)));

			return {
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaining(endtime);
			if ((Date.parse(endtime) < Date.parse(new Date()))) {
				hours.textContent = t.hours = '00';
				minutes.textContent = t.minutes = '00';
				seconds.textContent = t.seconds = '00';	
			} else {
				hours.textContent = (t.hours <= 9) ? '0' + t.hours : t.hours;
				minutes.textContent = (t.minutes <= 9) ? '0' + t.minutes : t.minutes;
				seconds.textContent = (t.seconds <= 9) ? '0' + t.seconds : t.seconds;
			}

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock('timer', deadline);


	// Modal		

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		knowMore = document.getElementsByClassName('description-btn');

	console.log(knowMore);
	more.addEventListener('click', function() {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	});
	for (let i = 0; i < knowMore.length; i++){
		knowMore[i].addEventListener('click', function() {
			overlay.style.display = 'block';
			this.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
		});
	}

	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});
});