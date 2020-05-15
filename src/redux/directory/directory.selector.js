import { createSelector } from "reselect";

const selectDirectory=state=>state.directory

export const directorySelectorSections=createSelector(
    [selectDirectory],
    directory=>directory.sections
)
