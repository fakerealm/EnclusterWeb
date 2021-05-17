import React from "react";

type IVerticalFeatureRowProps = {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
    return (
        <div className="flex flex-wrap items-center">
            <div className="w-full text-center sm:w-1/2 sm:px-6">
                <h3 className="text-3xl font-semibold text-gray-900">
                    {props.title}
                </h3>
                <div className="mt-6 text-xl leading-9">
                    {props.description}
                </div>
            </div>

            <div className="w-full p-6 sm:w-1/2">
                <img
                    src={`${process.env.baseUrl}${props.image}`}
                    alt={props.imageAlt}
                />
            </div>
        </div>
    );
};

export { VerticalFeatureRow };
