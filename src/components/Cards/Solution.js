import React from "react";
import VerbFormContent from "./VerbFormContent";

const Solution = (props) => {
  const verbForms = [
    { label: "v1", value: props.v1, form: "v1" },
    {
      label: "v2",
      value: props.simplePast,
      form: "simplePast",
    },
    {
      label: "v3",
      value: props.pastParticiple,
      form: "pastParticiple",
    },
  ];

  return (
    <React.Fragment>
      <div>
        {verbForms.map((verbForm) => (
          <VerbFormContent
            key={verbForm.form}
            label={verbForm.label}
            value={verbForm.value}
            // isUsed={props.verbForm === verbForm.form}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Solution;
