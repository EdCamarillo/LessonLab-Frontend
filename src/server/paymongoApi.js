import axios from 'axios';

//NOTE: POSSIBLE ITEM PARAMETER FOR OTHER ITEM VARIANTS
const generateReferenceNumber = () => {
    const timestamp = Date.now();
    return timestamp.toString();
};

const createCheckoutSession = (item) => {
    console.log(item);
    const options = {
        method: 'POST',
        url: 'https://api.paymongo.com/v1/checkout_sessions',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Basic c2tfdGVzdF9OR2NkSGNSUEJGN3NvRmFDVE1rdUs1RWU6MTIzNDU2Nzg5MA==' //encoded key
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
                    success_url: 'https://cdn-attachments.timesofmalta.com/02c58df7f6f1f76f66f4067cd24a572e06cb5ec9-1624095247-17558216-1200x630.jpg',
                    cancel_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',

                    //TODO: MAKE CHECKOUT DESCRIPTION
                    description: 'checkout description'
                }
            }
        }
    };

    return axios.request(options);
}

export default createCheckoutSession;