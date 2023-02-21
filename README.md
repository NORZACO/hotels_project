<!DOCTYPE html>
<html>
<head>
	<title>Hotel Models</title>
	<style>
		table {
			border-collapse: collapse;
			width: 100%;
		}

		th, td {
			text-align: left;
			padding: 8px;
			border: 1px solid #ddd;
		}

		th {
			background-color: #f2f2f2;
		}
	</style>
</head>
<body>
	<h1>Hotel Models</h1>
	<table>
		<thead>
			<tr>
				<th>Model</th>
				<th>Fields</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>User</td>
				<td>id: INTEGER, auto-increment primary key<br>username: STRING, not null<br>password: STRING, not null<br>email: STRING, not null<br>phone: STRING<br>isAdmin: BOOLEAN, default false</td>
			</tr>
			<tr>
				<td>Room</td>
				<td>id: INTEGER, auto-increment primary key<br>roomNumber: INTEGER, not null<br>capacity: INTEGER, not null<br>type: STRING, not null<br>isAvailable: BOOLEAN, default true</td>
			</tr>
			<tr>
				<td>Reservation</td>
				<td>id: INTEGER, auto-increment primary key<br>roomId: INTEGER, foreign key referencing Room.id<br>userId: INTEGER, foreign key referencing User.id<br>checkIn: DATE, not null<br>checkOut: DATE, not null<br>status: STRING, default 'pending'</td>
			</tr>
			<tr>
				<td>Rate</td>
				<td>id: INTEGER, auto-increment primary key<br>name: STRING, not null<br>value: DECIMAL(10,2), not null</td>
			</tr>
			<tr>
				<td>Price</td>
				<td>id: INTEGER, auto-increment primary key<br>roomId: INTEGER, foreign key referencing Room.id<br>rateId: INTEGER, foreign key referencing Rate.id<br>value: DECIMAL(10,2), not null</td>
			</tr>
			<tr>
				<td>Location</td>
				<td>id: INTEGER, auto-increment primary key<br>name: STRING, not null<br>address: STRING, not null</td>
			</tr>
			<tr>
				<td>Relationship</td>
				<td>User has many Reservation<br>Reservation belongs to User<br>Room has many Reservation<br>Reservation belongs to Room<br>Room has many Price<br>Price belongs to Room<br>Rate has many Price<br>Price belongs to Rate</td>
			</tr>
		</tbody>
	</table>
</body>
</html>
