import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { IClient } from "../../../store/client/types";
import { Star, LocationOn } from "@material-ui/icons";

type Props = {
  clients: IClient[];
};

const ClientList = (props: Props) => {
  const { clients } = props;

  return (
    // <Grid className="content">

    <Grid container spacing={10} justify="flex-start">
      {clients &&
        clients.map((item) => (
          <Grid
            item
            xs={4}
            style={{
              height: "300px",
              borderRadius: "15px",
            }}
          >
            <Paper
              square
              elevation={5}
              style={{
                height: "280px",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <img
                src={
                  item.images
                    ? item.images[0]
                    : "http://res.cloudinary.com/ds5zmsm6d/image/upload/v1610906227/kjgfsdellul2jl0xb9ua.jpg"
                }
                alt={item.name}
                style={{
                  width: "100%",
                  height: "65%",
                  overflow: "hidden",
                  // objectFit: "cover"
                }}
              />
              {/* <Box   p={1}> */}
              <div
                style={{
                  width: "80%",
                  minHeight: "70%",
                  objectFit: "cover",
                  // background: "yellow",
                  margin: "auto",
                }}
              >
                <h6
                  style={{
                    textTransform: "uppercase",
                    textAlign: "left",
                    margin: "10px 0",
                  }}
                >
                  {item.name}
                </h6>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <span
                    style={{
                      flex: 1,
                      textAlign: "left",
                    }}
                  >
                    <Star style={{ fontSize: "15px", color: "#FCAD31" }} />
                    <Star style={{ fontSize: "15px", color: "#FCAD31" }} />
                    <Star style={{ fontSize: "15px", color: "#FCAD31" }} />
                    <Star style={{ fontSize: "15px", color: "#FCAD31" }} />
                    <Star style={{ fontSize: "15px", color: "#FCAD31" }} />
                  </span>
                  <span>
                    <LocationOn style={{ fontSize: "14px" }} /> <h6 style={{display: "inline", padding: "-10px", marginTop: "-120px"}}>Kimihurura</h6>
                  </span>
                </div>
              </div>

              {/* </Box> */}
            </Paper>
          </Grid>
        ))}
    </Grid>

    // <Grid spacing={7}   container >
    //   {clients &&
    //     clients.map((item) => (
    //       <Grid
    //         item
    //         xs={3}

    //         style={{
    //           borderRadius: "15px",
    //           boxShadow: `0 2px 4px 0 rgba(0, 0, 0, 0.2),
    //           0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
    //         }}
    //       >
    //         <img
    //           src={
    //             item.images
    //               ? item.images[0]
    //               : "http://res.cloudinary.com/ds5zmsm6d/image/upload/v1610906227/kjgfsdellul2jl0xb9ua.jpg"
    //           }
    //           alt={item.name}
    //           style={{
    //             width: "90%",
    //             height: "50%",
    //           }}
    //         />
    //         <Box display="flex" p={1}>
    //           <Box p={1} flexGrow={1}>
    //             <div
    //               style={{
    //                 marginBottom: "10px",
    //                 textTransform: "uppercase",
    //                 fontWeight: "bold",
    //               }}
    //             >
    //               {item.name}
    //             </div>
    //             <div>
    //               <Star style={{ fontSize: "18px", color: "#FCAD31" }} />
    //               <Star style={{ fontSize: "18px", color: "#FCAD31" }} />
    //               <Star style={{ fontSize: "18px", color: "#FCAD31" }} />
    //               <Star style={{ fontSize: "18px", color: "#FCAD31" }} />
    //               <Star style={{ fontSize: "18px", color: "#FCAD31" }} />
    //             </div>
    //           </Box>
    //           <Box pt={4.5} pl={1}>
    //             <LocationOn style={{ fontSize: "18px" }} />
    //           </Box>
    //           <Box pt={4.5} pr={1}>
    //             {item.location}
    //           </Box>
    //         </Box>
    //       </Grid>
    //     ))}
    // </Grid>
  );
};
export default ClientList;
