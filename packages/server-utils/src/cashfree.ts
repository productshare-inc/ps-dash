export const createOrder = async () => {
    
    try {
      const response = await fetch('api/payment/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order_amount: 30,
          customer_details: {
            customer_id: 'USER123',
            customer_name: 'joe',
            customer_email: 'joe.s@cashfree.com',
            customer_phone: '+919876543210',
          },
          order_meta: {
            return_url: 'https://dev.boilerplate.bsamaritan.com',
          },
        }),
      });
      console.log('Response:', response);
  
      const data = await response.json();
      if (data.success) {
        console.log('Order created:', data.data);
      } else {
        console.log('Error creating order:', data.error);
      }
    } catch (error) {
      console.log('Unexpected Error:', error);
    }
  };