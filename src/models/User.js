class User {
  static STATUS_ACTIVE = 1;
  static STATUS_INACTIVE = 0;

  static ROLE_TUTOR = 1;
  static ROLE_STUDENT = 2;

  static schema = {
    name: 'User',
    properties: {
      _id: 'string',
      _partition: 'string',
      userName: 'string',
      password: {type: 'string', optional: true, default: '1234'},
      email: 'string',
      selfie: 'string',
      token: {type: 'string', optional: true, default: '1234'},
      schoolName: {type: 'string', optional: true},
      grade: {type: 'string', optional: true},
      bio: {type: 'string', optional: true},
      mobile: 'string',
      role: 'int',
      firstName: 'string',
      lastName: 'string',
      displayName: 'string',
      status: 'int',
      city: 'string',
    },
    primaryKey: '_id',
  };
}
export {User};
