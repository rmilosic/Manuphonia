
	
			function getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}
			function goNote(){
				var randomX = getRandomInt(40, $(window).width() - 100);
				var randomY = getRandomInt(40, $(window).height() - 100);
				
				var imgs = ['assets/notes/1.png', 'assets/notes/2.png', 'assets/notes/3.png', 'assets/notes/4.png', 'assets/notes/5.png', 'assets/notes/6.png', 'assets/notes/7.png'];//tukaj dodej slike
				var randomNote = getRandomInt(0, imgs.length-1);
				
				var note = $('<div style="position:absolute; top: ' + randomY + 'px; left: ' + randomX + 'px; height: auto; width: 10px;">'
						+ '<img style="width:100%;height: auto;" src="' + imgs[randomNote] + '">'
						+ '</div>');
				
				$('body').append(note);//tukaj povej na kater element appendi
				
				var randomW = getRandomInt(20, 30);
				var randomSpeed = getRandomInt(2000, 5000);
				/*var randomRotate = getRandomInt(0,360);*/
				note.animate({
					width : randomW + 'px'
				}, randomSpeed, function(){
					$(this).remove();
				});
				/*note.animateRotate(randomRotate, randomSpeed-10);*/
			}
			function goNotes(){
				var randomTimer = getRandomInt(20, 700);
				goNote();
				setTimeout(function(){
					goNotes();
				}, randomTimer);
			}
			goNotes();
