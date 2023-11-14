

const PriceCard = () => {
  // State to manage the card details
  const [cardDetails, setCardDetails] = useState({
    title: 'Free',
    price: 0,
    features: [
      'Single User',
      '5GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports',
    ],
    buttonText: 'Get Started',
  });

  // Function to update the card details (for demonstration purposes)
  const updateCardDetails = () => {
    setCardDetails({
      title: 'Pro',
      price: 15,
      features: [
        'All Free features',
        '25GB Storage',
        'Unlimited Private Projects',
        'Priority Customer Support',
        'Free Domain',
        'Monthly Status Reports',
      ],
      buttonText: 'Upgrade to Pro',
    });
  };

  return (
    <div className="pricing-card">
      <div className="card-body">
        <h5 className="card-title">{cardDetails.title}</h5>
        <h6 className="card-price">${cardDetails.price}<span className="period">/month</span></h6>
        <hr />
        <ul className="fa-ul">
          {cardDetails.features.map((feature, index) => (
            <li key={index}>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="d-grid">
          <button className="btn btn-primary text-uppercase" onClick={updateCardDetails}>
            {cardDetails.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
