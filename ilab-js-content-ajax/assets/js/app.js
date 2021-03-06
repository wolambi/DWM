window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

(function(){
	
	//le body
	var body = document.body;
						
	//reveal menu						
	var reveal = document.getElementsByClassName("reveal");
	Array.prototype.forEach.call(reveal, function(el, i){

		el.onclick = function() { 
				body.classList.toggle("menu-is-revealed");
		};

	});	
	
	
	function loadJSON(content)
	{
	   var data_file = "assets/json/data.json";
	   var http_request = new XMLHttpRequest();
	   
	   http_request.onreadystatechange  = function(){
	      if (http_request.readyState == 4  )
	      {
	        // Javascript function JSON.parse to parse JSON data
	        var jsonObj = JSON.parse(http_request.responseText);
	
	        // jsonObj variable now contains the data structure and can
	        // be accessed as jsonObj.name and jsonObj.country.
	       
	        document.getElementById("titre").innerHTML =  jsonObj[content].titre;
	        document.getElementById("texte").innerHTML = jsonObj[content].texte;
	      }
	   }
	   http_request.open("GET", data_file, true);
	   http_request.send();
	}
	
	//page active	
	var menuLink = document.getElementsByClassName('menu-reveal-link');
	Array.prototype.forEach.call(menuLink, function(el, i){

		el.onclick = function() { 

			var content = this.innerHTML;
			loadJSON(content);

			body.classList.remove("menu-is-revealed");	
				
		};

	});
	
})();