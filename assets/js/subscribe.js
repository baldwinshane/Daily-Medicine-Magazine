async function subscribeTier(tier) {
  // Map tier selection to Stripe product pricing keys
  const pricingKeys = {
    digital: 'price_123abc456def',  // replace with your real Stripe price IDs
    print: 'price_789ghi012jkl',
    patron: 'price_345mno678pqr'
  };

  const priceId = pricingKeys[tier];
  if (!priceId) {
    alert('Invalid tier selected.');
    return;
  }

  try {
    const response = await fetch('/api/subscriptions/create.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ priceId })
    });

    const { sessionUrl } = await response.json();
    if (sessionUrl) {
      window.location.href = sessionUrl;
    } else {
      alert('Failed to start checkout session.');
    }
  } catch (err) {
    console.error(err);
    alert('Something went wrong. Please try again.');
  }
}
