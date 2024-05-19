import { UUIDV4, DataTypes } from "sequelize";
import sequelizeInstance from "../../../database/database.js";

const UserCourse = sequelizeInstance.define(
  "userCourses",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    courseName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    userScore: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelizeInstance,
    underscored: true,
    paranoid: false,
  },
);

UserCourse.addHook("beforeCreate", (userCourse) => {
  userCourse.id = UUIDV4();
});

UserCourse.associate = (models) => {
  UserCourse.belongsTo(models["User"], { foreignKey: "userId" });
  UserCourse.belongsTo(models["Course"], { foreignKey: "courseId" });
};

export default UserCourse;
