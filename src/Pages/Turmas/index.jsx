import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Container,
  Typography,
  makeStyles,
  List,
  ListItem,
  Link,
  Button
} from '@material-ui/core'
import api from '../../utils/api';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5%'
  },
  list: {
    width: '100%',
    maxWidth: 360,
  },
  text: {
    margin: theme.spacing(4, 0, 2),
    width: '100%',
    textAlign: 'center'
  },
  link: {
    color: '#495057',
  }
}));

export default function App(props) {
  const classes = useStyles();
  const location = useLocation();
  const turmas = location.state;
  const history = useHistory();

  useEffect(() => {
    if (!location.state) {
      history.push("/login");
    }
  }, [location.state, history])
  function handleClick(id) {
    api.get(`/get_graphs/${id}`).then(response => {
      const graphs = response.data;
      history.push('/', graphs);
    });
  }
  function handleBack() {
    history.push('/login');
  }
  return (
    <div>
      <Container>
        <Button onClick={handleBack}>Retornar para escolher professor</Button>
      </Container>
      <Container component="main" maxWidth="xs" className={classes.paper}>
        <Typography className={classes.text} component="h1" variant="h4">
          Escolha uma turma para a gente começar
      </Typography>
        <List component="nav" className={classes.list} aria-label="Turmas">
          {turmas.map(item => (
            <ListItem key={item.id_class}>
              <Link component="button" onClick={() => handleClick(item.id_class)} className={classes.link} >
                {item.name_class}
              </Link>
            </ListItem>
          )
          )}
        </List>
      </Container>
    </div>
  );
}
