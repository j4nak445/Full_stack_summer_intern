import React, { useEffect, useState } from 'react';

const Effect = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()).then(data => setComments(data));}, []);

  return (
    <div style={{ padding: '2rem', marginTop: '70px' }}>
      
      <div className="row">
        {comments.slice(0, 500).map(comment => (
          <div className="col-md-4 mb-4" key={comment.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{comment.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{comment.email}</h6>
                <p className="card-text">{comment.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Effect;