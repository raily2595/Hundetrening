/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import {
  fetchByPath,
  getOverrideProps,
  processFile,
  validateField,
} from "./utils";
import { generateClient } from "aws-amplify/api";
import { createHund } from "../graphql/mutations";
import { Field } from "@aws-amplify/ui-react/internal";
const client = generateClient();
export default function HundCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    navn: "",
    bursdag: "",
    rase: "",
    farge: "",
    bilde: undefined,
  };
  const [navn, setNavn] = React.useState(initialValues.navn);
  const [bursdag, setBursdag] = React.useState(initialValues.bursdag);
  const [rase, setRase] = React.useState(initialValues.rase);
  const [farge, setFarge] = React.useState(initialValues.farge);
  const [bilde, setBilde] = React.useState(initialValues.bilde);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNavn(initialValues.navn);
    setBursdag(initialValues.bursdag);
    setRase(initialValues.rase);
    setFarge(initialValues.farge);
    setBilde(initialValues.bilde);
    setErrors({});
  };
  const validations = {
    navn: [{ type: "Required" }],
    bursdag: [],
    rase: [],
    farge: [],
    bilde: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          navn,
          bursdag,
          rase,
          farge,
          bilde,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {
            navn: modelFields.navn,
            bursdag: modelFields.bursdag,
            rase: modelFields.rase,
            farge: modelFields.farge,
          };
          await client.graphql({
            query: createHund.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFieldsToSave,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "HundCreateForm")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Navn</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={navn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn: value,
              bursdag,
              rase,
              farge,
              bilde,
            };
            const result = onChange(modelFields);
            value = result?.navn ?? value;
          }
          if (errors.navn?.hasError) {
            runValidationTasks("navn", value);
          }
          setNavn(value);
        }}
        onBlur={() => runValidationTasks("navn", navn)}
        errorMessage={errors.navn?.errorMessage}
        hasError={errors.navn?.hasError}
        {...getOverrideProps(overrides, "navn")}
      ></TextField>
      <TextField
        label="Bursdag"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={bursdag}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn,
              bursdag: value,
              rase,
              farge,
              bilde,
            };
            const result = onChange(modelFields);
            value = result?.bursdag ?? value;
          }
          if (errors.bursdag?.hasError) {
            runValidationTasks("bursdag", value);
          }
          setBursdag(value);
        }}
        onBlur={() => runValidationTasks("bursdag", bursdag)}
        errorMessage={errors.bursdag?.errorMessage}
        hasError={errors.bursdag?.hasError}
        {...getOverrideProps(overrides, "bursdag")}
      ></TextField>
      <TextField
        label="Rase"
        isRequired={false}
        isReadOnly={false}
        value={rase}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn,
              bursdag,
              rase: value,
              farge,
              bilde,
            };
            const result = onChange(modelFields);
            value = result?.rase ?? value;
          }
          if (errors.rase?.hasError) {
            runValidationTasks("rase", value);
          }
          setRase(value);
        }}
        onBlur={() => runValidationTasks("rase", rase)}
        errorMessage={errors.rase?.errorMessage}
        hasError={errors.rase?.hasError}
        {...getOverrideProps(overrides, "rase")}
      ></TextField>
      <TextField
        label="Farge"
        isRequired={false}
        isReadOnly={false}
        value={farge}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn,
              bursdag,
              rase,
              farge: value,
              bilde,
            };
            const result = onChange(modelFields);
            value = result?.farge ?? value;
          }
          if (errors.farge?.hasError) {
            runValidationTasks("farge", value);
          }
          setFarge(value);
        }}
        onBlur={() => runValidationTasks("farge", farge)}
        errorMessage={errors.farge?.errorMessage}
        hasError={errors.farge?.hasError}
        {...getOverrideProps(overrides, "farge")}
      ></TextField>
      <Field
        errorMessage={errors.bilde?.errorMessage}
        hasError={errors.bilde?.hasError}
        label={"Label"}
      >
        <StorageManager
          onUploadSuccess={({ key }) => {
            setBilde((prev) => {
              let value = key;
              if (onChange) {
                const modelFields = {
                  navn,
                  bursdag,
                  rase,
                  farge,
                  bilde: value,
                };
                const result = onChange(modelFields);
                value = result?.bilde ?? value;
              }
              return value;
            });
          }}
          onFileRemove={({ key }) => {
            setBilde((prev) => {
              let value = initialValues?.bilde;
              if (onChange) {
                const modelFields = {
                  navn,
                  bursdag,
                  rase,
                  farge,
                  bilde: value,
                };
                const result = onChange(modelFields);
                value = result?.bilde ?? value;
              }
              return value;
            });
          }}
          processFile={processFile}
          accessLevel={"public"}
          acceptedFileTypes={["image/*"]}
          isResumable={false}
          showThumbnails={true}
          maxFileCount={1}
          {...getOverrideProps(overrides, "bilde")}
        ></StorageManager>
      </Field>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Tøm"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Avbryt"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Legg til"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
