import React from 'react';

const Cards = () => {
  return (
    <div className="container my-4">
      <div className="row g-4">
        {[...Array(3)].map((_, idx) => (
          <div className="col-md-4 d-flex" key={idx}>
            <div className="card h-100 w-100">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;