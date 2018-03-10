const Room = require('../helpers/Room');

module.exports = {
    addRoom: (req, res) => {
        const room = new Room();

        room.rate = 1200;
        room.roomNo = 234;
        room.floor = 1;

        room.save((err) => {
            if (err) throw err;
            res.json({
                message: 'Room saved'
            })
        })
    }
};