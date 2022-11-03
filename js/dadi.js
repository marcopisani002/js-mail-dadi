function lancio() {
   let num_pc1=Math.round(Math.random()*5+1);
   let num_pc2=Math.round(Math.random()*5+1);
          
    document.getElementById("numero_pc1").innerHTML ="<strong> il PC </strong> ha lanciato " + num_pc1 + ", ";
    document.getElementById("numero_pc2").innerHTML =num_pc2;
    
   let totale_pc=num_pc1 + num_pc2;
    document.getElementById("totale_pc").innerHTML =" , con un totale di " + totale_pc + " punti";
      
          
   let num_1=Math.round(Math.random()*5+1);
   let num_2=Math.round(Math.random()*5+1);
          
    document.getElementById("numero_1").innerHTML ="<strong>Tu  </strong> hai ottenuto " + num_1 + ", ";
    document.getElementById("numero_2").innerHTML =num_2;
   
   let totale1=num_1+num_2;
    document.getElementById("totale1").innerHTML =" e hai totalizzato " + totale1 + " punti";
      
  if(totale1 > totale_pc)
      document.getElementById("vinto").innerHTML = "<strong>  HAI VINTO! :)</strong>";
  else
      document.getElementById("vinto").innerHTML = " <strong> HAI PERSO :)</strong>";
  }