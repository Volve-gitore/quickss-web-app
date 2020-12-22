import React, { ChangeEvent } from "react";
import "../../assets/scss/hotelResto.scss";
import {
  Button,
  Box,
  Grid,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { IHotelRestoState } from "./registerHotelRestoType";
import classes from "*.module.css";

type Props = {
  state: IHotelRestoState;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onHandleFiles: (e: ChangeEvent<HTMLInputElement>) => void;
};

const UploadForm = (props: Props) => {
  const { state, onChange, onHandleFiles } = props;
  return (
    <Box display='flex'>
      <Box style={{ width: "50%" }} m={1} mt={3}>
        <DropzoneArea
          acceptedFiles={["image/*", "video/*", "application/*"]}
          // onChange={(e: File[]) => onHandleFiles(e)}
          showFileNames
          dropzoneText='Upload a photo'
          // showAlerts={false}
          filesLimit={20}
        />
      </Box>
      <Box style={{ width: "50%" }} m={1} mt={3}>
        <Paper style={{ width: "100%" }}>
          <TableContainer component={Paper} style={{ maxHeight: 250 }}>
            <Table
              // aria-label='simple table'
              stickyHeader
              aria-label='sticky table'
            >
              <TableHead>
                <TableRow>
                  <TableCell align='center'>Title</TableCell>
                  <TableCell align='center'>Upload</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {rows.map((row) => ( */}
                <TableRow>
                  <TableCell align='center'>Contract</TableCell>
                  <TableCell align='center'>Contract.pdf</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='center'>Others</TableCell>
                  <TableCell align='center'>others.pdf</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='center'>category</TableCell>
                  <TableCell align='center'>
                    {/* <div className='footer'> */}
                    <input
                      style={{ display: "none" }}
                      accept='image/*'
                      id='contained-button-file'
                      multiple
                      type='file'
                      name='images'
                      // value={state.images}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        onHandleFiles(e)
                      }
                    />
                    <label htmlFor='contained-button-file'>
                      <Button
                        variant='contained'
                        color='default'
                        component='span'
                        startIcon={<CloudUploadIcon />}
                      >
                        contract
                      </Button>
                    </label>
                    {/* </div> */}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='center'>category</TableCell>
                  <TableCell align='center'>
                    {/* <div className='footer'> */}
                    <input
                      style={{ display: "none" }}
                      accept='image/*'
                      id='contained-button-file'
                      multiple
                      type='file'
                      name='image'
                      // onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      //   onHandleFiles(e)
                      // }
                    />
                    <label htmlFor='contained-button-file'>
                      <Button
                        variant='contained'
                        color='default'
                        component='span'
                        startIcon={<CloudUploadIcon />}
                      >
                        others
                      </Button>
                    </label>
                    {/* </div> */}
                  </TableCell>
                </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
};
export default UploadForm;
