import styled from "styled-components";

export const Main = styled.main`
  gap: 5vw;
  padding: 5vw 8vw;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.heading_M};
  font-weight: ${({ theme }) => theme.font.weightSemiBold};
`;

export const ChoiceSection = styled.section`
  gap: 10vw;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Choice = styled.div`
  padding: 5vw;
  width: 100%;
  height: 10vh;
  border: 1px solid ${({ theme }) => theme.color.gray_4};
  border-radius: 20px;
  display: flex;
  justify-content: space-between;

  cursor: pointer;
`;

export const TextSection = styled.div`
  gap: 2vw;
  display: flex;
  flex-direction: column;
`;

export const ChoiceTitle = styled.div`
  gap: 3vw;
  display: flex;

  p {
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.font.body_L};
    font-weight: ${({ theme }) => theme.font.weightRegular};
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.description};
  font-weight: ${({ theme }) => theme.font.weightSemiBold};
`;
