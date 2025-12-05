import styled from "styled-components";

export const Main = styled.main`
  padding: 0 5vw 5vw 5vw;
  gap: 4vh;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  position: relative;
`;

export const AddSection = styled.section`
  padding-top: 2vh;
  margin-top: 8vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HelperText = styled.p`
  margin-bottom: 4vh;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.body_L};
  font-weight: ${({ theme }) => theme.font.weightBold};
`;

export const ImgDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
