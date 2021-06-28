import styled from "styled-components"

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #0d0c1d;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  height: 100vh;
  width: 100%;
  text-align: left;
  /* padding: 2rem; */
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  li {
    animation-duration: 3s;
    animation-name: slidein;
    opacity: 1;
    padding: 2rem;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      /* border-bottom: 2px solid; */
      color: #343078;
    }
  }
  ul {
    list-style-type: none;
    padding: 1rem;
  }
`
