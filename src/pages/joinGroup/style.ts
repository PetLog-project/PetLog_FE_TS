import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const CodeSection = styled.section`
  width: 8vw 3vw;
  gap: 15vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.body_L};
  font-weight: ${({ theme }) => theme.font.weightRegular};
`;

export const InputBox = styled.div`
  gap: 3vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  padding: 2vw;
  width: 60vw;
  height: 16vw;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 10px;
  outline: none;

  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.heading_XL};
  font-weight: ${({ theme }) => theme.font.weightRegular};
  letter-spacing: 8px;
  text-align: center;
  text-transform: uppercase;
`;

export const WarningMassage = styled.p`
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.font.body_S};
  font-weight: ${({ theme }) => theme.font.weightBold};
`;
