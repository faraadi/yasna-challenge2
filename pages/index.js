import { Avatar, ArtistDetails } from 'components/app';

export default function Home() {
	return (
		<div>
			<div className='row'>
				<div className='col'>
					<Avatar />
				</div>
				<div className="col">
					<ArtistDetails />
				</div>
			</div>
		</div>
	);
}