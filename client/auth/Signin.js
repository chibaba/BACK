import authController from "../../server/controllers/auth.controller"
import { render } from "react-dom"

class Signin extends Component {
    state = { email: '', password: '', error: '', redirectToReferrer: false}
}

clickSubmit = () =>{
    const user= {
        email: this.state.email || undefined,
        password: this.state.password || undefined
    }
    signin(user).then((data) =>{
        if (data.error){
            this.setState({error:data.error})
        } else {
            auth.authenticate(data, () => {
                this.setState({redirectToReferrer: true})
            })
        }
    })
}
render() {
    const {classes} = this.props
}