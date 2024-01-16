import { useFormik } from "formik";
import * as Yup from 'yup'

const initialValues = {
    email: '',
    username: '',
    contactNumber: ''
}

const onSubmit = (values) => {
    console.log(values)
}

const validate = values => {
    const error = {};

    if (!values.contactNumber) {
        error.contactNumber = 'This is requried field ! ';
    }
    if (!values.username) {
        error.username = 'This is requried field ! ';
    }
    if (!values.email) {
        error.email = 'This is requried field ! ';
    }
    return error;
}

const validationSchema = Yup.object({
    email: Yup.string().required('This is requried field !'),
    username : Yup.string().required('This is requried field !'),
    contactNumber : Yup.string().length(10,'Number must be 10 digit !').required('This is requried field !')

})
const SignUpForm = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema

    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input type='text' name='email'
                    {...formik.getFieldProps('email')}
                    placeholder="Email address" />
                {formik.errors.email ? <p className="error">{formik.errors.email}</p> : null}
            </div>
            <div>
                <input type='text'
                    name="username"
                    placeholder="Username "
                    {...formik.getFieldProps('username')} />
                    {formik.errors.username ? <p className="error">{formik.errors.username}</p> : null}
            </div>
            <div>
                <input type='text' name='contactNumber'
                    placeholder="Contact Number"
                    {...formik.getFieldProps('contactNumber')} />

                {formik.errors.contactNumber ? <p className="error">{formik.errors.contactNumber}</p> : null}
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    );
}

export default SignUpForm;