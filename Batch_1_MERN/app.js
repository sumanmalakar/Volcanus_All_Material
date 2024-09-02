function User(name, age) {
  this.name = name;
  this.age = age;
  return this
}

const u1 = new User("ram", 12);
const u2 = new User("ram3", 32);
console.log(u1);
console.log(u2);
