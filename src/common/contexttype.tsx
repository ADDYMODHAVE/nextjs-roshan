export type contexttype = {
  AddImage: any;
  AddVideo: any;
  AvilableVideo: [
    {
      id: string;
      link: string;
      title: string;
    }
  ];
  AvilableImage: [
    {
      category: string;
      id: string;
      link: string;
      title: string;
    }
  ];
  OrderDetails: any[];
  DeleteVideo: any;
  DeleteImage: any;
  AddOrder: any;
  DeleteOrder: any;
};
