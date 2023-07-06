import * as React from "react";
import { useEffect } from "react";
import { CategoryEndpoint } from "Frontend/generated/endpoints.js";

export default function CustomiseMeal() {
  useEffect(() => {
    CategoryEndpoint.getSubCategories().then((data) => console.log(data));
  }, []);

  return (
    <div>
      <div className="container">custom order</div>
    </div>
  );
}
