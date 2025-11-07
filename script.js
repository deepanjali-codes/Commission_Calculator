function add(){
        var n1= parseInt(document.frm.n1.value)
        if (n1 == 1000){
            document.frm.result.value="0% commission"
        }
        else if(n1>1001 && n1<=10000){
            var commission = n1*0.03;
        document.frm.result.value="₹" + commission.toFixed(2) + " Commission";
        }
         else if(n1>10001 && n1 <= 50000){
            var commission = n1*0.06;
        document.frm.result.value="₹" + commission.toFixed(2) + " Commission";
        }
         else if(n1<50001 && n1 <= 100000){
            var commission = n1*0.09;
        document.frm.result.value="₹" + commission.toFixed(2) + " Commission";
        }
         else if(n1<100001 && n1 <= 150000){
            var commission = n1*0.12;
        document.frm.result.value="₹" + commission.toFixed(2) + " Commission";
        }
         else if(n1<150001 && n1 <=200000){
            var commission = n1*0.15;
        document.frm.result.value="₹" + commission.toFixed(2) + " Commission";
        }
     }
