class Person {
  name = "";
  age = 0;
  #job = "";
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.#job = "Developer"; // Private field
  }
  get job() {
    // Getter for job
    if (typeof this.#job !== "string") {
      throw new Error("Job must be a string");
    }
    return this.#job
    // return this.#job;
  }
  set job(job) {
    if (typeof job !== "string") {
      throw new Error("Job must be a string");
    }
    if(this.#job === "Developer") {
        this.#job = job; // Setter for job
    }
    return "cant change that";
    // this.#job = job;
  }
}
class Employee extends Person {
  constructor(name, age, job) {
    super(name, age);
    super.job = job; // Private field
  }

  //   set setJob(job) {
  //     if (typeof job !== "string") {
  //       throw new Error("Job must be a string");
  //     }
  //     this.#job = job;
  //   }
}
let shailesh = new Employee("Shailesh", 25, "Software Engineer");
console.log(shailesh.name); // Shailesh
console.log(shailesh.age); // 25
console.log(shailesh.job); // Software Engineer
shailesh.job = "Senior Software Engineer"; // Using setter
console.log(shailesh.job); // Senior Software Engineer
