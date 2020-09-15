// This program uses a JQuery from validation plugin (http://jqueryvalidation.org)
$(document).ready(function() {
	$("#fname").focus();
	setHint("#fname", "Please enter your first name"); 
	$("#contactForm").validate({
		rules :{
			fname:{ required: true,
			         fnameValidation: true,
		          },
		    lname: { required: true,
                     lnameValidation : true,			
		          },
		    title:  {required: true,
			        /*  titleValidation: true */
			        }, 
			email: { required: true,
			         email:true
			       },
		    han :  { required: true,
			          hanValidation: true
			       },
            teleNumber:{
                         teleNumbeValidation: true,
			       }						 
                      				
            },				  
		 messages : {
			  fname: {required :"*Please enter your first name",
                      minlenght:"*Your first name must consist of at least 2 charecters"
			         },
              lname:{ required :"*Please enter your last name",
                      minlenght:"*Your last name must consist of at least 2 charecters"
			        },
			   title:{ 
			       required: "*Please choose a title",
			  },
			  emial:{
				   required:"*Please enter your email",
			  },  
	         
		       },
		
	});
	
});
	

	 // addMethod for first name		
 jQuery.validator.addMethod("fnameValidation", function(fname , element){
	   return   /^[A-Za-z\-]{2,}$/.test(fname);
       },
	   "First name can only contain letters and has to be at least one letter long"
);
     // addMethod for last name 
jQuery.validator.addMethod("lnameValidation", function(lname, element){
     	return  /^[A-Za-z\-]{2,}$/.test(lname);
        },
        "Last name can only contain letters and hyphens (e.g Jack-Jones) and has to be at least one letter long"
); 
     // addMethod for Health Authority Number 
jQuery.validator.addMethod("hanValidation", function(han, element){
	     return /ZHA\d{6}$/.test(han);
         },
		 "Please enter a valid number (e.g ZHA346783)"
);
     // addMethod for telephone number  
jQuery.validator.addMethod("teleNumbeValidation", function(teleNumber, element){
	      return /0\d{11}$| /.test(teleNumber);
          },
         "Please enter a valid telephone number, it has to be 11 digits and start with a 0"
);	

//sets hints messgaes 		   
 	function setHint(usertxt, text) {
    $(usertxt).focusin(function() {
        $(this).attr("placeholder", "");
    });
    $(usertxt).focusout(function() {
        $(this).attr("placeholder", text);
    }).focusout();
}		  
			   