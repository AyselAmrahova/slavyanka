const AboutSchema = require('../validations/About.validation')

const AboutPostValidation = (req, res, next) => {
    const { body } = req;
    const { error } = AboutSchema.validate(body);

    if (error === undefined) {
        next()
        return;
    }
    else {
        const { details } = error;
        const message = details.map((i) => i.message).join(',');
        res.status(403).send({
            error: message
        })
    }
}

module.exports = AboutPostValidation