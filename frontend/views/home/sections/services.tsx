import * as React from 'react';


export function Services() {
    const services = [
		{
			id: 1,
			name: "Best Taste",
			description:
				"we offer the worst tast in the town we are known to be the best over a decate now.",
		},
		{
			id: 2,
			name: "Best Taste",
			description:
				"we offer the best tast in the town we are known to be the best over a decate now.",
		},
		{
			id: 3,
			name: "Best Taste",
			description:
				"we offer the best tast in the town we are known to be the best over a decate now.",
		},
	];

    return (
        <div className="flex justify-between w-[73.056vw]">
            {
                services.map(service => (
                    <div key={service.id} className="flex flex-col text-center gap-[16px] items-center w-[16.250vw]">
                        <img src="img_url" alt="best tast" />
                        <h2 className="text-xxl">{service.name}</h2>
                        <p className="font-[300]">
                            {service.description}
                        </p>
                    </div>
                ))
            }
        </div>
    );
};