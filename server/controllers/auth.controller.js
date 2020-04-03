import User from '../models/user.model'
import jwt  from 'jsonwebtoken'
import expressJwt from './../../config/config'

const signIn = (req, res) => {
    User.findOne({
        "email":req.body.email
    }, (err, user) => {
        if(err || !user)
        return res.status('401').json({
            error: "User not found"
        })
        if(!user.authenticate(req.body.password)) {
            return res.status('401').send({
                error: "Email and Password does not match"
            })
        }
        const token = jwt.sign({
            _id:user.id
        },config.jwtSecret)
        res.cookie("t", token, {
            expire: new Date() + 9999
        } )
        return res.json({
            token,
            user: {_id: user.id, name: user.name, email: user.email}
        })
    })
}

const signOut = (req, res) => {}

const requireSignIn 
const hasAuthorization = (req, res) => {}


export default { signIn, signOut, requireSignIn, hasAuthorization}