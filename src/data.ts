export type FileSystemItem = {
  id: string | number;
  name: string;
  isFolder: boolean;
  items: FileSystemItem[];
};
export const data: FileSystemItem = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "data.js",
          isFolder: false,
          items: [],
        },
        {
          id: "4",
          name: "assets",
          isFolder: true,
          items: [
            {
              id: "6",
              name: "react.svg",
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
    {
      id: "5",
      name: "index.html",
      isFolder: false,
      items: [],
    },
  ],
};
