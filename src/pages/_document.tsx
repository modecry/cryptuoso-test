import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
	static async getInitialProps(ctx): any {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
					<link rel="manifest" href="/favicon/site.webmanifest"/>
					<meta name="msapplication-TileColor" content="#da532c"/>
					<meta name="theme-color" content="#ffffff"/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
