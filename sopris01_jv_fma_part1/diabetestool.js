

 function init(){
	    document.getElementsByTagName("button")[0].onclick = function() {
		var points = document.getElementsByTagName("input");
	    getResult(document.getElementById("result"));
		var result = document.getElementById("resultText")
		changeStyle("resultTxt");
	}
}
  /* calculates the user total score from the chosen radio buttons 
    @param points [ input elements that are checked ]
	@returns total [ sum of all user input elements] 
  */
 function getTotal(points){ 
     var i;
     var total = 0; 
     for (i =0; i<points.length; i++){
		 if(points[i].checked){
			 total += Number(points[i].attributes.value.value);
		     }
	 }
    return total;	 
}

/*creates user message based on his inputs
  @param result [paragraph id]
  @returns [no return]
*/
function getResult(result){
	 const lowRisk = "Your results show that you currently have a low risk of developing diabetes. However, it is important that you maintain a healthy lifestyle in terms of diet and exercise.";
     const mediumRisk = "Your results show that you currently have a medium risk of developing diabetes. For more information on your risk factors, and what to do about them, please visit our diabetes advice website at ";
	 const mediumURL = "www.zha.org.zd."
	 const highRisk1 = "Your results show that you currently have a HIGH risk of developing diabetes." + createRiskMsg()+".We advise that you contact the Health Authority to discuss your risk factors as soon as you can. Please fill in our";
	 const highURL = "contactform.html";
	 const highRisk2 = " and a member of the Health Authority Diabetes Team will be in contact with you.";
	 var points = document.getElementsByTagName("input");
	 var total =  getTotal(points);
	 
          if (total<=15){
            result.innerHTML = lowRisk;			  
    
	     } else if (total <= 25){
			result.innerHTML = mediumRisk;
		    var mediumRiskLink = document.createElement("a");
			var mediumRiskLinkText = document.createTextNode(mediumURL);
		    mediumRiskLink.setAttribute("href", mediumURL);
			mediumRiskLink.appendChild(mediumRiskLinkText);
			result.appendChild(mediumRiskLink);
			
        } else if (total > 25){
		    result.innerHTML = highRisk1;
			var highRiskLink = document.createElement("a");
			var highRiskLinkText = document.createTextNode(" contact form");
			highRiskLink.setAttribute("href", highURL);
			highRiskLink.appendChild(highRiskLinkText);
			result.appendChild(highRiskLink);
			var addText = document.createTextNode(highRisk2);
			result.appendChild(addText);
			
        }
}
   /*creates an array of  risk factors 
   @param  points [ input elements that are checked and their value is >=10]
   @returns riskArray [ array of factors] 
   */
  function getFactor(points){
	  var i;
	  var value = 0;
	  var riskArray = [];
	    for (i=0; i < points.length; i++){
			if (points[i].checked){
				value +=  Number(points[i].attributes.value.value)
				if (value >=10){
					riskArray.push(points[i].attributes.name.value);
				}
			}
		}
		return riskArray;
  }
  
  /* creates the main risk message 
  @param none
  @return riskFactorMsg [ creates risk message based on user input ] 
  */
function createRiskMsg(){
	  var riskFactorMsg 
	  var points = document.getElementsByTagName("input");
	  var riskFactor1 = getFactor(points);
	  if (riskFactor1.length === 1){
		  return riskFactorMsg = "Your main risk factor is your " + riskFactor1 + " . ";
	  } else {
          var riskFactor2 = riskFactor1.pop()
			  riskFactorMsg = "Your main risk factors are your "+ riskFactor1 +" and " + riskFactor2 + "."; 
	        }
          return riskFactorMsg;
}
// changes the visibility of the result message 
function changeStyle(){
	var txt = document.getElementById("resultText");
    if (txt.style.visibility = "hidden"){
        txt.style.visibility = "visible"
	}
}	
 
window.onload = init; 
 

