import { useFormik } from 'formik'
import * as Yup from 'yup'
import './ContactPage.css'

const ContactPage = () => {
  const formik = useFormik({
    initialValues: { nombre: '', email: '', mensaje: '' },
    validationSchema: Yup.object({
      nombre: Yup.string().required('Requerido').min(2, 'Mínimo 2 caracteres'),
      email: Yup.string().email('Email inválido').required('Requerido'),
      mensaje: Yup.string().required('Requerido').min(10, 'Mínimo 10 caracteres')
    }),
    onSubmit: (values, { resetForm }) => {
      alert('Mensaje enviado con éxito')
      resetForm()
    }
  })

  return (
    <div className="contact-page">
      <h1>Contacto</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input name="nombre" placeholder="Nombre" {...formik.getFieldProps('nombre')} />
          {formik.touched.nombre && formik.errors.nombre && <span>{formik.errors.nombre}</span>}
        </div>
        <div>
          <input name="email" placeholder="Email" {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>}
        </div>
        <div>
          <textarea name="mensaje" placeholder="Mensaje" {...formik.getFieldProps('mensaje')} rows="4" />
          {formik.touched.mensaje && formik.errors.mensaje && <span>{formik.errors.mensaje}</span>}
        </div>
        <button type="submit" disabled={!formik.isValid}>Enviar</button>
      </form>
    </div>
  )
}

export default ContactPage