const loginData = {
  validUser: {
    username: 'Admin',
    password: 'admin123'
  },

  invalidUsername: {
    username: 'WrongUser',
    password: 'admin123'
  },

  invalidPassword: {
    username: 'Admin',
    password: 'wrongPassword123'
  },

  invalidCredentials: {
    username: 'WrongUser',
    password: 'wrongPassword123'
  },

  emptyCredentials: {
    username: '',
    password: ''
  }
};

module.exports = { loginData };