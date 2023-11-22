const Annotations = require('../../models/AnnotationData');

async function DeleteAnnotation(request, response) {
  const { id } = request.params;

  const annotationDeleted = await Annotations.findOneAndDelete({ _id: id });
  if (annotationDeleted) {
    return response.json(annotationDeleted);
  }
  return response
    .status(401)
    .json({ error: 'Não foi encontrado registro para deletar!' });
}

module.exports = {
  DeleteAnnotation,
};
