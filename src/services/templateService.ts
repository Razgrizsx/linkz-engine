export const getUserTemplate = async (templateId: string) => {
  const url = `/api/${templateId}`;
  const response = await fetch(url, {
    method: "GET"
  });

  const result = await response.json();
  return result;
};
