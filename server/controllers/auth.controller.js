import User from '../models/user.model'
import jwt  from 'jsonwebtoken'
import expressJwt from './../../config/config'
import { request } from 'express'

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

const signOut = (req, res) => {
    res.clearCookie("t")
    return res.status('200').json({
        message: "signed out"
    })
}

const requireSignIn = expressJwt({
    secret: config.jwtSecret,
    userProperty: 'auth'
})
const hasAuthorization = (req, res,next) => {
    const authorized = req.profile && req.auth && request.profile_id ==
    req.auth.id
    if(!(authorized)) {
        return res.status('403').json({
            error: 'User is not authorized'
        })
    }
    next()
}


export default { signIn, signOut, requireSignIn, hasAuthorization}