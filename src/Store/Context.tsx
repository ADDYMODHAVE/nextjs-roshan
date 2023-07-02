import React from "react";
import axios from "axios";
import { httpapi } from "@/common/Http-api";

export const Context = React.createContext({});

export const ContextProvider = (props: any) => {
  const [AvilableVideo, AddVideoUpdate] = React.useState<any>([]);
  const [AvilableImage, AddImageUpdate] = React.useState<any>([]);
  const [OrderDetails, UpdateOrders] = React.useState<any>([]);

  const GetAllImage = async () => {
    const res = await axios.get(`${httpapi.httpurl.photogallery}.json`);
    let Imagedata = [];
    for (let key in res.data) {
      Imagedata.push(res.data[key]);
    }
    AddImageUpdate(Imagedata);
  };
  const GetAllVideo = async () => {
    const res = await axios.get(`${httpapi.httpurl.videogallery}.json`);
    let Videodata = [];
    for (let key in res.data) {
      Videodata.push(res.data[key]);
    }
    AddVideoUpdate(Videodata);
  };

  const GetAllOrders = async () => {
    const res = await axios.get(`${httpapi.httpurl.Orderdetails}.json`);
    let Orderdata = [];
    for (let key in res.data) {
      Orderdata.push(res.data[key]);
    }
    UpdateOrders(Orderdata);
  };

  const AddImage = async (data: any) => {
    const res = await axios.post(`${httpapi.httpurl.photogallery}.json`, data);
    const id = res.data.name;
    const Addid = {
      id,
    };
    await axios.patch(`${httpapi.httpurl.photogallery}/${id}.json`, Addid);
    GetAllImage();
  };
  const AddVideo = async (data: any) => {
    const res = await axios.post(`${httpapi.httpurl.videogallery}.json`, data);
    const id = res.data.name;
    const Addid = {
      id,
    };
    await axios.patch(`${httpapi.httpurl.videogallery}/${id}.json`, Addid);
    GetAllVideo();
  };
  const DeleteVideo = async (id: string) => {
    await axios.delete(`${httpapi.httpurl.videogallery}/${id}.json`);
    GetAllVideo();
  };
  const DeleteImage = async (id: string) => {
    await axios.delete(`${httpapi.httpurl.photogallery}/${id}.json`);
    GetAllImage();
  };

  const AddOrder = async (data: any) => {
    const res = await axios.post(`${httpapi.httpurl.Orderdetails}.json`, data);
    const id = res.data.name;
    const Addid = {
      id,
    };
    await axios.patch(`${httpapi.httpurl.Orderdetails}/${id}.json`, Addid);
    GetAllOrders();
  };
  const DeleteOrder = async (id: string) => {
    await axios.delete(`${httpapi.httpurl.Orderdetails}/${id}.json`);
    GetAllOrders();
  };

  const deafultValue = {
    AvilableVideo,
    AvilableImage,
    OrderDetails,
    AddImage,
    AddVideo,
    DeleteVideo,
    DeleteImage,
    AddOrder,
    DeleteOrder,
  };
  React.useEffect(() => {
    GetAllImage();
    GetAllVideo();
    GetAllOrders();
  }, []);

  return (
    <Context.Provider value={deafultValue}>{props.children}</Context.Provider>
  );
};
