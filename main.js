/*global document*/

let print1 = document.getElementById('pyramid1');
let output = '';

for(let i = 5; i >= 1; i--) {
    
    for(let j = 1; j <= 4; j++) {
        
        if( i > j) {
            output += "<span style='opacity:0'>4</span>";
        }
    }
    
    for(let j = 1; j <= 5; j++) {
        
        if( i <= j){
            output += j;
        }
        
    }
    
    output += "<br />";
    
}

print1.innerHTML = output;