const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Comments extends Model {}

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    date_posted: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "post",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Comments;
