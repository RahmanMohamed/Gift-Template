/**********contact section**********/
    // function sendMessage()
    // {   document.getElementById("firstName").value = "" ;
    //     document.getElementById("lastName").value = ""; 
    //     document.getElementById("emailAddress").value = "";
    //     document.querySelector(".insertMessage").value = ""; 

    // }
    function sendMessage()
    {
        if(document.getElementById("firstName").value != ""
        && document.getElementById("lastName").value != ""
        && document.getElementById("emailAddress").value != "" 
        && document.querySelector(".insertMessage").value != "")
        {
            document.getElementById("firstName").value = "" ;
            document.getElementById("lastName").value = ""; 
            document.getElementById("emailAddress").value = ""; 
            document.querySelector(".insertMessage").value = ""
            document.querySelector(".notComplet").innerHTML ="Thank You! Your message has been sent."
            
        }
        else
        {
            // alert('msg');
            document.querySelector(".notComplet").innerHTML ="Please complete the form and try again."
        }
    }

  
