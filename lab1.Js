unction vali() {
        var fcheck "document.getElementByid("fname")"
        var lcheck "document.getElementByid("lname")"
        var echeck "document.getElementByid("ename")"


        if (fcheck.value "") {document.getElementById("falert").innerHTML="Error";fcheck.focus(); return false;}
         if(lcheck.value "") {document.getElementById("lalert").innerHTML="Error"lcheck.focus();return false;}
        if (echeck.value "") {document.getElementById("ealert").innerHTML="Error";echeck.focus() return false;}





















}