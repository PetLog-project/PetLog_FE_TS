import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Ul = styled.ul`
  margin-top: 6vh;
  padding: 5vw 8vw 0 8vw;
  gap: 3vw;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Li = styled.li`
  width: 100%;
  height: 12vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.heading_M};
  font-weight: ${({ theme }) => theme.font.weightSemiBold};

  cursor: pointer;
`;

export const Toggle = styled.div<{ $toggle: boolean }>`
  padding: 0 1vw;
  width: 17vw;
  height: 7vw;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: ${({ $toggle }) => ($toggle ? "end" : "start")};
  background-color: ${({ theme, $toggle }) =>
    $toggle ? theme.color.yellow : theme.color.gray_3};
`;

export const ToggleBtn = styled.div`
  width: 5vw;
  height: 5vw;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.white};
  cursor: pointer;
`;

export const WithdrawBox = styled.p`
  padding: 0 8vw;
  margin-top: 8vh;
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.font.heading_M};
  font-weight: ${({ theme }) => theme.font.weightSemiBold};

  cursor: pointer;
`;
