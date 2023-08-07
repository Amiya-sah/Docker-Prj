const router = require("express").Router()

router.route('/').get((req, res) => {
    var msg = `Hello ${req.query.name || "World"} from get request`
    res.json({msg})
})

router.route('/:lang').get((req, res) => {
    var msg
    switch (req.params.lang) {
        case "en":
            msg = "Hello"
            break;
        case "es":
            msg = "Holla"
            break;
        case "fr":
            msg = "Bonjour"
            break;
        default:
            msg = "Hi"
            break;
    }
    res.json({msg})
})

router.route('/').get((req, res) => {
    var result = req.body.a +req.body.b
    res.json({result})
})


module.exports = router;