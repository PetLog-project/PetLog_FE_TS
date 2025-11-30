import { useState } from "react";
import { BackButton } from "@/shared/backBtn/BackButton";
import { Button } from "@/shared/button/button";
import { useAddDiary, type ImgType } from "../../store/addStore";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ImgEditor } from "@/shared/imgEditor/imgEditor";
import * as s from "./style";

import { useDiaryDetail } from "@/features/diary/detail/store/diaryDetailstore";

export function AddPicture() {
  const { diaryDetail } = useDiaryDetail();
  const nav = useNavigate();
  const param = useLocation().pathname.split("/")[1];
  return (
    <s.Main>
      <BackButton
        onClick={() => {
          nav(-1);
        }}
      >
        {""}
      </BackButton>
      <section>
        <s.HelperText>성장 일기에 사용할 사진을 추가해 주세요</s.HelperText>
        <ImgEditor
          currentPage={param == "adddiary" ? "add" : "edit"}
          existingUrls={param == "adddiary" ? [] : diaryDetail.images}
        />
        <s.BtnBox>
          <Button
            onClick={() => {
              nav(
                param == "editdiary"
                  ? "/editdiary/content"
                  : "/adddiary/content",
              );
            }}
          >
            다음
          </Button>
        </s.BtnBox>
      </section>
    </s.Main>
  );
}
