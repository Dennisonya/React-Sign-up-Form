import { useState } from 'react'
import './App.css'

function App() {
      const [formData, setFormData]  = useState({
        firstName: '',
        lastName: '',
        password:'',
        confirmPassword:'',
        email:'',
        newsLetter: true
      })
      
    function handleChange (event){
      const {name, type, value, checked} = event.target
      setFormData(prevState =>{
        return {
          ...prevState,
          [name] : type === 'checked' ? checked : value
        }
      })
    }

    function  handleSubmit(event){
      event.preventDefault()
      formData.password === formData.confirmPassword ? alert("Successfully Signed up!") : alert("Incorrect Password!")
      formData.newsLetter && alert("Thank you signing up for our Newsletter!")
    }


  return(
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='firstName' className='input-label'>Name</label><br/>
          <input 
          type="text" 
          name="firstName"
          value={formData.firstName} 
          onChange={handleChange}
          required
          className="input-fields"
          />
          <br/>
          <label  hrmlFor="lastName" className='input-label'>Last Name</label><br/>
          <input 
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required className="input-fields" 
          />
          <br/>
          <label htmlFor="password" className='input-label'>Password</label><br/>
          <input 
          type="password"
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
          className="input-fields"
          />
          <br/>
          <label htmlFor='confirmPassword' className="input-label">Confirm Password</label><br/>
          <input 
          type="password" 
          name="confirmPassword" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
          required 
          className="input-fields"
          />
          <br/>
          <label htmlFor ="email" className="input-label">Email</label><br/>
          <input 
          type="email"  
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required className="input-fields" 
          />
          <br/>
          <label htmlFor="newsLetter" className="input-label">News Letter</label>
          <input 
          type="checkbox" 
          name="newsLetter" 
          value={formData.newsLetter} 
          onChange={handleChange} 
          required 
          />
          <br/>
        <button onClick={handleSubmit} className='sign-up-button'>Sign UP</button>
        </form>
      </div>
  )

}

export default App
