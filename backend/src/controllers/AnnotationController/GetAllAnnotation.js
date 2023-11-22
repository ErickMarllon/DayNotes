const Annotations = require('../../models/AnnotationData');

async function GetAllAnnotation(request, response) {
  const annotationList = await Annotations.find();
  return response.json(annotationList);
}

module.exports = {
  GetAllAnnotation,
};
