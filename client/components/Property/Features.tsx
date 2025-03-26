import React from "react";
import { Icons } from "./Icons";
import { FeatureType } from "@/utils/interface";

const Features: React.FC<{ data: FeatureType[] }> = ({ data }) => {
  return (
    <div className="border rounded-2xl overflow-hidden">
      {data?.map((feature) => (
        <div key={feature?.title}>
          <h1 className="font-bold text-lg p-2">{feature?.title}</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-2 justify-between">
            {feature.items.map((item, index) => {
              const name = item?.icon;
              const Icon = Icons[name as keyof typeof Icons] || null;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 p-4 outline outline-1 outline-gray-200"
                >
                  {Icon && <Icon />}
                  <div className="min-w-28">
                    <p>{item?.text}</p>
                    <p
                      className="text-gray-500 text-xs lg:text-sm"
                      dangerouslySetInnerHTML={{
                        __html: item?.helpertext?.replace(/\n/g, "<br />"),
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
