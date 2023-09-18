import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
  return (
      <div className="App">

        <Box>

        </Box>

      </div>
  );
}

export default App;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  height: 100vh;
  gap: 35px;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
