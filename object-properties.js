const std = [];
const students = [
  { id: 21, name: 'Saifur' },
  { id: 31, name: 'Rahman' },
  { id: 41, name: 'Mamun' },
  { id: 51, name: 'Akash' }
];

for (let i = 0; i < students.length; i++) {
  let element = students[i];
  let name = element.name;
  std.push(name);
}
console.log(std);

const names = students.map(s => s.name);
console.log(names);

const ids = students.map(id => id.id);
console.log(ids);

const filt = students.filter(s => s.id > 40);
console.log(filt);

const find = students.find(s => s.id > 40);
console.log(find);
