import { Task } from './types';
import deployBorrowTask from './deployBorrowTask';
import deployPledgeTask from './deployPledgeTask';
import mintTask from './mintTask';

export const tasks: Task[] = [
 deployBorrowTask,
 deployPledgeTask,
 mintTask
]