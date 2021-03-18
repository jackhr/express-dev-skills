const skills = [
  {id: 0000, skill: 'HTML',             learned: true},
  {id: 0001, skill: 'CSS',              learned: true},
  {id: 0010, skill: 'JS',               learned: true},
  {id: 0011, skill: 'JQuery',           learned: true},
  {id: 0100, skill: 'Markdown',         learned: true},
  {id: 0101, skill: 'HTTP',             learned: false},
  {id: 0110, skill: 'MongoDB',          learned: false},
  {id: 0111, skill: 'Mongoose',         learned: false},
  {id: 1000, skill: 'Regex',            learned: false},
  {id: 1001, skill: 'Authentication',   learned: false},
  {id: 1010, skill: 'SQL',              learned: false},
  {id: 1011, skill: 'Python',           learned: false},
  {id: 1100, skill: 'Django',           learned: false},
  {id: 1101, skill: 'React',            learned: false},
  {id: 1111, skill: 'Computer Science', learned: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  // Add the id
  skill.id = Date.now() % 10000;
  // New skill to learn ain't learned as yet!
  skill.learned = false;
  skills.push(skill);
}

function getAll() {
  return skills;
}
function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}