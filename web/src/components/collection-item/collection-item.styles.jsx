import styled from "@emotion/styled";

export const Container = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  .custom-button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    .custom-button {
      opacity: 0.85;
      display: flex;
    }

    .image {
      opacity: 0.85;
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;
