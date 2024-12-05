import React from 'react'

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'


const validationSchema = Yup.object().shape({
  firstName: Yup.string()
  .min(3, 'El nombre es muy corto')
  .max(20,'El nombre es demasiado largo')
  .required('Este campo es obligatorio'),
  lastName: Yup.string()
  .min(3, 'El apellido es muy corto')
  .max(20,'El apellido es demasiado largo')
  .required('Este campo es obligatorio'),
  email: Yup.string()
  .email('Correo electrónico inválido')
  .required('Este campo es obligatorio')  
})

export const BasicFormik = () => {
  return (
    <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values)
        alert('Formulario completado con éxito!')
      }}      
    >
      {({errors , touched}) =>(
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" />
        {errors.firstName && touched.firstName? (
          <span>{errors.firstName}</span>
        ): null}

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
      )}
    </Formik>
  </div>
)
}
