import { GetIcon } from "@/shared/getIcon/getIcon";
import styled from "styled-components";

export const AddImgBox = styled.div`
  width: 83vw;
  display: flex;
  justify-content: center;
`;

export const SortDiv = styled.div`
  gap: 5vw;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const EmptyImg = styled.div`
  width: 39vw;
  height: 39vw;
  border: 5px dotted ${({ theme }) => theme.color.gray_4};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const InputFile = styled.input`
  display: none;
`;

export const ImgBox = styled.div`
  width: 39vw;
  height: 39vw;
  border-radius: 30px;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 30px;
`;

export const DeleteBtn = styled(GetIcon)`
  position: absolute;
  top: 2vh;
  right: 2vh;
  cursor: pointer;
`;
