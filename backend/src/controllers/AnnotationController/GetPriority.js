const Annotations = require('../../models/AnnotationData');

async function GetPriority(request, response) {
  const priority = request.query;

  const prioriNotes = await Annotations.find(priority);

  return response.json(prioriNotes);
}

module.exports = { GetPriority };
