import {firebase, firebaseui} from "firebaseui-angular";

export const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'redirect',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  immediateFederatedRedirect: true,
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
};
