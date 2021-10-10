import React from 'react';
import TakeSelfie from './TakeSelfie';
import SelectRole from './SelectRole';
import BasicInformation from './BasicInformation';
import EducationalBackground from './EducationalBackground';

export default function SignUPWizard({
  step,
  selectedRole,
  submitBasicFormDetails,
  takeSelfie,
  submitEducationalBackground,
}) {
  switch (step) {
    case 1:
      return <SelectRole selectedRoleHandler={selectedRole} />;
    case 2:
      return (
        <BasicInformation submitBasicFormDetails={submitBasicFormDetails} />
      );
    case 3:
      return <TakeSelfie takeSelfie={takeSelfie} />;
    case 4:
      return (
        <EducationalBackground
          submitEducationalBackground={submitEducationalBackground}
        />
      );
    default:
      return <SelectRole selectedRoleHandler={selectedRole} />;
  }
}
