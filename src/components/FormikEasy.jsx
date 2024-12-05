import { useFormik } from 'formik';
import React from 'react'

export const SingUpForm = () => {
  
    const formik = useFormik ({
        initialValues: {
          firstName:'',
          lastName:'',
          email:'',
        },
        onSubmit: values => {
          alert(JSON.stringify(values,null,2));
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
                       value={formik.values.firstName}
                       className='rounded-md p-1 border border-blue-200'
                     />
                    </div>
                    <div className='flex flex-col gap-1'>
                    <label htmlFor="lastName">Apellidos</label>
                     <input
                       id="lastName"
                       name="lastName"
                       type="text"
                       onChange={formik.handleChange}
                       value={formik.values.lastName}
                       className='rounded-md p-1 border border-blue-200'
                     />
                    </div>
                    <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Correo Electrónico</label>
                     <input
                       id="email"
                       name="email"
                       type="email"
                       onChange={formik.handleChange}
                       value={formik.values.email}
                       className='rounded-md p-1 border border-blue-200'
                    />
                    </div>
                    <button className='rounded-lg px-3 py-1 mt-5 border bg-blue-500 text-white hover:bg-white hover:border-blue-500 hover:text-blue-500' type="submit">Enviar</button>
                </form>
            </div>
            
            </div>
        </div>
    );
        
  };
  
