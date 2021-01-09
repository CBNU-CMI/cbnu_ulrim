/* External dependencies */
import React from 'react';

/* Internal dependencies */
import Button, { ButtonSize } from 'elements/Button';
import {
  CategorySelect,
  ContentsTextArea,
  SubmitDiv,
  FilesDiv,
  PetitionWriteDiv,
  TitleInput,
} from './PetitionWrite.styled';

function PetitionWrite() {
  return (
    <PetitionWriteDiv>
      <TitleInput placeholder="청원제목을 입력하세요" />
      <CategorySelect>
        <option value="">수업</option>
        <option value="">학생회</option>
        <option value="">기숙사</option>
        <option value="">교칙</option>
        <option value="">행사</option>
      </CategorySelect>
      <ContentsTextArea
        rows={20}
        placeholder="청원내용을 입력하세요"
      ></ContentsTextArea>
      <FilesDiv>
        <h2>이미지 선택</h2>
        <input type="file" accept="image/*" />
        <input type="file" accept="image/*" />
        <input type="file" accept="image/*" />
      </FilesDiv>
      <SubmitDiv>
        <Button text="제출" marginTop={2} buttonSize={ButtonSize.LG} />
      </SubmitDiv>
    </PetitionWriteDiv>
  );
}

export default PetitionWrite;
