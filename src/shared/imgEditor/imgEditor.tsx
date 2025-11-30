import React, { useEffect, useRef, useState } from "react";
import * as s from "./style";
import { GetIcon } from "../getIcon/getIcon";
import type { ImgType } from "@/features/diary/add/store/addStore";
import { useAddImgs } from "@/features/diary/add/store/imgStore";

export function ImgEditor({
  currentPage,
  existingUrls,
}: {
  currentPage: string;
  existingUrls?: string[];
}) {
  const { imgs, isInit, setImgs, setIsInit, deleteImg } = useAddImgs();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const imgNum = imgs.length;

  useEffect(() => {
    if (currentPage == "edit" && existingUrls && isInit == false) {
      initEditImages(existingUrls, setImgs, setIsInit);
    }
  }, [currentPage, existingUrls, isInit, setImgs, setIsInit]);

  return (
    <>
      <s.AddImgBox>
        {imgs
          .filter((img) => !img.isDeleted)
          .map((img) => (
            <s.ImgBox key={img.id}>
              <s.DeleteBtn
                name="DeleteBtn"
                width={24}
                stroke="#1E1E1E"
                onClick={() => {
                  deleteImg(img.id);
                }}
              />
              <s.Img src={img.previewUrl} alt="" />
            </s.ImgBox>
          ))}
        <div>
          <s.InputFile
            type="file"
            ref={inputRef}
            onChange={(e) => {
              handleAddFile(e, setImgs);
            }}
          />
          {imgNum < 6 && (
            <s.EmptyImg
              onClick={() => {
                inputRef.current?.click();
              }}
            >
              <GetIcon name="AddPicture" width={36} />
            </s.EmptyImg>
          )}
        </div>
      </s.AddImgBox>
    </>
  );
}

function handleAddFile(
  e: React.ChangeEvent<HTMLInputElement>,
  setImgs: (img: ImgType) => void,
) {
  const fileList = e.target.files;

  if (!fileList) {
    return;
  }

  const newFiles = Array.from(fileList);
  newFiles.forEach((file, idx) =>
    setImgs({
      id: `new-${Date.now()}-${idx}`,
      file,
      previewUrl: URL.createObjectURL(file),
      status: "new",
    }),
  );
}

function initEditImages(
  existingUrls: string[],
  setImgs: (img: ImgType) => void,
  setIsInit: (bool: boolean) => void,
) {
  existingUrls.forEach((url, idx) =>
    setImgs({
      id: `existing-${idx}`,
      previewUrl: url,
      status: "existing",
      s3Url: url,
    }),
  );
  setIsInit(true);
}
