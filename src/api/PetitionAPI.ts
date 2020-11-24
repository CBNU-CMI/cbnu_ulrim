/* Internal dependencies */
import { ResponseType } from 'utils/reduxUtils';

// TODO: (@daniel) 실제 서버와의 api연결후 mock데이터는 삭제필요
const mockPetitions = {
  data: {
    petitionList: [
      {
        id: 1,
        title: 'petition1',
        createdAt: '2020-11-21',
      },
      {
        id: 2,
        title: 'petition2',
        createdAt: '2020-11-22',
      },
      {
        id: 3,
        title: 'petition3',
        createdAt: '2020-11-23',
      },
    ],
  },
};

interface Petition {
  id: number;
  title: string;
  createdAt: string;
}

export interface GetPetitionListResponseType {
  petitionList: Petition[];
}

export const getPetitionList: ResponseType<GetPetitionListResponseType> = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockPetitions as any); // NOTE: (@daniel) 임시로 mock데이터를 사용하기 위해 as any를 붙여줌.
    }, 300);
  });
};
