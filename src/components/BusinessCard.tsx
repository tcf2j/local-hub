const BusinessCard = ({ business }) => {
  return (
    <div className="business-card">
      <h3>{business.name}</h3>
    </div>
  );
};

export default BusinessCard;
