import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme)=>({
    cardForm:{
        height: '350px',
        margin: '1rem'
    },
    form:{
        height: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
}))

export default useStyles