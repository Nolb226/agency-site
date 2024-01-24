import React from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
	return (
		<>
			<main className="px-4 lg:p-[initial] bg-gray-900 text-white">
				<section className="flex py-24 justify-center items-center">
					<div
						className="absolute w-full  bg-no-repeat bg-center bg-cover blur-sm h-1/2"
						style={{
							backgroundImage:
								'linear-gradient(to bottom, transparent, rgb(17 24 39) 85%) ,url(./images/school.jpg)',
						}}
					></div>
					<div className="z-10">
						<h1 className=" flex flex-col gap-10 mb-4 text-5xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
							Bọn mình là{' '}
							<span className="block whitespace-nowrap underline underline-offset-3 decoration-8 text-emerald-400 decoration-white">
								tiểu đội
								<img
									className="inline-block w-10"
									src="https://static.xx.fbcdn.net/images/emoji.php/v9/t67/1/32/270c.png"
									alt=""
								/>
							</span>
						</h1>
					</div>
				</section>
				<Outlet />
			</main>

			<Footer />
		</>
	);
}

export default Layout;
