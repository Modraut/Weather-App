import React from 'react';

class SignUpForm extends React.Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
        }
        this.changeInput = this.changeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    changeInput(e){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({
            username: "",
            password: "",
        })
    }
    render(){
        const { username, password } = this.state;
        return(
            <div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username here" value={username} onChange={this.changeInput} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"  name="password" value={password} onChange={this.changeInput} />
                </div>
                <button type="submit" onClick={this.handleSubmit} >Submit</button>
            </div>
        )
    }
}

export default SignUpForm;