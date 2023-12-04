

function InternsDataTable() {

	return (
		<table className='bg-charade-950 text-emerald-100 rounded-md'>
			<thead>
			<tr>
				<th>Name</th>
				<th>Start Date</th>
				<th>End Date</th>
				<th>Extension Date</th>
				<th>Applied Position</th>
				<th>Qualification</th>
				<th>Email</th>
				<th>Country</th>
			</tr>
			</thead>
				
			<tbody>
			<tr>
				<td>Name</td>
				<td>Start Date</td>
				<td>End Date</td>
				<td>Extension Date</td>
				<td>Applied Position</td>
				<td>Qualification</td>
				<td>Email</td>
				<td>Country</td>
				{/*Here will be the information of each intern*/}
			</tr>
			</tbody>
		</table>
	)
}

export default InternsDataTable