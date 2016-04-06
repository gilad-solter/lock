import React from 'react';
import Screen from '../../lock/screen';
import QuickAuthPane from '../../ui/pane/quick_auth_pane';
import { skipQuickAuth } from '../../quick_auth/actions';
import { renderSignedInConfirmation } from '../../lock/signed_in_confirmation';
import * as l from '../../lock/index';

const Component = ({model, t}) => {
  const headerText = t("headerText") || null;
  const header = headerText && <p>{headerText}</p>;

  // TODO: implement click handler.
  // TODO: provide translation for button label.

  return (
    <QuickAuthPane
      alternativeLabel={t("skipLastLoginLabel", {__textOnly: true})}
      alternativeClickHandler={() => skipQuickAuth(l.id(model))}
      buttonLabel="Windows Authentication"
      buttonClickHandler={e => alert("not implemented")}
      header={header}
      strategy="windows"
    />
  );
};

export default class KerberosScreen extends Screen {

  constructor() {
    super("kerberos");
  }

  renderAuxiliaryPane(lock) {
    return renderSignedInConfirmation(lock);
  }

  render() {
    return Component;
  }

}
