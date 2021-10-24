import getRealmApp, {getDBConnection} from '../config/realm';
import {User} from '../models/User';
import {v4 as uuid} from 'uuid';

export default async function saveUser(userPayload) {
  try {
    const realm = getDBConnection();
    console.log('realmDB', realm);
    console.log('realm', realm.path);
    let user;
    let id = uuid();
    await realm.write(async () => {
      user = await realm.create('User', {
        _id: id,
        userName: userPayload.email.toLowerCase(),
        city: userPayload.city,
        firstName: userPayload.firstName,
        lastName: userPayload.lastName,
        selfie: userPayload.selfie,
        schoolName: userPayload.schoolName,
        grade: userPayload.grade,
        bio: userPayload.bio,
        displayName: userPayload.displayName,
        email: userPayload.email.toLowerCase(),
        _partition: id,
        mobile: userPayload.mobile,
        role: userPayload.role,
        status: User.STATUS_ACTIVE,
      });
      console.log('savedUser', user);
      return true;
    });
  } catch (e) {
    console.log('saveUser', e);
    throw e;
  }
}

export async function getUser(userName) {
  try {
    console.log('userName', userName);
    const realm = getDBConnection();
    console.log('realm', realm);
    const User = realm.objects('User');
    console.log('User', User);
    const user = User.filtered(`userName="${userName}"`);
    console.log('user', user);
  } catch (e) {
    throw e;
  }
}
