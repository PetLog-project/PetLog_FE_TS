import styled from "styled-components";

export const BackBtn = styled.div`
  gap: 12px;
  padding: 20px 32px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.heading_M};
  font-weight: ${({ theme }) => theme.font.weightSemiBold};
`;
