import React from 'react';
import TakeSelfie from './TakeSelfie';
import SelectRole from './SelectRole';
import BasicInformation from './BasicInformation';
import EducationalBackground from './EducationalBackground';
import {User} from '../../models/User';

export default function SignUPWizard({
  step,
  selectedRole,
  submitBasicFormDetails,
  submitSelfie,
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
      return <TakeSelfie submitSelfie={submitSelfie} />;
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
