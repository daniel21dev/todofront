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
    },
    cardTodo:{
        height: 'auto',
        margin: '1rem',
        padding: '1rem'
    },
}))

export default useStyles