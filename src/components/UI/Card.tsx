import * as React from 'react';

export const Card = (props: any) => {
  const classes = "card " + props.className;
  return (<div className={classes}>{props.children}</div>)
}
