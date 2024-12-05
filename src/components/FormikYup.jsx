import React from 'react'

import { useFormik } from 'formik';
import * as Yup from 'yup'


export const FormikYup = () => {
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


    const formik = useFormik ({
      initialValues: {
        firstName:'',
        lastName:'',
        email:'',
      },validationSchema: validationSchema,
      onSubmit: values => {
        console.log(values)
        alert('Formulario completado con éxito!')
      },
    });
    
    return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <div className='rounded-lg p-10 bg-white shadow-xl'>
        <h1 className='text-2xl text-center font-bold'>Formulario de Contacto</h1>
          <div className='mt-7'>
            <form className='flex flex-col gap-2' onSubmit={formik.handleSubmit}>
              <div className='flex flex-col gap-1'>
                <label htmlFor="firstName">Nombre</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    className='rounded-md p-1 border border-blue-200'
                  />
                  {formik.touched.firstName && formik.errors.firstName? (
                    <div className='text-sm italic text-red-500 flex justify-end'>
                      {formik.errors.firstName}
                    </div>
                  ): null}
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="lastName">Apellidos</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    className='rounded-md p-1 border border-blue-200'
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className='text-sm italic text-red-500 flex justify-end'>
                      {formik.errors.lastName}
                    </div>
                  )}
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="email">Correo Electrónico</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className='rounded-md p-1 border border-blue-200'
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className='text-sm italic text-red-500 flex justify-end'>
                      {formik.errors.email}
                    </div>
                  )}
              </div>
              <button className='rounded-lg px-3 py-1 mt-5 border bg-blue-500 text-white hover:bg-white
                                 hover:border-blue-500 hover:text-blue-500' 
                      type="submit">Enviar
              </button>
            </form>
          </div>
      </div>
    </div>
  )
}
