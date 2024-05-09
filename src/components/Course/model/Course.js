import { UUIDV4, DataTypes } from "sequelize";
import sequelizeInstance from "../../../database/database.js";

const Course = sequelizeInstance.define(
  "courses",
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
    maxPunctuation: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    levels: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    correctAnswerPoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    incorrectAnswerPoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelizeInstance,
    underscored: true,
    paranoid: true,
  },
);

Course.addHook("beforeCreate", (course) => {
  course.id = UUIDV4();
});

Course.associate = (models) => {
  Course.hasMany(models["User-Course"], { foreignKey: "courseId" });
  Course.hasMany(models["Question"], { foreignKey: "courseId" });
};

export default Course;
