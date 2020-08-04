import React, { useState } from "react";
import "./Todo.css";
import {
  ListItem,
  List,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  Modal,
  Input,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h3>Open Modal</h3>
          <form>
            <FormControl>
              <Input
                placeholder={props.todo.todo}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </FormControl>
            <Button
              disabled={!input}
              type="submit"
              variant="contained"
              color="primary"
              onClick={updateTodo}
            >
              Update
            </Button>
          </form>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="Dummy Deadline " />
          <EditIcon onClick={(e) => setOpen(true)} />
          <DeleteForeverIcon
            onClick={(e) => {
              db.collection("todos").doc(props.todo.id).delete();
            }}
          />
        </ListItem>
      </List>
    </>
  );
}

export default Todo;
