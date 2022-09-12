import { Link } from '@remix-run/react'
import * as React from 'react'

const post = () => {
	return (
		<div>
			<h1>Post</h1>
			<Link to='/'>Home</Link>
		</div>
	)
}
export default post
