import { useFormik } from "formik";

const YoutubeForm = () => {
    const formik =  useFormik({
        initialValues: {
            name:'Pratik',
            email:'',
            channel:''
        } ,
        onSubmit : values => {
            console.log(values)
        },
    
        validate : values => {
            let errors = {};

            if(!values.name){
                errors.name = 'This is Requried field !';
            }
            if( !values.email)
            {
                errors.email = 'This is Requried field !'
            }

            if( !values.channel)
            {
                errors.channel = 'This is Requried field !' ;
            }

            return errors;
        }
    }); 

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div class='formControl'>
                    <label htmlFor = 'name'>Name </label>
                    <input name = 'name' id = 'name' type= 'text' 
                    onChange={formik.handleChange}  
                    onBlur={formik.handleBlur}
                    value={formik.values.name} />
                    {formik.touched.name && formik.errors.name ? <div className="error"> { formik.errors.name}</div>  : null }
                </div>
                <div class='formControl'>
                    <label htmlFor = 'email'> E - mail </label>
                    <input name = 'email' id = 'email' type= 'text' 
                    onChange={formik.handleChange} 
                    value={formik.values.email}
                    onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email ? <div className="error"> { formik.errors.email}</div>  : null }
                </div>
                <div class='formControl'> 
                    <label htmlFor = 'channel'> Channel </label>
                    <input name = 'channel' id = 'channel' type= 'text' 
                     onChange={formik.handleChange} 
                     value={formik.values.channel}
                     onBlur={formik.handleBlur} />
                    { formik.touched.channel && formik.errors.channel ? <div className="error"> { formik.errors.channel}</div>  : null }
                </div>
                <button type = 'submit' >Submit</button>
            </form>
        </div>
    )
}
export default YoutubeForm;