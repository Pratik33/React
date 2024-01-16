import { Form, Formik } from "formik";
import { useState } from "react";

import Location from "./Location";

const initialValues = {
    address: []
}

const onSubmit = (values ) => {
    console.log(values);
}

const FormikPractice = () => {

    // old approch ! 

    // const  [ item , setItem ] = useState('');
    // const  [ items , setItems ] = useState([]);

    // const handleAddItem = () => {
    //     setItems([...items,item]) 
    // }

    // const handleChange = (e) => {
    //     setItem(e.target.value);
    // }

    // return (
    //     <div>
    //         <input type = 'text' value = {item} onChange={handleChange} />
    //         <button onClick = { handleAddItem } >Add Item</button>
    //         <ul>{
    //             items.map((item , index) => {
    //                  return <li key = {index}>{item}</li>
    //             })
    //         }
    //         </ul>
    //     </div>
    // )



   return ( <div>
        <button>Add Location</button>
        <Location />
        <Formik initialValues={initialValues} onSubmit={onSubmit} >
            <Form>

            </Form>
        </Formik>
    </div>)




}

export default FormikPractice;