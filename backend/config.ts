import dotenv from 'dotenv'

dotenv.config()

export const PORT = parseInt(process.env.PORT!) || 3000;

export const DATABASE_URL = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost/${process.env.POSTGRES_DB}`;

export const SESSION_MAX_AGE = parseInt(process.env.SESSION_MAX_AGE!) || 60 * 60 * 24 * 30;

export const SESSION_SECRET =
  process.env.SESSION_SECRET ||
  require('crypto')
    .randomBytes(32)
    .toString('base64')
    .replace(/[^a-zA-Z0-9]+/g, '');
