import { DialogContent } from "material-ui"

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

render() {
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
                margin="normal"/><br/>
                <TextField id="password" type="password"
                className={classes.textField}
                value={this.state.password}
                onChange={this.handleChange('password')}
                margin="normal"/><br/>
                {this.state.error&&(<Typography component="p"
                color="color">
                <Icon color="error"
                className={classes.error}>error</Icon>
                {this.state.error}</Typography>)}
            </CardContent>
            <CardActions>
                <Button color="primary" raised="raised"
                onClick={this.clickSubmit}
                className={classes.submit}>Submit</Button>
            </CardActions>
        </Card>
        <Dialog open={this.state.open} disableBackdropClick={true}>
            <DialogTitle>New Account</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    New Account Successfully Created
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Link to="/signin">
                    <Button color="primary" autoFocus="autoFocus" variant="raised">
                        Sign in
                    </Button>
                </Link>
            </DialogActions>
        </Dialog>
    </div>)
}