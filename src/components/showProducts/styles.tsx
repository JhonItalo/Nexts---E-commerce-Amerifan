import styled from "styled-components";

export const Conteiner = styled.section`
     background-image: url("/assets/background/SPbackground.webp");
     width: 90%;
     height: 435px;
     margin: 0 auto;
     padding: 1rem;
     display: flex;
     flex-direction: column;
     gap: 1rem;
     border-radius: 10px;
     background-color: white;
     margin-bottom: 3rem;
     position: relative;
     h2 {
          font-size: 2rem;
          color: white;
     }

     @media (max-width: 1920px) and (min-width: 1441px) {
          max-width: 1600px;
          height: 500px;
          padding: 1rem 2rem;
     }
`;
export const ConteinerSlide = styled.div`
     width: 100%;
     height: 350px;
     position: relative;

     .btn_slide {
          background-color: white;
          padding: 0.2rem;
          border-radius: 50%;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          border: 1px solid grey;
          color: #0f31c9;
          P {
               font-size: 0.5rem;
               position: absolute;
               opacity: 0;
          }
          &:hover {
               border: 1px solid red;
          }
     }
     .next {
          right: 2%;
     }
     .previous {
          left: 2%;
     }
     @media (max-width: 1920px) and (min-width: 1441px) {
          height: 430px;
     }
`;

export const Slide = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
     gap: 3%;
     overflow-x: hidden;
     scroll-behavior: smooth;

     @media (max-width: 1920px) and (min-width: 1441px) {
          gap: 60px;
     }
`;
