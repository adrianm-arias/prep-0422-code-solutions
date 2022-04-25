const person = {
  firstName: 'Jack',
  lastName: 'Bauer',
  hobby: 'shooting at the gun range'
};
console.log('firstName:', person);

const fullName = person['firstName'] + ' ' + person['lastName'];
console.log("The person's name is:", fullName);

person.job = 'Law Enforcement Officer';
console.log("The person's current job is:", person.job);

person.previousJob = 'Construction Worker';
console.log("The person's previous job is:", person.previousJob);
console.log('The complete person object:', person);
