function fibonacci(){
  var term = parseInt(document.getElementById('numero').value);
  var re = document.getElementById('resposta');
  var pen=0, ult=1, a;
  var nume='';

  for(var coun=1 ; coun<=term ; coun++){
   if(coun<=2){
    nume += 'Termo '+coun+': ' + (coun-1) + '<br />'

   }
   else{
    nume += 'Termo '+coun+': ' + (ult+pen) + '<br />'

    a = ult;
    ult = ult + pen;
    pen = a;
   }
  }

  re.innerHTML=nume;
}
