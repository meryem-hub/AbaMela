const HouseCard = ({ house, isRental = false, isPreview = false }) => {
  console.log(house); // Log to check the data

  return (
    <div className="house-card">
      <div className="house-image">
        <img src={house.image} alt={house.title} />
        <span className="price-badge">{house.price}</span>
      </div>
      <div className="house-details">
        <h4>{house.title}</h4>
        <p className="location">{house.location}</p>

        <div className="specs">
          <div className="spec-item">
            <span className="spec-label">Bedrooms:</span>
            <span>{house.bedrooms}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Bathrooms:</span>
            <span>{house.bathrooms}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Area:</span>
            <span>{house.sqft} sqft</span>
          </div>
          {isRental ? (
            <div className="spec-item">
              <span className="spec-label">Available:</span>
              <span>{house.available}</span>
            </div>
          ) : (
            <div className="spec-item">
              <span className="spec-label">Built:</span>
              <span>{house.yearBuilt}</span>
            </div>
          )}
        </div>

        <div className="action-buttons">
          <button className="view-details">View Details</button>
          {!isPreview && (
            <button className={isRental ? "contact-owner" : "contact-agent"}>
              {isRental ? "Contact Owner" : "Contact Agent"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default HouseCard