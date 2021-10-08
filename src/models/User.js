import {ObjectId} from 'bson';
class User {
  constructor({
    id = new ObjectId(),
    partition = '615998377e20791145b1904a',
    email,
    mobile,
    displayName,
    userName,
    firstName,
    role,
    token,
    status = User.STATUS_ACTIVE,
  }) {
    this._id = id;
    this._partition = partition;
    this.displayName = displayName;
    this.userName = userName;
    this.email = email;
    this.mobile = mobile;
    this.firstName = firstName;
    this.role = role;
    this.token = token;
    this.status = status;
  }

  static STATUS_ACTIVE = 1;
  static STATUS_INACTIVE = 0;

  static ROLE_TUTOR = 1;
  static ROLE_STUDENT = 2;

  static schema = {
    name: 'user',
    properties: {
      _id: 'objectId',
      _partition: 'string',
      userName: 'string',
      email: 'string',
      mobile: 'string',
      role: 'string',
      firstName: 'string',
      lastName: 'string',
      displayName: 'string',
      status: 'string',
    },
    primaryKey: '_id',
  };
}
export {User};
