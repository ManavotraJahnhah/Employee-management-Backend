const responsibilityService = require('../services/responsibility.service');

exports.getAllResponsibilities = async (req, res) => {
  try {
    const responsibilities = await responsibilityService.getAllResponsibilities();
    res.json(responsibilities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getResponsibilityById = async (req, res) => {
  try {
    const r = await responsibilityService.getResponsibilityById(req.params.id);
    if (!r) return res.status(404).json({ message: 'Responsibility not found' });
    res.json(r);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createResponsibility = async (req, res) => {
  try {
    const r = await responsibilityService.createResponsibility(req.body);
    res.status(201).json(r);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateResponsibility = async (req, res) => {
  try {
    const updated = await responsibilityService.updateResponsibility(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Responsibility not found' });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteResponsibility = async (req, res) => {
  try {
    const deleted = await responsibilityService.deleteResponsibility(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Responsibility not found' });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
