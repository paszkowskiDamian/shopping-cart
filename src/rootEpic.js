import { combineEpics } from 'redux-observable'

import { epic } from './epics/epics'

export const rootEpic = combineEpics(epic())