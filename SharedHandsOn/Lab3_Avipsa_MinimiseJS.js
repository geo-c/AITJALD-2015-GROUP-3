function Employee(e,n,o,l){this.empId=e,this.firstName=n,this.lastName=o,this.age=l}function Department(e,n){this.department=e,this.employee=n}function willNotChange(e){console.log("Passage by value, before assignment x = "+e+"\n"),e=2,console.log("Passage by value, after assignment x = "+e+"\n")}function willChange(e){console.log("Passage by reference, before assignment x.num = "+e.num+"\n"),e.num=2,console.log("Passage by reference, after assignment, x.num = "+e.num+"\n")}function myPopup(){alert("Hello!")}window.addEventListener("resize",myPopup);var emp1=new Employee(1,"Michael","Hawks",35),emp2=new Employee(2,"Sam","Thomas",48),dept1=new Department("Sales",emp1),dept2=new Department("Consulting",emp2);console.log(emp1),console.log(emp2),console.log(dept1),console.log(dept2);var x=3;console.log(willNotChange(x)),console.log(willChange(x));