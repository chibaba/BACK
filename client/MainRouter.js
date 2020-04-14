import React, {Component} from 'react'
import Home from './core/Home'

class MainRouter extends Component {
    render() {
        return (<div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/users" component={Users} />
                <Link to="/users">Users</Link>
            </Switch>
        </div>)
    }
}
export default MainRouter