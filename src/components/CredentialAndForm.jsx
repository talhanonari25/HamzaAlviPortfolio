import React, {useState} from 'react'
import './CredentialAndForm.css'
import { Button, Input, message } from 'antd'
message.config({
  top: 0,
  duration: 5,
  maxCount: 3,
});

const { TextArea } = Input;

const CredentialAndForm = ({contactElementRef}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [error, setError] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) =>{
      e.preventDefault()

      if(!formData.name){
        setError('Name is required.')
      }
      if(!formData.email){
        setError('Email is required.')
      }
      if(!formData.subject){
        setError('Subject is required.')
      }
      if(!formData.email){
        setError('email is required.')
      }
      console.log(formData)
    }
  
  return (
    <div className="CredentialAndFormContainer" ref={contactElementRef}>
      <div className="credentials">
        <div className="form-email">
          <p className='info-title'>Write me</p>
          <p className="form-email-info">m.hamzaalvi719@gmail.com</p>
        </div>
        <div className="form-address">
          <p className="info-title">My office</p>
          <p className="form-address-info">Askari 11, Lahore</p>
        </div>
        <div className="form-social">
          <p className="info-title">Follow us</p>
          <div className="form-social-info" style={{ width: '70%' }}>
            <ul>
              <li><a href="https://www.facebook.com/hamza.alvi.9" target='_blank' className='credential-link' style={{textDecoration: "none", color:"white"}}>Facebook</a></li>
              <li><a href="https://www.linkedin.com/in/hamza-alvi-378baa1ab" target='_blank' className='credential-link' style={{textDecoration: "none", color:"white"}}>Linked In</a></li>
              <li><a href="https://github.com/Hamza719alvi" target='_blank' className='credential-link' style={{textDecoration: "none", color:"white"}}>Github</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <p className='info-title'>Or fill this form</p>
          <Input placeholder="Name" name='name' value={formData.name} variant="underlined" className='custom-input' onChange={handleChange} />
          <Input placeholder="Email" name='email' value={formData.email} variant="underlined" className='custom-input' onChange={handleChange} />
          <Input placeholder="Subject" name='subject' value={formData.subject} variant="underlined" className='custom-input' onChange={handleChange} />

          <TextArea
            maxLength={200}
            name='message'
            value={formData.message}
            placeholder="Tell me about your projects"
            className='custom-input custom-textarea'
            style={{ height: 120, resize: 'none', borderBottom: "1px solid white", borderRadius: '0px' }}
            onChange={handleChange}
          />

          <Button color="default" variant="solid" type='primary' htmlType='submit' className='btn' style={{ backgroundColor: "white", color: "black" }}>
            Submit
          </Button>
          <p>{error}</p>
        </form>
      </div>
    </div>
  )
}



export default CredentialAndForm