import {NameSpace} from '../root-reducer';

export const getActiveCity = (state) => state[NameSpace.MAIN].activeCity;
export const getDataLoadedStatus = (state) => state[NameSpace.MAIN].isDataLoaded;
export const getSortType = (state) => state[NameSpace.MAIN].sortType;
export const getServerStatus = (state) => state[NameSpace.MAIN].isServerStatus;

