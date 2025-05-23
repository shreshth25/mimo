const Profile = () => {
	return (
		<div className="d-flex bg-white vh-100  justify-content-center align-items-center">
			<div className="card p-4 w-50">
				<div className="card-header">
					<div class="text-center">
						<img src="..." class="rounded" alt="..." />
					</div>
				</div>
				<div className="mt-3">
					<label htmlFor="email" className="form-label">
						Name
					</label>
					<input className="form-control" placeholder="Update the name" />
				</div>
				<div className="mt-3">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input className="form-control" type="email" placeholder="Update the Email" readOnly />
				</div>
				<div className="mt-3">
					<label htmlFor="email" className="form-label">
						Password
					</label>
					<input className="form-control" type="password" placeholder="Update the password" />
				</div>
				<div className="text-center mt-5">
					<button type="submit" className="btn btn-small btn-outline-secondary w-25">
						Update Profile
					</button>
				</div>
			</div>
		</div>
	);
};

export default Profile;
