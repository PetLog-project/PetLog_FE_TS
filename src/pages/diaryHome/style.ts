import styled from "styled-components";

export const Main = styled.main`
  padding-bottom: 4vh;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Diarysection = styled.section`
  margin-top: 6vh;
  gap: 2vh;
  padding: 5vw;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const EmptyTextDiv = styled.div`
  padding-top: 80%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.heading_M};
  font-weight: ${({ theme }) => theme.font.weightSemiBold};
`;

export const DiariesByDate = styled.section`
  margin-bottom: 2vh;
`;

export const Date = styled.p`
  margin-bottom: 2vh;
  color: ${({ theme }) => theme.color.gray_4};
  font-size: ${({ theme }) => theme.font.heading_M};
  font-weight: ${({ theme }) => theme.font.weightSemiBold};
`;

export const ThumbnailBox = styled.div`
  gap: 5vw;
  width: 83vw;
  display: flex;
  flex-wrap: wrap;
`;

export const Thumbnail = styled.div`
  width: 39vw;
  height: 39vw;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
`;

export const Title = styled.p`
  position: absolute;
  top: 2vh;
  left: 4vw;
  z-index: 2;

  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.body_L};
  font-weight: ${({ theme }) => theme.font.weightBold};
`;

export const ImgBox = styled.div`
  width: 39vw;
  height: 39vw;
  border-radius: 20px;
  position: relative;

  div {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    position: absolute;
    background-color: ${({ theme }) => theme.color.black_dimmed};
  }
`;

export const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  position: absolute;
  top: 0;
`;

export const DefaultImg = styled.div`
  width: 39vw;
  height: 39vw;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.gray_5};
`;

export const PlusBtn = styled.div`
  width: 17vw;
  height: 17vw;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 24px;
  right: 24px;
  transform: rotate(45deg);
  background-color: ${({ theme }) => theme.color.yellow};
  z-index: 3;
  cursor: pointer;
`;

export const EmptyDiary = styled.div`
  margin-top: 50%;
  gap: 5vw;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.color.gray_4};
  font-size: ${({ theme }) => theme.font.heading_L};
  font-weight: ${({ theme }) => theme.font.weightSemiBold};
`;
