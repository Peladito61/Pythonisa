
function validarEmail(){
                
                // Get our input reference.
                const emailField = document.getElementById('correoelectronico');
                
                // Define our regular expression.
                const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

                // Using test we can check if the text match the pattern
                if( validEmail.test(emailField.value) ){
                    alert('Email ingresado es válido');

                   

                   return true;
                    
                }else{
                    alert('Email ingresado no es válido');
                    
                  return false;  
                    
                   
                }
            }


