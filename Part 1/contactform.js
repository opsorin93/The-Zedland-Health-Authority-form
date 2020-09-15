
function init() {
    setFocus();
    setHint();
    document.getElementById("contactForm").onsubmit = checkForm;
}

//check
function checkForm(){
	    var allowsubmit = true;
		  
			if (fnameValid() == false){
			   allowsubmit =  false;
			}
			if (lnameValid() == false){
				allowsubmit =  false;
			}
            if (hanValid() == false){
				allowsubmit =  false;
			}
			if (teleNumberValid() == false){
				allowsubmit =  false;
			}
			if (emailValid() == false){
				allowsubmit =  false;
			}
			if (titleError() == false){
				allowsubmit = false;
			}
    return allowsubmit;
}

function displayErorr(error){
	document.getElementById(error).style.display="inline";
}

function hideError(error){
     document.getElementById(error).style.display="none";
}

function fnameValid (){ 
    var fnameRegex = /^[A-Za-z]{2,}$/;
	var el = document.getElementById("fname");
	var input = document.getElementById("fname").value;
	var elNext = el.nextSibling.id;
	 if ((input !="")||(!fnameRegex.test(input))){
      		 displayErorr(elNext);
			 return false;
	 }else {
		  hideError(elNext);
		  return true;
        }
}

function lnameValid (){ 
    var lnameRegex = /^[A-Za-z]{2,}$/;
	var input = document.getElementById("lname").value;
	var el = document.getElementById("lname");
	var elNext = el.nextSibling.id;
	 if ((input !="")||(!lnameRegex.test(input))){
      		  displayErorr(elNext);
			 return false;
	 }else {
		  hideError(elNext);
		  return true;
	 }	 
}

function hanValid (){ 
    var hanRegex = /ZHA\d{6}$/;
	var input = document.getElementById("han").value;
	var el = document.getElementById("han");
	var elNext = el.nextSibling.id;
	 if ((input !="")||(!hanRegex.test(input))){
      		 displayErorr(elNext);
			 return false;
	 }else {
		  hideError(elNext);
		  return true;
	 }	 
}

function emailValid(){
	var emailRegex =/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	var el = document.getElementById("email")
	var input = document.getElementById("email").value;
	var elNext = el.nextSibling.id;
	 if ((input !="")||(!emailRegex.test(input))){
      		 displayErorr(elNext);
			 return false;
	 }else {
		  hideError(elNext);
		  return true;
	 }	 
}

function teleNumberValid(){
    var teleNumberRegex =  /0\d{11}$| /;
    var input = document.getElementById("teleNumber").value;
	var el = document.getElementById("teleNumber");
	var elNext = el.nextSibling.id;
	 if ((input !="")&&(!teleNumberRegex.test(input))){
      		 displayErorr(elNext);
			 return false
	 }else {
		   hideError(elNext);
		  return true;
	 }	
}	 

function titleError(){
	var input = document.getElementById("title").value;
    var el = document.getElementById("title");
	var elNext = el.nextSibling.id;
	if (input ==="Select a title") {
		displayErorr(elNext);
		return false;
	}else {
		hideError(elNext);
        return true;		
		}
}



// session 8 slide 7 
function textHint(txtElem, defaultText) {
    txtElem.value = defaultText;
    txtElem.style.color = "#A8A8A8";
    txtElem.style.fontStyle = "italic";
    txtElem.onfocus = function() {
        if (this.value === defaultText) {
            this.value = "";
            this.style.color = "#000";
            this.style.fontStyle = "normal";
        }
    }
    txtElem.onblur = function() {
        if (this.value === "") {
            this.value = defaultText;
            this.style.color = "#A8A8A8";
            this.style.fontStyle = "italic";
        }
    }
}
// sets default text for first name field;
function setHint() {
    textHint(document.getElementById("fname"), "Please enter your first name");
   
}
// set focus on the First Name input 
function setFocus() {
    document.getElementById("fname").focus();
}


window.onload =init;

