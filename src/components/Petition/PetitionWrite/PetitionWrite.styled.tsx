/* External dependencies */
import styled from 'styled-components';

export const PetitionWriteDiv = styled.div`
  display: flex;
  flex-direction: column;

  input,
  select,
  textarea {
    margin: 10px 0;
    color: rgb(33, 37, 41);
  }
`;

export const TitleInput = styled.input`
  font-size: 2.8rem;
  outline: none;
  border: none;
  font-weight: bold;
`;

export const CategorySelect = styled.select`
  width: 10rem;
  padding: 5px 2px;
  outline: none;
  border: none;
  box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.12);
  border: 0.0625rem solid transparent;
  border-radius: 10px;
  font-size: 1rem;
  color: rgb(43, 44, 46);
`;

export const ContentsTextArea = styled.textarea`
  outline: none;
  border: none;
  font-size: 1.2rem;
  overflow: hidden;
  box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.12);
  border: 0.0625rem solid transparent;
  border-radius: 10px;
  background-color: rgb(254, 254, 254);
  padding: 10px 5px;
`;

export const FilesDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubmitDiv = styled.div`
  display: flex;
  justify-content: center;
`;
