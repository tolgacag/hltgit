import React from "react";

// core components
import Wizard from "components/Wizard/Wizard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Step1 from "./FormSteps/Step1.jsx";
import Step2 from "./FormSteps/Step2.jsx";

class WizardView extends React.Component {
  render() {
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={8}>
          <Wizard
            validate
            steps={[
              { stepName: "1", stepComponent: Step1, stepId: "1" },
              { stepName: "2", stepComponent: Step2, stepId: "2" }
              
            ]}
            title="Brief"
            subtitle="Brief Hakkında Lorem İpsun Dolor"
          />
        </GridItem>
      </GridContainer>
    );
  }       
}

export default WizardView;
