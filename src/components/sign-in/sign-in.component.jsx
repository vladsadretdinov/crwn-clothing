import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.components';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSumbit = event => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I have already account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSumbit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label="email"
                        />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                         required
                         handleChange={this.handleChange}
                        label="password"
                        />
                    <CustomButton type='submit'>Sign in</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;