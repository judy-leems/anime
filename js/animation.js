document.addEventListener('DOMContentLoaded', () => {
	// Initial page laod animation 
	anime.timeline({
		easing: 'easeOutExpo',
	})
	.add({
		targets: '.nav-wrapper',
		width: ['0px', '1200px'],
	})
	.add({
		targets: '.logo',
		width: ['0px', '230px'],
		offset: '-=500', //delay 대신 offset을 사용 
	})
	.add({
		targets: '.logo h1, nav a',
		opacity: [0, 1],
		translateY: [20, 0],
		delay: (el, i) => 100 * i, // 애니메이션의 지연 시간 (밀리 초)을 정의합니다.
		offset: '-=700', // 타임 라인에서 애니메이션이 시작되는시기를 정의하고 오프셋이 지정되지 않은 경우 이전 애니메이션이 끝난 후 애니메이션이 시작됩니다. 오프셋은 마지막 애니메이션에 상대적이거나 전체 타임 라인에 대해 절대적 일 수 있습니다.
	})
	.add({
		targets: '.text-section',
		translateY: [-100, 0],
		opacity: [0, 1],
		offset: '-=1000'
	})
	.add({
		targets: '.image-section',
		translateY: [-100, 0],
		opacity: [0, 1],
		offset: '-=1000',
	})
	.add({
		targets: '#gallery-headline',
		height: ['0px', '80px'],
		opacity: [0, 1],
		offset: '-=800',
	})
	.add({
		targets: '#gallery-loader',
		height: ['0px', '135px'],
		opacity: [0, 1],
		offset: '-=700',
	})
	.add({
		targets: '.ham-line',
		translateX: [500, 0],
		opacity: [0, 1],
		duration: 800,
		delay: (el, i) => 100 * i,
		offset: '-=700',
	})
	.add({
		targets: '.social a', 
		translateX: [500, 0],
		opacity: [0, 1],
		delay: (el, i) => 200 * i,
		offset: '-=1000',
	})
	.add({
		targets: '.gallery-nav div', 
		translateY: [500, 0],
		opacity: [0, 1],
		delay: (el, i) => 200 * i,
		offset: '-=1000',
	})


})