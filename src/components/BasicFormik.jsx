import React from 'react'

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'


const validationSchema = Yup.object().shape({
  firstName: Yup.string()
  .matches(/^[A-Z][a-zA-Z]*$/,'Campo Incorrecto')
  .min(3, 'El nombre es muy corto')
  .max(20,'El nombre es demasiado largo')
  .required('Este campo es obligatorio'),
  lastName: Yup.string()
  .matches(/^[A-Z][a-zA-Z]*$/,'Campo Incorrecto')
  .min(3, 'El apellido es muy corto')
  .max(20,'El apellido es demasiado largo')
  .required('Este campo es obligatorio'),
  email: Yup.string()
  .email('Correo electrónico inválido')
  .required('Este campo es obligatorio')  
})

export const BasicFormik = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>   
    <div className='rounded-lg p-10 bg-white shadow-xl'>
    <h1 className='text-2xl text-center font-bold'>Formulario de Contacto</h1>
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
      <Form className='flex flex-col gap-2 mt-7'>
        <div className='flex flex-col gap-1'>
        <label htmlFor="firstName">Nombre</label>
        <Field id="firstName" name="firstName" className='rounded-md p-1 border border-blue-200' />
        {errors.firstName && touched.firstName? (
          <span className='text-sm italic text-red-500 flex justify-end'>{errors.firstName}</span>
        ): null}
        </div> 

        <div className='flex flex-col gap-1'>
        <label htmlFor="lastName">Apellido</label>
        <Field id="lastName" name="lastName" className='rounded-md p-1 border border-blue-200' />
        {errors.lastName && touched.lastName? (
          <span className='text-sm italic text-red-500 flex justify-end'>{errors.lastName}</span>
        ): null}
        </div>
        
        <div className='flex flex-col gap-1'>
        <label htmlFor="email">Correo Electrónico</label>
        <Field
          id="email"
          name="email"
          type="email"
          className='rounded-md p-1 border border-blue-200'
        />
         {errors.email && touched.email? (
          <span className='text-sm italic text-red-500 flex justify-end'>{errors.email}</span>
        ): null}
        </div>
        <button className='rounded-lg px-3 py-1 mt-5 border bg-blue-500 text-white hover:bg-white hover:border-blue-500 hover:text-blue-500 transition-colors'  type="submit">Enviar</button>
      </Form>
      )}
    </Formik>
  </div>
  </div>
)
}
