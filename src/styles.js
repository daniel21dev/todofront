import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme)=>({
    gridLogin:{
        height: '100vh'
    },
    cardLogin:{
        height: '500px',
        width: '400px'
    },
    loginImage:{
        paddingTop: '40%'
    },
    loginCardContent:{
        height: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
}))

export default useStyles