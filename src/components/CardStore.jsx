import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import ButtonNeon from "./ButtonNeon";
import icons from "../constants/icons";

const { Meta } = Card;

export default function CardStore({ precio, nombre, description, foto }) {
  return (
        <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10 w-[400px] h-[400px] overflow-hidden">
        <img
          src={foto}
          alt="Product"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{nombre}</h2>
        <p>{description}</p>
        <div className="card-actions">
        <ButtonNeon icon={icons.dinero} text={precio} className="bg-black mr-2 text-sm" />
        </div>
      </div>
    </div>
    
    
  );
}
