const skills = [
  {id: 725367, skill: 'HTML',             learned: true},
  {id: 374556, skill: 'CSS',              learned: true},
  {id: 657758, skill: 'JS',               learned: true},
  {id: 576756, skill: 'JQuery',           learned: true},
  {id: 253675, skill: 'Markdown',         learned: true},
  {id: 885647, skill: 'HTTP',             learned: false},
  {id: 743556, skill: 'MongoDB',          learned: false},
  {id: 579866, skill: 'Mongoose',         learned: false},
  {id: 857888, skill: 'Regex',            learned: false},
  {id: 255765, skill: 'Authentication',   learned: false},
  {id: 967578, skill: 'SQL',              learned: false},
  {id: 545687, skill: 'Python',           learned: false},
  {id: 755088, skill: 'Django',           learned: false},
  {id: 477565, skill: 'React',            learned: false},
  {id: 117155, skill: 'Computer Science', learned: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update,
};

function update(id, skill) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skill.id = id;
  skills.splice(idx, 1, skill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  // Add the id
  skill.id = Date.now() % 1000000;
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