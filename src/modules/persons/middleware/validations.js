import { Joi, Segments, celebrate } from 'celebrate';

export function knex() {
    return celebrate({
        [Segments.BODY]: {
            name: Joi.string().required('Name is required'),
            email: Joi.string().email().required('Email is required'),
            whatsapp: Joi.string().required('Whatsapp is required'),
            cep: Joi.string().required('CEP is required'),
            password: Joi.string().min(6).required('Password is required'),
          },
    });
  }
