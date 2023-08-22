.container {
  width: 70%;
  margin: auto;
  text-align: center;
  position: relative; /* Add relative positioning to the container */
}

.dice {
  text-align: center;
  display: inline-block;
  position: relative;
}

.B1 {
  background-color: #393E46;
  padding: 0%;
}

.B2 {
  background-color: #393E46;
  padding: 0%;
}

body {
  background-color: #393E46;
}

h1 {
  margin: 30px;
  font-family: 'Lobster', cursive;
  text-shadow: 5px 0 #232931;
  font-size: 8rem;
  color: #4ECCA3;
}

p {
  font-size: 2rem;
  color: #4ECCA3;
  font-family: 'Indie Flower', cursive;
}

img {
  width: 80%;
}

.restart-button {
  display: none;
  background-color: #393E46;
  color: #FFFFFF;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  transition: background-color 0.3s ease;
}

.restart-button:hover {
  background-color: #4ECCA3;
}

/* Add media queries for responsive design */
@media screen and (max-width: 768px) {
  .container {
    width: 90%;
  }

  .dice {
    display: block;
    margin: 20px auto;
  }

  img {
    width: 100%;
  }

  /* Adjust the restart button position for smaller screens */
  .restart-button {
    bottom: -60px; /* Increase the bottom value to adjust the position */
  }
}
