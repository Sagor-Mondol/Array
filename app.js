// function constructor javascript

function Myinfo (name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.display = function(){
        console.log(this.name); 
        console.log(this.age); 
        console.log(this.job); 

    }
}

var printMyinfo = new Myinfo ('Sagor Mondol', 21, 'Student');

printMyinfo.display();