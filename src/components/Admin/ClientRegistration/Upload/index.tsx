import React, { ChangeEvent } from "react";
import "../../../../assets/scss/hotelResto.scss";
import {
  Button,
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { IHotelRestoState } from "../RegisterClient/type";
import Grid from "@material-ui/core/Grid";

type Props = {
  state?: IHotelRestoState;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeImage?: (e: ChangeEvent<HTMLInputElement>) => void;
  onHandleFileImages: (f: File[]) => void;
};

const UploadForm = (props: Props) => {
  const { onHandleFileImages } = props;
  return (
    <Grid container spacing={2} style={{ height: "100%" }}>
      <Grid item xs={12} md={9} style={{ height: "100%", margin: "auto" }}>
        <Grid container justify="center" spacing={2}>
          <Grid
            key={1}
            item
            xs={12}
             sm={5}
            md={6} 
          >
            <DropzoneArea
              // className="file-upload"
              acceptedFiles={["image/*", "video/*", "application/*"]}
              onChange={(f) => onHandleFileImages(f)}
              showFileNames
              dropzoneText="Upload a photo"
              showAlerts={false}
              filesLimit={20}
            />
          </Grid>
          <Grid
            key={2}
            item
            xs={12}

             sm={5}
            md={6}
            style={{ minHeight: "80%"}}
          >
            {/* <Paper   > */}
              <TableContainer component={Paper} style={{ minHeight: "100%" }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Title</TableCell>
                      <TableCell align="center">Upload</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* {rows.map((row) => ( */}
                   
                  
                    <TableRow>
                      <TableCell align="center">category</TableCell>
                      <TableCell align="center">
                        <input
                          style={{ display: "none" }}
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                          name="contract"
                        />
                        <label htmlFor="contained-button-file">
                          <Button
                            variant="contained"
                            color="default"
                            component="span"
                            startIcon={<CloudUploadIcon />}
                          >
                            contract
                          </Button>
                        </label>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">category</TableCell>
                      <TableCell align="center">
                        <input
                          style={{ display: "none" }}
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                          name="other-doc"
                        />
                        <label htmlFor="contained-button-file">
                          <Button
                            variant="contained"
                            color="default"
                            component="span"
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
            {/* </Paper> */}
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid item xs={12} sm={12} md={6} > */}

      {/* </Grid> */}
      {/* </Grid> */}
    </Grid>
  );
};
export default UploadForm;
