import PouchDB from 'pouchdb';

export const dbName = 'messageboard';
export const dbAddress = `http://localhost:5984/${dbName}`;
const localDB = new PouchDB(dbName);
const remoteDB = new PouchDB(dbAddress);

localDB.sync(remoteDB, { live: true });
