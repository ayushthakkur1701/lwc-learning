/* eslint-disable @lwc/lwc/no-document-query */
/* eslint-disable no-alert */
import { LightningElement,track,api} from 'lwc';


let loginEmail,loginPassword;
let loginTempId;
export default class App extends LightningElement {
    @track showDash = false;
    @track showLogin = true;
    @track chlidComponentHeading='';
        handleName(event){

            loginEmail = event.target.value;
        }

        handlePassword(event){

            loginPassword = event.target.value;
        }

        
        handleSubmit(){
            //this.showDash = true;
            this.showLogin = false;
            //alert(loginEmail+''+loginPassword);

            //loginTempId = this.template.querySelector('div').chidNodes;
            //customElements.define('my-dash-board', buildCustomElementConstructor(DashBoard));
            //console.log(loginTempId);
            
            // loginTempId.style.display = "none";
            this.chlidComponentHeading = 'Dash Board';
              
        }

        



}


