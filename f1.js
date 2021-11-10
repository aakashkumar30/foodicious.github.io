function valid()
{     
         if( document.myForm.fn.value == "" ) {
            alert( "Please provide your name!" );
            document.myForm.fn.focus() ;
            return false;
         if( document.myForm.ln.value == "" ) {
            alert( "Please provide your name!" );
            document.myForm.ln.focus() ;
            return false;
         }
         if( document.myForm.Id.value == "" ) {
            alert( "Please provide your Email!" );
            document.myForm.Id.focus() ;
            return false;
         }
         if( document.myForm.tel.value == "" || isNaN( document.myForm.Zip.value ) ||
            document.myForm.tel.value.length != 10 ) {
            document.myForm.tel.focus() ;
            return false;
         }
         if( document.myForm.Country.value == "-1" ) {
            alert( "Please provide your country!" );
            return false;
         }
         return( true );
    var x=confirm("Do You Want To Proceed with These Details");
	if(x)
		alert("You Successfully Register To Foodicious");
}