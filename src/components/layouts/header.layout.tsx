import "@/common/styles/style.css";

const HeaderScreen = () => {
	return (
		<div
			className="bh-wrap d-flex gap-5 align-items-center px-5"
			style={{ height: "70px", fontSize: "21px" }}
		>
			<div className="logo d-flex">
				<a href="/">
					<img
						src="https://markets.coin98.com/_next/static/media/logo.e0041453.svg"
						alt="coin98.vn"
					/>
				</a>
			</div>

			<div className="d-flex align-items-center justify-content-between w-100">
				<div className="menu hidden-md-down">
					<ul className="d-flex gap-5 list-unstyled mb-0">
						<li className="text-decoration-none">
							<a className="text-decoration-none" style={{color: '#cda439'}} href="/markets">
								Markets
							</a>
						</li>
						<li className="text-decoration-none">
							<a className="text-decoration-none" style={{color: '#cda439'}} href="/markets">
              Widget
							</a>
						</li>
						<li className="text-decoration-none">
							<a className="text-decoration-none" style={{color: '#cda439'}} href="/markets">
              DApps
							</a>
						</li>
						<li className="text-decoration-none">
							<a className="text-decoration-none" style={{color: '#cda439'}} href="/markets">
              Snapshot
							</a>
						</li>
						<li className="text-decoration-none">
							<a className="text-decoration-none" style={{color: '#cda439'}} href="/markets">
              CUSD
							</a>
						</li>
					</ul>
				</div>
				<div className="action d-flex gap-3">
					<div className="cart">
						<a href="" data-bs-toggle="modal" data-bs-target="#modalCart">
							<img
								src="https://web.nvnstatic.net/tp/T0441/img/hd-cart.png?v=3"
								alt="Giỏ hàng"
							/>
						</a>
					</div>
					<div className="user">
						<a href="/user/signin">
							<img
								src="https://web.nvnstatic.net/tp/T0441/img/hd-user.png?v=3"
								alt="Tài khoản"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderScreen;
