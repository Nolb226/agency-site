import React, { useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../__mock__';

function Member() {
	const { memberId } = useParams();
	const member = [...data.boys, ...data.girls].filter(
		(p) => p.id + '' === memberId
	)[0];

	const renderRole = useCallback(() => {
		switch (member.role) {
			case 'captain': {
				return (
					<span className="bg-yellow-400 px-2 pt-1 pb-2 font-semibold rounded-lg mr-2">
						Tiểu đội trưởng
					</span>
				);
			}
			case 'vice-captain': {
				return (
					<span className="font-semibold bg-gray-500 px-2 pt-1 pb-2 rounded-lg mr-2">
						Tiểu đội phó
					</span>
				);
			}
			default: {
				return <></>;
			}
		}
	}, [member.role]);

	const renderEffect = useCallback(() => {
		const icon = member.gender ? '🍀' : '🌹';
		return (
			<div className="absolute top-0 left-0 right-0">
				{Array(9)
					.fill(0)
					.map((i, j) => {
						return (
							<div key={j} className={` absolute top-${j} right-${j}`}>
								{icon}
							</div>
						);
					})}
			</div>
		);
	}, [member.gender]);

	return (
		<div className="py-44 container mx-auto">
			<div className="flex flex-col md:flex-row gap-20 md:max-lg:gap-10 lg:gap-20">
				<div className="relative">
					<span className="absolute top-0 left-0 text-2xl">
						{member.gender ? '🍀' : '🌹'}
					</span>
					<img
						src={member.img}
						className="max-w-sx md:max-w-md rounded-lg"
						alt=""
					/>
					{/* {renderEffect()} */}
				</div>
				<div className="flex flex-col gap-20">
					<div className="">
						<p className=" mb-3 text-2xl  font-bold">{member.name}</p>
						{renderRole()}
						{member.gender ? (
							<span className="px-2 pt-1 pb-1.5 font-semibold rounded-lg bg-blue-600 border border-blue-700">
								Boy{' '}
								<span className="rounded-full bg-white/90 pb-[1px]">🍀</span>
							</span>
						) : (
							<span className="px-2 pt-1 pb-2 font-semibold rounded-lg bg-red-600 border border-red-700">
								Rose{' '}
								<span className="rounded-full bg-white/90 pb-[1px]">🌹</span>
							</span>
						)}
					</div>
					<div className="w-full lg:pr-[25%]">
						<p>
							<span className="text-lg font-semibold">Khoa: </span>
							{member.primary}
						</p>
						<p>
							<span className=" mt-10 text-lg font-semibold">Giới thiệu: </span>
							{member.introduce}
						</p>
						<div className="mt-20">
							<div className="mb-8">
								<audio controls>
									<source src={member.audio} type="audio/mpeg" />
								</audio>
							</div>
							<Link
								className="bg-emerald-500 px-2 py-1 border border-400 rounded-lg"
								to={'../'}
							>
								Quay lại⬅️
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Member;
