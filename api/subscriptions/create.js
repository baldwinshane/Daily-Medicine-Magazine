// This version is compatible with Vercel or Netlify serverless functions

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Set this in your environment variables

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { priceId } = req.body;

  if (!priceId) {
    return res.status(400).json({ error: 'Missing priceId in request body' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.BASE_URL}/subscribe/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/subscribe/cancel.html`,
    });

    return res.status(200).json({ sessionUrl: session.url });
  } catch (err) {
    console.error('Stripe Error:', err.message);
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
};
