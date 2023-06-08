import {createTheme} from "@mui/material/styles";
import ProximaTTF from "./fonts/proxima_nova_reg-webfont.ttf";

const theme = createTheme({
	typography: {
		fontFamily: "Proxima"
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				"@font-face": {
					fontFamily: "Proxima",
					src: `url(${ProximaTTF}) format("truetype")`
				},
				body: {
					fontSize: "3rem",
					color: "purple"
				}
			}
		}
	},
	status: {
		betfinalPrimary: '#f3c711',
		betfinalSecondary: '#303030',
		cosmoswinPrimary: '#00FFDC',
		cosmoswinSecondary: '#27273F ',
	},
});

export default theme;

declare module '@mui/material/styles' {
	interface Theme {
		status: {
			betfinalPrimary: React.CSSProperties['color'];
			betfinalSecondary: React.CSSProperties['color'];
			cosmoswinPrimary: React.CSSProperties['color'];
			cosmoswinSecondary: React.CSSProperties['color'];
		};
	}

	interface ThemeOptions {
		status: {
			betfinalPrimary: React.CSSProperties['color'];
			betfinalSecondary: React.CSSProperties['color'];
			cosmoswinPrimary: React.CSSProperties['color'];
			cosmoswinSecondary: React.CSSProperties['color'];
		};
	}
}
