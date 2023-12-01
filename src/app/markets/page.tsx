export default function Home() {
	return (
		<div className="container mt-5">
          <hr className="mb-0"/>
			<table className="table ">
				<thead>
					<tr >
						<th
							className="fw-bold py-3"
							style={{ width: "5%", color: "#BBBBBB", fontSize: "17px" }}
						>
							#
						</th>
						<th
							className="fw-bold py-3"
							style={{ width: "5%", color: "#BBBBBB", fontSize: "17px" }}
						>
							Token
						</th>
						<th
							className="fw-bold py-3"
							style={{ width: "20%", color: "#BBBBBB", fontSize: "17px" }}
						>
							Price
						</th>
						<th
							className="fw-bold py-3"
							style={{ width: "10%", color: "#BBBBBB", fontSize: "17px" }}
						>
							24h
						</th>
						<th
							className="fw-bold py-3"
							style={{ width: "15%", color: "#BBBBBB", fontSize: "17px" }}
						>
							Market Cap
						</th>
						<th
							className="fw-bold py-3"
							style={{ width: "15%", color: "#BBBBBB", fontSize: "17px" }}
						>
							24H Volume
						</th>
						<th
							className="fw-bold py-3"
							style={{ width: "15%", color: "#BBBBBB", fontSize: "17px" }}
						>
							Circulating Supply
						</th>
						<th
							className="fw-bold py-3"
							style={{ width: "10%", color: "#BBBBBB", fontSize: "17px" }}
						>
							Last 7 Days
						</th>
					</tr>
				</thead>
				<tbody className="text-sm" style={{borderStyle: 'hidden !important'}}>
					<tr className="border-bottom">
						<th className="py-3 text-white">#</th>
						<th className="py-3 text-white">1</th>
						<th className="py-3 text-white">Bitcoin BTC</th>
						<th className="py-3 text-white">$37,987</th>
						<th className="py-3 text-success">+0.80%</th>
						<th className="py-3 text-white">$746,057,009,771</th>
						<th className="py-3 text-white">$18,732,128,518</th>
						<th className="py-3 text-white">19,557,700</th>
					</tr>

				</tbody>
			</table>
		</div>
	);
}
