import React, { ChangeEvent } from "react";
import "../../assets/scss/hotelResto.scss";
import {
  Button,
  Box,
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
import { IHotelRestoState } from "./registerClientType";

type Props = {
  state: IHotelRestoState;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeImage: (e: ChangeEvent<HTMLInputElement>) => void;
  onHandleFileImages: (f: File[]) => void;
};

const UploadForm = (props: Props) => {
  const { onHandleFileImages } = props;
  return (
    <Box display='flex'>
      <Box style={{ width: "50%" }} m={1} mt={3}>
        <DropzoneArea
          acceptedFiles={["image/*", "video/*", "application/*"]}
          onChange={f => onHandleFileImages(f)}
          showFileNames
          dropzoneText='Upload a photo'
          showAlerts={false}
          filesLimit={20}
        />
      </Box>
      <Box style={{ width: "50%" }} m={1} mt={3}>
        <Paper style={{ width: "100%" }}>
          <TableContainer component={Paper} style={{ maxHeight: 250 }}>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>Title</TableCell>
                  <TableCell align='center'>Upload</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {rows.map((row) => ( */}
                <TableRow>
                  <TableCell align='center'>contact</TableCell>
                  <TableCell align='center'>Contract.pdf</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='center'>Others</TableCell>
                  <TableCell align='center'>others.pdf</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='center'>category</TableCell>
                  <TableCell align='center'>
                    <input
                      style={{ display: "none" }}
                      accept='image/*'
                      id='contained-button-file'
                      multiple
                      type='file'
                      name='contract'
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
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='center'>category</TableCell>
                  <TableCell align='center'>
                    <input
                      style={{ display: "none" }}
                      accept='image/*'
                      id='contained-button-file'
                      multiple
                      type='file'
                      name='other-doc'
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
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
};
export default UploadForm;
