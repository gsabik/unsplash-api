import Link from "next/link";

const Card = ({ id, url, user, userImage, hoverDescription }) => {

	
	return (
		<Link href={`images/${id}`} key={id}>
			<div className="flex flex-col relative">
				<img
					alt={hoverDescription}
					className="pb-2" 
					src={url}
				>
				</img>
				<div className="bottom-8 left-6 flex flex-row items-center absolute">
					<img 
						alt={`${user} Profile Photo`} 
						className="rounded-full" 
						src={userImage}
					/>
					<p className="font-semibold pl-2 text-white">{user}</p>
				</div>
			</div>
		</Link>
	);
}

export default Card;