"use client";
import { getUserTemplate } from "@/services/templateService";
import { Item, Template } from "@/types/Template";
import { useEffect, useState } from "react";
import { LinkImagePreview } from "./LinkImagePreview";

interface Props {
  templateId: string;
}

export const Preview = ({ templateId }: Props) => {
  const [response, setResponse] = useState<Template>();

  useEffect(() => {
    (async () => {
      const response = await getUserTemplate(templateId);
      setResponse(response);
      console.log(response);
    })();
  }, []);

  return (
    <div
      style={{ backgroundColor: response?.background }}
      className="w-screen flex flex-col items-center justify-center"
      onClick={() => console.log(response)}
    >
      <div className={`w-full md:w-4/6 lg:w-1/2 xl:w-1/3 h-full px-2 py-10`}>
        <div className="w-[150px] h-[150px] rounded-full m-auto mt-4">
          <img
            src={response?.photo}
            alt="photo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h2
          key={response?.owner_id}
          style={{
            ...response?.titleStyle,
            color: response?.titleStyle.fontColor,
          }}
          className="block h-fit w-full my-0.5 text-center"
        >
          {response?.title}
        </h2>
        {response?.items.map((item) => {
          return item.type === "link" ? (
            <a
              href={item.url || ""}
              key={item.name}
              style={response.linkStyle}
              className="h-auto min-h-10 w-full text-center my-4 rounded-md flex items-center justify-center border-none overflow-hidden"
            >
              {item && item.image ? (
                <LinkImagePreview
                  image={item.image as string}
                  name={item.name as string}
                  link={item.url as string}
                />
              ) : (
                <p>{item.name}</p>
              )}
            </a>
          ) : (
            <h2
              key={item.name}
              style={{
                ...response.headerStyle,
                color: response.headerStyle.fontColor,
              }}
              className="block h-fit w-full my-0.5 text-center"
            >
              {item.name}
            </h2>
          );
        })}
      </div>{" "}
    </div>
  );
};
