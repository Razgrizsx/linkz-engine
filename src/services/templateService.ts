import Cookies from "js-cookie";

export const getUserTemplate = async (templateId: string) => {
  console.log("id", templateId);
  const url = `http://localhost:8080/template/${templateId}`;
  const response = await fetch(url, {
    method: "GET"
  });

  const result = await response.json();
  return result;
};
