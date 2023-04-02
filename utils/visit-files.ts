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
  root: Directory | File,
  filterFn: (file: File) => boolean
): File[] => {
  const fileList = [];

  const getFilesFromDirectory = (item: Directory | File) => {
    if (item.type === 'file') {
      fileList.push(item);
    } else {
      item.children.forEach((child) => {
        getFilesFromDirectory(child);
      });
    }
  };
  getFilesFromDirectory(root);

  return fileList.filter(filterFn);
};

// Use example
const filteredFiles = visitFiles(
  {
    type: 'directory',
    name: 'C',
    children: [
      {
        type: 'directory',
        name: 'GAMES',
        children: [
          { type: 'file', name: 'sc2' },
          { type: 'file', name: 'cs2' },
          { type: 'file', name: 'valorant' },
        ],
      },
      { type: 'file', name: 'test.txt' },
      { type: 'file', name: 'js' },
    ],
  },
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
