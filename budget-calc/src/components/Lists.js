import React from "react";
import List from "./List";
// React.memo: 렌더링 최적화
const Lists = React.memo(({ expData, setExpData, keywordState }) => {
  return (
    <div className="lists">
      <div>
        {expData.map((data) => (
          <List
            key={data.id}
            id={data.id}
            title={data.title}
            cost={data.cost}
            expData={expData}
            setExpData={setExpData}
            keywordState={keywordState}
          />
        ))}
      </div>
    </div>
  );
});

export default Lists;
