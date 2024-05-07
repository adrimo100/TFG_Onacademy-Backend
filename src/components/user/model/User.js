import { UUIDV4, DataTypes } from "sequelize";
import sequelizeInstance from "../../../database/database.js";

const User = sequelizeInstance.define(
  "users",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(65),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(65),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelizeInstance,
    underscored: true,
    paranoid: true,
  },
);

User.addHook("beforeCreate", (user) => {
  user.id = UUIDV4();
});

export default User;
