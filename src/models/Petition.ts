/* External dependencies */
import Immutable from 'immutable';

export interface PetitionAttr {
  id: number;
  title: string;
  category: string;
  content?: string;
  dueDate: Date;
  agreeCount: number;
}

const PetitionRecord = Immutable.Record<PetitionAttr>({
  id: 0,
  title: '',
  category: '',
  dueDate: new Date(),
  agreeCount: 0,
});

class Petition extends PetitionRecord {
  constructor(args: any = {}) {
    super(args);
  }
}

export default Petition;
