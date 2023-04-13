var numbers=[9,4,9,0,2,8,7,1,4,8]
var sum=0
for(number of numbers){
    sum+=number
}

for(var i=1;i<=sum;i++){
    if(i%5==0 && i%4==0){
        process. stdout. write("FizzBuzz ");
    }
    else if(i%5==0){
        process. stdout. write("Buzz ");
    }
    else if(i%4==0){
       process. stdout. write("Fizz ");
    }
    else{
        process. stdout. write(i+" ");
    }
}