 
function validateinput(string){ 
    var regex_pattern = /^(M{0,3})(C[MD]|D?(C{0,3}))(|X?L|L?(X{0,3})|XC)(I?V|V?(I{0,3})|IX)$/;
    return regex_pattern.test(string);
}
    

var dic = {"M":1000, "D":500, "C":100, "L":50, "X":10, "V":5, "I":1};
function convertto(string){
    if(validateinput(string)){
        var result = dic[string.charAt(0)];
        for (i=1; i<string.length; i++){
            current = dic[string[i]];
            prev = dic[string[i-1]];
            if (current > prev){
                result += (current - 2*prev);
            }else{
                result += current;
            } 
        } 
        document.getElementById("arabic").value = result; 
    }else{
        document.getElementById("arabic").value = "Invalid Input";
    } 
}  
function convertfrom(string){ 
    var string = parseInt(string)
    if(string < 4000){
        ans = []
        store = {1000:"M",900:"CM", 500:"D",400:"CD", 100:"C",90:"XC", 50:"L",40:"XL", 10:"X",9:"IX", 5:"V",4:"IV", 1:"I"}
        arr = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
        for(i=0; i<arr.length; i++){ 
          ans.push(store[arr[i]].repeat(Math.floor(string/arr[i])))
          string = string%arr[i] 
        }  
        document.getElementById("roman").value = ans.join('');  
    }else{
        document.getElementById("roman").value = "Invalid Input"; 
    }  
}

        
