import { UUIDV4, DataTypes } from "sequelize";
import sequelizeInstance from "../../../database/database.js";

const Subject = sequelizeInstance.define(
  "subjects",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    imageUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelizeInstance,
    underscored: true,
    paranoid: true,
  },
);

Subject.addHook("beforeCreate", (subject) => {
  subject.id = UUIDV4();
});

Subject.associate = (models) => {
  Subject.hasMany(models["Course"], { foreignKey: "subjectId" });
};

export default Subject;
