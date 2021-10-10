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
      password: 'string',
      email: 'string',
      mobile: 'string',
      role: 'string',
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
