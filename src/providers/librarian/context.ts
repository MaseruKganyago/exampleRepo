import { createContext } from 'react';

export interface ILibrarian {
  name: string;
  surname: string;
  librarianNumber: string;
}

export interface IStateContext {
  librarian?: ILibrarian;
  librarianId?: string;
  librarianList?: ILibrarian[];
  displayMode?: boolean;
  isInProgress?: any;
  error?: any;
}

export interface IActionContext {
  createLibrarian: (librarian: ILibrarian) => void;
  fetchLibrariansList: () => void;
  fetchLibrarian: (librarianId: string) => void;
  toggleDisplayMode: (mode: boolean) => void;
}

export const LIBRARIAN_CONTEXT_INITIAL_STATE: IStateContext = {};

export const LibrarianStateContext = createContext<IStateContext>(LIBRARIAN_CONTEXT_INITIAL_STATE);

export const LibrarianActionContext = createContext<IActionContext>({} as any);
