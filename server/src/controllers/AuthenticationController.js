module.exports = {
    register (req, res) {
        res.send({
            message : `hello ${req.body.email}, register with success !`
        })
    }
}