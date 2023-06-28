const CategorySchema = require('../validations/Category.validation')

const CategoryPostValidation = (req, res, next) => {
    const { body } = req;
    const { error } = CategorySchema.validate(body);

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

module.exports = CategoryPostValidation