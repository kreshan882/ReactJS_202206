import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';


function AddNewUser() {

  const [message,setMessage] = useState('');
  const initialValues= {
    title:'mr',
    description:'',
    dueDate:''
  };

  const onSubmit= (values,{resetForm}) => {
    console.log(values);
    console.log(values.title);
    
    const apiUrl="https//addUser/restApi";
    const task ={id: '4',title: values.title ,description:values.description };
    axios.put(apiUrl,task)
    .then((response) => {
        if(response.status==200){

        }
    })
    .catch((error) => {
      console.log(error);
      console.log('url not found');
      setMessage('successfully saved: '+values.title);
      resetForm({values: ''});
    });

  };

  const validate= (values) => {
    let errors ={};
      if(!values.title) {
          errors.title='please add title';
      }
      if(!values.description) {
        errors.description='please add description';
      }
      if(!values.dueDate) {
        errors.dueDate='please add dueDate';
      }
    return errors;
  };

  const formik = useFormik({
      initialValues,
      onSubmit,
      validate,
  });

    return (
        <div className="container col-sm-8 mt-4">
          <h4 className="mb-4">Add/Edit Task</h4>
          <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label for="title">Title</label>
          <input type="text" className="form-control"  id="title"  aria-describedby="emailHelp"  
          onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur}/>
          {formik.touched.title && formik.errors.title? <div className="text-danger">{formik.errors.title}</div>: null}
        </div>
        <div className="form-group">
          <label for="description">Description</label>
          <textarea rows="4" type="text" className="form-control" id="description" aria-describedby="emailHelp" 
          onChange={formik.handleChange} value={formik.values.description} onBlur={formik.handleBlur} />
          {formik.touched.description && formik.errors.description? <div className="text-danger">{formik.errors.description}</div>: null}
        </div>
        <div className="form-group">
          <label for="dueDate">Due Date</label>
          <input type="text" className="form-control" id="dueDate"  aria-describedby="emailHelp" 
          onChange={formik.handleChange} value={formik.values.dueDate} onBlur={formik.handleBlur}/>
          {formik.touched.dueDate && formik.errors.dueDate? <div className="text-danger">{formik.errors.dueDate}</div>: null}
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      {message? <div className='alert alert-primary'>{message}</div>:null}
        </div>
      );
    }

export default AddNewUser;
