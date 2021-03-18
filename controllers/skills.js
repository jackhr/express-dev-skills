// constrollers/skills.js

// Should name the model in uppercase and singular
const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update,
}

function update(req, res) {
  req.body.learned = !!req.body.learned;
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
  // Find the skill to provide to the view
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', { skill });
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  // We provide the path for the subsequent GET request
  res.redirect('/skills');
};

function create(req, res) {
  console.log(req.body);
  // The model is responsible for creating data
  Skill.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new');
}

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll(),
  });
}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
  });
}