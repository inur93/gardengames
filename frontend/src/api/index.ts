
const baseUrl = process.env.NODE_ENV === 'development' ? "http://localhost:4000" : '';

// import './apiMock';
import { Client } from './client';

export default new Client(baseUrl)