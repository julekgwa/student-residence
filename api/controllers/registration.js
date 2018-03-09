module.exports = {
    register: (req, res) => {
        console.log(req)
        res.json({message: 'Hello World'})
    }
};