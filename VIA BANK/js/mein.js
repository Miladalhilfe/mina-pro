 
 
 
 
 var monthly_cost=document.getElementById('monthly-cost');
 var customRange1=document.getElementById('customRange1');
 var customRange2=document.getElementById('customRange2');
 var term=document.getElementById('Year');
 var princ=document.getElementById('load_input');



 function chR1()
 {
    customRange1.value=parseInt(princ.value);
    showpay();
 }
 function chR2()
 {
    customRange2.value=parseInt(term.value);
    showpay();
 }

function load(){
    customRange1.value=5000;
    customRange2.value=1;
    term.selectedIndex = 20;
};

function showpay() {
    princ.value=customRange1.value+' kr';
    term.selectedIndex=21-customRange2.value;

    var intr   = 5.95;
    var principal = parseFloat(princ.value);
    var interest = parseFloat(intr) / 100 / 12;
    var payments = parseFloat(term.value) * 12;

  // compute the monthly payment figure
   var x = Math.pow(1 + interest, payments); //Math.pow computes powers
   var monthly = (principal*x*interest)/(x-1);
   monthly_cost.textContent=parseInt(monthly)+'  kr*';
   
    
    }
    
 
   
   