import React from 'react';
import classes from './Message.module.css';

function Message(props: MessageProps) {
  return (
    <div className={classes.message}>
      <img src={props.avatar} alt={props.name} className={classes.avatar} />
      <div className={classes.angle} />
      <div className={classes.content}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.text}>{props.message}</div>
        <div className={classes.time}>{props.time}</div>
      </div>
    </div>
  );
}

interface MessageProps {
  avatar: string;
  name: string;
  message: string;
  time: string;
}

export default Message;
