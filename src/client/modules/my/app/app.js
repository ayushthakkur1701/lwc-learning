/* eslint-disable @lwc/lwc/no-document-query */
/* eslint-disable no-alert */
import { LightningElement,track,api} from 'lwc';


//let loginEmail,loginPassword;
//let loginTempId;
const isEmail = (email = null) => {
  
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
     return regex.test(email);
     
}
export default class App extends LightningElement {
    @track showDash = false;
    @track showLogin = true;
    @track chlidComponentHeading='';
    @track loginEmail='';
    @track loginPassword='';

        handleName(event){

            this.loginEmail = event.target.value;
            
        }

        handlePassword(event){

            this.loginPassword = event.target.value;
        }

        
        
        handleSubmit(){
            //this.showDash = true;
            //const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
            let paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
            if(this.loginEmail === "") {
                alert("Error: Email cannot be blank!");
                this.loginEmail='';
               
              }
              else if(this.loginEmail !== "") {
                re = /^\w+$/;
                this.loginEmail='';
                if(!re.test(this.loginEmail)){
                    alert("Error: Email must contain @ and . ");
                }
   
                
              }
          
              if(this.loginPassword !== "" ) {
                if(this.loginPassword.length < 6) {
                    this.loginEmail='';
                    this.loginPassword='';
                  alert("Error: Password must contain at least six characters!");
                  
                }
                if(this.loginPassword === this.loginEmail) {
                  alert("Error: Password must be different from Username!");
                  
                }else{
                    
                    if(this.loginPassword.match(paswd)) 
                    { 
                      alert('Password must be between 7 to 15 characters which contain at least one numeric digit and a special character');  
                    }
                
                }
              } 
              else {
                alert("Error: Please check that you've entered and confirmed your password!");
                return false;
              }
              this.showLogin = false;
              this.chlidComponentHeading = 'Dash Board';
              return true;
        }

        


        



}


