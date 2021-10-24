import Realm from 'realm';
import {User} from '../models/User';
import {Course} from '../models/Course';
import {Assignment} from '../models/Assignment';

let app;
const appId = 'tutor-jktla'; // remote mongo realm app ID

const appConfig = {
  id: appId,
  timeout: 10000,
  sync: true,
};

const databaseConfig = {
  path: 'tutorDB.realm',
  schema: [User],
  schemaVersion: 1,
};
export default function getRealmApp() {
  if (app === undefined) {
    app = new Realm(databaseConfig);
  }
  return app;
}

export function getDBConnection() {
  let db = new Realm(databaseConfig);
  console.log('db', db);
  return db;
}

export function syncWithRemote() {
  return new Realm.App(appConfig);
}
