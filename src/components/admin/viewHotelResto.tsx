import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import Layout from "../layouts/adminLayout";
import { Box } from "@material-ui/core";
import { AppState } from "../../store/configureStore";
import { hotelRestoView } from "../../store/hotelResto/actions";
import { IHotelRestoParams } from "../../store/hotelResto/types";
import { Star, LocationOn } from "@material-ui/icons";

const mapStateToProps = (state: AppState) => ({
  hotelRestoReducer: state.hotelResto
});

const connector = connect(mapStateToProps, { hotelRestoView });

type Props = ConnectedProps<typeof connector>;

const ViewHotelResto = ({ hotelRestoReducer, hotelRestoView }: Props) => {
  useEffect(() => {
    hotelRestoView();
    // eslint-disable-next-line
  }, []);

  const {
    allHotelResto
  }: {
    allHotelResto: IHotelRestoParams[];
  } = hotelRestoReducer;

  return (
    <Layout>
      <div className='content'>
        <Box display='flex' justifyContent='flex-start' pl={10}>
          <Box ml={4} mr={4}>
            <h1> Hotels and Restaurants </h1>
          </Box>
        </Box>
        <Box display='flex' flexWrap='wrap' className='hotel-resto-list'>
          {allHotelResto &&
            allHotelResto.map(item => (
              <Box
                mr={4}
                ml={4}
                mb={4}
                key={item.id}
                className='hotel-resto-item'
              >
                <img
                  src={
                    item.images
                      ? item.images[0]
                      : "http://res.cloudinary.com/ds5zmsm6d/image/upload/v1610906227/kjgfsdellul2jl0xb9ua.jpg"
                  }
                  alt={item.name}
                  className='hotel-resto-image'
                />
                <Box display='flex' p={1}>
                  <Box p={1} flexGrow={1}>
                    <div
                      style={{
                        marginBottom: "10px",
                        textTransform: "uppercase",
                        fontWeight: "bold"
                      }}
                    >
                      {item.name}
                    </div>
                    <div>
                      <Star style={{ fontSize: "18px", color: "#FCAD31" }} />
                      <Star style={{ fontSize: "18px", color: "#FCAD31" }} />
                      <Star style={{ fontSize: "18px", color: "#FCAD31" }} />
                      <Star style={{ fontSize: "18px", color: "#FCAD31" }} />
                      <Star style={{ fontSize: "18px", color: "#FCAD31" }} />
                    </div>
                  </Box>
                  <Box pt={4.5} pl={1}>
                    <LocationOn style={{ fontSize: "18px" }} />
                  </Box>
                  <Box pt={4.5} pr={1}>
                    {item.location}
                  </Box>
                </Box>
              </Box>
            ))}
        </Box>
      </div>
    </Layout>
  );
};
export default connector(ViewHotelResto);
