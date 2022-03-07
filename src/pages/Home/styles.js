import styled from "styled-components";

export const HomeContainer = styled.div`
  
  h1 {
    text-align: center;
    margin: 4rem 0;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 1rem;
    row-gap: 4rem;
    padding: 2rem;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }

`;