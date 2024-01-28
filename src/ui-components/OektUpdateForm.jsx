/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getOekt } from "../graphql/queries";
import { updateOekt } from "../graphql/mutations";
const client = generateClient();
export default function OektUpdateForm(props) {
  const {
    id: idProp,
    oekt: oektModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    fokus: "",
    egenvurdering: "",
    notat: "",
  };
  const [fokus, setFokus] = React.useState(initialValues.fokus);
  const [egenvurdering, setEgenvurdering] = React.useState(
    initialValues.egenvurdering
  );
  const [notat, setNotat] = React.useState(initialValues.notat);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = oektRecord
      ? { ...initialValues, ...oektRecord }
      : initialValues;
    setFokus(cleanValues.fokus);
    setEgenvurdering(cleanValues.egenvurdering);
    setNotat(cleanValues.notat);
    setErrors({});
  };
  const [oektRecord, setOektRecord] = React.useState(oektModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getOekt.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getOekt
        : oektModelProp;
      setOektRecord(record);
    };
    queryData();
  }, [idProp, oektModelProp]);
  React.useEffect(resetStateValues, [oektRecord]);
  const validations = {
    fokus: [],
    egenvurdering: [],
    notat: [],
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
          fokus: fokus ?? null,
          egenvurdering: egenvurdering ?? null,
          notat: notat ?? null,
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
          await client.graphql({
            query: updateOekt.replaceAll("__typename", ""),
            variables: {
              input: {
                id: oektRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "OektUpdateForm")}
      {...rest}
    >
      <TextField
        label="Fokus"
        isRequired={false}
        isReadOnly={false}
        value={fokus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fokus: value,
              egenvurdering,
              notat,
            };
            const result = onChange(modelFields);
            value = result?.fokus ?? value;
          }
          if (errors.fokus?.hasError) {
            runValidationTasks("fokus", value);
          }
          setFokus(value);
        }}
        onBlur={() => runValidationTasks("fokus", fokus)}
        errorMessage={errors.fokus?.errorMessage}
        hasError={errors.fokus?.hasError}
        {...getOverrideProps(overrides, "fokus")}
      ></TextField>
      <TextField
        label="Egenvurdering"
        isRequired={false}
        isReadOnly={false}
        value={egenvurdering}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fokus,
              egenvurdering: value,
              notat,
            };
            const result = onChange(modelFields);
            value = result?.egenvurdering ?? value;
          }
          if (errors.egenvurdering?.hasError) {
            runValidationTasks("egenvurdering", value);
          }
          setEgenvurdering(value);
        }}
        onBlur={() => runValidationTasks("egenvurdering", egenvurdering)}
        errorMessage={errors.egenvurdering?.errorMessage}
        hasError={errors.egenvurdering?.hasError}
        {...getOverrideProps(overrides, "egenvurdering")}
      ></TextField>
      <TextField
        label="Notat"
        isRequired={false}
        isReadOnly={false}
        value={notat}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fokus,
              egenvurdering,
              notat: value,
            };
            const result = onChange(modelFields);
            value = result?.notat ?? value;
          }
          if (errors.notat?.hasError) {
            runValidationTasks("notat", value);
          }
          setNotat(value);
        }}
        onBlur={() => runValidationTasks("notat", notat)}
        errorMessage={errors.notat?.errorMessage}
        hasError={errors.notat?.hasError}
        {...getOverrideProps(overrides, "notat")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || oektModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || oektModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
