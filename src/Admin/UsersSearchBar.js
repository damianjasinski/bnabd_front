import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled, alpha } from '@mui/material/styles';
import Search from "material-ui-search-bar";
import Container from "@mui/material/Container";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';


const UsersSearchBar = (props) => {

    const [rows, setRows] = React.useState([]);
    const [originalRows, setOriginalRows] = React.useState(props.rows)
    const [searched, setSearched] = React.useState("");
    let filteredRows = [...originalRows];
    const requestSearch = (event) => {
        if (event.target.value.length == 0) {

            filteredRows = [...originalRows]
        }
        else {
            filteredRows = originalRows.filter((row) => {
                return row.email.toLowerCase().includes(event.target.value.toLowerCase());
            });

        }
    }
    const setFilteredRows = () => {
        props.filteredSetter(filteredRows)
        console.log(originalRows)
    }
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        marginRight: theme.spacing(2),
        marginLeft: 0,

        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '&:hover': {
            backgroundColor: alpha(theme.palette.warning.light, 0.15),
        },
        backgroundColor: alpha(theme.palette.warning.light, 0.25),
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),

            [theme.breakpoints.up('md')]: {
                width: '30ch',
            },
        },
    }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    return (
        <Search >
            <IconButton onClick={setFilteredRows}><SearchIcon /></IconButton>

            <StyledInputBase
                onChange={(searchVal) => requestSearch(searchVal)}

                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    )
}

export default UsersSearchBar