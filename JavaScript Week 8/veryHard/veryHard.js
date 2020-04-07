
// VERY HARD: Object prototype chain and prototypal inheritance exercise.
// 1. Create a Person constructor that has three properties: name, job, and age.
// 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
// 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".
 
// See next page…
// 4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
// 5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
// 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
// 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
// 8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?
// Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties to  incorporate the syntax.
// function Person(name, job, age) { }
// function Programmer(name, job, age, languages) { }


function Person(first, job, age,) {
    Programmer.call(this, first, job, age)
    this.firstName = first;
    this.job = job;
    this.age = age;

    this.exercise = function(){
        console.log(this.firstName + ' wants to know if he can pet that dog');

    }
  this.fetchJob = function() {
      console.log(this.firstName + ' is a ' + this.job);
  }
  }


  function Programmer(languages,busy) {
    this.languages = languages;
    this.busy = busy;
    this.completeTask = function(){ 
        this.busy = false;

        if (this.busy == false){
            console.log(this.firstName + ' is busy');
        } else{
            console.log(this.firstName + ' is not busy');
        }
    }
    this.acceptNewTask = function(){
        this.busy = true;
    }
        

  this.offerNewTask = function(){
      this.busy = false;
      if(this.busy == false) {
          console.log(this.firstName + ' is ready for a new task.');
      } else{
          console.log(this.firstName + ' is not ready for a new task');
      }
    }

  this.learnLanguage = function(){
      this.language = ['Python, Javascript, C++'];
      console.log(this.firstName + ' is learning there languages ' + this.language);
  }

  this.listLanguages = function() {
      this.language = ['Java, HTML, CSS'];
      console.log(this.firstName + ' knows these languages ' + this.language);
  }
  }
  var Bob = new Person('Bob', 'back-end developer', 34);

  Bob.exercise();
  Bob.fetchJob();
  Bob.acceptNewTask();
  Bob.offerNewTask();
  Bob.learnLanguage();
  Bob.listLanguages();











