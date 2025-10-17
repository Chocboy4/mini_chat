import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const Chat = sequelize.define(
  "chat",
  {
    chat_uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    sender_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    receiver_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
  },
  {
    timestamps: true,
  }
);
