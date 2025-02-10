import type { NextApiRequest, NextApiResponse } from 'next'
import { buffer } from 'micro'
import Stripe from 'stripe'
import Cors from 'micro-cors';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export const config = {
  api: {
    bodyParser: false,
  },
}

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
});

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const buf = await buffer(req)
    const sig = req.headers['stripe-signature']!

    try {
      const event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret)

      console.log('✅ Success:', event.id)

      if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session

        console.log(`Payment was successful for session ID: ${session.id}`)
        alert("thank you for the payment")
        res.json({ received: true })
      } else {
        console.log(`Unhandled event type: ${event.type}`)
        res.json({ received: true })
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(`❌ Error message: ${err.message}`)
        res.status(400).send(`Webhook Error: ${err.message}`)
      } else {
        console.log('❌ Unknown error')
        res.status(400).send('Webhook Error: Unknown error occurred')
      }
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export default cors(webhookHandler as any);