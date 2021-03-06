exports.getUserInfo = function (req, res) {
    setTimeout(() => {
        res.send({ userId: 1, userName: 'Steven', dob: '1993-02-15', isActive: false })
    }, 3000);
}

exports.getUserTheme = function (req, res) {
    // this is the themeing info for user id: 1
    setTimeout(() => {
        res.send({
            bodyBgColor: '#447744',
            color: '#000',
            headerBgColor: '#9595d4',
            headerColor: 'white',
            location: "India"
        })
    }, 3000);
}

exports.getUserGeoLocation = function (req, res) {
    // this is the location info for user id: 1
    res.send({
        location: 'India',
        dateFormat: 'DD/MMMM/yyyy',
        langulage: 'hindi'
    })
}

// =================================================================
// Followings are not dependent on each another
exports.getCommonSetting = function (req, res) {
    setTimeout(() => {
    res.send({
        greetMessage: 'Hello dear, how are you doing'
    })
}, 3000);
}