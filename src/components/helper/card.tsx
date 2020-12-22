import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "../../assets/scss/card.scss";

const MediaControlCard = (props: any) => {
  return (
    <div>
      <Card>
        <CardContent>
          <div>{props.children}</div>
        </CardContent>
      </Card>
    </div>
  );
};
export default MediaControlCard;
