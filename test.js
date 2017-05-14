/*function Obj(){
 this.value = "对象!";
 }
 var value = "global";
 function Func(){
 console.log(this.value);
 }
 /!*Func.call(document.getElementById("value"));*!/
 Func.call(new Obj());*/

/*var obj = {
 name: "kevin",
 getName : function(){
 console.log(this.name);
 }
 };
 var obj2 = {
 name : "Charlie"
 }
 obj.getName.call(obj2);*/

/**
 * 继承的方式,extend用call的方法将base的方法和属性继承。
 * */
// function base(){
//     this.name = "kevin";
//     this.getName = function(){
//         console.log(this.name);
//     }
// }
// function extend(){
//     base.call(this);
//     console.log(name);//"kevin"
//     getName(); //"kevin"
// }
//
// extend();


function Person(name,age){
    this.name = name;
    this.age = age;
}
/**
 * 用Student去执行Peron里面的内容
 * */
function Student(name,age,grade){
    Person.call(this,name,age);
    /*Person.apply(this,arguments);*/
    this.grade = grade;
}
var stu = new Student("Charlie","one",21);

console.log(stu.name,stu.grade,stu.age);//Charlie 21 one