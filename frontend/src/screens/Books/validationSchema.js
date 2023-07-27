import * as Yup from 'yup';

export default Yup.object().shape({
  title: Yup.string()
    .label('Title')
    .required()
    .min(2, 'Must have at least 2 characters'),
  author: Yup.string()
    .label('Author')
    .required()
    .min(2, 'Must have at least 2 characters'),
  publicationYear: Yup.number()
    .label('Publication Year')
    .required()
    .min(4, 'Must have at least 4 characters'),
  content: Yup.string()
    .label('Content')
    .required()
    .min(2, 'Must have at least 2 characters')
});