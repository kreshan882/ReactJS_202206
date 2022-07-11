import React, { Component } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

class AddNewUserClass extends Component {
    constructor(){
        super();
        console.log('call constractor');
        this.state= {
            getAName : false ,
            message: ''
            
            
          };

        //   this.formik={  
        //     initialValues: {  
        //     title:'mr',
        //     description:'',
        //     dueDate:''
        //     },
        //     onSubmit,
        //     validate,
        // };



    }

        // initialValues= {
        //     title:'mr',
        //     description:'',
        //     dueDate:''
        //   };
        


        //   onSubmit= (values,{resetForm}) => {
        //     console.log(values);
        //     console.log(values.title);   
        //     const apiUrl="https//addUser/restApi";
        //     const task ={id: '4',title: values.title ,description:values.description };
        //     axios.put(apiUrl,task)
        //     .then((response) => {
        //         if(response.status==200){
        //         }
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //       console.log('url not found');
        //       this.setState ({message: 'successfully saved: '+values.title });
        //       resetForm({values: ''});
        //     });
        //   };
        
        //   validate= (values) => {
        //     let errors ={};
        //       if(!values.title) {
        //           errors.title='please add title';
        //       }
        //       if(!values.description) {
        //         errors.description='please add description';
        //       }
        //       if(!values.dueDate) {
        //         errors.dueDate='please add dueDate';
        //       }
        //     return errors;
        //   };
    
    render() {
        return (
            <div className="container col-sm-8 mt-4">
             <h4 className="mb-4">Add/Edit Task Class</h4>
             
              {/* <form onSubmit={this.formik.handleSubmit}> 
        <div className="form-group">
          <label for="title">Title</label>
          <input type="text" className="form-control"  id="title"  aria-describedby="emailHelp"  
          onChange={this.formik.handleChange} value={this.formik.values.title} onBlur={this.formik.handleBlur}/>
          {this.formik.touched.title && this.formik.errors.title? <div className="text-danger">{this.formik.errors.title}</div>: null}
        </div>
        <div className="form-group">
          <label for="description">Description</label>
          <textarea rows="4" type="text" className="form-control" id="description" aria-describedby="emailHelp" 
          onChange={this.formik.handleChange} value={this.formik.values.description} onBlur={this.formik.handleBlur} />
          {this.formik.touched.description && this.formik.errors.description? <div className="text-danger">{this.formik.errors.description}</div>: null}
        </div>
        <div className="form-group">
          <label for="dueDate">Due Date</label>
          <input type="text" className="form-control" id="dueDate"  aria-describedby="emailHelp" 
          onChange={this.formik.handleChange} value={this.formik.values.dueDate} onBlur={this.formik.handleBlur}/>
          {this.formik.touched.dueDate && this.formik.errors.dueDate? <div className="text-danger">{this.formik.errors.dueDate}</div>: null}
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      {this.state.message? <div className='alert alert-primary'>{this.state.message}</div>:null} */}
            </div>
        );
    }

}
export default AddNewUserClass;