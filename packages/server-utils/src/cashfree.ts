export const createOrder = async ({order_amount,customer_id,customer_email,customer_name}:any) => {
    
    try {
      const response = await fetch('/api/payments/createOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order_amount: order_amount,
          customer_id: customer_id,
          customer_email: customer_email,
          customer_name: customer_name
        }),
      });
      console.log('Response:', response);
  
      const data = await response.json();
      if (data.success) {
        console.log('Order created:', data.data);
        return { success: data.success, data: data.data };
      } else {
        console.log('Error creating order:', data.error);
        return { error: data.error}
      }
    } catch (error) {
      console.log('Unexpected Error:', error);
        return { error: 'Unexpected Error'}
    }
  };