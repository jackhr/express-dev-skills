const skills = [
  {id: 0000, skill: 'HTML', learned: 'yessir!'},
  {id: 0001, skill: 'CSS', learned: 'yessir!'},
  {id: 0010, skill: 'JS', learned: 'yessir!'},
  {id: 0011, skill: 'JQuery', learned: 'yessir!'},
  {id: 0100, skill: 'Markdown', learned: 'yessir!'},
  {id: 0101, skill: 'HTTP', learned: 'kinda...'},
  {id: 0110, skill: 'MongoDB', learned: 'nope!'},
  {id: 0111, skill: 'Mongoose', learned: 'nope!'},
  {id: 1000, skill: 'Regular Expressions', learned: 'kinda...'},
  {id: 1001, skill: 'Authentication', learned: 'nope!'},
  {id: 1010, skill: 'SQL', learned: 'nope!'},
  {id: 1011, skill: 'Python', learned: 'nope!'},
  {id: 1100, skill: 'Django', learned: 'nope!'},
  {id: 1101, skill: 'React', learned: 'nope!'},
  {id: 1111, skill: 'Computer Science', learned: 'nope!'}
];

module.exports = {
  getAll
};

function getAll() {
  return skills;
}