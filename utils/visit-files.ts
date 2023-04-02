type File = {
  type: 'file';
  name: string;
};

type Directory = {
  type: 'directory';
  name: string;
  children: (File | Directory)[];
};

/**
 * Traverse files & directories.
 *
 * Return a list of every files filtered by given function.
 */
export const visitFiles = (
  root: unknown, // TODO
  filterFn: unknown // TODO
): unknown[] => {
  // TODO
};

// Use example
const filteredFiles = visitFiles(
  null, // TODO use a concrete root example
  (file) => {
    const name = file.name;

    for (let i = 0; i < Math.floor(name.length) / 2; i++) {
      if (name[i] != name[name.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
);
