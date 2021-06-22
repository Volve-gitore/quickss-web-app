import React, { MouseEvent } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Box, Grid } from "@material-ui/core";
import { sizing } from "@material-ui/system";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "72",
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    labelContainer: {
      "& $alternativeLabel": {
        marginTop: 0,
      },
    },
    step: {
      "& $completed": {
        color: "#d2435e",
      },
      "& $active": {
        color: "#d2435e",
      },
      "& $disabled": {
        color: "red",
      },
    },
    alternativeLabel: {},
    active: {}, //needed so that the &$active tag works
    completed: {},
    disabled: {},
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  })
);

const StepperCmp = (props: any) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const { steps, stepContent } = props;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Grid className={classes.root}>
      <Paper square style={{ height: "74vh" }}>
        <Grid>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label: string) => (
              <Step
                key={label}
                classes={{
                  root: classes.step,
                  completed: classes.completed,
                }}
              >
                <StepLabel
                  classes={{ 
                    alternativeLabel: classes.alternativeLabel,
                    labelContainer: classes.labelContainer,
                  }}
                  StepIconProps={{
                    classes: {
                      root: classes.step,
                      completed: classes.completed,
                      active: classes.active,
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid container direction="column" style={{ height: "100%" }}>
          {/* <Grid className={classes.instructions}> */}

          {activeStep === steps.length ? (
            <div style={{ minHeight: "70%" }}>
              <Typography className={classes.instructions}>Done!
              </Typography>
              <Button
                  variant="contained"
                  onClick={handleReset}
                  style={{ background: "#d2435e" }}
                >Add new
                </Button>
            </div>
          ) : (
            <Box style={{ minHeight: "70%" }}>{stepContent[activeStep]}</Box>
          )}

          <Grid
            style={{ paddingRight: "120px" }}
            container
            justify="flex-end"
            alignItems="flex-end"
          >
            {activeStep !== steps.length ? (
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
            ) : null}
            {activeStep !== steps.length ? (
              activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  onClick={props.onSubmit}
                  style={{ background: "#d2435e" }}
                  // onClick={(e: MouseEvent<HTMLButtonElement, MouseEvent>) => props.onSubmit(e)}
                >
                  Finish
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  style={{ background: "#d2435e" }}
                >
                  Next
                </Button>
              )
            ) : null}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default StepperCmp;
