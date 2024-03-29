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

	let deadline = '2020-02-21';

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


	// Form

	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так...'
	};

	let form = document.querySelector('.main-form'),
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

		statusMessage.classList.add('status');

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild(statusMessage);
		let formData = new FormData(form);

		function postData(data){
			return new Promise(function(resolve, reject) {
				let request = new XMLHttpRequest();

				request.open('POST', 'server.php');
				request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

				let obj = {};
				data.forEach(function(value, key) {
					obj[key] = value;
				});
				let json = JSON.stringify(obj);

				request.addEventListener('readystatechange', function() {
					if (request.readyState < 4) {
						resolve();
					} else if (request.readyState === 4 && request.status == 200) {
						resolve();
					} else {
						reject();
					}
				});	

				request.send(json);
			});
		}

		function clearInput() {
			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
			}
		}

		postData(formData)
			.then(() => statusMessage.innerHTML = message.loading)
			.then(() => {
				statusMessage.innerHTML = message.success;
			})
			.catch(() => statusMessage.innerHTML = message.failure)
			.then(clearInput)
	});


	// Вторая форма

	let containerForm = document.querySelector('#contacts'),
		inputContactForm = containerForm.getElementsByTagName('input'),
		contactForm = document.getElementById('form');

	contactForm.addEventListener('submit', function(event) {
		event.preventDefault();
		contactForm.appendChild(statusMessage);

		let contactFormData = new FormData(contactForm);

		function postData(dataTwoForm) {
			return new Promise(function(resolve, reject) {
				let request = new XMLHttpRequest();

				request.open('POST', 'server.php');
				request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

				let object = {};
				dataTwoForm.forEach(function(value, key) {
					object[key] = value;
				});
				let json = JSON.stringify(object);

				request.addEventListener('readystatechange', function() {
					if (request.readyState < 4) {
						resolve();
					} else if (request.readyState === 4 && request.status == 200) {
						resolve();
					} else {
						reject();
					}
				});	

				request.send(json);
			})
		}
		function clearInput() {
			for (let i = 0; i < inputContactForm.length; i++) {
				inputContactForm[i].value = '';
			}
		}

		postData(contactFormData)
			.then(() => statusMessage.innerHTML = message.loading)
			.then(() => {
				statusMessage.innerHTML = message.success;
			})
			.catch(() => statusMessage.innerHTML = message.failure)
			.then(clearInput)
	});



	// Slider


	let slideIndex = 1,
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.querySelectorAll('.dot');


		showSlides(slideIndex);
		function showSlides(n) {

			if (n > slides.length) {
				slideIndex = 1;
			}
			if (n < 1) {
				slideIndex = slides.length;
			}

			slides.forEach((item) => item.style.display = 'none');
			// for (let i = 0; i < slides.length; i++) {
			// 	slides[i].style.display = 'none';
			// } Тоже самое, что сверху
			dots.forEach((item) => item.classList.remove('dot-active'));

			slides[slideIndex - 1].style.display = 'block';
			dots[slideIndex - 1].classList.add('dot-active');
		}

		function plusSlides(n) {
			showSlides(slideIndex += n);
		}
		function currentSlide(n) {
			showSlides(slideIndex = n);
		}

		prev.addEventListener('click', function() {
			plusSlides(-1);
		});

		next.addEventListener('click', function() {
			plusSlides(1);
		});

		dotsWrap.addEventListener('click', function(event) {
			let target = event.target;
			for (let i = 0; i < dots.length + 1; i++) {
				if (target.classList.contains('dot') && target == dots[i - 1]) {
					currentSlide(i);
				}
			}
		})




		// Calc



		let persons = document.querySelectorAll('.counter-block-input')[0],
			restDays = document.querySelectorAll('.counter-block-input')[1],
			place = document.getElementById('select'),
			totalValue = document.getElementById('total'),
			personsSum = 0,
			daysSum = 0,
			total = 0;

			totalValue.innerHTML = 0;

			persons.addEventListener('change', function() {
				personsSum = +this.value;
				total = (daysSum + personsSum) * 4000;

				if(restDays.value == '' || this.value == '') {
					totalValue.innerHTML = 0;
				} else {
					totalValue.innerHTML = total;
				}
				let obj = {
					str: this.value
				};
				console.log(obj);
			});

			restDays.addEventListener('change', function() {
				daysSum = +this.value;
				total = (daysSum + personsSum) * 4000;

				if(persons.value == '' || this.value == '') {
					totalValue.innerHTML = 0;
				} else {
					totalValue.innerHTML = total;
				}
			});

			place.addEventListener('change', function() {
				if (restDays.value == '' || persons.value == '') {
					totalValue.innerHTML = 0;
				} else {
					let a = total;
					totalValue.innerHTML = a * this.options[this.selectedIndex].value;
				}
			});

});



