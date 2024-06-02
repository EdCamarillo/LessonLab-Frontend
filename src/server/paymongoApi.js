import axios from 'axios';

const generateReferenceNumber = () => {
    const timestamp = Date.now();
    return timestamp.toString();
};

const createCheckoutSession = (item) => {

    const options = {
        method: 'POST',
        url: 'https://api.paymongo.com/v1/checkout_sessions',
        headers: {
            accept: 'application/json',
            'Content-type': 'application/json',
            authorization: `Basic ${process.env.REACT_APP_PM_API_KEY}` //encoded key
        },
        data: {
            data: {
                attributes: {
                    line_items: [
                        {
                            amount: item.amount,
                            currency: item.currency,
                            description: item.description,
                            name: item.name,
                            quantity: 1
                        }
                    ],

                    //NOTE: USE THIS IF WE MAKE OUR OWN BILLING INFO PAGE
                    // billing: {
                    //     address: {
                    //       line1: 'Ramona',
                    //       line2: 'Kimba',
                    //       city: 'Talisay City',
                    //       state: 'Cebu',
                    //       postal_code: '6045',
                    //       country: 'PH'
                    //     },
                    //     name: 'John Doe',
                    //     email: 'john@email.com',
                    //     phone: '09123456789'
                    // },

                    //TODO: CONFIRM OTHER PAYMENT METHODS THAT IS GOING TO BE ADDED
                    payment_method_types: ['gcash'],

                    //TODO: MAKE REFERENCE NUMBER GENERATOR (maybe timestamp-based)
                    reference_number: generateReferenceNumber(),
                    send_email_receipt: true,
                    show_description: true,
                    show_line_items: true,
                    //TODO: MAKE REAL SUCCESS AND CANCEL URL
                    // success_url: 'https://cdn-attachments.timesofmalta.com/02c58df7f6f1f76f66f4067cd24a572e06cb5ec9-1624095247-17558216-1200x630.jpg',
                    success_url: 'http://localhost:3000/',
                    //TODO: HANDLE EXPIRE SESSION WHEN CANCEL
                    cancel_url: `http://localhost:3000/cancel_payment`,

                    //TODO: MAKE CHECKOUT DESCRIPTION
                    description: 'checkout description'
                }
            }
        }
    };

    return axios.request(options);
}

const expireSession = (checkout_session_Id) => {
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          authorization: `Basic ${process.env.REACT_APP_PM_API_KEY}`
        }
      };
      
      fetch('https://api.paymongo.com/v1/checkout_sessions/checkout_session_Id', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return axios.request(options);
}

const getSession = (checkout_session_Id) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          authorization: `Basic ${process.env.REACT_APP_PM_API_KEY}`
        }
      };
      
      fetch('https://api.paymongo.com/v1/checkout_sessions/checkout_session_id', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return axios.request(options);
}

export {createCheckoutSession, expireSession, getSession};