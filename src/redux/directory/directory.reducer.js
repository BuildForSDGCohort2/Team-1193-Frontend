const INITIAL_STATE = {
  categories: [
    {
      title: "cereals",
      imageUrl: "https://i.imgur.com/PU55yZl.jpg",
      id: 1,
      linkUrl: "store/cereals",
    },
    {
      title: "legumes",
      imageUrl: "https://i.imgur.com/3VOqAdd.jpg",
      id: 2,
      linkUrl: "store/legumes",
    },
    {
      title: "vegetables",
      imageUrl: "https://i.imgur.com/dZJKxf0.jpg",
      id: 3,
      linkUrl: "store/vegetables",
    },
    {
      title: "fruits",
      imageUrl: "https://i.imgur.com/rMGLAfc.jpg",
      size: "large",
      id: 4,
      linkUrl: "store/fruits",
    },
    {
      title: "tubers",
      imageUrl: "https://i.imgur.com/rw9FigJ.jpg",
      id: 5,
      linkUrl: "store/tubers",
    },
    {
      title: "livestock",
      imageUrl: "https://i.imgur.com/ghbRdPn.jpg",
      id: 6,
      linkUrl: "store/livestock",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
