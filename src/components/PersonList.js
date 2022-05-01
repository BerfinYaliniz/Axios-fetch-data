import React from "react";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Table,
  TableBody,
  Container,
} from "@mui/material";
export default class PersonList extends React.Component {
  state = {
    loading: true,
    persons: [],
  };
 
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (res) => {
        const persons = res.data;
        setTimeout(() => {
          this.setState({ persons, loading: false });
        }, 2000);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  render() {
    return (
      <Container  >
                {this.state.loading ? 
                
                <Box sx={{ display: 'block'}}>
                    <CircularProgress color="inherit"/>
                </Box> 
                :
                 <Container maxWidth='lg'>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.persons.map((person) => (
              <TableRow key={person.id}>
                <TableCell>{person.username}</TableCell>
                <TableCell>{person.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
   </Container>}
   </Container>
    );
  }
}
