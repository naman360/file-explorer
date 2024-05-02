export type FileSystemItem = {
  id: string;
  name: string;
  isFolder: boolean;
  items?: FileSystemItem[];
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
          id: "2",
          name: "data.js",
          isFolder: false,
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
            },
          ],
        },
      ],
    },
    {
      id: "5",
      name: "index.html",
      isFolder: false,
    },
  ],
};
