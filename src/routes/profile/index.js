import { h } from 'preact';
// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }) => {
	console.log(user);
	return (
		<div>
			<h1>My Profile</h1>
			<div className={'block px-4 py-2 rounded-md bg-amber-100 text-amber-700'}>

				Profile

			</div>
		</div>
	);
}

export default Profile;
