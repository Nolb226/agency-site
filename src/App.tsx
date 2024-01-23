import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import data from './__mock__';
import Footer from './components/Footer';

function App() {
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
				<section className="container py-24 mx-auto">
					<h2 className="text-4xl md:text-center font-bold dark:text-white">
						Trang web này là gì?
					</h2>
					<div className=" flex items-center justify-center mt-20">
						<span className=" text-xl lg:px-[25%]">
							Xin chào bạn, các bạn, bọn mình là tiểu đội 2 trong số 5 tiểu đội
							của trung đội 11 lớp cô Thoa 🥰. Đối với bọn mình, đây sẽ là nơi
							bọn mình giới thiệu bản thân, cũng như ghi dấu lại 8 tuần học ở
							lớp cô Thoa. cũng là nơi bọn mình sẽ cũng nhau nhìn lại tại buổi
							gala 8 tuần học, không biết phía trước như nào, bọn mình sẽ cố
							gắng thực hiện mọi thứ thật tốt như 1 tiểu đội!!
						</span>
					</div>
				</section>
				<section className="container pt-24 mx-auto">
					<h2 className="text-4xl md:text-center font-bold dark:text-white">
						Hành trình của bọn mình
					</h2>
					<div className="pt-20 flex justify-center items-center">
						<ol className="relative border-s  border-white">
							<li className="mb-10 ms-4">
								<div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border  border-emerald-400 bg-emerald-400" />
								<time className="mb-1 text-sm font-normal leading-none  text-gray-500">
									18 Tháng 1 Năm 2024
								</time>
								<h3 className="text-lg font-semibold  text-white">
									Nơi mọi thứ bắt đầu
								</h3>
								<div className="mt-2">
									<figure className="max-w-3xl">
										<div className="flex flex-col md:grid md:grid-cols-2 gap-3">
											<img
												className="h-auto max-w-full rounded-lg"
												src="./images/group.jpg"
												alt="image description"
											/>
											<img
												className="h-auto max-w-full rounded-lg"
												src="./images/group2.jpg"
												alt="image description"
											/>
										</div>
										<figcaption className="mt-2 text-sm text-center text-gray-400">
											Cổng sau Đại Học Sài Gòn
										</figcaption>
									</figure>
								</div>
							</li>
							<li className="mb-10 ms-4">
								<div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border  border-emerald-400 bg-emerald-400" />
								<time className="mb-1 text-sm font-normal leading-none  text-gray-500">
									18 Tháng 1 Năm 2024
								</time>
								<h3 className="text-lg font-semibold  text-white">
									Làm việc cùng nhau
								</h3>
								<div className="mt-2">
									<video
										className="w-full h-auto max-w-3xl border border-gray-700 rounded-lg"
										loop
										autoPlay
									>
										<source src="./videos/time-lapse.mp4" type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</div>
								<p className="text-gray-500">
									Chia công việc và giao lưu với nhau.
								</p>
							</li>
							<li className="ms-4">
								<div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border  border-emerald-400 bg-emerald-400" />
								<time className="mb-1 text-sm font-normal leading-none  text-gray-500">
									Tương lai
								</time>
								<h3 className="text-lg font-semibold  text-white">Còn tiếp</h3>
								<p className="text-base font-normal text-gray-400">
									Hãy mong chờ những điều mà bọn tớ sẽ làm{' '}
									<span className="text-emerald-400">cùng nhau</span> nhé!
								</p>
							</li>
						</ol>
					</div>
				</section>
				<section className="container py-24  mx-auto">
					<h2 className="text-4xl md:text-center font-bold text-white">
						Thành viên
					</h2>
					<div className="mt-6 flex flex-col gap-20">
						<div className="">
							<h3 className="text-3xl font-semibold md:text-center uppercase">
								BOYS .
							</h3>
							<div className="mt-4 items-center justify-center grid grid-cols-2 lg:grid-cols-3 gap-4">
								{data.boys.map((p: any) => {
									return <Card {...p} />;
								})}
							</div>
						</div>

						<div className="">
							<h3 className="text-3xl font-semibold md:text-center uppercase ">
								Roses🌹.
							</h3>
							<div className="mt-4 items-center justify-center grid grid-cols-2 lg:grid-cols-3 gap-4">
								{data.girls.map((p: any) => {
									return <Card {...p} />;
								})}
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}

export default App;
