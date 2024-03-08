import React, { useState } from "react";

const List = React.memo(
  ({ id, title, cost, expData, setExpData, keywordState }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedCost, setEditedCost] = useState(cost);
    const listStyle = () => {
      return {
        padding: "20px",
        borderRadius: "4px",
        border: "1px gray solid",
        width: "auto",
        display: "flex",
        position: "relative",
        margin: "20px auto",
      };
    };

    const deleteData = (id) => {
      let newExpData = expData.filter((data) => data.id !== id);
      setExpData(newExpData);
      localStorage.setItem("expData", JSON.stringify(newExpData));
      keywordState("delete");
    };

    const handleEdit = () => {
      setIsEditing(!isEditing);
    };

    const editData = (id) => {
      let updatedExpData = expData.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            title: editedTitle,
            cost: editedCost,
          };
        }
        return data;
      });
      setExpData(updatedExpData);
      localStorage.setItem("expData", JSON.stringify(updatedExpData));
      setIsEditing(false);
      keywordState("modified");
    };

    const handleChange = (e) => {
      if (e.target.name === "editTitleValue") {
        setEditedTitle(e.target.value);
      } else if (e.target.name === "editCostValue") {
        setEditedCost(e.target.value);
      }
    };

    return (
      <div>
        <div className="list" style={listStyle()} key={id}>
          <div>
            {!isEditing ? (
              title
            ) : (
              <input
                type="text"
                style={{
                  fontSize: "16px",
                  margin: "0px",
                  border: "1px solid gray",
                }}
                value={editedTitle}
                onChange={handleChange}
                name="editTitleValue"
              />
            )}
          </div>
          <div
            style={{
              color: "gray",
              position: "absolute",
              left: "50%",
            }}
          >
            {!isEditing ? (
              Number(cost)
            ) : (
              <input
                type="number"
                style={{
                  fontSize: "16px",
                  margin: "0px",
                  border: "1px solid gray",
                }}
                value={Number(editedCost)}
                onChange={handleChange}
                name="editCostValue"
              />
            )}
          </div>
          <div style={{ position: "absolute", right: "2%" }}>
            <button
              style={{
                backgroundColor: "#7fb06d",
                borderRadius: "3px",
                border: "none",
                cursor: "pointer",
                marginRight: "5px",
                fontSize: "20px",
              }}
              onClick={handleEdit}
            >
              {!isEditing ? "🔨" : "취소"}
            </button>
            <button
              style={{
                backgroundColor: "salmon",
                borderRadius: "3px",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
              }}
              onClick={() => {
                !isEditing ? deleteData(id) : editData(id);
              }}
            >
              {!isEditing ? "❌" : "✔"}
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default List;
