import styled from "styled-components";

export const WrapperContainer = styled.div`
  width: 100%;
`;

export const DashBoardContainer = styled.div`
  height: 90vh;
  width: 100%;
  overflow-y: auto;
  background-color: #282323;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 94vh;
    padding: 10px;
  }
`;

export const LoaderContainer = styled.div`
  height: 90vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282323;
  @media (max-width: 768px) {
    height: 94vh;
  }
`;

export const SubHeading = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  font-family: 'Roboto';
  line-height: 24px;
  padding-top: 20px;
  padding-left: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
    padding-left: 10px;
    padding-top: 10px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  padding-left: 20px;
  width: calc(100% - 40px);

  @media (max-width: 768px) {
    padding-left: 5px;
    width: calc(100% - 10px);
  }
`;

export const LocationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 10px;
  margin-top: 20px;
  padding-left: 20px;
  width: calc(100% - 40px);
  box-sizing: border-box;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    width: calc(100% - 30px);
    padding-left: 15px;
    gap: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    padding-left: 0;
    gap: 10px;
    padding: 5px;
  }
`;

export const Cards = styled.div`
  width: 250px; 
  height: 120px; 
  border: 1px solid gray; 
  background-color: transparent;
  outline: none;
  padding-top: 20px;
  padding-left: 20px;
  flex-shrink: 1;

  @media (max-width: 768px) {
    width: 80px;
    height: 100px;
    padding-top: 10px;
    padding-left: 10px;
  }
`;

export const LocationCards = styled.div`
  width: 350px;
  height: 240px;
  border-radius: 2px;
  border: 1px solid gray;
  margin-top: 17px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); 
  }

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    margin-top: 15px;
    margin-left: 15px;
  }
`;

export const LocationImage = styled.img`
  width: 100%; 
  height: 160px;
  padding-bottom: 7px;
`;

export const CardsTitle = styled.h3`
  font-size: 1rem;
  color: #EFEFEF;
  opacity: 0.6;
  font-weight: 400;
  line-height: 48px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 30px;
  }
`;

export const Count = styled.p`
  font-size: 24px;
  color: #FFF;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const MemberCount = styled.h3`
  font-size: 0.7rem;
  color: #EFEFEF;
  opacity: 0.6;
  font-weight: 400;
  line-height: 28px;
  padding-left: 10px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 24px;
    padding-left: 5px;
  }
`;

export const LocationName = styled.p`
  font-size: 15px;
  color: #FFF;
  line-height: 27px;
  font-weight: 500;
  padding-left: 10px;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 14px;
    padding-left: 5px;
  }
`;

export const PlaceNames = styled.p`
  font-size: 13px;
  padding-left: 10px;
  font-weight: 400;
  color: #e1e1e1;

  @media (max-width: 768px) {
    font-size: 12px;
    padding-left: 5px;
  }
`;
