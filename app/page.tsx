import Image from "next/image";

export default function Home() {
	return (
		<main className="flex justify-center items-center min-h-screen bg-yellow-10 ">
			<section className="flex flex-col gap-5 bg-white p-6 rounded-2xl border-black border shadow-offset max-w-[330px] transition-shadow duration-300 hover:shadow-[12px_13px_0px_#000]">
				<div>
					<Image
						src="/illustration-article.svg"
						alt="illustration"
						width={350}
						height={300}
						className="rounded-lg"
					/>
				</div>
				<div className="flex flex-col gap-3">
					<button
						type="button"
						className="w-max bg-yellow-10 px-3 py-1 rounded-md text-sm"
					>
						<label className="cursor-pointer text-neutral-20 font-bold">
							Learning
						</label>
					</button>
					<p className="text-neutral-20 text-sm">Published 21 Dec 2023</p>
				</div>
				<div className="flex flex-col gap-4">
					<h2 className="text-neutral-20 font-extrabold text-xl hover:text-yellow-10 cursor-pointer">
						HTML & CSS foundations
					</h2>
					<p className="text-neutral-10">
						These languages are the backbone of every website, defining
						structure, content, and presentation.
					</p>
				</div>
				<div className="flex gap-3 items-center">
					<Image
						src="/image-avatar.webp"
						alt="user-photo"
						width={36}
						height={36}
					/>
					<p className="font-extrabold text-neutral-20">Greg Hooper</p>
				</div>
			</section>
		</main>
	);
}
