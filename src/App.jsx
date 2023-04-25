import { useEffect, useState } from "react";
import daniel from "/images/image-daniel.jpg";
import jeanette from "/images/image-jeanette.jpg";
import jonathan from "/images/image-jonathan.jpg";
import kira from "/images/image-kira.jpg";
import patrick from "/images/image-patrick.jpg";

const pp = [daniel, jonathan, jeanette, patrick, kira];

async function Fetcher(url, setter) {
	const fetchingData = await fetch(url);
	const data = await fetchingData.json();
	setter(data);
}

function App() {
	const [data, setData] = useState([]);
	useEffect(() => {
		Fetcher("/testimonials.json", setData);
	}, []);
	return (
		<div className='App bg-tw-Light-grayish-blue xl:min-h-screen py-16'>
			<div className='w-full text-center pb-8'>
				Coded with <span role='img'>❤</span> by{" "}
				<a
					href='https://linktr.ee/joehsn'
					className='text-blue-400 hover:text-blue-600'
				>
					@joehsn
				</a>
				.
			</div>
			<div className='container p-4 mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-2 gap-6'>
					{data.map((testimonial, idx) => (
						<div
							className='testimonial shadow-xl p-6 rounded-lg flex flex-col gap-y-4'
							key={idx}
						>
							<div className='flex items-center gap-x-4'>
								<img
									src={pp[idx]}
									alt={testimonial.name}
									className='rounded-full border w-12 border-tw-Light-gray'
								/>
								<div className='flex-1'>
									<div className='font-semibold'>{testimonial.name}</div>
									<div className='opacity-50'>{testimonial.verify}</div>
								</div>
							</div>
							<div className='font-semibold text-2xl'>{testimonial.brief}</div>
							<div className='opacity-50'>"{testimonial.message}"</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
