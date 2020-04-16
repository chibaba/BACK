constructor =()=> {
    state = {name: '', password: '', email: '', open: false, error: ''}

}

handleChange = name=>event=>{
    this.setState({[name]: event.target.value})
}

clickSubmit = () =>{
    const user = {
        name: this.state.name || undefined,
        email: this.state.email || undefined,
        password: this.state.password || undefined
    }
    create(user).then((data) => {
        if(data.error)
        this.setState({error: data.error})
        else
        this.setState({error: '', open:true})

    })
}

render () {
    const {classes} = this.props
    return (<div>
        <Card className={classes.card}>
            <CardContent>
                <Typography type="headline" component="h2"
                className={classes.title}>
                    Sign Up
                </Typography>
                <TextField id="name" label="Name"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"/><br/>
                <TextField id="email" type="email" label="Email"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange('email')}
            </CardContent>
        </Card>
    </div>)
}