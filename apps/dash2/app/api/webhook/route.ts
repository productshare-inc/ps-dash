import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { cookies } from 'next/headers';
import { createClient } from '../../../utils/supabase/server';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

export async function GET(request: Request) {
  
  const { searchParams } = new URL(request.url);
  const session_id = searchParams.get('session_id');
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // Get the authenticated user's session
  const { data: { session } } = await supabase.auth.getSession();

  // Get the user ID from the session
  const userId = session?.user?.id;

  if (!userId) {
    return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
  }

  if (!session_id) {
    return NextResponse.json({ error: 'Missing session_id' }, { status: 400 });
  }



  if (!session_id) {
    return NextResponse.json({ error: 'Missing session_id' }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);

    console.log("here's your session", session);

    console.log("here's your session_id", session_id);

    if (session.payment_status === 'paid') {
      const { data, error } = await supabase
        .from('profiles')
        .update({ has_paid: true })
        .eq('id', userId);

      if (error) {
        console.error('Error updating profile:', error);
        return NextResponse.json({ error: 'Failed to update user profile' }, { status: 500 });
      }

      return NextResponse.redirect(new URL('/docs', request.url));
    } else {
      // Commenting this for the stripe check 
      // return NextResponse.json({ error: 'Payment not successful' }, { status: 400 });
    
      console.error('Payment not successful for session_id:', session_id);   

    }
  } catch (error) {
    console.error('Error processing webhook:', error);
    // return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}