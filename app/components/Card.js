const Card = ({ url }) => {
	return (
		<div style={{
			backgroundImage: `url(${url})`
		}}>
			<img src={url}/>
		</div>
	);
}

export default Card;