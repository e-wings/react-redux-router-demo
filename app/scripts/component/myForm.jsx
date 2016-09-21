import React from 'react'
import { Field, reduxForm } from 'redux-form'

class MyForm extends React.Component{

  myOwnSubmit(){
    console.log("Handle submit here(send submit action)");
  }

  render(){
    console.log(this.props);
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(this.myOwnSubmit)}>
  <div>
    <label>Name: </label>
    <div>
    <Field name="Name" component="input" type="text" placeholder="Name"/>
      </div>
      </div>
      <div>
      <label>Number: </label>
    <div>
    <Field name="Num" component="input" type="text" placeholder="Number"/>
      </div>
      </div>
      <div>
      <label>Sex</label>
      <div>
      <label><Field name="Status" component="input" type="radio" value="0"/> Female</label>
      <label><Field name="Status" component="input" type="radio" value="1"/> Male</label>
      </div>
      </div>
      <div>
      <button type="submit" disabled={pristine || submitting}>Submit</button>
    <button type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>
      </div>
      </form>
  )
  }
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
MyForm = reduxForm({
  form: 'reward'  // a unique identifier for this form
})(MyForm)

export default MyForm