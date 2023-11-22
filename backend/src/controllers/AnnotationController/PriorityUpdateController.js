const Annotations = require('../../models/AnnotationData');

async function PriorityUpdateController(request, response) {
  const { id } = request.params;

  const annotation = await Annotations.findOne({ _id: id });
  if (annotation.priority) {
    annotation.priority = false;
  } else {
    annotation.priority = true;
  }
  await annotation.save();
  return response.json(annotation);
}

module.exports = { PriorityUpdateController };
