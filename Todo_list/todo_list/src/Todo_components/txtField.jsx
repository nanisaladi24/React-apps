import React from 'react'
import TextField from '@material-ui/core/TextField'


class TxtFld extends React.Component {

    render() { 
        return ( <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="To Do Task" variant="outlined" />
      </form>);
    }
}
 
export default TxtFld;