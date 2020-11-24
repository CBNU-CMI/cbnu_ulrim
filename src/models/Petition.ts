/* External dependencies */
import Immutable from 'immutable';

interface PetitionAttr {
  id: number;
  title: string;
  createdAt: string;
}

const PetitionRecord = Immutable.Record<PetitionAttr>({
  id: 0,
  title: '',
  createdAt: '',
});

class Petition extends PetitionRecord {
  constructor(args: any = {}) {
    super(args);
  }
}

export default Petition;
