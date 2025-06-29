.event-categories {
    text-align: center;
    margin-top: 40px;
  }
  
  .categories-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
  }
  
  .category-card {
    background: white;
    padding: 20px;
    border-radius: 12px;
    width: 280px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .category-card:hover {
    transform: scale(1.05);
    background-color: #ff9800;
    color: white;
  }
  
  .category-card h3 {
    font-size: 22px;
    margin-bottom: 10px;
  }
  
  .category-card p {
    font-size: 16px;
  }