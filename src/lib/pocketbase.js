import PocketBase from 'pocketbase';

const PB_URL = 'https://ruko.trpl.tech'
const pb = new PocketBase(PB_URL);

export { pb, PB_URL };