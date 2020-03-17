import { createSelector } from 'reselect'

const selectDirectory = state => state.directory

export const seleDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
)