import React from "react";

export default function DestinationCard({destination}){
    return(
        <div className="flex items-center rounded-lg bg-white shadow-lg 
                overflow-hidden max-w-md xl:max-w-lg 2xl:max-w-lg">
                <img className="h-36 w-36 flex-shrink-0" src={destination.imageUrl} alt={destination.ImageAlt} />
                <div className="px-6 py-4 mx-1">
                    <h3 className="text-lg font-semibold text-gray-800"> {destination.city} </h3>
                    <p className="text-gray-600"> ${destination.averagePrice} / night average </p>
                    <div className="mt-4">
                        <a href="#" className="text-brand hover:text-brandLight"> Explore {destination.propertyCount} properties </a>
                    </div>
                </div>
            </div>
    )
}