import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
    purple700,
    indigo200,
    grey400,
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

// getMuiTheme() computes a "valid" muiTheme object
const muiTheme = getMuiTheme({
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    margin: "1em auto",
    palette: {
        primary1Color: purple700,
        primary3Color: grey400,
        accent1Color: indigo200,
        textColor: fullBlack,
        alternateTextColor: white,
        canvasColor: "#fff",
        borderColor: grey400,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: purple700,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
    }
});
const App = (props) => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <div>
        {props.children}
        </div>
    </MuiThemeProvider>
);

export default App;