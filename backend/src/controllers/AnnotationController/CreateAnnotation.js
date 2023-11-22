const Annotations = require('../../models/AnnotationData');

async function createAnnotation(request, response) {
  const { title, notes, priority } = request.body;

  if (!title) {
    return response.status(400).json({ error: 'Necessário um título!' });
  }
  if (!notes) {
    return response.status(400).json({ error: 'Necessário uma anotação!' });
  }

  const annotationCreated = await Annotations.create({
    title,
    notes,
    priority,
  });

  return response.json(annotationCreated);
}

module.exports = {
  createAnnotation,
};
