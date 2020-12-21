/* Internal dependencies */
import { ResponseType } from 'utils/reduxUtils';

const mockPetitionList = {
  data: [
    {
      id: 1,
      title: '1',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 2,
      title: '2',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 3,
      title: '3',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 4,
      title: '4',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 5,
      title: '5',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 6,
      title: '6',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 7,
      title: '7',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 8,
      title: '8',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 9,
      title: '9',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 10,
      title: '10',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 11,
      title: '11',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 12,
      title: '12',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 13,
      title: '13',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 14,
      title: '14',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 15,
      title: '15',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 16,
      title: '16',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 17,
      title: '17',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 18,
      title: '18',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 19,
      title: '19',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 20,
      title: '20',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 21,
      title: '21',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 22,
      title: '22',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 23,
      title: '23',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 24,
      title: '24',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 25,
      title: '25',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 26,
      title: '26',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 27,
      title: '27',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 28,
      title: '28',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 29,
      title: '29',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
    {
      id: 30,
      title: '30',
      author: '기진',
      category: '기숙사',
      start_date: '2020-08-08',
      dueDate: '2020-08-08',
      agreeCount: 1,
    },
  ],
};

export interface GetPetitionListResponseType {
  id: number;
  userId: number;
  title: string;
  category: string;
  content?: string;
  dueDate: Date;
}

export const getPetitionList: ResponseType<GetPetitionListResponseType> = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockPetitionList as any);
    }, 300);
  });
};
