import { UUIDV4, DataTypes } from "sequelize";
import sequelizeInstance from "../../../database/database.js";

const Question = sequelizeInstance.define(
  "questions",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    statement: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answers: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    level: {
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

Question.addHook("beforeCreate", (question) => {
  question.id = UUIDV4();
});

Question.associate = (models) => {
  Question.belongsTo(models["Course"], { foreignKey: "courseId" });
};

export default Question;
