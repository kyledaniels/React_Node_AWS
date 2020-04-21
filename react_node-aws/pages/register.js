import {useState} from 'react'
import Layout from '../components/layout'


const Register = () => {

    const [state, setState] = useState({
        name:'',
        email:'',
        password:'',
        error:'',
        success:'',
        buttonText:'Register'

    })

       const {name,email, password,error, success, buttonText}=state;
       
       const handleChange = (name)=> (e)=>{
             setState({...state,[name]:e.target.value,error:'',success:'',buttonText:'Register'})
       }

       const handleSubmit = ()=>{

       }

       const registerform=()=><form onSubmit={handleSubmit}>
           <div className= "form-group">
               <input onChange={handleChange('name')} type="text" className="form-control" placeholder="Type your name"/>
           </div>
           <div className= "form-group">
               <input onChange={handleChange('email')}type="email" className="form-control" placeholder="Type your email"/>
           </div>
           <div className= "form-group">
               <input onChange={handleChange('password')}type="password" className="form-control" placeholder="Type your password"/>
           </div>
           <div className= "form-group">
              <button className= "btn btn-outline-warning">{buttonText}</button>
           </div>
       </form>;

       return(
           <layout>
               <div className="col-md-6 offset-md-3">
                   <h1>Register</h1>
                   <br/>
                   {registerform()}
               </div>
           </layout>
       )

}

export default Register;
