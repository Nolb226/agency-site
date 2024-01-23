import clsx from 'clsx';
import React from 'react';

type CardProps = {
	role?: 'captain' | 'vice-captain' | 'member';
	name?: string;
	img?: string;
	primary?: string;
};

function Card({ img, name, primary, role = 'member' }: CardProps) {
	return (
		<div
			className={clsx('flex flex-col items-center relative ', {
				"before:content-['Tiểu_đội_trưởng'] before:shadow-lg before:shadow-gray-600 before:rounded-lg before:text-white/85 before:font-semibold before:block before:absolute before:bg-yellow-300 before:px-3 before:py-1 md:before:right-0 md:before:top-0 max-md:before:translate-x-1/2 md:before:-translate-y-1/2 before:z-10 before:w-fit":
					role === 'captain',
				"before:content-['Tiểu_đội_phó'] before:rounded-lg before:text-white/85 before:font-semibold before:block before:absolute before:bg-gray-500 before:px-3 before:py-1 md:before:right-0 md:before:top-0 max-md:before:translate-x-1/2 md:before:-translate-y-1/2 before:z-30 before:w-fit":
					role === 'vice-captain',
			})}
		>
			<img
				className="max-w-[220px] max-h-[426px]  md:max-w-[320px] border border-gray-700 rounded-lg"
				src={img}
				alt=""
			/>
			<div className="mt-2">
				<p className="text-2xl font-semibold">{name}</p>
				<p className="text-lg">Ngành: {primary}</p>
			</div>
		</div>
	);
}

export default Card;