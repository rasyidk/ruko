import PocketBase from 'pocketbase';

const PB_URL = 'https://ruko.trpl.tech'
const pb = new PocketBase(PB_URL);

const userData = await pb.collection('users').authWithPassword('admin@gmail.com', '28pRHJwJvPcq1_F');

export { pb, PB_URL };