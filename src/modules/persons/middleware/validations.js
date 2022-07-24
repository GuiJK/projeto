const { celebrate, Segments, Joi } = require('celebrate');

module.exports = function postPersons() {
    return celebrate({
        [Segments.BODY]: {
            name: Joi.string().required('name is required'),
            email: Joi.string().email().required('email is required'),
            whatsapp: Joi.string().required('whatsapp is required'),
            cep: Joi.string().required('CEP is required'),
            password: Joi.string().min(6).required('password is required'),
          },
    });
  }
