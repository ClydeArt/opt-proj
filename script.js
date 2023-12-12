const PASSCODE = '123'

function container(){
    let passcodeInput=document.getElementById('passcode').value;

    if(passcodeInput == PASSCODE){
        alert('Open napud ka kaith?')
        window.location.href='calculator.html'


    }else{
    alert('Kaith Late patuli')
    }
    

}
