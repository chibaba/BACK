import User from  '../models/user.model'

import _ from 'loadash';
import errorHandler from './error.controller.js'

const create = (req, res, next) => {
    const user = new User(req.body)
    user.save((err, result) => {
        if(err) {
            return res.status(400).json({
                error:errorHandler.getErrorMessage(err)
            })
        }
        res.status(200).json({
            message: "successfully signUp!"
        })
    })
}

const list = (req, res) => {
    User.find((err, users) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        res.json(users)
    }).select('name email updated created')
}

const userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user)
        return res.status(400).json({
            error: "User not found"
        })
        req.profile = user
        next()
    })
}

const read = (req, res) => {
        req.profile.hashed_password = undefined
        req.profile.salt = undefined
        return res.json(req.profile)
}

const update = (req, res, next) => {}

const remove = (req, res, next) => {}

export default {create, userById, read, list, remove, update}