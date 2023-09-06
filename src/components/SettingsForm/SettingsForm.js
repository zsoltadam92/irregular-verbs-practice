import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useContext } from "react";
import useHandleNavigate from "./../../hooks/use-navigate";
import IRREGULAR_VERBS from "./../../irregularVerbs";
import { Controller, useForm } from "react-hook-form";
import SettingsContext from "../../store/settings-context";
import CardContext from "../../store/card-context";

const SettingsForm = () => {
  const { handleNavigate: navigateToHome } = useHandleNavigate();
  const { handleNavigate: navigateToCards } = useHandleNavigate();

  const settingsCtx = useContext(SettingsContext);
  const cardCtx = useContext(CardContext);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      numberOfVerbs: "",
      time: "",
      verbForm: "",
    },
  });

  const maxCardNumber = IRREGULAR_VERBS.length;

  const verbForms = [
    { value: "random", text: "random" },
    { value: "v2", text: "v2 (simple past)" },
    { value: "v3", text: "v3 (past participle)" },
  ];

  const menuItems = verbForms.map((item) => (
    <MenuItem key={item.value} value={item.value}>
      {item.text}
    </MenuItem>
  ));

  const onSubmit = (data) => {
    console.log(data);

    settingsCtx.getFormData({
      numberOfVerbs: data.numberOfVerbs,
      verbFormData: data.verbForm,
      time: data.time,
    });

    cardCtx.start();

    navigateToCards("/card");
  };

  return (
    <Grid
      container
      item
      justify="center"
      spacing={1}
      xs={12}
      sm={8}
      md={6}
      lg={4}
      textAlign="center"
      borderRadius={2}
    >
      <Grid item>
        <Card sx={{ boxShadow: 6, borderRadius: 4 }}>
          <CardHeader title="SETTINGS"></CardHeader>

          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent>
              <Grid item container spacing={1} justify="center">
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="number"
                    label="Number of cards"
                    variant="outlined"
                    fullWidth
                    inputProps={{ min: 5, max: maxCardNumber }}
                    {...register("numberOfVerbs", {
                      required: "Required field",
                      valueAsNumber: true,
                      min: {
                        value: 5,
                        message: "Minimum 5 pieces",
                      },
                      max: {
                        value: maxCardNumber,
                        message: `Maximum ${maxCardNumber} pieces`,
                      },
                    })}
                    error={!!errors?.numberOfVerbs}
                    helperText={
                      errors?.numberOfVerbs
                        ? errors.numberOfVerbs.message
                        : null
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    type="number"
                    label="Time"
                    variant="outlined"
                    fullWidth
                    inputProps={{ min: 5 }}
                    name="time"
                    {...register("time", {
                      required: "Required field",
                      valueAsNumber: true,
                      min: {
                        value: 3,
                        message: "Minimum 5 sec",
                      },
                      max: {
                        value: 60,
                        message: `Maximum 60 sec`,
                      },
                    })}
                    error={!!errors?.time}
                    helperText={errors?.time ? errors.time.message : "sec/card"}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    variant="outlined"
                    error={!!errors?.verbForm}
                  >
                    <InputLabel>Verb form</InputLabel>

                    <Controller
                      name="verbForm"
                      control={control}
                      rules={{
                        required: {
                          value: true,
                          message: "Choose one of them",
                        },
                      }}
                      render={({ field }) => (
                        <Select {...field}>{menuItems}</Select>
                      )}
                    />
                    <FormHelperText>{errors.verbForm?.message}</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "2rem",
                gap: "20px",
              }}
            >
              <Button variant="contained" color="primary" type="submit">
                START
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={() => navigateToHome("/")}
              >
                BACK
              </Button>
            </CardActions>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SettingsForm;
