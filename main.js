//variable
var eHeart = document.querySelector(".eHeart");
var content = document.querySelector(".content");

	eHeart.addEventListener("click",like);

	function like(e){
		let show = e.target.parentNode.querySelector(".fillHeart");
		//console.log(show);
		if(show.classList.contains("fillHeart")){
			show.style.display="inline-block";
			//console.log(show);
			
			var count = parseInt(content.innerHTML) 
			var count = count+1; 
			//console.log(count);
			content.innerHTML = `${count} liked`;
			// console.log(count);
		}
	}
	
	
	
var fillHeart = document.querySelector(".fillHeart");

	fillHeart.addEventListener("click",liked);
	
	function liked(e){
		unlike = e.target.parentNode.querySelector(".fillHeart");
		//console.log(unlike);
		if(unlike.classList.contains("fillHeart")){
			unlike.style.display="none";
			
			var count = parseInt(content.innerHTML); 
			var count = count-1; 
			// console.log(count);
			content.innerHTML = `${count} liked`;
		}
	}