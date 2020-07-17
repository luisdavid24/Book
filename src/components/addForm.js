import React from 'react';
import './styles/addForm.css';

class Form extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        name: '',
        email: '',
        foto: ''
      }
    }
    
    handleChange = (e) => {
      const { name, value } = e.target
      this.setState({ [name]: value })
    }
    
    handleSubmit = (e) => {
      e.preventDefault()
      const values = JSON.stringify(this.state)
      alert(values)
    }
    
    render () {
      const { name, email,foto } = this.state
      
      return (
        <div>
           <h2>fill the book information</h2>
           <form onSubmit={this.handleSubmit}>
            <div>
              <label>Title:
                <input 
                  type="text"
                  name="name"
                  value={name} 
                  onChange={this.handleChange} 
                />
              </label>
            </div>
            
            <div>
              <label>Descriptions:
                <input 
                  type="email"
                  name="email"
                  value={email} 
                  onChange={this.handleChange} 
                />
              </label>
            </div>
            <div>
                <input 
                  type="file"
                  name="foto"
                  value={foto} 
                  onChange={this.handleChange} />
              
            </div>
            
            <button type="submit">Send</button>
          </form>
        </div>
      )
    }
  }
export default Form;