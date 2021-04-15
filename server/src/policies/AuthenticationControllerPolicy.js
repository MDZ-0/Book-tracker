const Joi = require('joi')

module.exports = {
    register(req, res, next){
        const schema = Joi.object({
            email : Joi.string().email(),
            password : Joi.string().min(8).max(32).alphanum()
            //pattern(new RegExp('^[a-zA-Z0-9]{8-32}$'))
        })

        const {error, value} = schema.validate(req.body)
        if(error){
            const failure = error.details[0].context.key
            switch(failure){
                case 'email':
                    res.status(400).send({
                        error: 'You must give a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: ` The password failed to match the following criteria:
                        <br/>
                        1 - Only alphanumric values (a,...,z,A,...,Z,0,...,9)
                        <br/>
                        2 - Length of minimum 8 to maximum 32 
                        `
                    })
                    break
                default:
                    res.status(400).send({
                        error : 'Invalid information'
                    })
                    break
            }
        } else {
            next()
        }

    }
}