import Realm from 'realm';

let app;

export default function getRealmApp() {
  if (app === undefined) {
    const appId = 'tutor-jktla';
    const appConfig = {
      id: appId,
      timeout: 10000,
      app: {
        name: 'tutor',
        version: '0',
      },
    };
    app = new Realm.App(appConfig);
  }

  return app;
}
