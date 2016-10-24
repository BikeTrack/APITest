module.exports = {
  getDBConnectionString: function() {
    const usernameDB = process.env.MONGO_USER;
    const passDB = process.env.MONGO_PASS;

    return 'mongodb://' + usernameDB + ':' + passDB + '@ds035026.mlab.com:35026/biketrack'
  }
};
