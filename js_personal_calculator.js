//load DOM content and set up event listener
document.addEventListener("DOMContentLoaded", function(){

    //when value_1 input is changed, update value
    document.getElementById("value_1").addEventListener("change", update_answer,false);
    document.getElementById("value_2").addEventListener("change", update_answer,false);
    //when radio is changed, update value
    document.getElementById("addition").addEventListener("click", update_answer,false);
    document.getElementById("subtraction").addEventListener("click", update_answer,false);
    document.getElementById("multiplication").addEventListener("click", update_answer,false);
    document.getElementById("division").addEventListener("click", update_answer,false);


    function check_operation(){
        var operation_radio_pointers = document.getElementsByName("operation");
        var operation_name = null;
        for(var i=0; i<operation_radio_pointers.length; i++){
            if(operation_radio_pointers[i].checked){
                operation_name = operation_radio_pointers[i].value;  
                break;            
            }    
        }
        return operation_name;
    }

    function update_answer(){
        //get first input value and convert to int
        let num_1 = document.getElementById("value_1").value;
        if (num_1.length == 0){
             //if first value field is empty, there should be no result
             document.getElementById("here").textContent = "0";
        }
        let num_1_int = parseInt(num_1);
        
        //get second input value and convert to int
        let num_2 = document.getElementById("value_2").value;
        if (num_2.length == 0){
            //if first value field is empty, there should be no result
            document.getElementById("here").textContent = "0";
        }
        let num_2_int = parseInt(num_2);
        
        //operate on values depending on operation
        let operation_name = check_operation();
        if (operation_name == "addition"){
            //addition function
            let answer = num_1_int + num_2_int;
            document.getElementById("here").textContent = answer;
        } else if (operation_name == "subtraction"){
            //subtraction function
            let answer = num_1_int - num_2_int;
            document.getElementById("here").textContent = answer;
        } else if (operation_name == "multiplication"){
            //multiplication function
            let answer = num_1_int * num_2_int;
            document.getElementById("here").textContent = answer;
        } else if (operation_name == "division"){
            //division function
            if (num_2_int == 0){
                //account for divide by zero error
                alert("divide by zero error!");
            } else {
                let answer = num_1_int / num_2_int;
                document.getElementById("here").textContent = answer;
            }
        }
    }
}, false);