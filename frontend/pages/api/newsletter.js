import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

function getRequestParams(email, firstname, lastname) {
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;

  const DATACENTER = process.env.MAILCHIMP_API_KEY.split('-')[1];

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FNAME: firstname,
      LNAME: lastname,
    },
  };

  // Api key needs to be encoded in base 64 format
  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${base64ApiKey}`,
  };

  return {
    url,
    data,
    headers,
  };
}

export default async (req, res) => {
  const { email, firstname, lastname } = req.body;

  if (!email || !email.length) {
    return res.status(400).json({
      error: 'No olvides completar todos los campos',
    });
  }

  try {
    const { url, data, headers } = getRequestParams(email, firstname, lastname);

    await axios.post(url, data, { headers });

    return res.status(201).json({ error: null });
  } catch (error) {
    return res.status(400).json({
      error: `Algo anda mal, escríbenos a info@unionchurch.cl`,
    });
  }
};
