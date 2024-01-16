import { Field, Formik , Form} from "formik";

const Location = () => {
    return (
        <Formik>
            <Form>
                <Field type = 'text' placeholder = 'location-0'></Field>
            </Form>
        </Formik>
    )
}

export default Location;